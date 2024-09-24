import React from 'react';
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
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';



const InvoiceView = () => {
  // Sample data for the table
  // const rows = Array.from({ length: 10 }, (_, index) => ({
  //   id: index + 1,
  //   col1: `Data 1-${index + 1}`,
  //   col2: `Data 2-${index + 1}`,
  //   col3: `Data 3-${index + 1}`,
  //   col4: `Data 4-${index + 1}`,
  //   col5: `Data 5-${index + 1}`,
  //   col6: `Data 6-${index + 1}`,
  //   col7: `Data 7-${index + 1}`,
  //   col8: `Data 8-${index + 1}`,
  //   col9: `Data 9-${index + 1}`,
  //   col10: `Data 10-${index + 1}`,
  // }));

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
      {/* <Typography variant="h2" gutterBottom sx={{color:'#bd2937',fontWeight:'bold',marginLeft:-20,marginTop:-2, fontSize: '1.5rem'}}>
       Lab Invoice View
      </Typography> */}
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
      <MenuItem value="Result Issued">Result Issued</MenuItem>
      <MenuItem value="Patient ID">On Processing</MenuItem>
      <MenuItem value="Name">Time Over</MenuItem>
      <MenuItem value="Email">Urgent Report</MenuItem>
      <MenuItem value="LabNo">LabNo</MenuItem>
      <MenuItem value="LabNo">IPOP</MenuItem>
      <MenuItem value="LabNo">Sample Id</MenuItem>
      <MenuItem value="LabNo">Corporate</MenuItem>
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
                backgroundColor: '#bb4d58', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
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
                backgroundColor: '#bb4d58', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },
              }}
              variant="contained"
              color="success"
             
            >
              Refresh
            </Button>
  </Grid>
  
  {/* <Grid item xs={12} sm={2} md={2} lg={2}>
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
  </Grid> */}
</Grid>

  </CardContent>
</Card>

    </Grid>
    {/* <Grid item xs={12}>
  <Card 
    sx={{
      marginLeft: { xs: -2, sm: -3.5 }, 
      width: { xs: 370 ,md:725},
      height: {xs:'auto',sm:345},
    }} 
    className='customwidth customheight'
  >
    <CardContent>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4}>
  <TextField
    id="patientid"
    label="Patient ID"
    variant="outlined"
    value={patientDetails ? patientDetails.Patient_Code : ''}
    onChange={handlePatientIdChange}
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '1rem' } }}
     InputProps={{
                 readOnly: true,
              }}
  />
</Grid>
 <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="abhaid"
            label="ABHA ID"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="memberid"
            label="Member ID"
            variant="outlined"
            
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            InputProps={{
              readOnly: true,
           }}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
        <TextField
          select
          label="Prefix"
          variant="outlined"
          value={patientDetails ? patientDetails.Patient_Title : ''}
          onChange={handleTitleChange}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Mr">Mr</MenuItem>
          <MenuItem value="Mrs">Mrs</MenuItem>
          <MenuItem value="Miss">Miss</MenuItem>
        </TextField>
      </Grid>

        <Grid item xs={12} sm={9} md={10}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Name : ''}                     
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Name: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Name}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="yyyy"
          label="Age YY"
          variant="outlined"
          size="small"
          value={patientDetails ? patientDetails.Patient_Ageyy : ''}
          onChange={(e) => handleAgeChange('yy', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="mm"
          label="Age MM"
          variant="outlined"
          size="small"
          value={patientDetails ? patientDetails.Patient_Agemm : ''}   
          onChange={(e) => handleAgeChange('mm', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="dd"
          label="Age DD"
          variant="outlined"
          size="small"
          value={patientDetails ? patientDetails.Patient_Agedd : ''}   
          onChange={(e) => handleAgeChange('dd', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={3} md={3}>
        <TextField
          id="dob"
          label="Date of Birth"
          type="date"
          variant="outlined"
          size="small"
          fullWidth
           value={patientDetails ? patientDetails.Patient_Dob ? patientDetails.Patient_Dob.split('T')[0] : '' : ''}
          onChange={handleDateOfBirthChange}
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
 <Grid item xs={12} sm={3} md={3}>
        <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel id="genderLabel">Gender</InputLabel>
          <Select
            labelId="genderLabel"
            id="gender"
            label="Gender"
            value={patientDetails ? patientDetails.Patient_Ismale : ''}
            onChange={handleGenderChange}
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Ismale}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.Patient_Ismale && (
            <Typography variant="caption" color="error">
              {errors.Patient_Ismale}
            </Typography>
          )}
        </FormControl>
      </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="phone1"
            label="Phone1"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Phno : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Phno: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Phno: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
           
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="phone2"
            label="Phone2"
            variant="outlined"
            size="small"
            value={patientDetails ? patientDetails.Patient_mobile : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_mobile: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_mobile: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
         
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={patientDetails ? patientDetails.Patient_Email : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Email: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Email: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            size="small"
            value={patientDetails ? patientDetails.Patient_Address : ''}    
            onChange={(e)=>setPatientDetails({...patientDetails, Patient_Address: e.target.value})}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>
        
      </Grid>
    </CardContent>
  </Card>
</Grid> */}

    <Grid item xs={12} >
{/*       
      <Buttons  resetForm={resetForm}
       fetchNewPatientId={fetchNewPatientId} 
       isEditMode={isEditMode}
       handleNewPatient={handleNewPatient}
        closeModal={closeModal} 
        newPatientId={newPatientId} 
        isSaving={isSaving}
         handleSaveOrUpdate={handleSaveOrUpdate}
          flag={flag}/> */}
     </Grid>
   </Grid>
   <Grid item xs={12} >
    <Card
  sx={{
    height: 'auto',
    marginLeft: { xs: -2, sm: -20 }, 
    width: { xs: 370,md:1400 }, 
    marginTop: { xs: 0, sm: -1 },
  }}
  className='customwidth'
>
  <CardContent>
    <Grid container spacing={2}>
    <CTable striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col" style={{ width: '5%' }}>Sl No</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '10%' }}>Lab No</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '12%' }}>Date</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '12%' }}>Patient ID</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '20%' }}>Name</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '10%' }}>Phone</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '15%' }}>Ref.By</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '8%' }}>Tests</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '7%' }}>Branch</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '8%' }}>Corporate</CTableHeaderCell>
      <CTableHeaderCell scope="col" style={{ width: '5%' }}>Status</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableDataCell>1</CTableDataCell>
      <CTableDataCell>12345</CTableDataCell>
      <CTableDataCell>2024-09-25</CTableDataCell>
      <CTableDataCell>Ram</CTableDataCell>
      <CTableDataCell>9876543210</CTableDataCell>
      <CTableDataCell>Dr. Smith</CTableDataCell>
      <CTableDataCell>Test A</CTableDataCell>
      <CTableDataCell>Branch 1</CTableDataCell>
      <CTableDataCell>Corp 1</CTableDataCell>
      <CTableDataCell>Standard</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>2</CTableDataCell>
      <CTableDataCell>67891</CTableDataCell>
      <CTableDataCell>2024-09-25</CTableDataCell>
      <CTableDataCell>Appu</CTableDataCell>
      <CTableDataCell>9876543210</CTableDataCell>
      <CTableDataCell>Dr. Ummar</CTableDataCell>
      <CTableDataCell>Test A</CTableDataCell>
      <CTableDataCell>Branch 1</CTableDataCell>
      <CTableDataCell>Corp 1</CTableDataCell>
      <CTableDataCell>Standard</CTableDataCell>
    </CTableRow>
    {/* Repeat rows as needed */}
  </CTableBody>
</CTable>

    </Grid>
  </CardContent>
</Card>
 
     </Grid>
      {/* <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item>
          <Checkbox />
        </Grid>
        <Grid item>
          <Checkbox />
        </Grid>
        <Grid item>
          <Checkbox />
        </Grid>
        <Grid item>
          <Checkbox />
        </Grid>
        <Grid item>
          <Checkbox />
        </Grid>
      </Grid> */}

      {/* <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Button 1
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Button 2
          </Button>
        </Grid>
      </Grid> */}
{/* <Card
  sx={{
    height: {xs:140,sm:75},
    marginLeft: { xs: -2, sm: -20 }, 
    width: { xs: 370,md:1400 }, 
    marginTop: { xs: 0, sm: -1 },
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
</Card> */}
    
    </div>
  );
};

export default InvoiceView;
