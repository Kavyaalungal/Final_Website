import React, { useState } from 'react';
import {
  TextField, Grid, FormControlLabel, Checkbox, Button,
  MenuItem, Select, InputLabel, Radio, RadioGroup, FormControl,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  AppBar, Toolbar, Typography, Box, Container, FormGroup
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react';

const PatientBill = () => {
  const [selectedView, setSelectedView] = useState('Bill View');
  const [collectionType, setCollectionType] = useState('lab');
  const rows = [
    { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
    { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
    { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
    { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
  ];

  const filterLabels = ['Result Issued', 'On Processing', 'Time Over', 'Cancelled Invoice', 'Half Verified', 'Time Over Reminder'];
  const handleViewChange = (event) => {
    setSelectedView(event.target.value);
  };
  const checkboxColors = ['#0073e6', '#ff9900', '#4caf50', '#f44336', '#9c27b0', '#ffc107'];
  return (
    <>
      <CCardBody>
        <Box p={2}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12}>
              <Grid item xs={12}>
                <FormGroup row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {filterLabels.map((label, index) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox sx={{ color: checkboxColors[index % checkboxColors.length] }} size="small" />}
                      label={label}
                      style={{ marginRight: '10px' }}
                    />
                  ))}

                </FormGroup>
              </Grid>
              <Grid container spacing={1} alignItems="center" style={{ marginTop: '10px' }}>
                <Grid item >
                  <FormControl component="fieldset">
                    <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
                      <FormControlLabel
                        value="lab"
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">Bill View</Typography>}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                      />
                      <FormControlLabel
                        value="purchase"
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">Result view</Typography>}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                      />
                      <FormControlLabel
                        value="pharmacy"
                        control={<Radio size="small" />}
                        label={<Typography variant="body2">Track</Typography>}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel"></InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender"
                    >
                      {/* <MenuItem value=""><em>JEEVA</em></MenuItem> */}
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel"></InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel"></InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="from"
                    label="FromDate"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    id="to"
                    label="ToDate"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                  />
                </Grid>

                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="area"
                    label="Area"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="corporate"
                    label="Corporate"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="phoneno"
                    label="PhoneNo"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="referral"
                    label="Referral"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="sampleid"
                    label="Sample Id"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="department"
                    label="Department"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="ipop"
                    label="IPOP"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="specimen"
                    label="Specimen"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id='labno'
                    label="LabNo"
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id='name'
                    label="Name"
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id='payment'
                    label='Payment'
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputLbelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id='tests'
                    label='Tests'
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '16px' } }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
              <Table stickyHeader aria-label="sticky table" sx={{ marginTop: '20px' }}>
                <TableHead>
                  <TableRow >
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab No</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Name</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>collected At</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Reference</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Tests</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Specimen</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Total</TableCell>
                    <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>PendAmt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '18px' }}>{row.slNo}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.labNo}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.name}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.date}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.collectedAt}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.reference}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.tests}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.specimen}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.total}</TableCell>
                      <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.pendingAmt}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <ToastContainer />
        </Box>
      </CCardBody>
    </>
  );
};

export default PatientBill;


// import React, { useState } from 'react';
// import {
//   TextField, Grid, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, Radio, RadioGroup, FormControl, Typography, Box, FormGroup,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody
// } from '@mui/material';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { CCardBody } from '@coreui/react';

// const PatientBill = () => {
//   const [selectedView, setSelectedView] = useState('Bill View');
//   const [collectionType, setCollectionType] = useState('lab');
//   const rows = [
//     { slNo: 1, labNo: 5749, name: "KRISHNA A S", age: 22, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "N Mohanan BSc MBBS MS", tests: ["COMPLETE HAEMOGRAM +", "HBsAg", "HIV-DUO (Ivth GENERATION T", "Anti HCV", "HAEMOGLOBIN (HB)"], specimen: "EDTA WHOLE ...", total: 1860, pendingAmt: 0 },
//     { slNo: 2, labNo: 5748, name: "RABESHNA", age: 36, gender: "F", date: "26-Jun-2024", collectedAt: "", reference: "Vineetha S MBBS DGO FMAS", tests: ["HAEMOGLOBIN (HB)", "ANTI MULLARIAN HORMONE", "THYROID STIMULATING HORM..."], specimen: "SERUM", total: 1510, pendingAmt: 0 },
//     { slNo: 3, labNo: 5747, name: "JAYAN N P", age: 57, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE"], specimen: "SERUM", total: 140, pendingAmt: 0 },
//     { slNo: 4, labNo: 5746, name: "JOHN", age: 30, gender: "M", date: "26-Jun-2024", collectedAt: "", reference: "", tests: ["CREATININE", "GLUCOSE PLASMA FASTING"], specimen: "PLASMA(fasti...", total: 1500, pendingAmt: 0 }
//   ];

//   const filterLabels = ['Result Issued', 'On Processing', 'Time Over', 'Cancelled Invoice', 'Half Verified', 'Time Over Reminder'];
//   const handleViewChange = (event) => {
//     setSelectedView(event.target.value);
//   };
//   const checkboxColors = ['#0073e6', '#ff9900', '#4caf50', '#f44336', '#9c27b0', '#ffc107'];

//   return (
//     <>
//       <CCardBody>
//         <Box p={2}>
//           <Grid container spacing={1} alignItems="center">
//             <Grid item xs={12}>
//               <FormGroup row style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//                 {filterLabels.map((label, index) => (
//                   <FormControlLabel
//                     key={label}
//                     control={<Checkbox sx={{ color: checkboxColors[index % checkboxColors.length] }} size="small" />}
//                     label={label}
//                     style={{ marginRight: '10px' }}
//                   />
//                 ))}
//               </FormGroup>
//               <Grid container spacing={1} alignItems="center" style={{ marginTop: '10px' }}>
//                 <Grid item>
//                   <FormControl component="fieldset">
//                     <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                       <FormControlLabel
//                         value="lab"
//                         control={<Radio size="small" />}
//                         label={<Typography variant="body2">Bill View</Typography>}
//                         sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                       />
//                       <FormControlLabel
//                         value="purchase"
//                         control={<Radio size="small" />}
//                         label={<Typography variant="body2">Result view</Typography>}
//                         sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                       />
//                       <FormControlLabel
//                         value="pharmacy"
//                         control={<Radio size="small" />}
//                         label={<Typography variant="body2">Track</Typography>}
//                         sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                 </Grid>
//                 {[...Array(3)].map((_, index) => (
//                   <Grid item xs={12} sm={2} key={index}>
//                     <FormControl variant="outlined" size="small" fullWidth>
//                       <InputLabel id={`genderLabel${index}`}></InputLabel>
//                       <Select labelId={`genderLabel${index}`} id={`gender${index}`} label="Gender">
//                         <MenuItem value=""><em>None</em></MenuItem>
//                         <MenuItem value="M">Male</MenuItem>
//                         <MenuItem value="F">Female</MenuItem>
//                         <MenuItem value="O">Other</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                 ))}
//                 {[{ id: 'from', label: 'FromDate' }, { id: 'to', label: 'ToDate' }].map((field) => (
//                   <Grid item xs={12} md={4} key={field.id}>
//                     <TextField
//                       id={field.id}
//                       label={field.label}
//                       type="date"
//                       variant="outlined"
//                       size="small"
//                       fullWidth
//                       InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                     />
//                   </Grid>
//                 ))}
//                 {[{ id: 'area', label: 'Area' }, { id: 'corporate', label: 'Corporate' }, { id: 'phoneno', label: 'PhoneNo' }, { id: 'referral', label: 'Referral' }, { id: 'sampleid', label: 'Sample Id' }, { id: 'department', label: 'Department' }, { id: 'ipop', label: 'IPOP' }, { id: 'specimen', label: 'Specimen' }, { id: 'email', label: 'Email' }, { id: 'labno', label: 'LabNo' }, { id: 'name', label: 'Name' }, { id: 'payment', label: 'Payment' }, { id: 'tests', label: 'Tests' }]
//                   .map((field) => (
//                     <Grid item xs={12} sm={2} key={field.id}>
//                       <TextField
//                         id={field.id}
//                         label={field.label}
//                         variant="outlined"
//                         size="small"
//                         fullWidth
//                         InputLabelProps={{ style: { fontSize: '16px' } }}
//                       />
//                     </Grid>
//                   ))}
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//               <Table stickyHeader aria-label="sticky table" sx={{ marginTop: '20px' }}>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab No</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Name</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>collected At</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Reference</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Tests</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Specimen</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Total</TableCell>
//                     <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Pending Amt</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {rows.map((row) => (
//                     <TableRow key={row.slNo}>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.slNo}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.labNo}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.name}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.date}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.collectedAt}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.reference}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.tests.join(', ')}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.specimen}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.total}</TableCell>
//                       <TableCell sx={{ border: '1px solid #dddddd', padding: '8px', fontSize: '12px' }}>{row.pendingAmt}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Box>
//         <ToastContainer />
//       </CCardBody>
//     </>
//   );
// };

// export default PatientBill;
