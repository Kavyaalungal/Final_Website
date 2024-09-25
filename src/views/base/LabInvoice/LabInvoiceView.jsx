import React, { useState } from 'react';
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


const InvoiceView = () => {

  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Patient Registration');
  const [modalSize, setModalSize] = useState('lg');

  const toggleModal = () => {
    setModal(!modal);
  };


  const data = [
    { slNo: 1, labNo: '001', date: '2024-09-01', patientId: 'P123', name: 'John ', phone: '1234567890', refBy: 'Dr. Smith', releasingtime: '2024-09-01', branch: 'Main', corporate: 'ABC Corp', status: 'Result Issued' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'On Processing' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Time Over' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Urgent Report' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Cancelled Invoice' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Result Updated' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Half verified' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'TAT Reminder' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Result Issue Remainder' },
    { slNo: 2, labNo: '002', date: '2024-09-02', patientId: 'P124', name: 'Jane ', phone: '0987654321', refBy: 'Dr. Brown', releasingtime: '2024-09-01', branch: 'Branch A', corporate: 'XYZ Inc', status: 'Partially Second Level' },// Add more data as needed...
  ];
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Result Issued':
        return { backgroundColor: '#8FF18C', color: 'black' };
      case 'On Processing':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Time Over':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Urgent Report':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Cancelled Invoice':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Result Updated':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Half verified':
        return { backgroundColor: '#1C91FF', color: 'white' };
        case 'TAT Reminder':
          return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Result Issue Remainder':
        return { backgroundColor: '#1C91FF', color: 'white' };
      case 'Partially Second Level':
        return { backgroundColor: '#1C91FF ', color: 'white' };
      default:
        return { backgroundColor: 'black', color: 'white' };
    }
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
        fontSize: '1.5rem',
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
  <Grid item xs={6} >
  <TextField
      select
      label="Branch"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '16px' } }}
    >
       <MenuItem value="All">--All--</MenuItem>
   
    </TextField>
    </Grid>
    <Grid item xs={6} >
  <TextField
      select
      label="Status"
      variant="outlined"
      size="small"
      sx={{width:215}}
      fullWidth
      InputLabelProps={{ style: { fontSize: '16px' } }}
    >
      <MenuItem value="All">--All--</MenuItem>
      <MenuItem value="Result Issued">Result Issued</MenuItem>
      <MenuItem value="On Processing">On Processing</MenuItem>
      <MenuItem value="Time Over">Time Over</MenuItem>
      <MenuItem value="Urgent Report">Urgent Report</MenuItem>
      <MenuItem value="Cancelled Invoice">Cancelled Invoice</MenuItem>
      <MenuItem value="Result Updated">Result Updated</MenuItem>
      <MenuItem value="Half verified">Half verified</MenuItem>
      <MenuItem value="Not Completed">Not Completed</MenuItem>
      <MenuItem value="Time Over Reminder">Time Over Reminder</MenuItem>
    </TextField>
    </Grid>
  {/* Search By Dropdown */}
  <Grid item xs={12} sm={3} md={3} lg={2}>
    <TextField
      select
      label="Search By"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '16px' } }}
    >
      <MenuItem value="Phone">Phone</MenuItem>
      <MenuItem value="Patient ID">Patient ID</MenuItem>
      <MenuItem value="Name">Name</MenuItem>
      <MenuItem value="Email">Email</MenuItem>
      <MenuItem value="LabNo">LabNo</MenuItem>
      <MenuItem value="LabNo">IPOP</MenuItem>
      <MenuItem value="LabNo">Sample Id</MenuItem>
      <MenuItem value="LabNo">Corporate</MenuItem>
    </TextField>
  </Grid>

  {/* Search Input */}
  <Grid item xs={12} sm={5} md={5} lg={4}>
    <TextField
      variant="outlined"
      size="small"
      fullWidth
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
             
            >
              New
            </Button>
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
              <CTableHeaderCell scope="col" style={{ width: '4%', backgroundColor: '#d6d1d1' }}>SlNo</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Lab No</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Date</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Patient ID</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '18%', backgroundColor: '#d6d1d1' }}>Name</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '12%', backgroundColor: '#d6d1d1' }}>Releasing Time</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '10%', backgroundColor: '#d6d1d1' }}>Phone</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '12%', backgroundColor: '#d6d1d1' }}>Ref.By</CTableHeaderCell>
           
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Branch</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '8%', backgroundColor: '#d6d1d1' }}>Corporate</CTableHeaderCell>
              <CTableHeaderCell scope="col" style={{ width: '13%', backgroundColor: '#d6d1d1' }}>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.slNo}</CTableDataCell>
                <CTableDataCell>
                  <Link to={`/proceedtobill/${item.labNo}`} style={{ textDecoration: 'none' }}>
                    {item.labNo}
                  </Link>
                </CTableDataCell>
                <CTableDataCell>{item.date}</CTableDataCell>
                <CTableDataCell>
                  <Link to={`/patient/${item.patientId}`} style={{ textDecoration: 'none' }}>
                    {item.patientId}
                  </Link>
                </CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.releasingtime}</CTableDataCell>
                <CTableDataCell>{item.phone}</CTableDataCell>
                <CTableDataCell>{item.refBy}</CTableDataCell>
              
                <CTableDataCell>{item.branch}</CTableDataCell>
                <CTableDataCell>{item.corporate}</CTableDataCell>
                {/* <CTableDataCell style={{
    backgroundColor: getStatusStyles(item.status).backgroundColor,
    color: getStatusStyles(item.status).color,
    padding: '4px 8px',
    borderRadius: '4px',
    display: 'inline-block',
    textAlign: 'center', // Center the text
    fontSize: '0.9em',
    lineHeight: '1.5',
    height: '40px', // Set a height (adjust as necessary)
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    verticalAlign: 'middle', // Ensures vertical centering
}}
onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.transform = 'scale(1.05)';
}}
onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'scale(1)';
}}>
    {item.status}
</CTableDataCell> */}
 <CTableDataCell style={{
    backgroundColor: getStatusStyles(item.status).backgroundColor,
    color: getStatusStyles(item.status).color,
    padding: '4px 4px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'scale(1)';
  }}>
    {item.status}
</CTableDataCell>

{/* <CTableDataCell style={{
    backgroundColor: getStatusStyles(item.status).backgroundColor,
    color: getStatusStyles(item.status).color,
    padding: '2px 4px',  // Reduced padding
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    width: '100px',  // Set fixed width, adjust as needed
    minWidth: '80px'  // Ensure the cell doesn't shrink too much
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'scale(1)';
  }}>
    {item.status}
</CTableDataCell> */}

{/* <CTableDataCell style={{
                  backgroundColor: getStatusStyles(item.status).backgroundColor,
                  color: getStatusStyles(item.status).color,
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '0.9em',
                  lineHeight: '1.5',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  {item.status}
                </CTableDataCell> */}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
     
    </CardContent>
  </Card>
  </Grid>
</Grid>



     

 {/* <Card
  sx={{
    height: {xs:140,sm:75},
    marginLeft: { xs: -2, sm: -20 }, 
    width: { xs: 370,md:1400 }, 
    marginTop: { xs: 0, sm: 1 },
  }}
  className='customwidth'
>
  <CardContent>
    <Grid container spacing={2}>
    <TableContainer  style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
              <TableCell>Column 3</TableCell>
              <TableCell>Column 4</TableCell>
              <TableCell>Column 5</TableCell>
              <TableCell>Column 6</TableCell>
              <TableCell>Column 7</TableCell>
              <TableCell>Column 8</TableCell>
              <TableCell>Column 9</TableCell>
              <TableCell>Column 10</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </CardContent>
</Card>  */}
     
    </div>
  );
};

export default InvoiceView;
