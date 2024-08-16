import React, { useState } from 'react';
import {
    Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
    Avatar,
    Autocomplete,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';
import './Basic.css';

// const StyledTypography = styled(Typography)({
//   color: 'green',
//   fontWeight: 'bold',
//   marginBottom: '10px',
// });

// const BorderPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   border: '1px solid #ccc',
//   height:'500px'
// }));





function BasicForm() {
    const patientDetails = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '01/01/1980',
        gender: 'Male',
        contact: '123-456-7890',
        email: 'johndoe@example.com',
        profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
    };

    return (
        <>
            <Grid container spacing={2}>

                {/* Left Side */}
                <Grid item xs={12}  sm={3}>

                    {/* <BorderPaper> */}
                    <Grid container spacing={2}>
                        <div style={{ marginLeft: '10px' }} className='border-paper leftside'>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            // Adjust height as needed
                            >
                                {/* Profile Image */}
                                <Avatar
                                    alt={`${patientDetails.firstName} ${patientDetails.lastName}`}
                                    src={patientDetails.profileImage}
                                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                                />
                                {/* Patient Details */}
                                {Object.entries(patientDetails)
                                    .filter(([key]) => key !== 'profileImage')
                                    .map(([key, detail], index) => (
                                        <Typography key={index} variant="body1" gutterBottom align="center">
                                            {detail}
                                        </Typography>
                                    ))}
                            </Box>
                            {/* CoreUI 
              React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic.
                  CoreUI 
             React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic.  */}

                        </div>





                    </Grid>

                    {/* </BorderPaper> */}
                </Grid>
                {/* Right Side */}
                <Grid item xs={12}  sm={9}>
                    {/* <BorderPaper> */}
                    <Grid container spacing={2}>
                        <div style={{ marginLeft: '10px', width: '1000px' }} className='border-paper '>
                            <Grid container spacing={2}>

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
                                        <InputLabel sx={{ fontSize: '1rem', top: '-4px' }}>Search By</InputLabel>
                                        <Select

                                            label="Search By"
                                            sx={{ height: '40px' }}
                                        >
                                            <MenuItem value="Patient ID">Patient ID</MenuItem>
                                            <MenuItem value="Name">Name</MenuItem>
                                            <MenuItem value="Email">Email</MenuItem>
                                            <MenuItem value="Phone">Phone</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={9}>

                                    <TextField
                                        //  label={searchCriteria}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{ style: { fontSize: '1rem', } }}
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
                                {/* <Grid container spacing={2}>
       <Grid item xs={12} sm={3}>
                    <TextField
                      id="patientid"
                    label="Patient ID"
                      variant="outlined"
                      size="small"
                      fullWidth
                    style={{marginLeft:'13px'}}
                      InputLabelProps={{ style: { fontSize: '1rem' } }} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
      <TextField
        select
        label="Prefix"
        variant="outlined"
        size="small"
        style={{marginLeft:'13px'}}
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="Mr">Mr</MenuItem>
        <MenuItem value="Mrs">Mrs</MenuItem>
        <MenuItem value="Ms">Ms</MenuItem>
        <MenuItem value="Miss">Miss</MenuItem>
      </TextField>
    </Grid>
                  <Grid item xs={12} sm={7}>
                   <TextField
                      id="name"
                      label="Name"
                      variant="outlined"  
                      size="small"
                      style={{marginLeft:'13px'}}
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }} 
                      
                    />
                  </Grid>
                   <Grid item container xs={12} sm={7} spacing={2}>
                   <Grid item xs={3}>
                        <TextField
                          id="yyyy"
                          label="Age YY"
                          variant="outlined"
                          size="small"
                        
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }} 
                         
                       />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          id="mm"
                          label="Age MM"
                          variant="outlined"
                          size="small"
                          fullWidth
                        
                          InputLabelProps={{ style: { fontSize: '1rem' } }} 
                          
                        />
                      </Grid>
                      
                      <Grid item xs={3}>
                       <TextField
                        id="dd"
                          label="Age DD"                          
                          variant="outlined"
                         size="small"
                        fullWidth
                       
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                          
                        />
                      </Grid>
                     
                      <Grid item xs={12} sm={3}>
                     <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel id="genderLabel">Gender</InputLabel>
                        <Select
                          labelId="genderLabel"
                          id="gender"
                          label="Gender"
                           
                          InputProps={{
                            readOnly: true,
                          }}
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                         
                          
                        >
                          <MenuItem value=""><em>None</em></MenuItem>
                         <MenuItem value="Male">Male</MenuItem>
                         <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                     
                      </FormControl>
                    </Grid>
                    </Grid>
                     <Grid item xs={12} sm={5}>
                   <TextField
                   id="dob"
                    label="Date of Birth"
                    type="date"
                     variant="outlined"
                    size="small"
                     fullWidth
                    
                      InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                   />
            </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="phone1"
                    label="Phone1"
                    variant="outlined"
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
                  
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  
                  />
                </Grid>
               <Grid item xs={12}>
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                   size="small"
                  
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '1rem' } }} 
                  />
               </Grid>
            
               </Grid> */}

                            </Grid>
                            {/* CoreUI 
             React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic.
                  CoreUI 
             React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic.
                  CoreUI 
             React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic.
                  CoreUI 
             React DatePicker
              component includes a
               feature that allows you t
               o disable certain dates, such as w
               eekends or holidays. This can be 
               accomplished by
                passing an array to disabledDate 
                prop to the component, which determines
                 which dates should be disabled based
                  on custom logic. */}

                        </div>



                    </Grid>
                    {/* </BorderPaper> */}
                </Grid>
            </Grid>
        </>
    );
}

export default BasicForm;