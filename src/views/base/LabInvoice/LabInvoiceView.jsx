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
   Card, CardContent, FormControl,  InputLabel, MenuItem, Select, TextField,InputAdornment,CircularProgress
} from '@mui/material';
import { CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../patient/Register';
import axios from 'axios';
import useModal from '../../../components/UseModal';
import Patient from '../patient/Patient';
import config from '../../../Config';



const InvoiceView = () => {
  const { modal, modalContent, modalTitle, modalSize, toggleModal, closeModal } = useModal();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('LabNo'); 
  const [searchValue, setSearchValue] = useState(''); 
  const [invoiceData, setInvoiceData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(config.public_branchId || ''); 
  const [loading1, setLoading1] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');




  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    setFromDate(currentDate);
    setToDate(currentDate);
  }, []);


  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get(`${config.public_apiUrl}/Branchname_Get`);
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


  // Handling branch selection from dropdown
  const handleBranchChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBranch(selectedValue);
  };


  const searchItems = [
    { label: 'SampleID', value: 'SampleID' },
    { label: 'IPOP', value: 'RsltNo' },
    { label: 'LabNo', value: 'LabNo' },
    { label: 'Phone', value: 'Phone' },
    { label: 'Email', value: 'Email' },
    { label: 'Name', value: 'Name' },
    { label: 'Patient ID', value: 'Patient ID' },
    {label:'Corporate ID',value:'CorporateID'}
  ];


  

  const handleSearch = async () => {
    if (!searchValue) {
      alert('Please enter a search value');
      return;
    }

    const requestData = {
      SrchItem: searchItem,
      SrchVal: searchValue,
      BranchId: selectedBranch || config.public_branchId, // Use selected branch or stored branch
      YearId: config.public_yearId,
      FromDate: fromDate,
      ToDate: toDate,
    };

    try {
      setLoading(true);
      console.log('data sending to backend',requestData);
      
      const response = await axios.post(`${config.public_apiUrl}/LabInvoiceView/PatientSearchMaster`, requestData);
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

 
  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); 
    }
  };


  const handleRefresh = () => {
    handleSearch(); // Call fetchData again to refresh data
  };




  // Filtered invoice data based on selected status
  const filteredInvoices = invoiceData.filter((invoice) => {
    if (selectedStatus === 'All') return true; // Show all invoices
    switch (selectedStatus) {
      case "Result Issued":
        return invoice.Status === 1;
      case "On Processing":
        return invoice.Status === 0;
      case "Urgent Report":
        return invoice.Status === 2;
      case "Cancelled Invoice":
        return invoice.Status === -1;
      case "Result Updated":
        return invoice.Status === 4;
      case "Half verified":
        return invoice.Status === 5;
      case "Not Completed":
        return invoice.Status === 3;
      case "Time Over Reminder":
        return invoice.Status === 6; 
      default:
        return true; 
    }
  });


  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };


  const getStatusColor = (status) => {
    switch (status) {
      case 1:
        return { backgroundColor: '#8EEE94', color: 'black', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Result Issued
      case 0:
        return { backgroundColor: '#0072C5', color: 'white', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Processing
      case 2:
        return { backgroundColor: '#FF00FF', color: 'white', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Urgent
      case -1:
        return { backgroundColor: '#B6C2DA', color: 'black', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Cancelled
      case 4:
        return { backgroundColor: '#218FFF', color: 'white', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Updated
      case 5:
        return { backgroundColor: '#FFFF05', color: 'black', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Half Verified
      default:
        return { backgroundColor: 'gray', color: 'white', borderRadius: '5px', padding: '5px', textAlign: 'center', display: 'inline-block', width: 'auto' }; // Default for unknown status
    }
  };



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
      value={selectedBranch || public_branchName} 
      onChange={handleBranchChange}
      fullWidth
      size="small"
      InputLabelProps={{ style: { fontSize: '16px' } }}
    >
      {branches.map((branch) => (
        <MenuItem key={branch.BranchKey} value={branch.BranchKey}>
          {branch.BranchName}
        </MenuItem>
      ))}
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
    value={selectedStatus} // Set the current value
    onChange={handleStatusChange} // Handle change
  >
    <MenuItem value="All">--All--</MenuItem>
    <MenuItem value="Result Issued">Result Issued</MenuItem>
    <MenuItem value="On Processing">On Processing</MenuItem>
    {/* <MenuItem value="Time Over">Time Over</MenuItem> */}
    <MenuItem value="Urgent Report">Urgent Report</MenuItem>
    <MenuItem value="Cancelled Invoice">Cancelled Invoice</MenuItem>
    <MenuItem value="Result Updated">Result Updated</MenuItem>
    <MenuItem value="Half verified">Half verified</MenuItem>
    {/* <MenuItem value="Not Completed">Not Completed</MenuItem>
    <MenuItem value="Time Over Reminder">Time Over Reminder</MenuItem> */}
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
      <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Status</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

  <CTableBody>
    {loading ? (
      // Show spinner when loading
      <CTableRow>
        <CTableDataCell colSpan={11} style={{ textAlign: 'center', padding: '20px' }}>
          <CircularProgress />
        </CTableDataCell>
      </CTableRow>
    ) : filteredInvoices.length > 0 ? (
      // Render table data when loading is false
      filteredInvoices.map((invoice, index) => (
        <CTableRow key={index}>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{index + 1}</CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      <Link
        to="#"
        style={{ textDecoration: 'none' }}
        onClick={async (e) => {
          e.preventDefault();  // Prevent default link navigation

          try {
            console.log(`Fetching data for LabNo: ${invoice.labno}`);  // Log the LabNo being fetched

            // Fetch the patient's data using the LabNo from the invoice
            const response = await axios.get(
              `${config.public_apiUrl}/LabInvoiceSaveUpdate?LabNo=${invoice.labno}&YrId=${config.public_yearId}&cmpyId=${config.public_branchId}`
            );

            // Log the entire response for inspection
            console.log("API Response:", response);

            if (response.data) {
              const labData = response.data;  // Get the lab data from the response

              // Log the data that will be passed to the next page
              console.log("Lab Data:", labData);

              // Navigate to the proceedtobill page with the lab data
              navigate(`/proceedtobill/${invoice.labno}`, { state: { labData } });
            } else {
              console.error("No data received from the API.");
            }
          } catch (error) {
            console.error("Error fetching Lab data:", error);
          }
        }}
      >
        {invoice.labno}
      </Link>
    </CTableDataCell>



          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {invoice.Date ? formatDateTime(invoice.Date, false) : 'N/A'}
          </CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
  <Link to={`/${invoice.PatientID}`} style={{ textDecoration: 'none' }} 
    onClick={async (e) => {
      e.preventDefault();  // Prevent navigation to the URL

      // Fetch patient details using the API
      try {
        const response = await axios.post(`${config.public_apiUrl}/PatientMstr/PatientDetailsMaster`, {
       
          PatCode: invoice.PatientID,  // Pass the PatientID from the invoice
          editFlag: true
        });

        // Check if the response contains data
        if (response.data && response.data.patDetails) {
          const invoiceViewData = response.data.patDetails;  // Extract patient details from the response

          // Now open the modal and pass the fetched patient data
          toggleModal('Patient Registration', 
            <Patient closeModal={closeModal} invoiceViewData={invoiceViewData} />, 'lg');
        } else {
          console.error("No patient data found.");
        }
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    }}>
    {invoice.PatientID}
  </Link>
</CTableDataCell>

         
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.PatName}</CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {invoice.RptTime ? formatDateTime(invoice.RptTime) : 'N/A'}
          </CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Phone}</CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.RefDr}</CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Branchname}</CTableDataCell>
          <CTableDataCell style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{invoice.Corporatename}</CTableDataCell>
          <CTableDataCell style={getStatusColor(invoice.Status)}>
            {invoice.Status === 1 && "Result Issued"}
            {invoice.Status === 0 && "Processing"}
            {invoice.Status === 2 && "Urgent"}
            {invoice.Status === -1 && "Cancelled"}
            {invoice.Status === 4 && "Updated"}
            {invoice.Status === 5 && "Half Verified"}
          </CTableDataCell>
        </CTableRow>
      ))
    ) : (
      // No data available
      <CTableRow>
        <CTableDataCell colSpan={11} style={{ textAlign: 'center' }}>
          No invoices found.
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

