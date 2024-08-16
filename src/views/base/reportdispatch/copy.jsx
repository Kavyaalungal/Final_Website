// import React from 'react'

// function ReportDispatch() {
//   return (
//     <div>ReportDispatch</div>
//   )
// }

// export default ReportDispatch


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
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [dispatchModes, setDispatchModes] = useState([
//     { id: 1, mode: 'Phone', selected: false, userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', selected: false, userInfo: 'user2' },
//     { id: 3, mode: 'Email', selected: false, userInfo: 'user3' },
//     { id: 4, mode: 'Courier', selected: false, userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', selected: false, userInfo: 'user5' },
//   ]);

//   const handleCheckboxChange = (index) => {
//     const updatedDispatchModes = [...dispatchModes];
//     updatedDispatchModes[index].selected = !updatedDispatchModes[index].selected;
//     setDispatchModes(updatedDispatchModes);
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>SlNo</TableCell>
//                   <TableCell>Select</TableCell>
//                   <TableCell>Person</TableCell>
//                   <TableCell>DispatchMode</TableCell>
//                   <TableCell>UserInfo</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {dispatchModes.map((mode, index) => (
//                   <TableRow key={mode.id}>
//                     <TableCell>{mode.id}</TableCell>
//                     <TableCell>
//                       <Checkbox
//                         checked={mode.selected}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     </TableCell>
//                     <TableCell>{mode.person || '-'}</TableCell>
//                     <TableCell>{mode.mode}</TableCell>
//                     <TableCell>{mode.userInfo}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="primary">New</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Delete</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Exit</Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ReportDispatching;


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
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [dispatchModes, setDispatchModes] = useState([
//     { id: 1, mode: 'Phone', selected: false, userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', selected: false, userInfo: 'user2' },
//     { id: 3, mode: 'Email', selected: false, userInfo: 'user3' },
//     { id: 4, mode: 'Courier', selected: false, userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', selected: false, userInfo: 'user5' },
//   ]);

//   const handleCheckboxChange = (index) => {
//     const updatedDispatchModes = [...dispatchModes];
//     updatedDispatchModes[index].selected = !updatedDispatchModes[index].selected;
//     setDispatchModes(updatedDispatchModes);
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} container spacing={2}>
//           <Grid item xs={3}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={mode.id}>
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={9}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Select</TableCell>
//                     <TableCell>Person</TableCell>
//                     <TableCell>DispatchMode</TableCell>
//                     <TableCell>UserInfo</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={mode.id}>
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>
//                         <Checkbox
//                           checked={mode.selected}
//                           onChange={() => handleCheckboxChange(index)}
//                         />
//                       </TableCell>
//                       <TableCell>{mode.person || '-'}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                       <TableCell>{mode.userInfo}</TableCell>
//                     </TableRow>
//                   ))}
        //         </TableBody>
       //        </Table>
       //      </TableContainer>
       //    </Grid>
       //  </Grid>
       //  <Grid item xs={12}>
       //    <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
      //   </Grid>
        // <Grid item xs={12}>
        //   <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
       //  </Grid>
       //  <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
         //  <Grid item>
          //   <Button variant="contained" color="primary">New</Button>
          // </Grid>
          // <Grid item>
          //   <Button variant="contained" color="primary">Delete</Button>
           //</Grid></Grid>export default ReportDispatching;

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
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [selectedModes, setSelectedModes] = useState([]);
//   const dispatchModes = [
//     { id: 1, mode: 'Phone', userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', userInfo: 'user2' },
//     { id: 3, mode: 'Email', userInfo: 'user3' },
//     { id: 4, mode: 'Courier', userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', userInfo: 'user5' },
//   ];

//   const handleDispatchModeDoubleClick = (mode) => {
//     setSelectedModes((prevSelectedModes) => {
//       // If the mode is already selected, remove it; otherwise, add it
//       if (prevSelectedModes.includes(mode)) {
//         return prevSelectedModes.filter((m) => m !== mode);
//       } else {
//         return [...prevSelectedModes, mode];
//       }
//     });
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} container spacing={2}>
//           <Grid item xs={3}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode) => (
//                     <TableRow
//                       key={mode.id}
//                       onDoubleClick={() => handleDispatchModeDoubleClick(mode.mode)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={9}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Select</TableCell>
//                     <TableCell>Person</TableCell>
//                     <TableCell>DispatchMode</TableCell>
//                     <TableCell>UserInfo</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes
//                     .filter((mode) => selectedModes.includes(mode.mode))
//                     .map((mode) => (
//                       <TableRow key={mode.id}>
//                         <TableCell>{mode.id}</TableCell>
//                         <TableCell>
//                           <Checkbox />
//                         </TableCell>
//                         <TableCell>{mode.person || '-'}</TableCell>
//                         <TableCell>{mode.mode}</TableCell>
//                         <TableCell>{mode.userInfo}</TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="primary">New</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Delete</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Exit</Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ReportDispatching;

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
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
// //   const [reportingMode, setReportingMode] = useState('Personally');
// //   const [selectedModes, setSelectedModes] = useState([]);
// //   const dispatchModes = [
// //     { id: 1, mode: 'Phone', userInfo: 'user1' },
// //     { id: 2, mode: 'ByHand', userInfo: 'user2' },
// //     { id: 3, mode: 'Email', userInfo: 'user3' },
// //     { id: 4, mode: 'Courier', userInfo: 'user4' },
// //     { id: 5, mode: 'Through Branch', userInfo: 'user5' },
// //   ];

// //   const handleDispatchModeDoubleClick = (mode) => {
// //     setSelectedModes((prevSelectedModes) => {
// //       // If the mode is already selected, remove it; otherwise, add it
// //       if (prevSelectedModes.includes(mode)) {
// //         return prevSelectedModes.filter((m) => m !== mode);
// //       } else {
// //         return [...prevSelectedModes, mode];
// //       }
// //     });
// //   };

//   return (
//     <>
//      {/* <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}> */}
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         {/* <Grid item xs={12} container spacing={2}>
//           <Grid item xs={3}>
//             <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid black' }}>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode) => (
//                     <TableRow
//                       key={mode.id}
//                       onDoubleClick={() => handleDispatchModeDoubleClick(mode.mode)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={9}>
//             <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Select</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Person</TableCell>
//                     <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>DispatchMode</TableCell>
//                     <TableCell sx={{ borderBottom: '1px solid black' }}>UserInfo</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes
//                     .filter((mode) => selectedModes.includes(mode.mode))
//                     .map((mode) => (
//                       <TableRow key={mode.id}>
//                         <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
//                         <TableCell sx={{ borderRight: '1px solid black' }}>
//                           <Checkbox />
//                         </TableCell>
//                         <TableCell sx={{ borderRight: '1px solid black' }}>{mode.person || '-'}</TableCell>
//                         <TableCell sx={{ borderRight: '1px solid black' }}>{mode.mode}</TableCell>
//                         <TableCell>{mode.userInfo}</TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="primary">New</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Delete</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Exit</Button>
//           </Grid>
//         </Grid> */}
//       </Grid>
//     {/* </Paper> */}
//     </>
//   );
// };

// export default ReportDispatching;


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
//   Button,
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [rows, setRows] = useState([]);

//   const handleDoubleClick = (dispatchMode) => {
//     const newRow = {
//       id: selectedRows.length + 1,
//       dispatchMode,
//       userInfo: 'sumesh 31-07-2024 11:07 Work Station:DESKTOP-NAJROUS'
//     };
//     setSelectedRows((prevSelectedRows) => [...prevSelectedRows, newRow]);
//   };

//   const dispatchModes = ['Phone', 'ByHand', 'Email', 'Courier', 'Through Branch'];

//   return (
//     <Container>
//       <Box sx={{ padding: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Sl No</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={index} onDoubleClick={() => handleDoubleClick(mode)} style={{ cursor: 'pointer' }}>
//                       <TableCell>{index + 1}</TableCell>
//                       <TableCell>{mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Sl No</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                     <TableCell>User Info</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {selectedRows.map((row) => (
//                     <TableRow key={row.id}>
//                       <TableCell>{row.id}</TableCell>
//                       <TableCell>{row.dispatchMode}</TableCell>
//                       <TableCell>{row.userInfo}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ReportDispatching;





import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Box,
  FormGroup
} from '@mui/material';
import { CCardBody } from '@coreui/react';

const ReportDispatching = () => {
  const [reportingMode, setReportingMode] = useState('Personally');
  //  const [selectedModes, setSelectedModes] = useState([]);
  //  const dispatchModes = [
  //    { id: 1, mode: 'Phone', userInfo: 'user1' },
  //    { id: 2, mode: 'ByHand', userInfo: 'user2' },
  //    { id: 3, mode: 'Email', userInfo: 'user3' },
  //    { id: 4, mode: 'Courier', userInfo: 'user4' },
  //    { id: 5, mode: 'Through Branch', userInfo: 'user5' },
  //  ];

  //  const handleDispatchModeDoubleClick = (mode) => {
  //    setSelectedModes((prevSelectedModes) => {
  //      // If the mode is already selected, remove it; otherwise, add it
  //      if (prevSelectedModes.includes(mode)) {
  //        return prevSelectedModes.filter((m) => m !== mode);
  //      } else {
  //        return [...prevSelectedModes, mode];
  //      }
  //    });
  //  };

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedModes, setSelectedModes] = useState([]);
  const dispatchModes = [
    { id: 1, mode: 'Phone', userInfo: 'user1' },
    { id: 2, mode: 'ByHand', userInfo: 'user2' },
    { id: 3, mode: 'Email', userInfo: 'user3' },
    { id: 4, mode: 'Courier', userInfo: 'user4' },
    { id: 5, mode: 'Through Branch', userInfo: 'user5' },
  ];

  const handleDispatchModeDoubleClic = (mode) => {
    setSelectedRows((prevSelectedRows) => [
      ...prevSelectedRows,
      { ...mode, id: prevSelectedRows.length + 1,  } // Add a new instance with a new ID or unique identifier
    ]);
  };

  const handleDispatchModeDoubleClick = (mode) => {
    setSelectedModes((prevSelectedModes) => {
      if (prevSelectedModes.includes(mode.mode)) {
        return prevSelectedModes;
      } else {
        return [...prevSelectedModes, mode.mode];
      }
    });
  };

  return (
    <>
     <CCardBody>
     <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField 
           id='entryno' 
          label="Entry No" 
          variant="outlined"
           fullWidth
            size="small"
            InputLabelProps={{ style:  {fontSize:'1rem'} }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          id='patientname' 
          label="Patient Name"
          variant="outlined" 
          fullWidth 
          size="small"
          InputLabelProps={{  style:  {fontSize:'1rem'}  }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
            <TextField
            id='server'
            label='Server'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{ style: {fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='datetime'
            label='Date Time'
            variant='outlined'
            fullWidth
            size='small'
            type='datetime-local'
            InputLabelProps={{ shrink:true, style:{fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='labno'
            label='Lab No'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='yyyy'
            label='Age YY'
            variant='outlined'
            size='small'
            fullWidth
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='mm'
            label='Age MM'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='dd'
            label='Age DD'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='branchname'
            label='Branch Name'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='refby'
            label='Reference By'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <TextField
            id='ipop'
            label='IP/OP'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        </Grid>
        </Box>
       <Box sx={{border:'1px solid #ddd', padding:'16px', borderRadius:'8px',marginBottom:'10px', marginTop:'10px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                id='sampleon'
                label='Sample On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                id='reporton'
                label='Report On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox name="personally" />}
                    label="Personally"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="courier" />}
                    label="Courier"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="phone" />}
                    label="phone"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="email" />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="sms" />}
                    label="SMS"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
        
</Grid>
</Box> 
<Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px', marginTop: '10px' }}>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={3}>
          <TableContainer sx={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: 1 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dispatchModes.map((mode) => (
                  <TableRow
                    key={mode.id}
                    onDoubleClick={() => handleDispatchModeDoubleClick(mode)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f1f1f1' },
                    }}
                  >
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.id}</TableCell>
                    <TableCell>{mode.mode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={9}>
          <TableContainer sx={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: 1 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Select</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Person</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>User Info</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dispatchModes
                  .filter((mode) => selectedModes.includes(mode.mode))
                  .map((mode) => (
                    <TableRow key={mode.id}>
                      <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.id}</TableCell>
                      <TableCell sx={{ borderRight: '1px solid #ddd' }}>
                        <Checkbox />
                      </TableCell>
                      <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.person || '-'}</TableCell>
                      <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.mode}</TableCell>
                      <TableCell>{mode.userInfo}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button variant="contained" color="primary">
          Remove
        </Button>
      </div>
    </Box>
    <Box
      sx={{
        border: '1px solid #ddd',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '10px',
        marginTop: '10px',
        overflowX: 'auto', // Enables horizontal scrolling if needed
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TableContainer
            sx={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 1,
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dispatchModes.map((mode) => (
                  <TableRow
                    key={mode.id}
                    onDoubleClick={() => handleDispatchModeDoubleClic(mode)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f1f1f1' },
                    }}
                  >
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.id}</TableCell>
                    <TableCell>{mode.mode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer
            sx={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 1,
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Select</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Person</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>User Info</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{row.id}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>
                      <Checkbox />
                    </TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{row.person || '-'}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{row.mode}</TableCell>
                    <TableCell>{row.userInfo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          marginTop: '16px',
        }}
      >
        <Button variant="contained" color="primary">
          Remove
        </Button>
      </div>
    </Box>
{/* <Box sx={{border:'1px solid #ddd', padding:'16px', borderRadius:'8px',marginBottom:'10px', marginTop:'10px'}}>
<Grid item xs={12} container spacing={2}>
          <Grid item xs={3}>
            <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid black' }}>Dispatch Mode</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatchModes.map((mode) => (
                    <TableRow
                      key={mode.id}
                      onDoubleClick={() => handleDispatchModeDoubleClick(mode.mode)}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
                      <TableCell>{mode.mode}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={9}>
            <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Select</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Person</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>DispatchMode</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid black' }}>UserInfo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatchModes
                    .filter((mode) => selectedModes.includes(mode.mode))
                    .map((mode) => (
                      <TableRow key={mode.id}>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>
                          <Checkbox />
                        </TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.person || '-'}</TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.mode}</TableCell>
                        <TableCell>{mode.userInfo}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
              <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flexGrow: 1 }}></div>
      <Button variant="contained" color="primary">
        Remove
      </Button>
    </div>
        </Grid>
     </Box> */}
      
        <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px', marginTop: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
             <TextField
             id='register'
             label='Registration Note'
             variant='outlined'
             size='small'
             fullWidth
             InputLabelProps={{style: {fontSize:'1rem'}}}
             multiline
             rows={3}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
             <TextField
             id='note'
             label='Note'
             variant='outlined'
             size='small'
             fullWidth
             InputLabelProps={{style: {fontSize:'1rem'}}}
             multiline
             rows={3}
             />
              </Grid>
            </Grid>
            </Box>
            <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">New</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Delete</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Save</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Exit</Button>
          </Grid>
        </Grid>
    
    
        
        
        
        
       
      
      
    
      {/* </Grid> */}
    {/* </Paper> */}
    </CCardBody>
    </>
  );
};

export default ReportDispatching;


 
  

 




 //    <Container>
//       <Box sx={{ padding: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Sl No</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={index} onDoubleClick={() => handleDoubleClick(mode)} style={{ cursor: 'pointer' }}>
//                       <TableCell>{index + 1}</TableCell>
//                       <TableCell>{mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
                 //                         <TableCell>Dispatch Mode</TableCell>
               //      <TableCell>User Info</TableC

                 
