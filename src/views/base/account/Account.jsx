// import React from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   FormControlLabel,
//   FormControl,
//   InputLabel,
//   Select,
//   Checkbox,
//   Grid,
//   Typography,
//   Paper,
//   MenuItem,
//   IconButton,
// } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { CButton, CCard } from '@coreui/react';

// const Account = () => {
//   return (
//     <>
//      {/* <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, margin: 'auto',marginBottom:'30px' }}> */}
//       <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={8}>
//           <Typography
//             variant="h6"
//             sx={{
//               margin: 0,
//               fontSize: '24px',
//               fontWeight: 'bold',
//               color: ' #599eb4 ',
//             }}
//           >
//             CANCEL INVOICE
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//             <CButton
//             color='primary'
//             style={{
//                 width:'100%',
//                 maxWidth:{xs:'100%', sm: 'auto'},
//             }}
//             >
//                 NEW
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               SAVE
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               EXIT
//             </CButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//             <hr/>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//             <IconButton color="primary">
//               <MoreHorizIcon />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//             <IconButton color="primary">
//               <MoreHorizIcon />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//             <IconButton color="primary">
//               <MoreHorizIcon />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//             <IconButton color="primary">
//               <MoreHorizIcon />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//             <IconButton color="primary">
//               <MoreHorizIcon />
//             </IconButton>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControlLabel control={<Checkbox />} label="Avoid Letter Head" />
//         </Grid>
//         <Grid item xs={3} sm={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={3}>
//                  <FormControl variant="outlined" size="small" fullWidth>
//                    <InputLabel id="genderLabel"></InputLabel>
//                    <Select
//                      labelId="genderLabel"
//                      id="gender"
//                      label="Gender"
//                    >
//                      {/* <MenuItem value=""><em>JEEVA</em></MenuItem> */}
//                      <MenuItem value="M">Male</MenuItem>
//                      <MenuItem value="F">Female</MenuItem>
//                      <MenuItem value="O">Other</MenuItem>
//                    </Select>
//                  </FormControl>
//                </Grid>
//                <Grid item xs={3}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//           </Box>
//         </Grid>
//         <Grid item xs={3}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <TextField
//                   id="amount"
//                   label="Amount"
//                   variant="outlined"
//                   size="small"
//                   fullWidth
//                   InputLabelProps={{ style: { fontSize: '14px' } }}
//                 />
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12}>
//               <TextField
//                 id="reason"
//                 label="Reason"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//               multiline
//               rows={5}
//                 InputLabelProps={{ style: { fontSize: '16px' } }}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//           <TextField 
//           id='area'
//           label="Area"
//           fullWidth
//           variant="outlined"
//           size='small'
//           InputLabelProps={{style:{fontSize:'16px'}}}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//                  <FormControl variant="outlined" size="small" fullWidth>
//                    <InputLabel id="genderLabel"></InputLabel>
//                    <Select
//                      labelId="genderLabel"
//                      id="gender"
//                      label="Gender"
//                    >
//                      {/* <MenuItem value=""><em>JEEVA</em></MenuItem> */}
                      
                      
                      
//                    </Select>
  //                </FormControl>
    //            </Grid>

           
        
         
           
            
          
           
           
           
          
           
        
         
           
           
           
           
          
           
          
          
        
import React from 'react';
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  Grid,
  Typography,
  Paper,
  MenuItem,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CButton, CCard, CCardBody } from '@coreui/react';

const Account = () => {
  return (
    // <CCard className="mb-4">
      <CCardBody>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="ledger"
                label="Ledger Name"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="groupname"
                label="A/C Group Name"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="group"
                label="Group"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="customer"
                label="Customer Type"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="scheme"
                label="Scheme"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox />} label="Avoid Letter Head" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="openingbalance"
                label="Opening Balance"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel"></InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                label="Gender"
              >
                <MenuItem value="M">Male</MenuItem>
                <MenuItem value="F">Female</MenuItem>
                <MenuItem value="O">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
              id='creditdays' 
              label="Credit Days"
              fullWidth 
              variant="outlined"
              size='small'
              InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="creditlimit"
                label="Credit Limit"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              rows={5}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              id='area'
              label="Area"
              fullWidth
              variant="outlined"
              size='small'
              InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel">Mode</InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                label="Gender"
              >
                <MenuItem value="M">DIRECT</MenuItem>
                <MenuItem value="F">MOBILE</MenuItem>
                <MenuItem value="O">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='phone' 
              label="Phone"
              fullWidth 
              variant="outlined"
              size='small'
              InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='mobile' 
              label="Mobile"
              fullWidth 
              variant="outlined"
              size='small'
              InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='email'
              label="Email"
              fullWidth
              size='small'
              variant="outlined"
              InputLabelProps={{style:{fontSize:'1rem'}}} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel control={<Checkbox />} label="Email Report" />
            <FormControlLabel control={<Checkbox />} label="Is Active" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              id='discount'
              label="Discount%"
              fullWidth 
              variant="outlined"
              size='small'
              InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='test'
              label="TestDiscount%"
              fullWidth
              variant='outlined'
              size='small'
              InputLabelProps={{style: { fontSize:'1rem'}}}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl variant='outlined' size='small' fullWidth>
              <InputLabel id="payment">Pay Mode</InputLabel>
              <Select
                labelId='payment'
                id='payment'
                label="Pay Mode" 
              >
                <MenuItem value='cash'>Cash</MenuItem>
                <MenuItem value='UPI'>UPI</MenuItem>
                <MenuItem value='Netbanking'>Net Banking</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description' 
              label="Description" 
              fullWidth 
              multiline 
              rows={5} 
              variant="outlined"
              size='small'
              InputLabelProps={{style: {fontSize:'1rem'}}}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleSaveOrUpdate}
                  sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
                >
                  New
                </Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2, marginLeft:2,backgroundColor:'#3095E5'}}
                >Exit</Button>
              </Grid>
            </Grid>
      </CCardBody>
    // </CCard>
  );
};

export default Account;

