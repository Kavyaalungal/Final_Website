// import { Box, Card, CardContent, Grid ,Typography} from '@mui/material';
// import React, { useState } from 'react';
// import { usePatient } from './PatientContext'; // import custom hook to access the patient details from a context
// import './Patient.css';
// import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
// import Patient from './Patient';
// import './Register.css';
// import male from '../../../assets/images/male1.png';
// import female from '../../../assets/images/female.png';
// function UserCard({patientDetails}) {

//   console.log('patient details in usercard',patientDetails)

  










//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//         <Card
//         sx={{
//           width: "100%",
//           maxWidth: "auto",
//           maxHeight: 700,
//           height: 512,
//           p: 2,
//           overflowY: "auto",
//           marginLeft: -1,
//           marginTop:-1
          
//         }}
//         className="firstcard"
//       >
//         <CardContent
//           sx={{
//             height: "100%",
//             overflowY: "hidden",
//           }}
//         >
  
  
//   <Typography
//             sx={{
//               fontSize: { xs: 14, sm: 14, md: 14 },
//               marginTop:-2,
  
//               textAlign: "start",
//               fontWeight: "Bold",
//             }}
//             color="#bd2937"
//             variant="h6"
//           >
//             Patient Details
//           </Typography>
       
         




  
//    {/* <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               mb: 2,
//             }}
//           >
//             <Avatar
//               sx={{
//                 width: { xs: 60, sm: 70, md: 80 },
//                 height: { xs: 60, sm: 70, md: 80 },
//                 mb: 2,
//               }}
//               alt="Patient Avatar"
//               src={
//                 patientData.Patient_Ismale === "Male"
//                   ? male
//                   : patientData.Patient_Ismale === "Female"
//                   ? female
//                   : commonDefault
//               }
//             />
  
           
//           </Box> */}
  
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               marginTop:-2,
//               marginLeft:-1
//             }}
//           >
//              <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: { xs: 14, sm: 14, md: 14 },
           
//                   wordBreak: "break-word",
//                   overflowWrap: "break-word",
//                 }}
//               >
              
//                 { "Patient Name"}
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "flex-start",
//                   gap: 1,
                  
                 
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                   }}
//                   color="black"
//                 >
//                   {"Age"}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                   }}
//                   color="black"
//                 >
//                   { "Gender"}
//                 </Typography>
//               </Box>
//             <Typography
//               sx={{
//                 mb: 1.5,
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#b0b0b0"
//             >
//               Contact No
//             </Typography>
//             <Typography
//               sx={{
//                 mt: -2,
//                 fontSize: {xs: 14, sm: 14, md: 14},
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#000"
//             >
//                { "N/A"}
//             </Typography>
//             <Typography
//               sx={{
//                 mt: 1,
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#b0b0b0"
//             >
//               Email
//             </Typography>
//             <Typography
//               sx={{
//                 mt: 0,
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#000"
//             >
//               { "N/A"}
//             </Typography>
//             <Typography
//               sx={{
//                 mt: 1,
//                 fontSize: { xs: 14, sm: 14, md: 14},
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#b0b0b0"
//             >
//               PatientID
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#000"
//             >
//               {"N/A"}
//             </Typography>
//             <Typography
//               sx={{
//                 mt: 1,
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#b0b0b0"
//             >
//               Address
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#000"
//             >
//               { "N/A"}
//             </Typography>
//             <Typography
//               sx={{
//                 mt: 1,
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#b0b0b0"
//             >
//               Branch
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: { xs: 14, sm: 14, md: 14 },
//                 wordBreak: "break-word",
//                 overflowWrap: "break-word",
//               }}
//               color="#000"
//             >
//               { "N/A"}
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserCard;


// import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
// import React from 'react';
// import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
// import male from '../../../assets/images/male1.png';
// import female from '../../../assets/images/female.png';
// import './Patient.css';
// import './Register.css';

// function UserCard({ patientDetails }) {
//   const {
//     Patient_Name,
//     Patient_Ageyy,
//     Patient_Agemm,
//     Patient_Agedd,
//     Patient_Ismale,
//     Patient_Phno,
//     Patient_Email,
//     Patient_Code,
//     Patient_Address,
//     branchName,
//     Patient_mobile,
//     Patient_Note,
//   } = patientDetails || {}; // Destructure patientDetails or provide default empty values

//   // Fallback for patient image based on gender
//   const patientImage = Patient_Ismale === 'Male' ? male : Patient_Ismale === 'Female' ? female : commonDefault;

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card
//             sx={{
//               width: "100%",
//               maxWidth: "auto",
//               maxHeight: 700,
//               height: 512,
//               p: 2,
//               overflowY: "auto",
//               marginLeft: -1,
//               marginTop: -1
//             }}
//             className="firstcard"
//           >
//             <CardContent
//               sx={{
//                 height: "100%",
//                 overflowY: "hidden",
//               }}
//             >
//               {/* <Typography
//                 sx={{
//                   fontSize: { xs: 14, sm: 14, md: 14 },
//                   marginTop: -2,
//                   textAlign: "start",
//                   fontWeight: "Bold",
//                 }}
//                 color="#bd2937"
//                 variant="h6"
//               >
//                 Patient Details
//               </Typography> */}

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   marginTop: -2,
//                   marginLeft: -1
//                 }}
//               >
//                 {/* Patient Name */}
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                 >
//                   {Patient_Name}
//                 </Typography>

//                 {/* Age and Gender */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "flex-start",
//                     gap: 1,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: { xs: 14, sm: 14, md: 14 },
//                     }}
//                     color="black"
//                   >
//                     {/* {Patient_Ageyy ? `Age: ${Patient_Ageyy}y ${Patient_Agemm}m ${Patient_Agedd}d` : "Age"} */}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: { xs: 14, sm: 14, md: 14 },
//                     }}
//                     color="black"
//                   >
//                     {Patient_Ismale }
//                   </Typography>
//                 </Box>

//                 {/* Contact No */}
//                 <Typography
//                   sx={{
//                     mb: 1.5,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Contact No
//                 </Typography>
//                 <Typography
//                   sx={{
//                     mt: -2,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {Patient_Phno }
//                 </Typography>

//                 {/* Mobile No */}
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Mobile No
//                 </Typography>
//                 <Typography
//                   sx={{
//                     mt: 0,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {Patient_mobile }
//                 </Typography>

//                 {/* Email */}
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Email
//                 </Typography>
//                 <Typography
//                   sx={{
//                     mt: 0,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {Patient_Email }
//                 </Typography>

//                 {/* PatientID */}
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Patient Code
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {Patient_Code }
//                 </Typography>

//                 {/* Address */}
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Address
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {Patient_Address }
//                 </Typography>

//                 {/* Branch */}
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#b0b0b0"
//                 >
//                   Branch
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: 14, sm: 14, md: 14 },
//                     wordBreak: "break-word",
//                     overflowWrap: "break-word",
//                   }}
//                   color="#000"
//                 >
//                   {branchName }
//                 </Typography>

             
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserCard;


// import { Box, Card, CardContent, Grid, Typography,Avatar } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
// import male from '../../../assets/images/male1.png';
// import female from '../../../assets/images/female.png';
// import './Patient.css';
// import './Register.css';
// import axios from 'axios';

// function UserCard({ patientDetails,patientCode }) {
//   const [userData,setUserData] = useState({})
 
// console.log('patientcode',patientCode)
  
// useEffect(() => {
//   // console.log("Current Patient Code:", opdno);

//   const fetchPatientData = async () => {
  
    

//     // if (!patientCode) {
//     //   setError("No Patient_Code provided.");
//     //   setLoading(false);
//     //   return;
//     // }

//     try {
//       const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
//         YearId: 2425,
//         BranchId: 2,
//         PatCode: patientCode, 
//         editFlag: true
//       });

//       console.log("Response from API in userCard:", response.data); 

//       if (response.data && response.data.patDetails) {
//         setUserData(response.data.patDetails);
//       } else {
//         // setError("No patient data found.");
//       }
//     } catch (err) {
//       console.error("Failed to fetch patient data:", err);
//       // setError("Failed to fetch patient data.");
//     } finally {
//       // setLoading(false);
//     }
//   };

//   fetchPatientData();
// }, [patientCode]);

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card
//             sx={{
//               width: "100%",
//               maxWidth: "auto",
//               maxHeight: 700,
//               height: 512,
//               p: 2,
//               overflowY: "auto",
//               marginLeft: -1,
//               marginTop: -1
//             }}
//             className="firstcard"
//           >
//            <CardContent
//   sx={{
//     height: "100%",
//     overflowY: "hidden",
//   }}
// >
 

  

//   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
//     <Avatar
//       sx={{
//         width: { xs: 60, sm: 70, md: 80 },
//         height: { xs: 60, sm: 70, md: 80 },
//         mb: 2,
//       }}
//       alt="Patient Avatar"
//       src={
//         userData.Patient_Ismale === "Male"
//           ? male
//           : userData.Patient_Ismale === "Female"
//           ? female
//           : commonDefault
//       }
//     />
//   </Box>

//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "flex-start",
//       marginTop: -2,
//       marginLeft: -1,
//     }}
//   >
//     <Typography
//       variant="h6"
//       component="div"
//       sx={{
//         fontWeight: "bold",
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//     >
//       {userData.Patient_Name || "Patient Name"}
//     </Typography>

//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "flex-start",
//         gap: 1,
//       }}
//     >
//       <Typography
//         sx={{
//           fontWeight: "bold",
//           fontSize: { xs: 16, sm: 16, md: 16 },
//         }}
//         color="black"
//       >
//         {userData.Patient_Ageyy || "Age"}
//       </Typography>
//       <Typography
//         sx={{
//           fontWeight: "bold",
//           fontSize: { xs: 14, sm: 16, md: 16 },
//         }}
//         color="black"
//       >
//         {userData.Patient_Ismale || "Gender"}
//       </Typography>
//     </Box>

//     <Typography
//       sx={{
//         mb: 1.5,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#b0b0b0"
//     >
//       Contact No
//     </Typography>
//     <Typography
//       sx={{
//         mt: -2,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#000"
//     >
//       {userData.Patient_mobile || userData.Patient_Phno || "N/A"}
//     </Typography>

//     <Typography
//       sx={{
//         mt: 1,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#b0b0b0"
//     >
//       Email
//     </Typography>
//     <Typography
//       sx={{
//         mt: 0,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#000"
//     >
//       {userData.Patient_Email || "N/A"}
//     </Typography>

//     <Typography
//       sx={{
//         mt: 1,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#b0b0b0"
//     >
//       PatientID
//     </Typography>
//     <Typography
//       sx={{
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#000"
//     >
//       {userData.Patient_Code || "N/A"}
//     </Typography>

//     <Typography
//       sx={{
//         mt: 1,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#b0b0b0"
//     >
//       Address
//     </Typography>
//     <Typography
//       sx={{
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#000"
//     >
//       {userData.Patient_Address || "N/A"}
//     </Typography>

//     <Typography
//       sx={{
//         mt: 1,
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#b0b0b0"
//     >
//       Branch
//     </Typography>
//     <Typography
//       sx={{
//         fontSize: { xs: 16, sm: 16, md: 16 },
//         wordBreak: "break-word",
//         overflowWrap: "break-word",
//       }}
//       color="#000"
//     >
//       {userData.branchName || "N/A"}
//     </Typography>
//   </Box>
// </CardContent>

//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserCard;




// import { Box, Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
// import male from '../../../assets/images/male1.png';
// import female from '../../../assets/images/female.png';
// import './Patient.css';
// import './Register.css';
// import axios from 'axios';

// function UserCard({ patientDetails, patientCode }) {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchPatientData = async () => {
//       try {
//         const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
//           YearId: 2425,
//           BranchId: 2,
//           PatCode: patientCode,
//           editFlag: true
//         });

//         if (response.data && response.data.patDetails) {
//           setUserData(response.data.patDetails);
//         }
//       } catch (err) {
//         console.error("Failed to fetch patient data:", err);
//       }
//     };

//     fetchPatientData();
//   }, [patientCode]);

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card
//             sx={{
//               width: "100%",
//               maxWidth: "auto",
//               maxHeight: 700,
//               height: 512,
//               p: 2,
//               overflowY: "auto",
//               marginLeft: -1,
//               marginTop: -1
//             }}
//             className="firstcard"
//           >
//             <CardContent sx={{ height: "100%", overflowY: "hidden" }}>
//               {Object.keys(userData).length > 0 ? (
//                 <>
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
//                     <Avatar
//                       sx={{
//                         width: { xs: 60, sm: 70, md: 80 },
//                         height: { xs: 60, sm: 70, md: 80 },
//                         mb: 2,
//                       }}
//                       alt="Patient Avatar"
//                       src={
//                         userData.Patient_Ismale === "Male"
//                           ? male
//                           : userData.Patient_Ismale === "Female"
//                           ? female
//                           : commonDefault
//                       }
//                     />
//                   </Box>

//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: -2, marginLeft: -1 }}>
//                     <Typography
//                       variant="h6"
//                       component="div"
//                       sx={{
//                         fontWeight: "bold",
//                         fontSize: { xs: 16, sm: 16, md: 16 },
//                         wordBreak: "break-word",
//                         overflowWrap: "break-word",
//                       }}
//                     >
//                       {userData.Patient_Name || "Patient Name"}
//                     </Typography>

//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 1 }}>
//                       <Typography sx={{ fontWeight: "bold", fontSize: { xs: 16, sm: 16, md: 16 } }} color="black">
//                         {userData.Patient_Ageyy || "Age"}
//                       </Typography>
//                       <Typography sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 16, md: 16 } }} color="black">
//                         {userData.Patient_Ismale || "Gender"}
//                       </Typography>
//                     </Box>

//                     <Typography sx={{ mb: 1.5, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
//                       Contact No
//                     </Typography>
//                     <Typography sx={{ mt: -2, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
//                       {userData.Patient_mobile || userData.Patient_Phno || "N/A"}
//                     </Typography>

//                     <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
//                       Email
//                     </Typography>
//                     <Typography sx={{ mt: 0, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
//                       {userData.Patient_Email || "N/A"}
//                     </Typography>

//                     <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
//                       PatientID
//                     </Typography>
//                     <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
//                       {userData.Patient_Code || "N/A"}
//                     </Typography>

//                     <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
//                       Address
//                     </Typography>
//                     <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
//                       {userData.Patient_Address || "N/A"}
//                     </Typography>

//                     <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
//                       Branch
//                     </Typography>
//                     <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
//                       {userData.branchName || "N/A"}
//                     </Typography>
//                   </Box>
//                 </>
//               ) : (
//                 <Typography variant="h6" sx={{ textAlign: 'center', color: 'grey' }}>
//                   No patient data available.
//                 </Typography>
//               )}
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserCard;






import { Box, Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
import male from '../../../assets/images/male1.png';
import female from '../../../assets/images/female.png';
import './Patient.css';
import './Register.css';
import axios from 'axios';

function UserCard({ patientCode }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); // New state to manage loading

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
          YearId: 2425,
          BranchId: 2,
          PatCode: patientCode,
          editFlag: true
        });

        if (response.data && response.data.patDetails) {
          setUserData(response.data.patDetails);
        }
      } catch (err) {
        console.error("Failed to fetch patient data:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (patientCode) {
      fetchPatientData();
    }
  }, [patientCode]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              width: "100%",
              maxWidth: "auto",
              maxHeight: 700,
              height: 512,
              p: 2,
              overflowY: "auto",
              marginLeft: -1,
              marginTop: -1
            }}
            className="firstcard"
          >
            <CardContent sx={{ height: "100%", overflowY: "hidden" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    mb: 2,
                  }}
                  alt="Patient Avatar"
                  src={
                    userData.Patient_Ismale === "Male"
                      ? male
                      : userData.Patient_Ismale === "Female"
                      ? female
                      : commonDefault
                  }
                />
              </Box>

              {/* Only show other details after userData is fetched and form is submitted */}
              {!loading && Object.keys(userData).length > 0 ? (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: -2, marginLeft: -1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 16, sm: 16, md: 16 },
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {userData.Patient_Name || "Patient Name"}
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 1 }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: 16, sm: 16, md: 16 } }} color="black">
                      {userData.Patient_Ageyy || "Age"}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 16, md: 16 } }} color="black">
                      {userData.Patient_Ismale || "Gender"}
                    </Typography>
                  </Box>

                  <Typography sx={{ mb: 1.5, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Contact No
                  </Typography>
                  <Typography sx={{ mt: -2, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_mobile || userData.Patient_Phno || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Email
                  </Typography>
                  <Typography sx={{ mt: 0, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Email || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    PatientID
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Code || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Address
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Address || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Branch
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.branchName || "N/A"}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={{ textAlign: 'center', color: 'grey' }}>
                  {/* Fill in the form to see details. */}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;





// import { Box, Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
// import React from 'react';
// import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
// import male from '../../../assets/images/male1.png';
// import female from '../../../assets/images/female.png';
// import './Patient.css';
// import './Register.css';

// function UserCard({ patientDetails, isNewPatient }) {
//   // Check if the data is fetched or still empty
//   const isDataFetched = !!patientDetails && Object.keys(patientDetails).length > 0;

//   // Fallback for patient image based on gender
//   const patientImage = patientDetails?.Patient_Ismale === 'Male' ? male : 
//                        patientDetails?.Patient_Ismale === 'Female' ? female : commonDefault;

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Card
//           sx={{
//             width: "100%",
//             maxHeight: 700,
//             height: 512,
//             p: 2,
//             overflowY: "auto",
//             marginLeft: -1,
//             marginTop: -1
//           }}
//           className="firstcard"
//         >
//           <CardContent sx={{ height: "100%", overflowY: "hidden" }}>
//             <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
//               {/* Render only if this is an existing patient */}
//               {!isNewPatient && isDataFetched && (
//                 <>
//                   <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
//                     <Avatar
//                       sx={{
//                         width: { xs: 60, sm: 70, md: 80 },
//                         height: { xs: 60, sm: 70, md: 80 },
//                         mb: 2,
//                         ml: 6
//                       }}
//                       alt="Patient Avatar"
//                       src={patientImage}
//                     />
//                   </Box>
//                   <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 14, md: 14 } }}>
//                     {patientDetails?.Patient_Name || 'NA'}
//                   </Typography>

//                   {/* Age and Gender */}
//                   <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 1 }}>
//                     <Typography sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 14, md: 14 } }} color="black">
//                       {`${patientDetails?.Patient_Ageyy || 0} y`}
//                     </Typography>
//                     <Typography sx={{ fontWeight: "bold", fontSize: { xs: 14, sm: 14, md: 14 } }} color="black">
//                       {patientDetails?.Patient_Ismale}
//                     </Typography>
//                   </Box>

//                   {/* Contact No */}
//                   <Typography sx={{ mb: 1.5, fontSize: { xs: 14, sm: 14, md: 14 } }} color="#b0b0b0">
//                     Contact No
//                   </Typography>
//                   <Typography sx={{ fontSize: { xs: 14, sm: 14, md: 14 } }} color="#000">
//                     {patientDetails?.Patient_Phno}
//                   </Typography>

//                   {/* Other fields... */}
//                   {/* Repeat for Mobile No, Email, Patient Code, Address, Branch */}
//                 </>
//               )}

//               {/* If new patient, show nothing or a loading indicator */}
//               {isNewPatient && (
//                 <Typography variant="h6" sx={{ fontSize: { xs: 14, sm: 14, md: 14 }, color: "#b0b0b0", textAlign: "center", width: "100%", mt: 3 }}>
//                   No patient data available.
//                 </Typography>
//               )}
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

// export default UserCard;
