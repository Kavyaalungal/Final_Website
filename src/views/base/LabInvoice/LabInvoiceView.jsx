import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Typography,
  Grid,
   Card, CardContent, FormControl,  InputLabel, MenuItem, Select, TextField,InputAdornment
} from '@mui/material';
import { CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { Link } from 'react-router-dom';
import Register from '../patient/Register';
import axios from 'axios';
import useModal from '../../../components/UseModal';
import Patient from '../patient/Patient';



const InvoiceView = () => {
  const [searchItem, setSearchItem] = useState('LabNo'); 
  const [searchValue, setSearchValue] = useState(''); 
  const [invoiceData, setInvoiceData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [branches, setBranches] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const formatDateTime = (dateString, showTime = true) => {
    const date = new Date(dateString);
  
    // Format date as dd-mm-yyyy
    const formattedDate = date.toLocaleDateString('en-GB').replace(/\//g, '-'); 
  
    if (!showTime) {
      return formattedDate; // Return only the date if showTime is false
    }
  
    // Format time as hh:mm AM/PM and convert am/pm to AM/PM
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).toUpperCase();
  
    return `${formattedDate} ${formattedTime}`; // Return both date and time
  };
  
  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    setFromDate(currentDate);
    setToDate(currentDate);
  }, []);
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://172.16.16.157:8083/api/Branchname_Get');
        console.log(response.data); // Log the response to the console
        if (response.data.Success) {
          setBranches(response.data.brnch_dlts); // Set branch data to state
        }
      } catch (error) {
        console.error('Error fetching branch names:', error);
      } finally {
        setLoading1(false); // Stop loading
      }
    };

    fetchBranches();
  }, []);
  const searchItems = [
    { label: 'SampleID', value: 'SampleID' },
    { label: 'IPOP', value: 'RsltNo' },
    { label: 'LabNo', value: 'LabNo' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Email', value: 'Email' },
    { label: 'Name', value: 'Name' },
    { label: 'Patient ID', value: 'Patient ID' },
  ];

  const handleSearch = async () => {
    if (!searchValue) {
      alert('Please enter a search value');
      return;
    }

    const requestData = {
      SrchItem: searchItem,
      SrchVal: searchValue,
      BranchId: 2, 
      YearId: 2425, 
      FromDate: fromDate,
      ToDate: toDate,
    };

    try {
      setLoading(true);
      console.log('data sending to backend',requestData);
      
      const response = await axios.post('http://172.16.16.157:8083/api/LabInvoiceView/PatientSearchMaster', requestData);
      console.log('API response:', response.data.patDtsList); // Log API response
      if (response.data && response.data.patDtsList) {
        setInvoiceData(response.data.patDtsList); // Update invoice data state with patDtsList
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  const { modal, modalContent, modalTitle, modalSize, toggleModal, closeModal } = useModal();
   const [statuses, setStatuses] = useState([]); 
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await axios.get('http://172.16.16.157:8083/api/LabInvoiceView');
        
       
        console.log("Full API response:", response);
        
        if (response.data.Success) {
       
          console.log("Response data:", response.data);
  
         
          const statusList = response.data.list[0];
  
       
          console.log("Status List:", statusList);
  
          setStatuses(Object.entries(statusList)); 
        }
      } catch (error) {
        console.error("Error fetching statuses:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStatuses();
  }, []);
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); 
    }
  };


  const handleRefresh = () => {
    handleSearch(); // Call fetchData again to refresh data
  };

  return (
    <div>
       <Typography 
      variant="h2" 
      component="div" 
      display={'flex'}
      alignItems={'center'} 
      textAlign={'center'} 
      color={'#bd2937'}
      sx={{
        position: 'relative',
        top: -22,
        fontSize: '1.4rem',
        fontWeight: 'bold',
        marginLeft: '-175px', 
        '@media (max-width: 375px)': {
          fontSize: '1.5rem', 
          marginLeft: '50px',    
        },
        '@media (max-width: 575px)': {
          fontSize: '1.5rem', 
          marginLeft: '94px',    
        },
        '@media (max-width: 993px)': {
          fontSize: '1.5rem', 
          marginLeft: '-12px',    
        },

   
      }} 
     
    >
      Lab Invoice View
    </Typography>
     
      <Grid container spacing={2}>
    <Grid item xs={12}>
    <Card
  sx={{
    height: {xs:140,sm:135},
    marginLeft: { xs: -2, sm: -20 }, 
    width: { xs: 370,md:1400 }, 
    marginTop: { xs: 0, sm: -1 },
  }}
  className='customwidth'
>
  <CardContent>

  
  <Grid container spacing={2}>
  <Grid item xs={6}>
      <TextField
        select
        label="Branch"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '16px' } }}
      >
       
        {loading1 ? (
          <MenuItem disabled>Loading...</MenuItem>
        ) : (
          branches.map((branch) => (
            <MenuItem key={branch.BranchKey} value={branch.BranchKey}>
              {branch.BranchName}
            </MenuItem>
          ))
        )}
      </TextField>
    </Grid>
    <Grid item xs={6}>
      <TextField
        select
        label="Status"
        variant="outlined"
        size="small"
        sx={{ width: 215 }}
        fullWidth
        InputLabelProps={{ style: { fontSize: '16px' } }}
      >
        {/* If loading, you can show a loader or a placeholder */}
        {loading ? (
          <MenuItem disabled>Loading...</MenuItem>
        ) : (
          <>
            {/* Render MenuItem dynamically */}
            {statuses.map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </>
        )}
      </TextField>
    </Grid>
 
  <Grid item xs={12} sm={3} md={3} lg={2}>
    <TextField
      select
      label="Search By"
      variant="outlined"
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}

      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '16px' } }}
    >
      {searchItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}

    </TextField>
  </Grid>

  {/* Search Input */}
  <Grid item xs={12} sm={5} md={5} lg={4}>
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown} 
      InputLabelProps={{ style: { fontSize: '1rem' } }}
      InputProps={{
        style: { marginBottom: '20px' },
      }}
      sx={{
        '& .MuiAutocomplete-inputRoot': {
          paddingRight: '0px',
        },
      }}
    />
  </Grid>

  {/* From Date */}
  <Grid item xs={12} sm={2} md={2} lg={2}>
    <TextField
      label="From Date"
      type="date"
      value={fromDate}
      onChange={(e) => setFromDate(e.target.value)}
      InputLabelProps={{ shrink: true }}
      size="small"
      fullWidth
    />
  </Grid>

  {/* To Date */}
  <Grid item xs={12} sm={2} md={2} lg={2}>
    <TextField
      label="To Date"
      type="date"
      value={toDate}
      onChange={(e) => setToDate(e.target.value)}
      InputLabelProps={{ shrink: true }}
      size="small"
      fullWidth
    />
  </Grid>

  {/* Buttons */}
  <Grid item xs={12} sm={2} md={2} lg={2}>
  <Button
              sx={{
                textTransform: 'none',
                marginRight: 1,
                backgroundColor: '#bb4d58', 
                '&:hover': {
                  backgroundColor: '#bd2937', 
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                },
              }}
              variant="contained"
              color="success"
              onClick={(e) => {
                e.preventDefault();  
                toggleModal('Patient Registration', <Patient closeModal={closeModal}/>, 'lg');
              }}
            >
              New
            </Button>
            <CModal visible={modal} onClose={closeModal} 
                size={modalSize}
                centered 
                className='modal custom-modal-close custom-modal-width custom-centered-modal'
                backdrop='static'
                // scrollable
                aria-labelledby="OptionalSizesExample2"
               >
          <CModalHeader className='custom-modal-header'>
            <CModalTitle className='custom-modal-title'>{modalTitle}</CModalTitle>
          </CModalHeader>
          <CModalBody className='c-modal-body no-scroll ' style={{zoom:'0.8'}}>
            {modalContent}
          </CModalBody>
        </CModal>
            <Button
              sx={{
                textTransform: 'none',
                marginRight: 1,
                backgroundColor: '#bb4d58', 
                '&:hover': {
                  backgroundColor: '#bd2937', 
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                },
              }}
              variant="contained"
              color="success"
            onClick={handleRefresh}
            >
              Refresh
            </Button>
  </Grid>
  
  
</Grid>

  </CardContent>
</Card>

    </Grid>
  

   </Grid>
   <Grid container spacing={0}>
   <Grid item xs={12}>
  <Card
    sx={{
      height: 'auto', 
      marginLeft: { xs: -2, sm: -20 }, 
      width: { xs: '100%', md: 1400 },
      marginTop: { xs: 0, sm: 1 },
      padding: 0,
    }}
    className='customwidth'
  >
    <CardContent>
    <CTable 
          striped 
          style={{ width: '100%', tableLayout: 'fixed', padding: 0, margin: 0 }}> 
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col" style={{ width: '4%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>SlNo</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Lab No</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Date</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Patient ID</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '18%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Name</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '12%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Releasing Time</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '10%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Phone</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '12%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Ref.By</CTableHeaderCell>
           
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Branch</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Corporate</CTableHeaderCell>
              {/* <CTableHeaderCell scope="col" style={{ width: '13%', backgroundColor: '#d6d1d1' }}>Status</CTableHeaderCell> */}
            </CTableRow>
          </CTableHead>


          <CTableBody>
  {!loading && invoiceData.length > 0 ? (
    invoiceData.map((invoice, index) => (
      <CTableRow key={index}>
         <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{index + 1}</CTableDataCell>
         <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
  <Link to={`/proceedtobill/${invoice.labno}`} style={{ textDecoration: 'none', }}>
    {invoice.labno}
  </Link>
</CTableDataCell>
        <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
  {invoice.SampleDate ? formatDateTime(invoice.SampleDate, false) : 'N/A'} {/* Display only date */}
</CTableDataCell>

        {/* <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.SampleDate}</CTableDataCell> */}
        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <Link to={`/${invoice.PatientID}`} style={{ textDecoration: 'none', }}>
    {invoice.PatientID}
  </Link>
        </CTableDataCell>
        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.PatName}</CTableDataCell>
        <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
  {invoice.RptTime ? formatDateTime(invoice.RptTime) : 'N/A'} {/* Display both date and time */}
</CTableDataCell>

        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Phone}</CTableDataCell>
        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.RefDr}</CTableDataCell>
        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Branchname}</CTableDataCell>
        <CTableDataCell style={{  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Corporatename}</CTableDataCell>
      </CTableRow>
    ))
  ) : (
    <CTableRow>
      <CTableDataCell colSpan={10} style={{ textAlign: 'center' }}>
        {/* No data available */}
      </CTableDataCell>
    </CTableRow>
  )}
</CTableBody>


        </CTable>
   
    
     
    </CardContent>
  </Card>
  </Grid>
</Grid>



     

     
    </div>
  );
};

export default InvoiceView;

