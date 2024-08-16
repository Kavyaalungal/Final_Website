// import React, { useEffect, useState } from 'react';
// import { Container, Button, Grid, Paper, TextField, Typography, FormControl,FormControlLabel,Checkbox, InputLabel, Select, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box, FormGroup, RadioGroup, Radio, } from '@mui/material';
// import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// const HomeCollection = () => {
//   const [error, setError] = useState('');
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);


//   const rows = [
//     { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
//     { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
    
//   ];

//   const handleSelectAll = (event) => {
//     const isChecked = event.target.checked;
//     setSelectAll(isChecked);
//     if (isChecked) {
//       setSelectedRows(rows.map((row) => row.slNo)); // Select all rows
//     } else {
//       setSelectedRows([]); // Deselect all rows
//     }
//   };

//   const handleSelectRow = (slNo) => (event) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedRows((prev) => [...prev, slNo]);
//     } else {
//       setSelectedRows((prev) => prev.filter((id) => id !== slNo));
//     }
//   };
//   return (
//     <>
//       <CCardBody>
//         {/* Form and Table */}
//         <Grid container spacing={2}>
//           {/* Left side - Form */}
//           <Grid item xs={12} sm={6}>
//             <Grid container spacing={2}>
//               {/* Error Message */}
//               {error && (
//                 <Grid item xs={12}>
//                   <Typography variant="body2" color="error">{error}</Typography>
//                 </Grid>
//               )}
          
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="bookno"
//                   label="Book No"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField

//                   id="dateTime"
//                   label="Date/Time"
//                   variant="outlined"
//                   size="small"
//                   type='datetime-local'
//                   fullWidth
//                   InputLabelProps={{ shrink:true,style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="id"
//                   label="Patient ID"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
             
//               <Grid item xs={12} sm={9}>
//                 <TextField
//                   id="name"
//                   label="Name"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <Button variant='contained' color='primary'>Search</Button>
//               </Grid>
//               <Grid item xs={12} sm={9}>
//                 <TextField
//                   id="address"
//                   label="Address"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//                <Grid item xs={12} sm={3}>
//                 <TextField
//                   select
//                   label="Prefix"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 >
//                   <MenuItem value=""><em>None</em></MenuItem>
//                   <MenuItem value="Mr">Mr</MenuItem>
//                   <MenuItem value="Mrs">Mrs</MenuItem>
//                   <MenuItem value="Ms">Ms</MenuItem>
//                   <MenuItem value="Miss">Miss</MenuItem>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="email"
//                   label="Email"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   id="yyyy"
//                   label="Age YY"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   id="mm"
//                   label="Age MM"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   id='dd'
//                   label='Age DD'
//                   variant='outlined'
//                   size='small'
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
           
//               <Grid item xs={12} sm={12}>
//                 <TextField
//                   id="landmark"
//                   label="Landmark"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12}>
//                 <TextField
//                   id="area"
//                   label="Area"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//         <TextField
//           id="map"
//           label="Map URL"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={6} sm={2} textAlign="center">
//         <LocationOnIcon fontSize="large"  style={{ color: 'red' }}  />
//       </Grid>
//       <Grid item xs={6} sm={4}>
//         <Button variant='contained' color='primary'>
//           Map Search
//         </Button>
//       </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="colldate"
//                   label="Coll.Date"
//                   variant="outlined"
//                   type='datetime-local'
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   select
//                   label="Bkg.Through"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 >
//                   <MenuItem value=""><em>None</em></MenuItem>
//                   <MenuItem value="Mr">Mr</MenuItem>
//                   <MenuItem value="Mrs">Mrs</MenuItem>
//                   <MenuItem value="Ms">Ms</MenuItem>
//                   <MenuItem value="Miss">Miss</MenuItem>
//                 </TextField>
//               </Grid>
             
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="mobile"
//                   label="Mobile"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id='phone'
//                   label="Phone"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 >
                 
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="driver"
//                   label="Driver"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="takenby"
//                   label="TakenBy"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   select
//                   label="Sample Mode"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 >
//                   <MenuItem value=""><em>None</em></MenuItem>
//                   <MenuItem value="Mr">Mr</MenuItem>
//                   <MenuItem value="Mrs">Mrs</MenuItem>
//                   <MenuItem value="Ms">Ms</MenuItem>
//                   <MenuItem value="Miss">Miss</MenuItem>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={5}>
//                 <TextField
//                   id="abhaid"
//                   label="ABHA ID"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={7}>
//             <FormControlLabel control={<Checkbox />} label="Urgent" />
//             <FormControlLabel control={<Checkbox />} label="Covid19 Sample" />
//           </Grid>
//           <Grid item xs={12}>
//           <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
//                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
//                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
     
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         <TableRow></TableRow>
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <Box mt={15} />
//                 </Box>
          
//               </Grid>
          
    
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="remarks"
//           label="Remarks"
//           variant="outlined"
//           size="small"
//           multiline
//           rows={6}
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>

   
//       <Grid item xs={12} sm={6}>
//         <Grid container spacing={2} direction="column">
//           <Grid item>
//             <TextField
//               id="total"
//               label="Total"
//               variant="outlined"
//               size="small"
//               fullWidth
//               InputLabelProps={{ style: { fontSize: '1rem' } }}
//             />
//           </Grid>
//           <Grid item>
//             <TextField
//               id="scharge"
//               label="S.Charge"
//               variant="outlined"
//               size="small"
//               fullWidth
//               InputLabelProps={{ style: { fontSize: '1rem' } }}
//             />
//           </Grid>
//           <Grid item >
//             <TextField
//               id="discount"
//               label="Discount"
//               variant="outlined"
//               size="small"
//               fullWidth
//               InputLabelProps={{ style: { fontSize: '1rem' } }}
//             />
//           </Grid>
//         </Grid>
//       </Grid>

    
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="discountreason"
//           label="D.Reason"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="est"
//           label="Est.NetAmt"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
    
      
//       <Grid item xs={12} sm={2}>
//         <FormControlLabel control={<Checkbox />} label="Cancel" />
//       </Grid>

     
//       <Grid item xs={12} sm={10}>
//         <Grid container spacing={2} justifyContent="flex-end">
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: 2 }}
//             >
//               Save
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: 2 }}
//             >
//               New
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: 2 }}
//             >
//               Exit
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
// </Grid>
// </Grid>
//           {/* Right side - Table */}
// <Grid item xs={12} sm={6}>
//   <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
//     <Grid container spacing={2} alignItems="center">
//       <Grid item xs={12} sm={6}>
//         <Box sx={{ mb: 2 }}>
//           <FormControl component="fieldset">
//             <RadioGroup row>
//               <FormControlLabel
//                 value="cash"
//                 control={<Radio size="small" />}
//                 label={<Typography variant="body2">Entry Date</Typography>}
//                 sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//               />
//               <FormControlLabel
//                 value="cheque"
//                 control={<Radio size="small" />}
//                 label={<Typography variant="body2">Exit Date</Typography>}
//                 sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//               />
//             </RadioGroup>
//           </FormControl>
//         </Box>
//       </Grid>

//       <Grid item xs={12} sm={3}>
//         <TextField
//           id='dateFrom'
//           label='From'
//           variant='outlined'
//           size='small'
//           type='date'
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <TextField
//           id="dateTo"
//           label="To"
//           variant="outlined"
//           type='date'
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <Button variant='contained' color='primary' fullWidth>View</Button>
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <Button variant='contained' color='primary' fullWidth>Print</Button>
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <Button variant='contained' color='primary' fullWidth>Set print</Button>
//       </Grid>
//       <Grid item xs={12} sm={12}>
//         <TextField
//           id="area"
//           label="Area"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={3}>
//         <FormControlLabel control={<Checkbox />} label="Select all"
//          checked={selectAll}
//          onChange={handleSelectAll} />
//       </Grid>
//       <Grid item xs={12} sm={7}>
//         <TextField
//           id="driver"
//           label="Driver"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={2}>
//         <Button variant='contained' color='primary' fullWidth>Update</Button>
//       </Grid>

//       <Grid item xs={12}>
//         <TableContainer component={Paper} sx={{ border: '1px solid #ddd', borderRadius: '8px', overflowX: 'auto', mt: 2 }}>
//           <Table size="small" aria-label="collection booking table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>SlNo</TableCell>
//                 <TableCell>Bkg#</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Mobile</TableCell>
//                 <TableCell>Coll.Date</TableCell>
//                 <TableCell>Sel</TableCell>
//                 <TableCell>Set.SlNo</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.slNo}</TableCell>
//                   <TableCell>{row.bkgNo}</TableCell>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.mobile}</TableCell>
//                   <TableCell>{row.collDate}</TableCell>
//                   <TableCell>
//                     <Checkbox
//                       checked={selectedRows.includes(row.slNo)}
//                       onChange={() => handleSelectRow(row.slNo)}
//                     />
//                   </TableCell>
//                   <TableCell></TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid>
//     </Grid>
//   </Box>
// </Grid> 

               
         
//         </Grid>
      
//       </CCardBody>
//     </>
//   )
// }
// export default HomeCollection;


import React, { useState } from 'react';
import { Container, Button, Grid, Paper, TextField, Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, FormControlLabel, RadioGroup, Radio, MenuItem, FormControl } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
 import { CDatePicker } from '@coreui/react-pro';
 import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import './Home.css';

import { CCardBody } from '@coreui/react';

const HomeCollection = () => {
  const [error, setError] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = [
    { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
    { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
    { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
    { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
    { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
    { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
    
  ];

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedRows(rows.map((row) => row.slNo)); // Select all rows
    } else {
      setSelectedRows([]); // Deselect all rows
    }
  };

  const handleSelectRow = (slNo) => (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedRows((prev) => [...prev, slNo]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => id !== slNo));
    }
  };

  return (
    <>
      <CCardBody>
        <Grid container spacing={2}>
          {/* Left side - Form */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Error Message */}
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="error">{error}</Typography>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="bookno"
                  label="Book No"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <CDatePicker locale="en-US" placeholder={'Date'} timepicker />
              {/* <CDatePicker placeholder={'Date'} locale="en-US" /> */}
              {/* <CDatePicker locale="en-US" timepicker /> */}
                {/* <TextField
                  id="dateTime"
                  label="Date/Time"
                  variant="outlined"
                  size="small"
                  type='datetime-local'
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="id"
                  label="Patient ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} sm={7}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Button variant='contained'  sx={{ ml: 2 }} style={{backgroundColor:'#3095E5'}}>
                    Search
                  </Button>
                </Box>
              </Grid>
            
              <Grid item xs={12} sm={12}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Gender"
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="yyyy"
                  label="Age YY"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="mm"
                  label="Age MM"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id='dd'
                  label='Age DD'
                  variant='outlined'
                  size='small'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="landmark"
                  label="Landmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  id="map"
                  label="Map URL"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon fontSize="large" sx={{ color: 'red' }} />
                  <Button variant='contained'  sx={{ ml: 2 }} style={{backgroundColor:'#3095E5'}}>
                    Map Search
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              <CDatePicker locale="en-US" placeholder={'Coll.Date'} timepicker />
                {/* <TextField
                  id="colldate"
                  label="Coll.Date"
                  variant="outlined"
                  type='datetime-local'
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Bkg.Through"
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="mobile"
                  label="Mobile"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id='phone'
                  label="Phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="driver"
                  label="Driver"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="takenby"
                  label="TakenBy"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Sample Mode"
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
    <TextField
      id="abhaid"
      label="ABHA ID"
      variant="outlined"
      size="small"
      fullWidth
    />
  </Grid>
  {/* Container for Checkboxes */}
  <Grid item xs={12} sm={6} md={7}>
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
      {/* Urgent Checkbox */}
      <FormControlLabel control={<Checkbox />} label="Urgent" />
      {/* Covid19 Sample Checkbox */}
      <FormControlLabel control={<Checkbox />} label="Covid19 Sample" />
    </Box>
  </Grid>
              <Grid item xs={12}>
           <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                   <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                       <TableRow>
                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>SlNo</TableCell>
                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', }}>Code</TableCell>
                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Test Name</TableCell>
                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',}}>Rate</TableCell>
     
                       </TableRow>
                     </TableHead>
                     <TableBody>
                         <TableRow></TableRow>
                     </TableBody>
                   </Table>
                 </TableContainer>
                 <Box mt={15} />
                 </Box>
          
              </Grid>
              <Grid item xs={12} sm={6}>
        <TextField
          id="remarks"
          label="Remarks"
          variant="outlined"
          size="small"
          multiline
          rows={6}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

   
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              id="total"
              label="Total"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="scharge"
              label="S.Charge"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
          <Grid item >
            <TextField
              id="discount"
              label="Discount"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
        </Grid>
      </Grid>

    
      <Grid item xs={12} sm={6}>
        <TextField
          id="discountreason"
          label="D.Reason"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="est"
          label="Est.NetAmt"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      
      <Grid item xs={12} sm={3}>
    <FormControlLabel control={<Checkbox />} label="Cancel" />
  </Grid>
  
  {/* Buttons Container */}
  <Grid item xs={12} sm={9}>
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid item>
        <Button
          variant="contained"
         
          sx={{ marginTop: 2,backgroundColor:'#3095E5'  }}
        >
          Save
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
         
          sx={{ marginTop: 2,backgroundColor:'#3095E5'  }}
        >
          New
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
         
          sx={{ marginTop: 2,backgroundColor:'#3095E5' }}
        >
          Exit
        </Button>
      </Grid>
    </Grid>
  </Grid>
    
             
            </Grid>
          </Grid>
          {/* Right side - Table */}
         
          <Grid item xs={12} md={6}>
          <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
          <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12}>
         <Box >
           <FormControl component="fieldset">
             <RadioGroup row>
               <FormControlLabel
                value="cash"
                control={<Radio size="small" />}
                label={<Typography variant="body2" style={{fontSize:'1rem'}}>Entry Date</Typography>}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
              />
              <FormControlLabel
                value="cheque"
                control={<Radio size="small" />}
                label={<Typography variant="body2" style={{fontSize:'1rem'}}>Exit Date</Typography>}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <CDatePicker locale="en-US" placeholder={'From'}  />
         {/* <TextField
          id='dateFrom'
          label='From'
          variant='outlined'
          size='small'
          type='date'
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
      <CDatePicker locale="en-US" placeholder={'To'}  />
        {/* <TextField
          id="dateTo"
          label="To"
          variant="outlined"
          type='date'
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        /> */}
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                   
                  sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5'  }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                 
                
                  sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5'  }}
                >
                  Print
                </Button>
                <Button
                variant='contained'
                
                sx={{marginTop:2, marginLeft:2,backgroundColor:'#3095E5' }}
                >Set Print</Button>
               
               
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
         <TextField
          id='area'
          label='Area'
          variant='outlined'
          size='small'
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      

  {/* TextField */}

  <Grid item xs={12} sm={6}>
    <FormControlLabel
      control={<Checkbox />}
      label="Select All"
      sx={{ width: '100%' }}
      checked={selectAll}
      onChange={handleSelectAll}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      id="textField"
      label="Driver"
      variant="outlined"
      size="small"
      fullWidth
    />
  </Grid>

  {/* Button */}
  {/* <Grid item xs={12} sm={4}>
    <Button
      variant="contained"
      color="primary"
      fullWidth
    >
      Update
    </Button>
  </Grid> */}
  <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                
               
                <Button
                variant='contained'
                sx={{marginTop:2, marginLeft:2,backgroundColor:'#3095E5' }}
                >Update</Button>
               
               
              </Grid>
            </Grid>
            <Paper sx={{ width: '100%', overflowX: 'auto', marginTop:'20px' }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                     
                      <TableCell>Sl No</TableCell>
                      <TableCell>Bkg No</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Mobile</TableCell>
                      <TableCell>Coll.Date</TableCell>
                      <TableCell>Sel</TableCell>
                      <TableCell>Set.SIN</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.slNo}>
                       
                        <TableCell>{row.slNo}</TableCell>
                        <TableCell>{row.bkgNo}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.mobile}</TableCell>
                        <TableCell>{row.collDate}</TableCell>
                        <TableCell>
                          <Checkbox
                            checked={selectedRows.includes(row.slNo)}
                            onChange={handleSelectRow(row.slNo)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          </Box>
          </Grid>
        </Grid>
      </CCardBody>
    </>
  );
};

export default HomeCollection;




// import React, { useState } from 'react';
// import { Container, Button, Grid, Paper, TextField, Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const HomeCollection = () => {
//   const [error, setError] = useState('');
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const rows = [
//     { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
//     { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
//   ];

//   const handleSelectAll = (event) => {
//     const isChecked = event.target.checked;
//     setSelectAll(isChecked);
//     if (isChecked) {
//       setSelectedRows(rows.map((row) => row.slNo)); // Select all rows
//     } else {
//       setSelectedRows([]); // Deselect all rows
//     }
//   };

//   const handleSelectRow = (slNo) => (event) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedRows((prev) => [...prev, slNo]);
//     } else {
//       setSelectedRows((prev) => prev.filter((id) => id !== slNo));
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         {/* Form Section */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//             {error && (
//               <Typography variant="body2" color="error" gutterBottom>
//                 {error}
//               </Typography>
//             )}

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <TextField
//                   id="bookno"
//                   label="Book No"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>

//               {/* Additional form fields */}
//               <Grid item xs={12} sm={6} md={4}>
//                 <TextField
//                   id="map"
//                   label="Map URL"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={6} sm={3}>
//                 <LocationOnIcon fontSize="large" style={{ color: 'red' }} />
//               </Grid>
//               <Grid item xs={6} sm={3}>
//                 <Button variant='contained' color='primary' fullWidth>
//                   Map Search
//                 </Button>
//               </Grid>

//               <Grid item xs={12}>
//                 <Button variant='contained' color='primary'>Search</Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>

//         {/* Table Section */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <FormControl component="fieldset">
//                   <RadioGroup row>
//                     <FormControlLabel
//                       value="cash"
//                       control={<Radio size="small" />}
//                       label="Entry Date"
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="cheque"
//                       control={<Radio size="small" />}
//                       label="Exit Date"
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={3}>
//                 <TextField
//                   id='dateFrom'
//                   label='From'
//                   variant='outlined'
//                   size='small'
//                   type='date'
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <TextField
//                   id="dateTo"
//                   label="To"
//                   variant="outlined"
//                   type='date'
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <Button variant='contained' color='primary' fullWidth>View</Button>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Button variant='contained' color='primary' fullWidth>Print</Button>
//               </Grid>

//               {/* Table in Right Section */}
//               <Grid item xs={12}>
//                 <TableContainer component={Paper} sx={{ border: '1px solid #ddd', borderRadius: '8px', overflowX: 'auto', mt: 2 }}>
//                   <Table size="small" aria-label="collection booking table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell>SlNo</TableCell>
//                         <TableCell>Bkg#</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Mobile</TableCell>
//                         <TableCell>Coll.Date</TableCell>
//                         <TableCell>Select</TableCell>
//                         <TableCell>Set.SlNo</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows.map((row, index) => (
//                         <TableRow key={index}>
//                           <TableCell>{row.slNo}</TableCell>
//                           <TableCell>{row.bkgNo}</TableCell>
//                           <TableCell>{row.name}</TableCell>
//                           <TableCell>{row.mobile}</TableCell>
//                           <TableCell>{row.collDate}</TableCell>
//                           <TableCell>
//                             <Checkbox
//                               checked={selectedRows.includes(row.slNo)}
//                               onChange={handleSelectRow(row.slNo)}
//                             />
//                           </TableCell>
//                           <TableCell>{row.slNo}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default HomeCollection;



// import React, { useState } from 'react';
// import { Container, Button, Grid, Paper, TextField, Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, FormControlLabel, RadioGroup, Radio, FormControl } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const HomeCollection = () => {
//   const [error, setError] = useState('');
//   const [selectAll, setSelectAll] = useState(false);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const rows = [
//     { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
//     { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
//   ];

//   const handleSelectAll = (event) => {
//     const isChecked = event.target.checked;
//     setSelectAll(isChecked);
//     if (isChecked) {
//       setSelectedRows(rows.map((row) => row.slNo)); // Select all rows
//     } else {
//       setSelectedRows([]); // Deselect all rows
//     }
//   };

//   const handleSelectRow = (slNo) => (event) => {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       setSelectedRows((prev) => [...prev, slNo]);
//     } else {
//       setSelectedRows((prev) => prev.filter((id) => id !== slNo));
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         {/* Form Section */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//             {error && (
//               <Typography variant="body2" color="error" gutterBottom>
//                 {error}
//               </Typography>
//             )}

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <TextField
//                   id="bookno"
//                   label="Book No"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>

//               {/* Additional form fields */}
//               <Grid item xs={12} sm={6} md={4}>
//                 <TextField
//                   id="map"
//                   label="Map URL"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={6} sm={3}>
//                 <LocationOnIcon fontSize="large" style={{ color: 'red' }} />
//               </Grid>
//               <Grid item xs={6} sm={3}>
//                 <Button variant='contained' color='primary' fullWidth>
//                   Map Search
//                 </Button>
//               </Grid>

//               <Grid item xs={12}>
//                 <Button variant='contained' color='primary'>Search</Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>

//         {/* Table Section */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <FormControl component="fieldset">
//                   <RadioGroup row>
//                     <FormControlLabel
//                       value="cash"
//                       control={<Radio size="small" />}
//                       label="Entry Date"
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="cheque"
//                       control={<Radio size="small" />}
//                       label="Exit Date"
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={3}>
//                 <TextField
//                   id='dateFrom'
//                   label='From'
//                   variant='outlined'
//                   size='small'
//                   type='date'
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <TextField
//                   id="dateTo"
//                   label="To"
//                   variant="outlined"
//                   type='date'
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <Button variant='contained' color='primary' fullWidth>View</Button>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Button variant='contained' color='primary' fullWidth>Print</Button>
//               </Grid>

//               {/* Table in Right Section */}
//               <Grid item xs={12}>
//                 <TableContainer component={Paper} sx={{ border: '1px solid #ddd', borderRadius: '8px', overflowX: 'auto', mt: 2 }}>
//                   <Table size="small" aria-label="collection booking table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell>SlNo</TableCell>
//                         <TableCell>Bkg#</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Mobile</TableCell>
//                         <TableCell>Coll.Date</TableCell>
//                         <TableCell>Select</TableCell>
//                         <TableCell>Set.SlNo</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows.map((row, index) => (
//                         <TableRow key={index}>
//                           <TableCell>{row.slNo}</TableCell>
//                           <TableCell>{row.bkgNo}</TableCell>
//                           <TableCell>{row.name}</TableCell>
//                           <TableCell>{row.mobile}</TableCell>
//                           <TableCell>{row.collDate}</TableCell>
//                           <TableCell>
//                             <Checkbox
//                               checked={selectedRows.includes(row.slNo)}
//                               onChange={handleSelectRow(row.slNo)}
//                             />
//                           </TableCell>
//                           <TableCell>{row.slNo}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default HomeCollection;

