import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Paper, TextField, Typography, FormControl, InputLabel, Select, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';

const PendingCollection = () => {
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [prefix, setPrefix] = useState('');
  const [gender, setGender] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const prefixToGender = { Mr: 'M', Mrs: 'F', Ms: 'F', Miss: 'F' };
    setGender(prefixToGender[prefix] || '');
  }, [prefix]);

  // Sample data for the table
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
    { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
    { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
    { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
  ];
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
                  id="labno"
                  label="Lab No"
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
                  fullWidth
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
                  id='dd'
                  label='Age DD'
                  variant='outlined'
                  size='small'
                  fullWidth
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
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="paymode"
                  label="Pay Mode"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="cardno"
                  label="Card No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="bank"
                  label="Bank"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="invamount"
                  label="Inv.Amount"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="curbalance"
                  label="Cur.Balance"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="collamount"
                  label="Coll.Amount"
                  variant="outlined"
                  size="small"
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
              </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                  id="notes"
                  label="Notes"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  rows={2}
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Right side - Table */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  id='dateFrom'
                  label='From'
                  variant='outlined'
                  size='small'
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="dateTo"
                  label="To"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4} container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item>
                  <Button
                    variant='contained'
                    sx={{backgroundColor:'#3095E5'}}>REFRESH</Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    sx={{backgroundColor:'#3095E5'}}>PRINT</Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <FormGroup row>
                      <FormControlLabel
                        label="Corporate"
                        labelPlacement='start'
                        control={
                          <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            name="corporate"
                          />
                        }
                      />
                      {isChecked && (
                        <Grid item>
                          <TextField
                            label="Input"
                            variant="outlined"
                            size='small'
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                            style={{ marginTop: '8px', marginLeft: '6px' }} 
                          />
                        </Grid>
                      )}
                    </FormGroup>
                  </FormControl>
                </Grid>
                
              </Grid>
              {/* Table */}

              <Grid item xs={12}>
             
                           <TableContainer component={Paper}>
                             <Table size="small" stickyHeader aria-label="sticky table">
                               <TableHead>
                                 <TableRow>
                                   <TableCell >SlNo</TableCell>
                                   <TableCell>Lab</TableCell>
                                   <TableCell>Date</TableCell>
                                   <TableCell>Name</TableCell>
                                   <TableCell>Balance</TableCell>
                                   <TableCell>Coroperate</TableCell>
                                   <TableCell>User</TableCell>
                                   <TableCell>View</TableCell>
                                 </TableRow>
                               </TableHead>
                               <TableBody>
                                 {rows.map((row) => (
                                   <TableRow key={row.id}>
                                     <TableCell>{row.id}</TableCell>
                                     <TableCell>{row.col1}</TableCell>
                                     <TableCell>{row.col2}</TableCell>
                                     <TableCell>{row.col3}</TableCell>
                                     <TableCell>{row.col4}</TableCell>
                                     <TableCell>{row.col5}</TableCell>
                                     <TableCell>{row.col6}</TableCell>
                                   <TableCell>{row.col7}</TableCell>
                                   <TableCell>{row.col8}</TableCell>
                                   
                                   </TableRow>
                                 ))}
                               </TableBody>
                             </Table>
                          </TableContainer>
                        </Grid>
              {/* <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Lab</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Date</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Name</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Balance</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Corporate</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>User</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>View</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.id}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col1}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col2}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col3}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col4}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col5}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col6}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginRight: 1,backgroundColor:'#3095E5' }}
            >Save</Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
            >New</Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
            >Exit</Button>
          </Grid>
        </Grid>
      </CCardBody>
    </>
  )
}
export default PendingCollection;


// import React, { useEffect, useState } from 'react';
// import { Container, Button, Grid, Paper, TextField, Typography, FormControl, InputLabel, Select, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
// import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';

// const PendingCollection = () => {
//   const [error, setError] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [prefix, setPrefix] = useState('');
//   const [gender, setGender] = useState('');

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   useEffect(() => {
//     const prefixToGender = { Mr: 'M', Mrs: 'F', Ms: 'F', Miss: 'F' };
//     setGender(prefixToGender[prefix] || '');
//   }, [prefix]);

//   // Sample data for the table
//   const rows = [
//     { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
//     { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
//     { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
//     { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
//   ];
//   return (
//     <>
//       <CCardBody>
//         {/* Form and Table */}
//         <Grid container spacing={2}>
//           {/* Left side - Form */}
//           <Grid item xs={12}>
//             <Grid container spacing={2}>
//               {/* Error Message */}
//               {error && (
//                 <Grid item xs={12}>
//                   <Typography variant="body2" color="error">{error}</Typography>
//                 </Grid>
//               )}
//               {/* Form Fields */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="labno"
//                   label="Lab No"
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
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={3}>
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
//                 <TextField
//                   id="yyyy"
//                   label="Age YY"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <TextField
//                   id="mm"
//                   label="Age MM"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <TextField
//                   id='dd'
//                   label='Age DD'
//                   variant='outlined'
//                   size='small'
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={3}>
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
//                   id="phone1"
//                   label="Phone1"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
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
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="paymode"
//                   label="Pay Mode"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="cardno"
//                   label="Card No"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="bank"
//                   label="Bank"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="invamount"
//                   label="Inv.Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="curbalance"
//                   label="Cur.Balance"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="collamount"
//                   label="Coll.Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="colldatetime"
//                   label="Coll.DateTime"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//             <Grid item xs={12} sm={12}>
//                 <TextField
//                   id="notes"
//                   label="Notes"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   multiline
//                   rows={2}
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//           {/* Right side - Table */}
//           <Grid item xs={12} >
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id='dateFrom'
//                   label='From'
//                   variant='outlined'
//                   size='small'
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   id="dateTo"
//                   label="To"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '1rem' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={4} container alignItems="center" justifyContent="flex-start" spacing={1}>
//                 <Grid item>
//                   <Button
//                     variant='contained'
//                     color="primary">REFRESH</Button>
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     variant='contained'
//                     color="primary">PRINT</Button>
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <FormControl component="fieldset" fullWidth>
//                     <FormGroup row>
//                       <FormControlLabel
//                         label="Corporate"
//                         labelPlacement='start'
//                         control={
//                           <Checkbox
//                             checked={isChecked}
//                             onChange={handleCheckboxChange}
//                             name="corporate"
//                           />
//                         }
//                       />
//                       {isChecked && (
//                         <Grid item>
//                           <TextField
//                             label="Input"
//                             variant="outlined"
//                             size='small'
//                             InputLabelProps={{ style: { fontSize: '1rem' } }}
//                             style={{ marginTop: '8px', marginLeft: '6px' }} 
//                           />
//                         </Grid>
//                       )}
//                     </FormGroup>
//                   </FormControl>
//                 </Grid>
//               </Grid>
//               {/* Table */}
//               <Grid item xs={12}>
             
//              <TableContainer component={Paper}>
//                <Table size="small">
//                  <TableHead>
//                    <TableRow>
//                      <TableCell >SlNo</TableCell>
//                      <TableCell>Lab</TableCell>
//                      <TableCell>Date</TableCell>
//                      <TableCell>Name</TableCell>
//                      <TableCell>Balance</TableCell>
//                      <TableCell>Coroperate</TableCell>
//                      <TableCell>User</TableCell>
//                      <TableCell>View</TableCell>
//                    </TableRow>
//                  </TableHead>
//                  <TableBody>
//                    {rows.map((row) => (
//                      <TableRow key={row.id}>
//                        <TableCell>{row.col1}</TableCell>
//                        <TableCell>{row.col2}</TableCell>
//                        <TableCell>{row.col3}</TableCell>
//                        <TableCell>{row.col4}</TableCell>
//                        <TableCell>{row.col5}</TableCell>
//                        <TableCell>{row.col6}</TableCell>
//                        <TableCell>{row.col7}</TableCell>
//                        <TableCell>{row.col8}</TableCell>
                      
//                      </TableRow>
//                    ))}
//                  </TableBody>
//                </Table>
//              </TableContainer>
//            </Grid>
//               {/* <Grid item xs={12}>
//                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>Lab</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>Date</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>Name</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>Balance</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>Corporate</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>User</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: ' #3095E5', fontSize: '1rem', padding: '8px' }}>View</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows.map((row) => (
//                         <TableRow key={row.id}>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.id}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col1}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col2}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col3}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col4}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col5}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col6}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Grid> */}
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: 2, marginRight: 1 }}
//             >Save</Button>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: 2, marginLeft: 2 }}
//             >New</Button>
//             <Button
//               variant='contained'
//               color='primary'
//               sx={{ marginTop: 2, marginLeft: 2 }}
//             >Exit</Button>
//           </Grid>
//         </Grid>
//       </CCardBody>
//     </>
//   )
// }
// export default PendingCollection;