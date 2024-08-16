import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Paper, TextField, Typography, FormControl,FormControlLabel,Checkbox, InputLabel, Select, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box, FormGroup, RadioGroup, Radio, } from '@mui/material';
import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const HomeCollection = () => {
  const [error, setError] = useState('');
 
  const [prefix, setPrefix] = useState('');
  const [gender, setGender] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  

  // Sample data for the table
  const rows = [
    { slNo: 1, bkgNo: '12499', name: 'FR XAVIER SAJAN', mobile: '9020610322', collDate: '07-Aug-2024 06:25:25 AM' },
    { slNo: 2, bkgNo: '12500', name: 'MA JYOTHIRMAYI', mobile: '9747786796', collDate: '07-Aug-2024 06:32:15 AM' },
    // Add more rows as needed
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
        {/* Form and Table */}
        <Grid container spacing={2}>
          {/* Left side - Form */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Error Message */}
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="error">{error}</Typography>
                </Grid>
              )}
              {/* Form Fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="bookno"
                  label="Book No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                  id="dateTime"
                  label="Date/Time"
                  variant="outlined"
                  size="small"
                  type='datetime-local'
                  fullWidth
                  InputLabelProps={{ shrink:true,style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="id"
                  label="Patient ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
             
              <Grid item xs={12} sm={9}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' color='primary'>Search</Button>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   multiline
                //   rows={3}
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
               <Grid item xs={12} sm={3}>
                <TextField
                  select
                  label="Prefix"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   multiline
                //   rows={3}
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="yyyy"
                  label="Age YY"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="mm"
                  label="Age MM"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id='dd'
                  label='Age DD'
                  variant='outlined'
                  size='small'
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
           
              <Grid item xs={12} sm={12}>
                <TextField
                  id="landmark"
                  label="Landmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
        <TextField
          id="map"
          label="Map URL"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={6} sm={2} textAlign="center">
        <LocationOnIcon fontSize="large"  style={{ color: 'red' }}  />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button variant='contained' color='primary'>
          Map Search
        </Button>
      </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="colldate"
                  label="Coll.Date"
                  variant="outlined"
                  type='datetime-local'
                  size="small"
                  fullWidth
                  InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Bkg.Through"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
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
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id='phone'
                  label="Phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                 
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="driver"
                  label="Driver"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="takenby"
                  label="TakenBy"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Sample Mode"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  id="abhaid"
                  label="ABHA ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
            <FormControlLabel control={<Checkbox />} label="Urgent" />
            <FormControlLabel control={<Checkbox />} label="Covid19 Sample" />
          </Grid>
          <Grid item xs={12}>
          <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
     
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          {/* <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell> */}
                          
                        </TableRow>
                      
                      {/* {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.id}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col1}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col2}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col3}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col4}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col5}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col6}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={15} />
                </Box>
          
              </Grid>
          
      {/* Multiline TextField */}
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

      {/* Three TextFields arranged in a column */}
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

      {/* Single TextField */}
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
    
      
      <Grid item xs={12} sm={2}>
        <FormControlLabel control={<Checkbox />} label="Cancel" />
      </Grid>

     
      <Grid item xs={12} sm={10}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              New
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Exit
            </Button>
          </Grid>
        </Grid>
      </Grid>
  
      {/* <Grid item xs={12} sm={2}>
      <FormControlLabel control={<Checkbox />} label="Urgent" />
      
      </Grid>
      
      
      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginRight: 1 }}
            >Save</Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: 2 }}
            >New</Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: 2, marginLeft: 2 }}
            >Exit</Button>
          </Grid>
        </Grid> */}

    
      
   
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  id="collamount"
                  label="Coll.Amount"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="colldatetime"
                  label="Coll.DateTime"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid> */}
            
            </Grid>
          </Grid>
          {/* Right side - Table */}
          <Grid item xs={12} sm={6}>
  <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', p: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Box sx={{ mb: 2 }}>
          <FormControl component="fieldset">
            <RadioGroup row>
              <FormControlLabel
                value="cash"
                control={<Radio size="small" />}
                label={<Typography variant="body2">Entry Date</Typography>}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
              />
              <FormControlLabel
                value="cheque"
                control={<Radio size="small" />}
                label={<Typography variant="body2">Exit Date</Typography>}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>

      <Grid item xs={12} sm={3}>
        <TextField
          id='dateFrom'
          label='From'
          variant='outlined'
          size='small'
          type='date'
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          id="dateTo"
          label="To"
          variant="outlined"
          type='date'
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button variant='contained' color='primary' fullWidth>View</Button>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button variant='contained' color='primary' fullWidth>Print</Button>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Button variant='contained' color='primary' fullWidth>Set print</Button>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="area"
          label="Area"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControlLabel control={<Checkbox />} label="Select all"
         checked={selectAll}
         onChange={handleSelectAll} />
      </Grid>
      <Grid item xs={12} sm={7}>
        <TextField
          id="driver"
          label="Driver"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant='contained' color='primary' fullWidth>Update</Button>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} sx={{ border: '1px solid #ddd', borderRadius: '8px', overflowX: 'auto', mt: 2 }}>
          <Table size="small" aria-label="collection booking table">
            <TableHead>
              <TableRow>
                <TableCell>SlNo</TableCell>
                <TableCell>Bkg#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Coll.Date</TableCell>
                <TableCell>Sel</TableCell>
                <TableCell>Set.SlNo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.slNo}</TableCell>
                  <TableCell>{row.bkgNo}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.collDate}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(row.slNo)}
                      onChange={() => handleSelectRow(row.slNo)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  </Box>
</Grid> 
{/* <Grid item xs={12} sm={6}>
            <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12}>
                    <Box sx={{ mb: 2 }}>
                        <FormControl component="fieldset">
                            <RadioGroup row >
                                <FormControlLabel
                                    value="cash"
                                    control={<Radio size="small" />}
                                    label={<Typography variant="body2">Entry Date</Typography>}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                                />
                                <FormControlLabel
                                    value="cheque"
                                    control={<Radio size="small" />}
                                    label={<Typography variant="body2">Exit Date</Typography>}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  id='dateFrom'
                  label='From'
                  variant='outlined'
                  size='small'
                  type='date'
                  fullWidth
                  InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="dateTo"
                  label="To"
                  variant="outlined"
                  type='date'
                  size="small"
                  fullWidth
                  InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant='contained' color='primary'>View</Button>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant='contained' color='primary'>Print</Button>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant='contained' color='primary'>Setprint</Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
        <FormControlLabel control={<Checkbox />} label="Select all"
          checked={selectAll}
          onChange={handleSelectAll} />
      </Grid>
      <Grid item xs={12} sm={7}>
                <TextField
                  id="driver"
                  label="Driver"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button variant='contained' color='primary'>Update</Button>
              </Grid>
            

              <Grid item xs={12}>
              <TableContainer component={Paper}>
      <Table size="small" aria-label="collection booking table">
        <TableHead>
          <TableRow>
            <TableCell>SlNo</TableCell>
            <TableCell>Bkg#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Coll.Date</TableCell>
            <TableCell>Sel</TableCell>
            <TableCell>Set.SlNo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.slNo}</TableCell>
              <TableCell>{row.bkgNo}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.collDate}</TableCell>
              <TableCell>
                <Checkbox 
                 checked={selectedRows.includes(row.slNo)}
                 onChange={handleSelectRow(row.slNo)}/>
              </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             
                         
                        </Grid>
              
            </Grid>
          </Grid>
         */}
               
         
        </Grid>
      
      </CCardBody>
    </>
  )
}
export default HomeCollection;


// import { CCardBody } from '@coreui/react'
// import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// function Driver() {
//     const [labno, setLabno] = useState('Lab Collection')
//     const [method, setMethod] = useState('cash')
//     const[showCheque,setShowCheque] = useState(false)
    

//     const handleRadioChange = (e) => {
//       const selectedMethod = e.target.value;
//       setMethod(selectedMethod);
//       setShowCheque(selectedMethod === 'cheque');
//   };

//   return (
//     <CCardBody>
//         <Grid container spacing={2}>
//         <Grid item xs={12} md={4}>
//   <Box sx={{ mb: 2 }}> {/* Margin bottom to create space */}
//     <FormControl component="fieldset">
//       <RadioGroup row value={method} onChange={handleRadioChange}>
//         <FormControlLabel
//           value="cash"
//           control={<Radio size="small" />}
//           label={<Typography variant="body2">Entry Date</Typography>}
//           sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//         />
//         <FormControlLabel
//           value="cheque"
//           control={<Radio size="small" />}
//           label={<Typography variant="body2">Exit Date</Typography>}
//           sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//         />
//       </RadioGroup>
//     </FormControl>
//   </Box>

//   <Grid container spacing={2}>
//     <Grid item xs={4}>
//       <TextField
//         id='from'
//         label="From"
//         fullWidth
//         type='date'
//         variant='outlined'
//         size="small"
//         InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//       />
//     </Grid>
//     <Grid item xs={4}>
//       <TextField
//         id='to'
//         label="To"
//         fullWidth
//         type='date'
//         variant='outlined'
//         size="small"
//         InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//       />
//     </Grid>
//     <Grid item xs={4}>
//       <Button variant='contained' color='primary'>View</Button>
//     </Grid>
//     <Grid item xs={12}>
//                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>SlNo</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', }}>Lab</TableCell>
                       
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         <TableRow>
                         
//                         </TableRow>
                      
                     
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <Box mt={50} />
               
//               </Grid>
//   </Grid>

    
// </Grid>

            



//             <Grid item xs={12} md={8}>
//                 <Box sx={{border:'1px solid #ddd',padding:'10px',marginBottom:'10px'}}>
//                 <Grid item xs={12}>
//                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
//                         <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Patient</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Amount</TableCell>
//                         <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Balance</TableCell>
                       
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         <TableRow>
                         
//                         </TableRow>
                      
                     
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <Box mt={50} />
               
//               </Grid>
    
//                 </Box>
               
//             </Grid>
          

    
//         </Grid>
//     </CCardBody>
//   )
// }

// export default Driver;


// import { CCardBody } from '@coreui/react';
// import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';


// function Driver() {
//     const [method, setMethod] = useState('cash');
    

//     const handleRadioChange = (e) => {
//         const selectedMethod = e.target.value;
//         setMethod(selectedMethod);
//     };

//     return (
//         <CCardBody>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={4}>
//                     <Box sx={{ mb: 2 }}> {/* Margin bottom to create space */}
//                         <FormControl component="fieldset">
//                             <RadioGroup row value={method} onChange={handleRadioChange}>
//                                 <FormControlLabel
//                                     value="cash"
//                                     control={<Radio size="small" />}
//                                     label={<Typography variant="body2">Entry Date</Typography>}
//                                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                                 />
//                                 <FormControlLabel
//                                     value="cheque"
//                                     control={<Radio size="small" />}
//                                     label={<Typography variant="body2">Exit Date</Typography>}
//                                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                                 />
//                             </RadioGroup>
//                         </FormControl>
//                     </Box>

//                     <Grid container spacing={2}>
//                         <Grid item xs={4}>
//                             <TextField
//                                 id='from'
//                                 label="From"
//                                 fullWidth
//                                 type='date'
//                                 variant='outlined'
//                                 size="small"
//                                 InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                             />
//                         </Grid>
//                         <Grid item xs={4}>
//                             <TextField
//                                 id='to'
//                                 label="To"
//                                 fullWidth
//                                 type='date'
//                                 variant='outlined'
//                                 size="small"
//                                 InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                             />
//                         </Grid>
//                         <Grid item xs={4}>
//                             <Button variant='contained' color='primary'>View</Button>
//                         </Grid>
                       
                        
//                     </Grid>
//                     <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px',marginTop:'10px' }}>
//                         <Grid container spacing={2}>
//                         <Grid item xs={12}>
                       
                      
//                             <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                                 <Table stickyHeader aria-label="sticky table">
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
//                                             <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>Lab</TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         <TableRow>
//                                             {/* Table content */}
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                             <Box mt={50} />
//                             </Grid>
//                             </Grid>
//                             </Box>
//                 </Grid>

//                 <Grid item xs={12} md={8}>
//                 <Box sx={{ mt:12 }}>
//                     <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                                     <Table stickyHeader aria-label="sticky table">
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Patient</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Amount</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Balance</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             <TableRow>
//                                                 {/* Table content */}
//                                             </TableRow>
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <Box mt={50} />
//                             </Grid>
//                         </Grid>
//                     </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </CCardBody>
//     );
// }

// export default Driver;


// import { CCardBody } from '@coreui/react';
// import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';

// function Driver() {
//     const [method, setMethod] = useState('cash');
//     const handleRadioChange = (e) => {
//         const selectedMethod = e.target.value;
//         setMethod(selectedMethod);
//     };

//     return (
//         <CCardBody>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <Box sx={{ mb: 2 }}>
//                         <FormControl component="fieldset">
//                             <RadioGroup row value={method} onChange={handleRadioChange}>
//                                 <FormControlLabel
//                                     value="cash"
//                                     control={<Radio size="small" />}
//                                     label={<Typography variant="body2">Entry Date</Typography>}
//                                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                                 />
//                                 <FormControlLabel
//                                     value="cheque"
//                                     control={<Radio size="small" />}
//                                     label={<Typography variant="body2">Exit Date</Typography>}
//                                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                                 />
//                             </RadioGroup>
//                         </FormControl>
//                     </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={4}>
//                             <TextField
//                                 id='from'
//                                 label="From"
//                                 fullWidth
//                                 type='date'
//                                 variant='outlined'
//                                 size="small"
//                                 InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={4}>
//                             <TextField
//                                 id='to'
//                                 label="To"
//                                 fullWidth
//                                 type='date'
//                                 variant='outlined'
//                                 size="small"
//                                 InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={4}>
//                             <Button variant='contained' color='primary' sx={{ height: '100%' }}>View</Button>
//                         </Grid>
//                     </Grid>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <Grid container spacing={2}>
//                         {/* Left Table */}
//                         <Grid item xs={12} md={4}>
//                             <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
//                                 <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                                     <Table stickyHeader aria-label="sticky table">
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>Driver Name</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             <TableRow>
//                                                 {/* Table content */}
//                                             </TableRow>
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <Box mt={50}/>
//                             </Box>
//                         </Grid>

//                         {/* Right Table */}
//                         <Grid item xs={12} md={8}>
//                             <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
//                                 <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                                     <Table stickyHeader aria-label="sticky table">
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>B.No</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Mobile</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Coll.Date</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Set.SlNo.</TableCell>
//                                                 <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Remove</TableCell>
//                                             </TableRow>
//                                         </TableHead>
//                                         <TableBody>
//                                             <TableRow>
//                                                 {/* Table content */}
//                                             </TableRow>
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <Box mt={50}/>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </CCardBody>
//     );
// }

// export default Driver;
