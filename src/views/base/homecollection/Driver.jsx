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


import { CCardBody } from '@coreui/react';
import { Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function Driver() {
    const [method, setMethod] = useState('cash');
    const handleRadioChange = (e) => {
        const selectedMethod = e.target.value;
        setMethod(selectedMethod);
    };

    return (
        <CCardBody>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ mb: 2 }}>
                        <FormControl component="fieldset">
                            <RadioGroup row value={method} onChange={handleRadioChange}>
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

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id='from'
                                label="From"
                                fullWidth
                                type='date'
                                variant='outlined'
                                size="small"
                                InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id='to'
                                label="To"
                                fullWidth
                                type='date'
                                variant='outlined'
                                size="small"
                                InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button variant='contained' sx={{ height: '100%',backgroundColor:'#3095E5' }}>View</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {/* Left Table */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                                <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px' }}>Driver Name</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                {/* Table content */}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box mt={50}/>
                            </Box>
                        </Grid>

                        {/* Right Table */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                                <TableContainer sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>B.No</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Mobile</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Coll.Date</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Set.SlNo.</TableCell>
                                                <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Remove</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                {/* Table content */}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box mt={50}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CCardBody>
    );
}

export default Driver;
