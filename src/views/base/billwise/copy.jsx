// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   Box,
//   Container,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Stack
// } from '@mui/material';
// import { CButton,CCard } from '@coreui/react';



// const Bill = () => {
//   const [collectionType, setCollectionType] = useState('lab');
//   const rows = [
//     { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
//     { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
//     { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
//     { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
//   ];

//   return (
//      <CCard className="mb-4">
//     <Box display="flex" justifyContent="center" alignItems="center" height="100vh" padding="16px">
//       <Container component="main" maxWidth="md" className="mb-4 mt-2 ">
//         <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
//           <Box sx={{ padding: 2 }}>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} md={8}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     margin: 0,
//                     fontSize: '24px',
//                     fontWeight: 'bold',
//                     color: '#599eb4',
//                   }}
//                 >
//                   BILL WISE COLLECTION
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <Stack
//                   direction={{ xs: 'column', md: 'row' }}
//                   spacing={2}
//                   justifyContent={{ xs: 'center', md: 'flex-end' }}
//                 >
//                   <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                     FETCH
//                   </CButton>
//                   <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                     PRINT
//                   </CButton>
//                   <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                     NEW
//                   </CButton>
//                   <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                     SAVE
//                   </CButton>
//                   <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                     EXIT
//                   </CButton>
//                 </Stack>
//               </Grid>
//             </Grid>
//           </Box>
//           <hr />
//           <Grid container spacing={2}>
//             <Grid item xs={6} sm={6} md={6}>
//               <FormControl component="fieldset">
//                 <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                   <FormControlLabel
//                     value="lab"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">Lab Collection</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                   <FormControlLabel
//                     value="purchase"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">Purchase</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                   <FormControlLabel
//                     value="pharmacy"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">Pharmacy Collection</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>

//             <Grid item xs={6} sm={6} md={6}>
//               <FormControl component="fieldset">
//                 <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                   <FormControlLabel
//                     value="cash"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">Cash</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                   <FormControlLabel
//                     value="cheque"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">Cheque</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                   <FormControlLabel
//                     value="bhim"
//                     control={<Radio size="small" />}
//                     label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
//                     sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                   />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 id="corporate"
//                 label="Corporate"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}></Grid>

//             <Grid item xs={12} md={3}>
//               <TextField
//                 id="from"
//                 label="FromDate"
//                 type="date"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//               />
//             </Grid>

//             <Grid item xs={12} md={9}></Grid>
//             <Grid item xs={12} md={3}>
//               <TextField
//                 id="out"
//                 label="Out"
//                 type="date"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} md={3}>
//               <TextField
//                 id="date"
//                 label="Date"
//                 type="date"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
         
//             </Grid>
//             <Grid item xs={12} md={3}>
//                      <TextField
//                 id="amount"
//                 label="Amount"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//             </Grid>
//             <Grid item xs={12} md={3}>
//             <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                     Allocate
//                   </CButton>      
//             </Grid>
//             <Grid item xs={12}>
//               <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Select</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Patient</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Amount</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Balance</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Allocated.Amt</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Current.Bal</TableCell>
//                     </TableRow>
//             </TableHead>
                  
                    
                      
                        
                        
                        
                        
                        
      

// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   Box,
//   Container,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Stack
// } from '@mui/material';
// import { CButton, CCard } from '@coreui/react';

// const Bill = () => {
//   const [collectionType, setCollectionType] = useState('lab');
//   const rows = [
//     { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
//     { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
//     { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
//     { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
//   ];

//   return (
//     <CCard className="mb-4">
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding="16px">
//         <Container component="main" maxWidth="lg">
//           <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
//             <Box sx={{ padding: 2 }}>
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={12} md={8}>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       margin: 0,
//                       fontSize: '24px',
//                       fontWeight: 'bold',
//                       color: '#599eb4',
//                     }}
//                   >
//                     BILL WISE COLLECTION
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                   <Stack
//                     direction={{ xs: 'column', md: 'row' }}
//                     spacing={2}
//                     justifyContent={{ xs: 'center', md: 'flex-end' }}
//                   >
//                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                       FETCH
//                     </CButton>
//                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                       PRINT
//                     </CButton>
//                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                       NEW
//                     </CButton>
//                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                       SAVE
//                     </CButton>
//                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                       EXIT
//                     </CButton>
//                   </Stack>
//                 </Grid>
//               </Grid>
//             </Box>
//             <hr />
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <FormControl component="fieldset">
//                   <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                     <FormControlLabel
//                       value="lab"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Lab Collection</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="purchase"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Purchase</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="pharmacy"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Pharmacy Collection</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <FormControl component="fieldset">
//                   <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                     <FormControlLabel
//                       value="cash"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Cash</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="cheque"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">Cheque</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                     <FormControlLabel
//                       value="bhim"
//                       control={<Radio size="small" />}
//                       label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
//                       sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={12} md={4}>
//                 <TextField
//                   id="corporate"
//                   label="Corporate"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   id="from"
//                   label="From Date"
//                   type="date"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   id="out"
//                   label="Out"
//                   type="date"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   id="date"
//                   label="Date"
//                   type="date"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={3}>
//                 <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   Allocate
//                 </CButton>
//               </Grid>
//               <Grid item xs={12}>
//                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Select</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Patient</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Amount</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Balance</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Allocated.Amt</TableCell>
//                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Current.Bal</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows.map((row) => (
//                         <TableRow key={row.id}>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.id}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col1}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col2}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col3}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col4}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col5}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col6}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
//                           <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Container>
//       </Box>
//     </CCard>
//   );
// };

// export default Bill;



import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Paper,
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  IconButton,
  Button
} from '@mui/material';
import { CButton, CCard, CCardBody } from '@coreui/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Bill = () => {
  const [collectionType, setCollectionType] = useState('lab');
  const [documentType, setDocumentType] = useState('cash')
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
    { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
    { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
    { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
  ];

  return (
    // <CCard className="mb-4">
    <CCardBody>
    {/* <Box sx={{ padding: 2 }}>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} md={8}>
      <Typography
        variant="h6"
        sx={{
          margin: 0,
          fontSize: '24px',
          fontWeight: 'bold',
          color: ' #599eb4 ',
        }}
      >
        BILL WISE COLLECTION
      </Typography>
    </Grid>
    <Grid item xs={12} md={4}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: { xs: 'center', md: 'flex-end' }, 
          gap: '16px' 
        }}
      >
        <CButton
          color="primary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          FETCH
        </CButton>
        <CButton
          color="secondary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          PRINT
        </CButton>
        <CButton
          color="primary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          NEW
        </CButton>
        <CButton
          color="secondary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          SAVE
        </CButton>
        <CButton
          color="primary"
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          EXIT
        </CButton>
      </Box>
    </Grid>
  </Grid>
</Box>


      <hr/> */}
      {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding="16px"> */}
        {/* <Container component="main" maxWidth="md" className=""> */}
          {/* <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}> */}
          {/* <Box sx={{ padding: 2 }}> */}
              {/* <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    sx={{
                      margin: 0,
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#599eb4',
                    }}
                  >
                    BILL COLLECTION
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    alignItems={{ xs: 'column', md: 'flex-end' }}
                  >
                    <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
                      FETCH
                    </CButton>
                    <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
                      PRINT
                    </CButton>
                    <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
                      NEW
                    </CButton>
                    <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
                      SAVE
                    </CButton>
                    <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
                      EXIT
                    </CButton>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <hr /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
                    <FormControlLabel
                      value="lab"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">LabCollection</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="purchase"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Purchase</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="pharmacy"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Pharmacy</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
                    <FormControlLabel
                      value="cash"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Cash</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="cheque"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Cheque</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="bhim"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="corporate"
                  label="Corporate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <IconButton color="primary">
              <MoreHorizIcon />
            </IconButton>

              <Grid item xs={12} md={3}>
                <TextField
                  id="from"
                  label="FromDate"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  id="out"
                  label="Out"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="amount"
                  label="Amount"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
              <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  // sx={{ marginTop: 2, marginLeft: 2 }}
                >
                  Allocate
                </Button>
                {/* <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                  Allocate
                </CButton> */}
              </Grid>
              <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Lab</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Date</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Select</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Patient</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Amount</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Balance</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Allocated.Amt</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding:'8px' }}>Current.Bal</TableCell>
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
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleSaveOrUpdate}
                  sx={{ marginTop: 2, marginLeft: 2 }}
                >
                  Fetch
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  sx={{ marginTop: 2, marginLeft: 2 }}
                >
                  Print
                </Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2, marginLeft:2}}
                >New</Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2}}
                >Save</Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2}}
                >Exit</Button>
              </Grid>
            </Grid>
          {/* </Paper> */}
        {/* </Container> */}
      {/* </Box> */}
      </CCardBody>
    //  </CCard>
  );
};

export default Bill;

