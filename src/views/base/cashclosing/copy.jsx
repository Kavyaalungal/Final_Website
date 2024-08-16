// import React from 'react';
// import { Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box,TextareaAutosize } from '@mui/material';

// function CashClosingForm() {
//   return (
// <>
      
//       <Grid container spacing={2}>
        
//         {/* Transaction Details */}
//         <Grid item xs={12}>
//         {/* <Typography variant="h6" sx={{ color: '#fff',backgroundColor:'#3095E5', fontWeight: 'bold', marginBottom: '10px',marginRight:'5px' }}>
//   Transaction Details
// </Typography> */}
// <Typography>Transaction Details</Typography>

//         </Grid>
//         <Grid item xs={6} sm={6}>
//           <TextField label="Collection1" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6} sm={2}>
//           <Button variant='contained' color='primary'>open</Button>
//         </Grid>
//         <Grid item xs={6} sm={4}>
//           <TextField  type='datetime-local' fullWidth size="small" />
//         </Grid>
//         {/* <Grid item xs={6} sm={2}>
//           <TextField type='date' fullWidth size="small" />
//         </Grid> */}
//         <Grid item xs={6}>
//           <TextField label="Collection2" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="User Info" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Payments" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Receipts"  fullWidth size="small"  />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Office Amount" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Total" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <FormControlLabel control={<Checkbox />} label="Print all Closing" />
//         </Grid>
        
//         {/* Denomination Details */}
//         <Grid item xs={12}>
//           <Typography variant="h6">Denomination Details</Typography>
//         </Grid>
//         {/* {[2000, 1000, 500, 200, 100, 50, 20, 10, 5, "Coins"].map((denomination) => (
//           <Grid item xs={6} key={denomination}>
//             <TextField label={denomination + " X"} fullWidth size="small" />
//           </Grid>
//         ))} */}
//         <Grid item xs={6}>
//           <TextField label="2000 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="To Office" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="1000 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Balance" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="500 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Excess Amount" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="100 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Short Amount" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="50 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
       
//           <TextareaAutosize
//           minRows={0}
//           maxRows={1}
//           style={{width:'100%',padding:'8px',borderRadius:'4px',borderColor:'#ccc',borderWidth:'1px',borderStyle:'solid'}}
//           placeholder='Narration'
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="20 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           {/* <TextField label="Note" fullWidth multiline rows={4} size="small" /> */}
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="10 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           {/* <TextField label="Note" fullWidth multiline rows={4} size="small" /> */}
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="5 X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           {/* <TextField label="Note" fullWidth multiline rows={4} size="small" /> */}
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Coins X" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={6}>
//           {/* <TextField label="Note" fullWidth multiline rows={4} size="small" /> */}
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Total" fullWidth size="small" />
//         </Grid>
//         {/* <Grid item xs={6}>
//           <TextField label="Note" fullWidth multiline rows={4} size="small" />
//         </Grid> */}
      
      
        
//         {/* Buttons */}
//         <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   // onClick={handleSaveOrUpdate}
//                   sx={{ marginTop: 2, marginLeft: 2 }}
//                 >
//                   New
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   // onClick={resetForm}
//                   sx={{ marginTop: 2, marginLeft: 2 }}
//                 >
//                   Previous
//                 </Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2, marginLeft:2}}
//                 >Next</Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2,marginLeft:2}}
//                 >Print</Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2,marginLeft:2}}
//                 >Save</Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginLeft:2,marginTop:2}}
//                 >Exit</Button>
//               </Grid>
//             </Grid>
//         {/* <Grid item xs={12} display="flex" justifyContent="flex-end" >
//           <Button variant="contained" color="primary">New</Button>
//           <Button variant="contained" color="primary">Previous</Button>
//           <Button variant="contained" color="primary">Next</Button>
//           <Button variant="contained" color="primary">Print</Button>
//           <Button variant="contained" color="primary">Save</Button>
//           <Button variant="contained" color="secondary">Exit</Button>
//         </Grid> */}
//       </Grid>
//     </>
//   );
// }

// export default CashClosingForm;


// import React from 'react';
// import { Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledTypography = styled(Typography)({
//   color: 'green',
//   fontWeight: 'bold',
//   marginBottom: '10px',
// });

// function createData(sno, transNo, name, amount) {
//   return { sno, transNo, name, amount };
// }

// const rows = [
//   createData(1, '001', 'John Doe', 150),
//   createData(2, '002', 'Jane Doe', 200),
//   createData(3, '003', 'Alice', 300),
// ];

// function CashClosingForm() {
//   return (
//     <>
//       <Typography variant="h5" align="center" gutterBottom>Cash Closing</Typography>
//       <Grid container spacing={2}>
//         {/* Left Side */}
//         <Grid item xs={12} md={6}>
//           {/* Transaction Details */}
//           <StyledTypography variant="h6">Transaction Details</StyledTypography>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField label="Collection1" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Collection2" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Payments" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Receipts" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Office Amount" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Total" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Date" type="date" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="User Info" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel control={<Checkbox />} label="Print all Closing" />
//             </Grid>
//           </Grid>

//           {/* Denomination Details */}
//           <StyledTypography variant="h6">Denomination Details</StyledTypography>
//           <Grid container spacing={2}>
//             {[2000, 1000, 500, 200, 100, 50, 20, 10, 5, "Coins"].map((denomination) => (
//               <Grid item xs={6} key={denomination}>
//                 <TextField label={denomination + " X"} fullWidth size="small" />
//               </Grid>
//             ))}
//             <Grid item xs={6}>
//               <TextField label="Total" fullWidth size="small" />
//             </Grid>
//           </Grid>

//           {/* Office Details */}
//           <StyledTypography variant="h6">Office Details</StyledTypography>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField label="To Office" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Balance" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Excess Amount" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Short Amount" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Note" fullWidth multiline rows={4} size="small" />
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Right Side */}
//         <Grid item xs={12} md={6}>
//           <Grid container spacing={2}>
//             {/* Invoice Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Invoice Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Coll.Amt</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Pending Collection */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Pending Collection</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Pend.Coll</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Payment Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Payment Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Paid</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Receipt Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Receipt Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Receipt</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Buttons */}
//         <Grid item xs={12} display="flex" justifyContent="space-between">
//           <Button variant="contained" color="primary">New</Button>
//           <Button variant="contained" color="primary">Previous</Button>
//           <Button variant="contained" color="primary">Next</Button>
//           <Button variant="contained" color="primary">Print</Button>
//           <Button variant="contained" color="primary">Save</Button>
//           <Button variant="contained" color="secondary">Exit</Button>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default CashClosingForm;




// import React, { useState } from 'react';
// import {
//   Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
// } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledTypography = styled(Typography)({
//   color: 'green',
//   fontWeight: 'bold',
//   marginBottom: '10px',
// });

// function createData(sno, transNo, name, amount) {
//   return { sno, transNo, name, amount };
// }

// const rows = [
//   createData(1, '001', 'John Doe', 150),
//   createData(2, '002', 'Jane Doe', 200),
//   createData(3, '003', 'Alice', 300),
// ];

// function CashClosingForm() {
//   const [radioValue, setRadioValue] = useState('allUser');

//   const handleRadioChange = (event) => {
//     setRadioValue(event.target.value);
//   };

//   return (
//     <>
//       {/* <Typography variant="h5" align="center" gutterBottom>Cash Closing</Typography> */}
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//         <StyledTypography variant="h6">Transaction Details</StyledTypography>
//         </Grid>
//         {/* Left Side */}
//         <Grid item xs={12} md={6}>
//           {/* Transaction Details */}
         
//           <Grid container spacing={2}>
//             <Grid item xs={4}>
//               <TextField 
//               id='collection1'
//               label="Collection1"
//                fullWidth 
//                size="small"
//                variant='outlined'
//                InputLabelProps={{style:{fontSize:'1rem'}}} />
//             </Grid>
//             <Grid item xs={4}>
//                 <Button variant='contained' color='primary'>Set Value</Button>
//               {/* <TextField label="Collection2" fullWidth size="small" /> */}
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//               id='datetime'
//               label="DateTime"
//               fullWidth 
//               type='datetime-local'
//               variant='outlined'
//               size="small"
//               InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
//                />
//              </Grid>
//             <Grid item xs={4}>
//               <TextField
//               id='collection2'
//                label="Collection2"
//                 fullWidth
//                 variant='outlined' 
//                 size="small" 
//                 InputLabelProps={{style:{fontSize:'1rem'}}}
//                 />
//             </Grid>
//             <Grid item xs={8}>
//               <TextField
//               id='userinfo'
//                label="User Info"
//                 fullWidth
//                 variant='outlined'
//                  size="small"
//                  InputLabelProps={{style:{fontSize:'1rem'}}}
//                  />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField 
//               id="payments"
//               label='Payments'
//                 fullWidth 
//                 size="small"
//                 variant='outlined'
//                  InputLabelProps={{ style:{fontSize:'1rem'} }} />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField 
//               id="receipts"
//               label='Receipts'
//                 fullWidth 
//                 size="small"
//                 variant='outlined'
//                  InputLabelProps={{ style:{fontSize:'1rem'} }} />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//               id='officeamount'
//                label="Office Amount"
//                 fullWidth
//                  size="small"
//                  variant='outlined'
//                  InputLabelProps={{style:{fontSize:'1rem'}}} />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//               id='total'
//                label="Total"
//                 fullWidth
//                  size="small"
//                  variant='outlined'
//                  InputLabelProps={{style:{fontSize:'1rem'}}} />
//             </Grid>
//             <Grid item xs={6}>
//               <FormControlLabel control={<Checkbox />} label="Print all Closing" />
//             </Grid>
//           </Grid>

//           {/* Denomination Details */}
//           <StyledTypography variant="h6">Denomination Details</StyledTypography>
//           <Grid container spacing={2} direction={'column'}>
//             {[2000, 1000, 500, 200, 100, 50, 20, 10, 5, "Coins"].map((denomination) => (
//               <Grid item xs={4} key={denomination}>
//                 <TextField label={denomination + " X"} fullWidth size="small" />
//               </Grid>
//             ))}
//             <Grid item xs={4}>
//               <TextField label="Total" fullWidth size="small" />
//             </Grid>
//           </Grid>

//           {/* Office Details */}
//           <StyledTypography variant="h6">Office Details</StyledTypography>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField label="To Office" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Balance" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Excess Amount" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Short Amount" fullWidth size="small" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Note" fullWidth multiline rows={4} size="small" />
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Right Side */}
//         <Grid item xs={12} md={6}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <FormControlLabel control={<Checkbox />} label="User wise" />
//               </Grid>
//               <Grid item xs={6}>
//               <FormControl component="fieldset">
//                 <RadioGroup row value={radioValue} onChange={handleRadioChange}>
//                 <FormControlLabel
//                       value="cheque"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">All user</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                    <FormControlLabel
//                       value="cheque"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Logged User</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                 </RadioGroup>
//               </FormControl>
              
//             </Grid>
//             <Grid item xs={8}>
//               <TextField label="TextField" fullWidth size="small" />
             
//               </Grid>
//               <Grid item xs={4}>
//              <Button variant='contained' color='primary'>Fetch</Button>
             
//               </Grid>
              

//             {/* Invoice Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Invoice Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Coll.Amt</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Pending Collection */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Pending Collection</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Pend.Coll</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Payment Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Payment Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Paid</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>

//             {/* Receipt Details */}
//             <Grid item xs={12}>
//               <StyledTypography variant="h6">Receipt Details</StyledTypography>
//               <TableContainer component={Paper}>
//                 <Table size="small">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>S.No</TableCell>
//                       <TableCell>Trans.No</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Receipt</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.sno}>
//                         <TableCell>{row.sno}</TableCell>
//                         <TableCell>{row.transNo}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.amount}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Buttons */}
      
//           <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
//               <Grid item>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   // onClick={handleSaveOrUpdate}
//                   sx={{ marginTop: 2, marginLeft: 2 }}
//                 >
//                   Fetch
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   // onClick={resetForm}
//                   sx={{ marginTop: 2, marginLeft: 2 }}
//                 >
//                   Print
//                 </Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2, marginLeft:2}}
//                 >New</Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2,marginLeft:2}}
//                 >Save</Button>
//                 <Button
//                 variant='contained'
//                 color='primary'
//                 sx={{marginTop:2,marginLeft:2}}
//                 >Exit</Button>
//               </Grid>
//             </Grid>
//       </Grid>
//     </>
//   );
// }

// export default CashClosingForm;



import React, { useState } from 'react';
import {
  Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  color: 'green',
  fontWeight: 'bold',
  marginBottom: '10px',
});

function createData(sno, transNo, name, amount) {
  return { sno, transNo, name, amount };
}

const rows = [
  createData(1, '001', 'John Doe', 150),
  createData(2, '002', 'Jane Doe', 200),
  createData(3, '003', 'Alice', 300),
];

function CashClosingForm() {
  const [radioValue, setRadioValue] = useState('allUser');
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledTypography variant="h6">Transaction Details</StyledTypography>
        </Grid>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField 
                id='collection1'
                label="Collection1"
                fullWidth 
                size="small"
                variant='outlined'
                InputLabelProps={{style:{fontSize:'1rem'}}} 
              />
            </Grid>
            <Grid item xs={4}>
              {!isChecked && (
                <Button variant='contained' color='primary'>Set Value</Button>
              )}
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='datetime'
                label="DateTime"
                fullWidth 
                type='datetime-local'
                variant='outlined'
                size="small"
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='collection2'
                label="Collection2"
                fullWidth
                variant='outlined' 
                size="small" 
                InputLabelProps={{style:{fontSize:'1rem'}}}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id='userinfo'
                label="User Info"
                fullWidth
                variant='outlined'
                size="small"
                InputLabelProps={{style:{fontSize:'1rem'}}}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="payments"
                label='Payments'
                fullWidth 
                size="small"
                variant='outlined'
                InputLabelProps={{ style:{fontSize:'1rem'} }} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                id="receipts"
                label='Receipts'
                fullWidth 
                size="small"
                variant='outlined'
                InputLabelProps={{ style:{fontSize:'1rem'} }} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='officeamount'
                label="Office Amount"
                fullWidth
                size="small"
                variant='outlined'
                InputLabelProps={{style:{fontSize:'1rem'}}} 
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='total'
                label="Total"
                fullWidth
                size="small"
                variant='outlined'
                InputLabelProps={{style:{fontSize:'1rem'}}} 
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction={'row'}>
  {/* Common Heading */}
  <Grid item xs={12}>
    <StyledTypography variant="h6" style={{marginTop:'20px'}}> Denomination Details</StyledTypography>
  </Grid>

  {/* Denomination Details */}
  <Grid item xs={6} container direction="column" spacing={2}>
    {/* <Grid item>
      <StyledTypography variant="h6">Denomination Details</StyledTypography>
    </Grid> */}
    {[2000, 1000, 500, 200, 100, 50, 20, 10, 5, "Coins"].map((denomination) => (
      <Grid item key={denomination}>
        <TextField label={denomination + " X"} fullWidth size="small" />
      </Grid>
    ))}
    <Grid item>
      <TextField label="Total" fullWidth size="small" />
    </Grid>
  </Grid>

  {/* Office Details */}
  <Grid item xs={6} container direction="column" spacing={2}>
    {/* <Grid item>
      <StyledTypography variant="h6">Office Details</StyledTypography>
    </Grid> */}
    <Grid item>
      <TextField label="To Office" fullWidth size="small" />
    </Grid>
    <Grid item>
      <TextField label="Balance" fullWidth size="small" />
    </Grid>
    <Grid item>
      <TextField label="Excess Amount" fullWidth size="small" />
    </Grid>
    <Grid item>
      <TextField label="Short Amount" fullWidth size="small" />
    </Grid>
    <Grid item>
      <TextField label="Note" fullWidth multiline rows={4} size="small" />
    </Grid>
  </Grid>
</Grid>


          {/* Denomination Details */}
          {/* <StyledTypography variant="h6">Denomination Details</StyledTypography>
          <Grid container spacing={2} direction={'column'}>
            {[2000, 1000, 500, 200, 100, 50, 20, 10, 5, "Coins"].map((denomination) => (
              <Grid item xs={4} key={denomination}>
                <TextField label={denomination + " X"} fullWidth size="small" />
              </Grid>
            ))}
            <Grid item xs={4}>
              <TextField label="Total" fullWidth size="small" />
            </Grid>
          </Grid> */}

          {/* Office Details */}
          {/* <StyledTypography variant="h6">Office Details</StyledTypography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="To Office" fullWidth size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Balance" fullWidth size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Excess Amount" fullWidth size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Short Amount" fullWidth size="small" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Note" fullWidth multiline rows={4} size="small" />
            </Grid>
          </Grid> */}
        </Grid>

        {/* Right Side */}
        
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="User wise" />
            </Grid>
            {isChecked && (
              <>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <RadioGroup row value={radioValue} onChange={handleRadioChange}>
                      <FormControlLabel
                        value="allUser"
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">All user</Typography>}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                      />
                      <FormControlLabel
                        value="loggedUser"
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">Logged User</Typography>}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <TextField label="TextField" fullWidth size="small" />
                </Grid>
                <Grid item xs={4}>
                  <Button variant='contained' color='primary'>Fetch</Button>
                </Grid>

                {/* Invoice Details */}
                <Grid item xs={12}>
                  <StyledTypography variant="h6">Invoice Details</StyledTypography>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Trans.No</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Coll.Amt</TableCell>
                
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
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
                  {/* <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>S.No</TableCell>
                          <TableCell>Trans.No</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Coll.Amt</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.sno}>
                            <TableCell>{row.sno}</TableCell>
                            <TableCell>{row.transNo}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                </Grid>

                {/* Pending Collection */}
                <Grid item xs={12}>
                  <StyledTypography variant="h6">Pending Collection</StyledTypography>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Trans.No</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Pend.Coll</TableCell>
                
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
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
                  {/* <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>S.No</TableCell>
                          <TableCell>Trans.No</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Pend.Coll</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.sno}>
                            <TableCell>{row.sno}</TableCell>
                            <TableCell>{row.transNo}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                </Grid>

                {/* Payment Details */}
                <Grid item xs={12}>
                  <StyledTypography variant="h6">Payment Details</StyledTypography>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Trans.No</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Paid</TableCell>
                
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
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
                  {/* <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>S.No</TableCell>
                          <TableCell>Trans.No</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Paid.Amt</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.sno}>
                            <TableCell>{row.sno}</TableCell>
                            <TableCell>{row.transNo}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                </Grid>

                {/* Pending Payments */}
                <Grid item xs={12}>
                  <StyledTypography variant="h6">Receipt Details</StyledTypography>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Trans.No</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Name</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Receipt</TableCell>
                
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
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
                  {/* <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>S.No</TableCell>
                          <TableCell>Trans.No</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Pend.Paid</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.sno}>
                            <TableCell>{row.sno}</TableCell>
                            <TableCell>{row.transNo}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CashClosingForm;
