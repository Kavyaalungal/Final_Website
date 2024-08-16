// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Cashpayment = () => {
//   const initialFormData={
//     vchrid:'',
//     transno:'',
//     transtype:'',
//     atchmntimage:'',
//     date:'',
//     narration:'',
//     timestamp:'',
//     acname:'',
//     Acid:'',
//     userinfo:'',
//     CurrDate:''
//   }
//    const initialParams={
//     LabNo:'',
//     YrId:2223,
//     CmpyId:2,
//     brnid:2
//    }
//    const[formData,setFormData]=useState(initialFormData)
//    const[params, setParams]=useState(initialParams)

//    const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };
//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };
//   const fetchData = () => {
//     const { LabNo, YrId, CmId ,brnid} = params;
//     axios.get(`http://172.16.16.10:8060/api/cashpayfill`, {
//       params: {
//         LabNo,
//         YrId,
//         CmId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log(response);
//         const data = response.data.pay_exist[0];
//          setFormData(data);
//          toast.success('data fetched successfully')
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('error in fetching data')
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//         <TextField
//                 id="LabNo"
//                 label="Lab No"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={params.LabNo}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 InputLabelProps={{ style: { fontSize: '1rem' } }}
//               />
//         {/* <TextField
//                    id="transno"
//                     label="Trans No"
//                     variant="outlined"
//                     size="small"
//                     value={params.LabNo}
//                     onChange={handleInputChange}
//                     onKeyPress={handleKeyPress}
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   /> */}
//           </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//                     id="date"
//                     label="Date"
//                     type="date"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                  />
//                  </Grid>
//         <Grid item xs={12}>
//           <Box display="flex" alignItems="center">
//             <TextField 
//             id='account'
//             fullWidth
//              label="Account" 
//              variant="outlined"
//               size="small"
//               InputLabelProps={{style:{fontSize:'1rem'}}} 
//               />
//              <Button variant="contained" component="label" sx={{ ml: 1 }}> 
//               <AddIcon /> 
//                <input type="file" hidden /> 
//              </Button> 
//           </Box>
//         </Grid>
//         <Grid item xs={4} >
//         <TextField
//                    id="amount"
//                     label="Amount"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   />
//         </Grid>
//          <Grid item xs={12}> 
//    <TextareaAutosize 
//      minRows={4} 
//      maxRows={6} 
//      style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
//       placeholder="Naration" 
//    /> 
//    </Grid> 
//         <Grid item xs={12}>
//         <TextField
//                    id="userinfo"
//                     label="User Info"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   />
//                   </Grid>
//         <Grid item xs={12}> 
//            <Box display="flex" alignItems="center" gap={1}> 
//             <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} /> 
//             <Button variant="contained" component="label">
//               Browse
//                {/* <AddIcon /> */}
//               <input type="file" hidden /> 
//             </Button> 
//             <Button variant="contained" component="label">
//               Scan
//             </Button>
//             <Button variant="contained">
//               Remove File
//             </Button>
//             <Button variant="contained">
//               Print Preview
//             </Button>
//           </Box>
//         </Grid>
//        <Grid item xs={12}>
//   <TextareaAutosize
//      minRows={4} 
//     maxRows={6} 
//      style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
//     // placeholder="Enter narration here..." 
//    /> 
// </Grid> 
// <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={handleSave}
//             sx={{ marginTop: 2, marginRight: 1 }}
//           > Print </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           > New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//             <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//             <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
// </Grid>

    
//   );
// };

// export default Cashpayment;



// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     amount:'',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };
//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };
//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Trans No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           value={formData.date}
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             variant="outlined"
//             value={formData.acname}
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           value={formData.amount}
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Naration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           value={formData.userinfo}
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File"
//           value={formData.atchmntimage}
//            variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         {formData.atchmntimage && (
//           <Box mt={2}>
//             <img
//               src={`data:image/png;base64,${formData.atchmntimage}`}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           </Box>
//         )}
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Enter narration here..."
//         />
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           > Print </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           > New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;


// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '', // Trans No
//     transtype: '',
//     atchmntimage: '', // Base64 encoded image string
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     account:'',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '', // Lab No (used to fetch data)
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date); // Format the date
//           setFormData(data);
//           toast.success('Data fetched successfully');
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Lab No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.date}
//           onChange={handleFormChange}
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='acname'
//             label="Account"
//             variant="outlined"
//             size="small"
//             fullWidth
//             value={formData.acname}
//             onChange={handleFormChange}
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           id="narration"
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           value={formData.narration}
//           onChange={(e) => handleFormChange({ target: { id: 'narration', value: e.target.value } })}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.userinfo}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         {formData.atchmntimage ? (
//           <Box mt={2}>
//             <img
//               src={`data:image/png;base64,${formData.atchmntimage}`}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//               onError={(e) => { e.target.src = 'path/to/placeholder/image.png'; }} // Fallback image in case of an error
//             />
//           </Box>
//         ) : (
//           <p>No image available</p>
//         )}
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;






// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button,Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     amount:'',
//     acname: '',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };
// // function to format the datestring and the function takes an argument datestring
//    const formatDate = (dateString) => {
//         if (!dateString) return '';   // it no datestring is there or undefined one then it stops the execution and exits 
       
//          const date = new Date(dateString); //creates a new date object using the passed datestring and it parses and converts it into a valid format
//          const year = date.getFullYear();  // extracts the year from the date object 
//          const month = (date.getMonth() + 1).toString().padStart(2, '0'); // extracts the month from date object +1 means normally index starts from 0 to adjust that to start from  1 toString means convert the number to a string, Padstart methos is done to ensure that the month is always in a two digit string format
//          // .padStart(2,'0') the fisrt character 2 means the target length should be 2 and second character 0 means adding 0 in the start to make it the target length eg: if '1' then ,make it as '01'
//          const day = date.getDate().toString().padStart(2, '0'); // same method for the month field 
//         return `${year}-${month}-${day}`;  // return the final result in this format
//        };
//   const fetchData = () => {
//         const { LabNo, YrId, CmpyId, brnid } = params;
//         // const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//         // console.log('Fetching data from:', url);
//         // axios.get(url)
//         axios.get(`http://172.16.16.10:8060/api/cashpayfill`, {
//               params: {
//                    LabNo,
//                    YrId,
//                    CmpyId,
//                   brnid
//                  }
//                })
//           .then(response => {
//             console.log('API response:', response);
//             if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//               const data = response.data.pay_exist[0];
//                data.date = formatDate(data.date);
//               setFormData(data);
//               toast.success('Data fetched successfully');
//               processImage(data.atchmntimage);
//             } else {
//               toast.error('No data found');
//             }
//           })
//           .catch(error => {
//             console.error('Error fetching the data', error);
//             toast.error('Error in fetching data');
//           });
//       };

  
// // process image function takes base64Image as an argument which is a base64 encoded image
// const processImage = (base64Image) => {
//   if (base64Image) { // base64 image is then only the function enters the  if block, if no image is there then it enteres the else block exits.
//     // Check if the base64 string includes the MIME type
//     const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/; // regular expression for checking the mime type that is .png,.jpg,.jpeg etc...
//     const mimeTypeMatch = base64Image.match(mimeTypePattern); // checks if the image matches the regular expression and it is assigned to a variable named mimeTypeMatch
//                                                               // if match found then mimeTypeMatch will be an array and first element will be the entire matched string
//                                                               // if no match is found then mimeTypeMatch is null
//     if (mimeTypeMatch) {   // if the mimeTypeMatch then it extracts the first element 
//       const mimeType = mimeTypeMatch[1];
//       console.log('MIME type found:', mimeType);
//       setImgSrc(base64Image); // Use the full base64 string passed as an argument to setImgSrc function
//     } else {

//       // By providing a fallback MIME type (image/png), the function ensures that even if the MIME type is missing, the image can still be displayed correctly.
//       // Attempt to handle base64 string without MIME type
//       const mimeTypeFallback = 'image/png'; // Assuming PNG as fallback
//       setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);//To construct a valid data URI that includes the fallback MIME type and the base64-encoded image data, and then set this as the image source.
//       console.warn('MIME type not found in base64 string, using fallback');
//     }
//   } else {
//     setImgSrc('path/to/placeholder/image.png'); // if no image is there then it exits the if block and it executes the else block it sets path to a default image to be displayed when no image is provided
//     console.warn('No image data provided');
//   }
// };


//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Trans No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             value={formData.acname}
//             variant="outlined"
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           value={formData.amount}
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//            variant="outlined"
//           value={formData.timestamp}
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//         <Grid item xs={3}>
//         <Box mt={2}>
//           {imgSrc ? (
//             <img
//               src={imgSrc}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           ) : (
//             <p>No attachments</p>
//           )}
//         </Box>
//       </Grid>
//           {/* <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} /> */}
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       {/* <Grid item xs={12}>
//         <Box mt={2}>
//           {imgSrc ? (
//             <img
//               src={imgSrc}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           ) : (
//             <p>No image available</p>
//           )}
//         </Box>
//       </Grid> */}
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;



// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     amount: '',
//     acname: '',
//     Acid: '',
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
//       if (mimeTypeMatch) {
//         const mimeType = mimeTypeMatch[1];
//         console.log('MIME type found:', mimeType);
//         setImgSrc(base64Image);
//       } else {
//         const mimeTypeFallback = 'image/png';
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png');
//       console.warn('No image data provided');
//     }
//   };

//   const handleSave = () => {
//     // Preparing data to send
//     const dataToSend = {
//       VchrDate: "2024-08-05",
//     VchrBookId: 678.90,
//     VchrId: 307,
//     VchrTransType: "credit card",
//     VchrTransNo: 358,
//     VchrNarration: "Credit Bill:500",
//     VchrPayment: 500.00,
//     VchrReceipt: 0.00,
//     VchrTimeStamp: "KRISHNA 05-08-2024 02:40 Work Satation:OFFICE ",
//     VchrUsrId: 6,
//     VchrYrId: 2024,
//     VchrCpyId: 2,
//     VchrUpdtd: 0,
//     VchrChq: 0,
//     VchrChqNo: "34567",
//     VchrChqDate: "2024-08-05",
//     VchrChqPassed: 0,
//     VchrBrId: 2,
//     VchrTdsAmt: 500.00,
//     VchrAttachment: null,
//     Editflag:true
//     };
  
//     // Log the data to the console
//     console.log('Data to be sent to server:', dataToSend);
//     // Send POST request
//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully', response.data);
//         toast.success('Data saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving data', error);
//         toast.error('Error in saving data');
//       });
//   };
  

//   // const handleSave = () => {
//   //   axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', formData)
//   //     .then(response => {
//   //       console.log('data saved successfully',response.data)
//   //       toast.success('Data saved successfully');
//   //     })
//   //     .catch(error => {
//   //       console.error('Error saving data', error);
//   //       toast.error('Error in saving data');
//   //     });
//   // };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//       <TextField
//           id="LabNo"
//            label="Trans No"
//            variant="outlined"
//            size="small"
//            fullWidth
//           value={params.LabNo}
//            onChange={handleInputChange}
//            onKeyPress={handleKeyPress}
//            InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="acname"
//           label="Account"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.acname}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.timestamp}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <Grid item xs={3}>
//             <Box mt={2}>
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt="Attached"
//                   style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//               ) : (
//                 <p>No attachments</p>
//               )}
//             </Box>
//           </Grid>
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//             onClick={handleSave}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;



// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     amount: '',
//     acname: '',
//     Acid: '',
//     VchrBookId:'',
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
//       if (mimeTypeMatch) {
//         const mimeType = mimeTypeMatch[1];
//         console.log('MIME type found:', mimeType);
//         setImgSrc(base64Image);
//       } else {
//         const mimeTypeFallback = 'image/png';
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png');
//       console.warn('No image data provided');
//     }
//   };

//   const handleSave = () => {
//     const dataToSend = {
//       VchrDate: formData.date,
//       VchrBookId: 678.90, 
//       //  VchrBookId:VchrBookId,
//       VchrId: formData.vchrid,
//       VchrTransType: formData.transtype,
//       VchrTransNo: formData.transno,
//       VchrNarration: formData.narration,
//       VchrPayment: formData.amount,
//       VchrReceipt: 0.00,
//       VchrTimeStamp: formData.timestamp,
//       VchrUsrId: 6, 
//       VchrYrId: 2223,
//       VchrCpyId: 2,
//       VchrUpdtd: 0, 
//       VchrChq: 0, 
//       VchrChqNo: "34567", 
//       VchrChqDate: "2024-08-05", 
//       VchrChqPassed: 0, 
//       VchrBrId: 2,
//       VchrTdsAmt: 500.00, 
//       VchrAttachment: formData.atchmntimage,
//       Editflag: true
//     };
  
//     console.log('Data to be sent to server:', dataToSend);
//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully', response.data);
//         toast.success('Data saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving data', error);
//         toast.error('Error in saving data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Trans No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="acname"
//           label="Account"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.acname}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//           onChange={(e) => handleFormChange({ target: { id: 'narration', value: e.target.value } })}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="timestamp"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.timestamp}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <Grid item xs={3}>
//             <Box mt={2}>
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt="Attached"
//                   onChange={handleFormChange}
//                   style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//               ) : (
//                 <p>No attachments</p>
//               )}
//             </Box>
//           </Grid>
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//             onClick={handleSave}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//             onClick={handleSave}
//           >Re-Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Clear</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;



import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cashpayment = () => {
  const initialFormData = {
    vchrid: '',
    transno: '',
    transtype: '',
    atchmntimage: '',
    date: '',
    narration: '',
    timestamp: '',
    amount: '',
    acname: '',
    Acid: '',
    VchrBookId:'',
  };

  const initialParams = {
    LabNo: '',
    YrId: 2223,
    CmpyId: 2,
    brnid: 2
  };

  const [formData, setFormData] = useState(initialFormData);
  const [params, setParams] = useState(initialParams);
  const [imgSrc, setImgSrc] = useState('');
  const [file, setFile] = useState(null); // To handle the new file input

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setParams(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const fetchData = () => {
    const { LabNo, YrId, CmpyId, brnid } = params;
    axios.get('http://172.16.16.10:8060/api/cashpayfill', {
      params: {
        LabNo,
        YrId,
        CmpyId,
        brnid
      }
    })
      .then(response => {
        console.log('API response:', response);
        if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
          const data = response.data.pay_exist[0];
          data.date = formatDate(data.date);
          setFormData(data);
          toast.success('Data fetched successfully');
          processImage(data.atchmntimage);
        } else {
          toast.error('No data found');
        }
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        toast.error('Error in fetching data');
      });
  };

  const processImage = (base64Image) => {
    if (base64Image) {
      const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
      const mimeTypeMatch = base64Image.match(mimeTypePattern);
      if (mimeTypeMatch) {
        const mimeType = mimeTypeMatch[1];
        console.log('MIME type found:', mimeType);
        setImgSrc(base64Image);
      } else {
        const mimeTypeFallback = 'image/png';
        setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
        console.warn('MIME type not found in base64 string, using fallback');
      }
    } else {
      setImgSrc('path/to/placeholder/image.png');
      console.warn('No image data provided');
    }
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64String = await convertToBase64(file);
        setFormData(prevState => ({
          ...prevState,
          atchmntimage: base64String
        }));
        setImgSrc(base64String);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };
  
  
  const handleSave = () => {
    const dataToSend = {
      VchrDate: formData.date,
      VchrBookId: 678.90,
      VchrId: formData.vchrid,
      VchrTransType: formData.transtype,
      VchrTransNo: formData.transno,
      VchrNarration: formData.narration,
      VchrPayment: formData.amount,
      VchrReceipt: 0.00,
      VchrTimeStamp: formData.timestamp,
      VchrUsrId: 6,
      VchrYrId: 2223,
      VchrCpyId: 2,
      VchrUpdtd: 0,
      VchrChq: 0,
      VchrChqNo: "34567",
      VchrChqDate: "2024-08-05",
      VchrChqPassed: 0,
      VchrBrId: 2,
      VchrTdsAmt: 500.00,
      VchrAttachment: formData.atchmntimage, // Base64 image data
      Editflag: true
    };
    console.log("data send to backend",dataToSend);
    
  
    axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Data saved successfully', response.data);
      toast.success('Data saved successfully');
    })
    .catch(error => {
      console.error('Error saving data', error);
      toast.error('Error in saving data');
    });
  };
  
  // const handleSave = async () => {
  //   const dataToSend = {
  //     VchrDate: formData.date,
  //     VchrBookId: formData.VchrBookId || 678.90,
  //     VchrId: formData.vchrid,
  //     VchrTransType: formData.transtype,
  //     VchrTransNo: formData.transno,
  //     VchrNarration: formData.narration,
  //     VchrPayment: formData.amount,
  //     VchrReceipt: 0.00,
  //     VchrTimeStamp: formData.timestamp,
  //     VchrUsrId: 6,
  //     VchrYrId: 2223,
  //     VchrCpyId: 2,
  //     VchrUpdtd: 0,
  //     VchrChq: 0,
  //     VchrChqNo: "34567",
  //     VchrChqDate: "2024-08-05",
  //     VchrChqPassed: 0,
  //     VchrBrId: 2,
  //     VchrTdsAmt: 500.00,
  //     Editflag: true
  //   };
  
  //   const formDataToSend = new FormData();
  //   formDataToSend.append('data', JSON.stringify(dataToSend)); // Add form data
  //   if (file) {
  //     formDataToSend.append('file', file); // Add file
  //   }
  
  //   try {
  //     const response = await axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', formDataToSend, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data' // Ensure this is set
  //       }
  //     });
  //     if (response.data.success) {
  //       toast.success('Data saved successfully');
  //     } else {
  //       toast.error('Failed to save data');
  //     }
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     toast.error('Error in saving data');
  //   }
  // };
  

  // const handleSave = async () => {
  //   const dataToSend = {
  //     VchrDate: formData.date,
  //     VchrBookId: formData.VchrBookId || 678.90,
  //     VchrId: formData.vchrid,
  //     VchrTransType: formData.transtype,
  //     VchrTransNo: formData.transno,
  //     VchrNarration: formData.narration,
  //     VchrPayment: formData.amount,
  //     VchrReceipt: 0.00,
  //     VchrTimeStamp: formData.timestamp,
  //     VchrUsrId: 6,
  //     VchrYrId: 2223,
  //     VchrCpyId: 2,
  //     VchrUpdtd: 0,
  //     VchrChq: 0,
  //     VchrChqNo: "34567",
  //     VchrChqDate: "2024-08-05",
  //     VchrChqPassed: 0,
  //     VchrBrId: 2,
  //     VchrTdsAmt: 500.00,
  //     Editflag: true
  //   };

  //   const formDataToSend = new FormData();
  //   formDataToSend.append('data', JSON.stringify(dataToSend)); // Add form data
  //   if (file) {
  //     formDataToSend.append('file', file); // Add file
  //   }

  //   try {
  //     const response = await axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', formDataToSend, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     if (response.data.success) {
  //       toast.success('Data saved successfully');
  //     } else {
  //       toast.error('Failed to save data');
  //     }
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //     toast.error('Error in saving data');
  //   }
  // };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="LabNo"
          label="Trans No"
          variant="outlined"
          size="small"
          fullWidth
          value={params.LabNo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="date"
          label="Date"
          type="date"
          variant="outlined"
          value={formData.date}
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="acname"
          label="Account"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.acname}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.amount}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          minRows={4}
          maxRows={6}
          value={formData.narration}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
          placeholder="Narration"
          onChange={(e) => handleFormChange({ target: { id: 'narration', value: e.target.value } })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="timestamp"
          label="User Info"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.timestamp}
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" gap={1}>
          <Grid item xs={3}>
            <Box mt={2}>
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt="Attached"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : (
                <p>No attachments</p>
              )}
            </Box>
          </Grid>
          <Button variant="contained" component="label">
            Browse
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button variant="contained" onClick={() => setImgSrc('')}>
            Remove File
          </Button>
          <Button variant="contained">
            Print Preview
          </Button>
        </Box>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginRight: 1 }}
            onClick={handleSave}
          >Save</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginRight: 1 }}
            onClick={handleSave}
          >Re-Print</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginRight: 1 }}
          >Clear</Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Grid>
  );
};

export default Cashpayment;




// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     amount: '',
//     acname: '',
//     Acid: '',
//     VchrBookId: ''  // Add VchrBookId to formData
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };
//   useEffect(() => {
//     // Example: Initialize VchrBookId based on some condition or fetch
//     // This is just an example, adapt according to your logic
//     const initializeVchrBookId = () => {
//       setFormData(prevState => ({
//         ...prevState,
//         VchrBookId: 678.90 // Set a default or fetched value
//       }));
//     };

//     initializeVchrBookId();
//   }, []);
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
//       if (mimeTypeMatch) {
//         const mimeType = mimeTypeMatch[1];
//         console.log('MIME type found:', mimeType);
//         setImgSrc(base64Image);
//       } else {
//         const mimeTypeFallback = 'image/png';
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png');
//       console.warn('No image data provided');
//     }
//   };

//   const handleSave = () => {

//     // if (!formData.VchrBookId) {
//     //   console.error('VchrBookId is not set');
//     //   toast.error('VchrBookId is missing');
//     //   return;
//     // }

//     const dataToSend = {
//       VchrDate: formData.date,
//       // VchrBookId: formData.VchrBookId, // Use the hidden field value
//       VchrId: formData.vchrid,
//       VchrTransType: formData.transtype,
//       VchrTransNo: formData.transno,
//       VchrNarration: formData.narration,
//       VchrPayment: formData.amount,
//       VchrReceipt: 0.00,
//       VchrTimeStamp: formData.timestamp,
//       VchrUsrId: 6,
//       VchrYrId: 2223,
//       VchrCpyId: 2,
//       VchrUpdtd: 0,
//       VchrChq: 0,
//       VchrChqNo: "34567",
//       VchrChqDate: "2024-08-05",
//       VchrChqPassed: 0,
//       VchrBrId: 2,
//       VchrTdsAmt: 500.00,
//       VchrAttachment: formData.atchmntimage,
//       Editflag: true
//     };
//     console.log('data send to server',dataToSend);
    
//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend)
//       .then(response => {
//         console.log('Data saved successfully', response.data);
//         toast.success('Data saved successfully');
//       })
//       .catch(error => {
//         console.error('Error saving data', error);
//         toast.error('Error in saving data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Trans No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="acname"
//           label="Account"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.acname}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//         id='narration'
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="timestamp"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.timestamp}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <Grid item xs={3}>
//             <Box mt={2}>
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt="Attached"
//                   style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//               ) : (
//                 <p>No attachments</p>
//               )}
//             </Box>
//           </Grid>
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//             onClick={handleSave}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Close</Button>
//         </Grid>
//       </Grid>
//       {/* Hidden Input Field for VchrBookId */}
//       <input type="hidden" id="VchrBookId" value={formData.VchrBookId} />
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;



// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypes = ['image/png', 'image/jpeg', 'image/gif'];
//       let loaded = false;

//       mimeTypes.forEach((mimeType, index) => {
//         if (!loaded) {
//           const img = new Image();
//           img.src = `data:${mimeType};base64,${base64Image}`;

//           img.onload = () => {
//             if (!loaded) {
//               setImgSrc(img.src);
//               setIsImageLoaded(true);
//               loaded = true;
//             }
//           };

//           img.onerror = () => {
//             if (index === mimeTypes.length - 1) {
//               setImgSrc('path/to/placeholder/image.png'); // Fallback image if none of the formats work
//               setIsImageLoaded(true);
//             }
//           };
//         }
//       });
//     } else {
//       setImgSrc('path/to/placeholder/image.png'); // No image data
//       setIsImageLoaded(true);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Lab No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             variant="outlined"
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Box mt={2}>
//           {isImageLoaded ? (
//             imgSrc ? (
//               <img src={imgSrc} alt="Attachment" style={{ maxWidth: '100%', height: 'auto' }} />
//             ) : (
//               <p>No image available</p>
//             )
//           ) : (
//             <p>Loading image...</p>
//           )}
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;

