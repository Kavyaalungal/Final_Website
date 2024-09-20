import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Avatar, Link,Grid,TextField } from "@mui/material";
import avatar from "../../../../assets/images/female.png";
import commonDefault from '../../../../assets/images/common.png';
import male from '../../../../assets/images/male1.png';
import female from '../../../../assets/images/female.png';
// import './PatientDetails.css';
import { useLocation } from 'react-router-dom';
import { usePatient } from "../../patient/PatientContext";
function AddPrescription() {
  const location = useLocation();
  const { patientCode } = location.state || {}; // Ensure this is set correctly
 const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState('');
 const [loading, setLoading] = useState(true);

 useEffect(() => {
      console.log("Current Patient Code:", patientCode); // Log patientCode
  
      const fetchPatientData = async () => {
        if (!patientCode) {
          setError("No Patient_Code provided.");
           setLoading(false);
         return;
         }
  
         try {
           const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
             YearId: 2425,
             BranchId: 2,
             PatCode: patientCode,
             editFlag: true
           });
  
           console.log("Response from API:", response.data); // Check this log
  
           if (response.data && response.data.patDetails) {
             setPatientData(response.data.patDetails);
           } else {
             setError("No patient data found.");
           }
         } catch (err) {
           console.error("Failed to fetch patient data:", err);
           setError("Failed to fetch patient data.");
         } finally {
           setLoading(false);
         }
       };
  
       fetchPatientData();
     }, [patientCode]);
  
  return (
    <>


<Box 
      sx={{ 
        position: 'relative',
        width: '100%', 
        maxWidth: '1200px',
        margin: '0 auto',  
        transition: 'all 0.3s ease-in-out',
        zoom: '0.9',
      }}
    >
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm={2.5}>
        <div>

{loading && <p>Loading patient data...</p>}
  {error && <p>{error}</p>}
  {patientData ? (
   <Card
   sx={{
     width: "100%",
     maxWidth: "auto",
     maxHeight: 700,
     height: 680,
     p: 2,
     overflowY: "auto",
     marginLeft: -25,
     marginTop: -3,
   }}
   className="firstcard"
 >
   <CardContent
     sx={{
       height: "100%",
       overflowY: "hidden",
     }}
   >


<Typography
       sx={{
         fontSize: { xs: 16, sm: 18, md: 16 },
         mb: 1,
         mt: -2,
         textAlign: "start",
         fontWeight: "Bold",
       }}
       color="#bd2937"
       variant="h6"
     >
       Patient Details
     </Typography>
     {/* Hyperlink at the top of the card */}
     <Box sx={{ mb: 2
, textAlign: "right" ,mt:-2}}>
       <Link
         href="#"
         sx={{
           fontSize: { xs: 14, sm: 16, md: 16 },
           color: "#bd2937",
           // fontWeight: "bold",
           textDecoration: "none",
           '&:hover': {
             textDecoration: "underline",
           },
         }}
       >
         Edit
       </Link>
     </Box>

 

     <Box
       sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         mb: 2,
       }}
     >
       <Avatar
         sx={{
           width: { xs: 60, sm: 70, md: 80 },
           height: { xs: 60, sm: 70, md: 80 },
           mb: 3,
         }}
         alt="Patient Avatar"
         src={
           patientData.Patient_Ismale === "Male"
             ? male
             : patientData.Patient_Ismale === "Female"
             ? female
             : commonDefault
         }
       />

       <Box
         sx={{
           display: "flex",
           flexDirection: "column",
           alignItems: "flex-start",
           ml: -8,
         }}
       >
         <Typography
           variant="h6"
           component="div"
           sx={{
             fontWeight: "bold",
             fontSize: { xs: 17, sm: 17, md: 17 },
           }}
         >
           {patientData.Patient_Name || "Patient Name"}
         </Typography>

         <Box
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "flex-start",
             gap: 1,
             mt: -1,
           }}
         >
           <Typography
             sx={{
               fontWeight: "bold",
               fontSize: { xs: 14, sm: 16, md: 15 },
             }}
             color="black"
           >
             {patientData.Patient_Ageyy || "Age"}
           </Typography>
           <Typography
             sx={{
               fontWeight: "bold",
               fontSize: { xs: 14, sm: 16, md: 15 },
             }}
             color="black"
           >
             {patientData.Patient_Ismale || "Gender"}
           </Typography>
         </Box>
       </Box>
     </Box>

     <Box
       sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "flex-start",
         mt: 2,
       }}
     >
       <Typography
         sx={{
           mb: 1.5,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#b0b0b0"
       >
         Contact No
       </Typography>
       <Typography
         sx={{
           mt: -2,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#000"
       >
         {patientData.Patient_mobile || "N/A"}
       </Typography>
       <Typography
         sx={{
           mt: 1,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#b0b0b0"
       >
         Email
       </Typography>
       <Typography
         sx={{
           mt: 0,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#000"
       >
         {patientData.Patient_Email || "N/A"}
       </Typography>
       <Typography
         sx={{
           mt: 1,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#b0b0b0"
       >
         PatientID
       </Typography>
       <Typography
         sx={{
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#000"
       >
         {patientData.Patient_Code || "N/A"}
       </Typography>
       <Typography
         sx={{
           mt: 1,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#b0b0b0"
       >
         Address
       </Typography>
       <Typography
         sx={{
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#000"
       >
         {patientData.Patient_Address || "N/A"}
       </Typography>
       <Typography
         sx={{
           mt: 1,
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#b0b0b0"
       >
         Branch
       </Typography>
       <Typography
         sx={{
           fontSize: { xs: 14, sm: 16, md: 16 },
           wordBreak: "break-word",
           overflowWrap: "break-word",
         }}
         color="#000"
       >
         {patientData.branch || "N/A"}
       </Typography>
     </Box>
   </CardContent>
 </Card>
 ) : (
   <p>No patient data available.</p>
 )}





<Grid item xs>
<Box
 sx={{
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems: 'center',
   width:300,
   mt:1,
   ml:-25,
   '@media (max-width: 768px)': {
    // Adjust font size for smaller screens
     marginLeft: '87px',
         // Remove negative margin for smaller screens
   },
   '@media (max-width: 820px)': {
     fontSize: '1.5rem',  // Adjust font size for smaller screens
     marginLeft: '50px',
     marginTop:59     // Remove negative margin for smaller screens
   },
   '@media (max-width: 1024px)': {
     fontSize: '1.5rem',  // Adjust font size for smaller screens
     marginLeft: '-165px',
     marginTop:110     // Remove negative margin for smaller screens
   },
 
 }}
 className='userinfo'
>
 <Typography
   variant="body1"
   sx={{
     fontWeight: 'bold',
   }}
 >
   User Info: 
 </Typography>
 <Typography
   variant="body1"
   sx={{
     fontWeight: 'bold',
   }}
 >

 </Typography>
</Box>

</Grid> 
 </div>
        </Grid>
       
      </Grid>
    </Box>


     </>
  );
}

export default AddPrescription;










// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ProceedToBill() {
//   const location = useLocation();
//   const { patientCode } = location.state || {};

//   useEffect(() => {
//     if (patientCode) {
//       console.log("Patient Code received:", patientCode);
//       // Fetch data or perform other actions using patientCode
//     } else {
//       console.error("No Patient_Code found in state.");
//     }
//   }, [patientCode]);

//   return (
//     <div style={{ marginLeft:-20}}>
//       {/* <h1>Proceed to Bill</h1> */}
//       {patientCode ? (
//         <p>Patient Code: {patientCode}</p>
//       ) : (
//         <p>No Patient Code provided.</p>
//       )}
//       {/* Other components or logic to display billing information */}
//     </div>
//   );
// }

// export default ProceedToBill;









// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import { Card, CardContent, Typography, Box, Avatar, Link,Grid,TextField } from "@mui/material";
// import commonDefault from '../../../../assets/images/common.png';
// import male from '../../../../assets/images/male1.png';
// import female from '../../../../assets/images/female.png';
// const ProceedToBill = () => {
//   const location = useLocation();
//   const { patientCode } = location.state || {}; // Ensure this is set correctly
//   const [patientData, setPatientData] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("Current Patient Code:", patientCode); // Log patientCode

//     const fetchPatientData = async () => {
//       if (!patientCode) {
//         setError("No Patient_Code provided.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
//           YearId: 2425,
//           BranchId: 2,
//           PatCode: patientCode,
//           editFlag: true
//         });

//         console.log("Response from API:", response.data); // Check this log

//         if (response.data && response.data.patDetails) {
//           setPatientData(response.data.patDetails);
//         } else {
//           setError("No patient data found.");
//         }
//       } catch (err) {
//         console.error("Failed to fetch patient data:", err);
//         setError("Failed to fetch patient data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientData();
//   }, [patientCode]);

//   return (
//     <div>
//       {/* <h1>Proceed to Bill</h1> */}
//       {loading && <p>Loading patient data...</p>}
//       {error && <p>{error}</p>}
//       {patientData ? (
//         <div style={{marginLeft:-100}}>
//           <h2>Patient Details:</h2>
// <Box
// sx={{
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   mb: 2,
// }}
// >
// <Avatar
//   sx={{
//     width: { xs: 60, sm: 70, md: 80 },
//     height: { xs: 60, sm: 70, md: 80 },
//     mb: 3,
//   }}
//   alt="Patient Avatar"
//   src={
//     patientData.Patient_Ismale === "Male"
//       ? male
//       : patientData.Patient_Ismale === "Female"
//       ? female
//       : commonDefault
//   }
// />

// <Box
//   sx={{
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     ml: -8,
//   }}
// >
//   <Typography
//     variant="h6"
//     component="div"
//     sx={{
//       fontWeight: "bold",
//       fontSize: { xs: 17, sm: 17, md: 17 },
//     }}
//   >
//     {patientData.Patient_Name || "Patient Name"}
//   </Typography>

//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "flex-start",
//       gap: 1,
//       mt: -1,
//     }}
//   >
//     <Typography
//       sx={{
//         fontWeight: "bold",
//         fontSize: { xs: 14, sm: 16, md: 15 },
//       }}
//       color="black"
//     >
//       {patientData.Patient_Ageyy || "Age"}
//     </Typography>
//     <Typography
//       sx={{
//         fontWeight: "bold",
//         fontSize: { xs: 14, sm: 16, md: 15 },
//       }}
//       color="black"
//     >
//       {patientData.Patient_Ismale || "Gender"}
//     </Typography>
//   </Box>
// </Box>
// </Box>
//           <p><strong>Title:</strong> {patientData.Patient_Title}</p>
//           <p><strong>Name:</strong> {patientData.Patient_Name}</p>
//           <p><strong>Age:</strong> {patientData.Patient_Ageyy} years {patientData.Patient_Agemm} months {patientData.Patient_Agedd} days</p>
//            <p><strong>Date of Birth:</strong> {new Date(patientData.Patient_Dob).toLocaleDateString()}</p>
//            <p><strong>Gender:</strong> {patientData.Patient_Ismale}</p>
//            <p><strong>Phone Number:</strong> {patientData.Patient_Phno}</p>
//            <p><strong>Email:</strong> {patientData.Patient_Email}</p>
//           <p><strong>Address:</strong> {patientData.Patient_Address || "N/A"}</p>
//         </div>
//        ) : (
//          <p>No patient data available.</p>
//        )}
//      </div>
//    );
//  };
// export default ProceedToBill;


