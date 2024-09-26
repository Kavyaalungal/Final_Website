// import { Box, Grid } from "@mui/material"
// import Header from "../Heading/head"
// import Patientdetails from "../PatientDetails/Patientdetails"
// import Maintable from "../Table/Table"
// import Footer from "../Footer/Footer"
// import CustomBreadcrumbs from "../Breadcrumbs"
// import './PattientMain.css';
// import Card from "../Card";
// import ImageCard from "../Card"

// function PatientMain() {
//     return (
//         <>
        
//          <Box 
//   sx={{ 
//     position: 'relative',
//     width: '100%', 
//     maxWidth: '1200px',
//     margin: '0 auto',  
//     transition: 'all 0.3s ease-in-out',
//     zoom:'0.9',

//     '@media (max-width: 1200px)': {
//       maxWidth: '1100px', 
//       marginLeft: '-2%', 
//     },

//     '@media (max-width: 992px)': {
//       maxWidth: '900px',
//       marginLeft: '-5%',
//     },

//     '@media (max-width: 768px)': {
//       maxWidth: '700px',
//       marginLeft: '-10%',
//     },

//     '@media (max-width: 576px)': {
//       maxWidth: '500px',
//       marginLeft: '-15%',
//     },

//     '@media (max-width: 360px)': {
//       maxWidth: '300px',
//       marginLeft: '-20%',
//     }
//   }}
// >
//   <Grid container spacing={1}>
//     <Grid item xs={12} sm={12}>
//       <Header />
//     </Grid>
//     <Grid item xs={12} sm={2.5}>
//       <Patientdetails />
//     </Grid>
//     <Grid item xs={12} sm={7}>
//       <Maintable />
//     </Grid>
//     <Grid item xs={12} sm={2.5}>
//       <ImageCard />
//     </Grid>

    
//   </Grid>
// </Box>


//         </>
//     )
// }

// export default PatientMain


import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Avatar, Link,Grid,TextField ,Radio,FormControl, FormControlLabel, RadioGroup, Button,} from "@mui/material";

import commonDefault from '../../../../assets/images/common.png';
import male from '../../../../assets/images/male1.png';
import female from '../../../../assets/images/female.png';
import '../PatientDetails/PatientDetails.css';
import { useLocation } from 'react-router-dom';
import { usePatient } from "../../patient/PatientContext";
import Patientdetails from "../PatientDetails/Patientdetails";
import useModal from "../../../../components/UseModal";
import Patient from "../../patient/Patient";
import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";

// import Header from "../Heading/head";
// import Patientdetails from "../PatientDetails/Patientdetails";
// import Maintable from "../Table/Table";
// import ImageCard from "../Card";
// import { useState } from "react";
// import { usePatient } from "../../patient/PatientContext";

function AddPrescription() {
  const { modal, modalContent, modalTitle, modalSize, toggleModal, closeModal } = useModal();
  const location = useLocation();
  const { opdno } = location.state || {};
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState('');
 const [loading, setLoading] = useState(true);

 const [selectedDocument, setSelectedDocument] = useState(null);
 const [previewImage, setPreviewImage] = useState(null); // State to store the image preview
 const [documentImages, setDocumentImages] = useState({
  lab: null,
  purchase: null,
  pharmacy: null,
}); 
const YearId = sessionStorage.getItem('latestYearId'||'selectedYrID')
const branchId = sessionStorage.getItem('selectedBranchKey');

 // Handle radio button change
 const handleRadioChange = (event) => {
   const selectedValue = event.target.value;
   setSelectedDocument(selectedValue);
   document.getElementById(`${selectedValue}Input`).click();
  //  // Trigger file upload based on selected document
  //  if (selectedValue === 'lab' || selectedValue === 'purchase' || selectedValue === 'pharmacy') {
  //    document.getElementById('fileInput').click();  // Trigger file input click
  //  }
 };

 // Handle file input change (file selected by user)
//  const handleFileChange = (event) => {
//    const file = event.target.files[0];
//    if (file) {
//      // Read the file and convert it to a URL to display the image
//      const reader = new FileReader();
//      reader.onloadend = () => {
//        setPreviewImage(reader.result); // Set the image URL to state
//      };
//      reader.readAsDataURL(file); // Read the file as a data URL
//    }
//  };

 // Handle file input change (file selected by user)
 const handleFileChange = (event, documentType) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Update the image state for the specific document type
      setDocumentImages((prevImages) => ({
        ...prevImages,
        [documentType]: reader.result,
      }));
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
};

// Handle removing the uploaded image for a specific document type
const handleImageClick = (documentType) => {
  setDocumentImages((prevImages) => ({
    ...prevImages,
    [documentType]: null,
  }));
  document.getElementById(`${documentType}Input`).value = ''; // Reset the file input for that document
};

// Handle removing the uploaded image
const handleRemoveImage = () => {
  setPreviewImage(null); // Clear the image preview
  document.getElementById('fileInput').value = ''; // Reset file input
};
//  // Handle removing the uploaded image by clicking on the image
//  const handleImageClick = () => {
//   setPreviewImage(null); // Clear the image preview
//   document.getElementById('fileInput').value = ''; // Reset file input
// };


 useEffect(() => {
  console.log("Current Patient Code:", opdno); // Log opdno

  const fetchPatientData = async () => {
    if (!opdno) {
      setError("No Patient_Code provided.");
       setLoading(false);
     return;
     }

     try {
       const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
         YearId: YearId,
         BranchId: branchId,
         PatCode: opdno,
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
 }, [opdno]);


return (
  <>
  <div>

     {loading && <p>Loading patient data...</p>}
       {error && <p>{error}</p>}
       <Grid container spacing={1}>
       <Grid item xs={12} sm={4}>
        {/* <Patientdetails  sx={{marginLeft:100}}/> */}
       {patientData ? (
        
            
        <Card
        sx={{
          width: "75%",
          maxWidth: "auto",
          maxHeight: 700,
          height: 510,
          p: 2,
          overflowY: "auto",
          marginLeft: -1,
          marginTop:-1
          
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
              fontSize: { xs: 14, sm: 14, md: 14 },
              marginTop:-2,
  
              textAlign: "start",
              fontWeight: "Bold",
            }}
            color="#bd2937"
            variant="h6"
          >
            Patient Details
          </Typography>
       
         
  
  <Box sx={{ mb: 2, textAlign: "right" }}>
  <Link
    href="#"
    onClick={(e) => {
      e.preventDefault();  
      toggleModal('Patient Registration', <Patient closeModal={closeModal}/>, 'lg');
    }}
    style={{ color: "#bd2937", textDecoration: "none",fontSize:12 }}
  >
    Edit
  </Link>



  <CModal visible={modal} onClose={closeModal} 
                size={modalSize}
                centered 
                className='modal custom-modal-close custom-modal-width custom-centered-modal'
                backdrop='static'
                // scrollable
                aria-labelledby="OptionalSizesExample2"
               >
          <CModalHeader className='custom-modal-header'>
            <CModalTitle className='custom-modal-title'>{modalTitle}</CModalTitle>
          </CModalHeader>
          <CModalBody className='c-modal-body no-scroll ' style={{zoom:'0.8'}}>
            {modalContent}
          </CModalBody>
        </CModal>




  {/* Modal implementation */}
  {/* <CModal visible={modal} onClose={closeModal} size={modalSize} centered backdrop="static">
    <CModalHeader>
      <CModalTitle>{modalTitle}</CModalTitle> 
    </CModalHeader>
    <CModalBody>{modalContent}</CModalBody>
  </CModal> */}
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
                mb: 2,
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
  
           
          </Box>
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop:-4,
              marginLeft:-1
            }}
          >
             <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 12, sm: 12, md: 12 },
           
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
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
                  
                 
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 12, sm: 12, md: 12 },
                  }}
                  color="black"
                >
                  {patientData.Patient_Ageyy || "Age"}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 12, sm: 12, md: 12 },
                  }}
                  color="black"
                >
                  {patientData.Patient_Ismale || "Gender"}
                </Typography>
              </Box>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: { xs: 12, sm: 12, md: 12 },
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
                fontSize: {xs: 12, sm: 12, md: 12},
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              color="#000"
            >
               {patientData.Patient_mobile || patientData.Patient_Phno || "N/A"}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: { xs: 12, sm: 12, md: 12 },
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
                fontSize: { xs: 12, sm: 12, md: 12 },
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
                fontSize: { xs: 12, sm: 12, md: 12},
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              color="#b0b0b0"
            >
              PatientID
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 12, md: 12 },
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
                fontSize: { xs: 12, sm: 12, md: 12 },
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              color="#b0b0b0"
            >
              Address
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 12, md: 12 },
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
                fontSize: { xs: 12, sm: 12, md: 12 },
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              color="#b0b0b0"
            >
              Branch
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 12, md: 12 },
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
              color="#000"
            >
              {patientData.branchName || "N/A"}
            </Typography>
          </Box>
        </CardContent>
      </Card>
  //       <Card
  //       sx={{
  //         width: "75%",
  //         maxWidth: "auto",
  //         maxHeight: 700,
  //         height: 520,
  //         p: 2,
  //         overflowY: "auto",
  //         marginLeft: -1,
  //         marginTop:-1
          
  //       }}
  //       className="firstcard"
  //     >
  //       <CardContent
  //         sx={{
  //           height: "100%",
  //           overflowY: "hidden",
  //         }}
  //       >
  
  
  // <Typography
  //           sx={{
  //             fontSize: { xs: 16, sm: 16, md: 16 },
  //             marginTop:-2,
  
  //             textAlign: "start",
  //             fontWeight: "Bold",
  //           }}
  //           color="#bd2937"
  //           variant="h6"
  //         >
  //           Patient Details
  //         </Typography>
       
  //         <Box sx={{ mb: 2
  // , textAlign: "right" }}>
  //           <Link
  //             href="#"
  //             sx={{
  //               fontSize: { xs: 14, sm: 16, md: 16 },
  //               color: "#bd2937",
               
  //               textDecoration: "none",
  //               '&:hover': {
  //                 textDecoration: "underline",
  //               },
  //             }}
  //           >
  //             Edit
  //           </Link>
  //         </Box>
  
      
  
  //         <Box
  //           sx={{
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             mb: 2,
  //           }}
  //         >
  //           <Avatar
  //             sx={{
  //               width: { xs: 60, sm: 70, md: 80 },
  //               height: { xs: 60, sm: 70, md: 80 },
  //               mb: 2,
  //             }}
  //             alt="Patient Avatar"
  //             src={
  //               patientData.Patient_Ismale === "Male"
  //                 ? male
  //                 : patientData.Patient_Ismale === "Female"
  //                 ? female
  //                 : commonDefault
  //             }
  //           />
  
         
  //         </Box>
  
  //         <Box
  //           sx={{
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "flex-start",
  //             marginTop:-2,
  //             marginLeft:-1
  //           }}
  //         >
  //            <Typography
  //               variant="h6"
  //               component="div"
  //               sx={{
  //                 fontWeight: "bold",
  //                 fontSize: { xs: 16, sm: 14, md: 14 },
                  
  //               }}
  //             >
  //               {patientData.Patient_Name || "Patient Name"}
  //             </Typography>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 flexDirection: "row",
  //                 justifyContent: "flex-start",
  //                 gap: 1,
                  
                 
  //               }}
  //             >
  //               <Typography
  //                 sx={{
  //                   fontWeight: "bold",
  //                   fontSize: { xs: 16, sm: 16, md: 16 },
  //                 }}
  //                 color="black"
  //               >
  //                 {patientData.Patient_Ageyy || "Age"}
  //               </Typography>
  //               <Typography
  //                 sx={{
  //                   fontWeight: "bold",
  //                   fontSize: { xs: 14, sm: 16, md: 16 },
  //                 }}
  //                 color="black"
  //               >
  //                 {patientData.Patient_Ismale || "Gender"}
  //               </Typography>
  //             </Box>
  //           <Typography
  //             sx={{
  //               mb: 1.5,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#b0b0b0"
  //           >
  //             Contact No
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: -2,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#000"
  //           >
  //              {patientData.Patient_mobile || patientData.Patient_Phno || "N/A"}
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: 1,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#b0b0b0"
  //           >
  //             Email
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: 0,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#000"
  //           >
  //             {patientData.Patient_Email || "N/A"}
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: 1,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#b0b0b0"
  //           >
  //             PatientID
  //           </Typography>
  //           <Typography
  //             sx={{
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#000"
  //           >
  //             {patientData.Patient_Code || "N/A"}
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: 1,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#b0b0b0"
  //           >
  //             Address
  //           </Typography>
  //           <Typography
  //             sx={{
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#000"
  //           >
  //             {patientData.Patient_Address || "N/A"}
  //           </Typography>
  //           <Typography
  //             sx={{
  //               mt: 1,
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#b0b0b0"
  //           >
  //             Branch
  //           </Typography>
  //           <Typography
  //             sx={{
  //               fontSize: { xs: 14, sm: 12, md: 12 },
  //               wordBreak: "break-word",
  //               overflowWrap: "break-word",
  //             }}
  //             color="#000"
  //           >
  //             {patientData.branchName || "N/A"}
  //           </Typography>
  //         </Box>
  //       </CardContent>
  //     </Card>
      ) : (
        <p>No patient data available.</p>
      )}
        </Grid>


        <Grid item xs={12} sm={8}>
  <Card
    sx={{
      width: "115%",
      maxWidth: "auto",
      maxHeight: 700,
      height: 510,
      p: 2,
      overflowY: "auto",
      marginLeft: -9,
      marginTop: -1,
    }}
    className="firstcard"
  >
    <CardContent
      sx={{
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <FormControl component="fieldset">
          <RadioGroup row value={selectedDocument} onChange={handleRadioChange}>
            <FormControlLabel
              value="lab"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 1</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
            <FormControlLabel
              value="purchase"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 2</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
            <FormControlLabel
              value="pharmacy"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 3</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
          </RadioGroup>
        </FormControl>

        <Box display="flex" >
          <Button
            sx={{
              textTransform: 'none',
              marginRight: 1,
              backgroundColor: '#bb4d58',
              padding: '4px 8px',
              fontSize: '0.75rem',
              '&:hover': {
                backgroundColor: '#bd2937',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            }}
            variant="contained"
            color="success"
            size="small"
            onClick={() => document.getElementById('fileInput').click()} // Open file dialog
          >
            Scan
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              marginRight: 1,
              backgroundColor: '#bb4d58',
              padding: '4px 8px',
              fontSize: '0.75rem',
              '&:hover': {
                backgroundColor: '#bd2937',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            }}
            variant="contained"
            color="success"
            size="small"
            onClick={() => alert('Camera feature coming soon!')} // Placeholder for Camera button
          >
            Camera
          </Button>
        </Box>
      </Box>

         {/* Hidden file inputs for each document type */}
         <input
        type="file"
        id="labInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(event) => handleFileChange(event, 'lab')} // Handle upload for Document 1 (lab)
      />
      <input
        type="file"
        id="purchaseInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(event) => handleFileChange(event, 'purchase')} // Handle upload for Document 2 (purchase)
      />
      <input
        type="file"
        id="pharmacyInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(event) => handleFileChange(event, 'pharmacy')} // Handle upload for Document 3 (pharmacy)
      />

      {/* Display the uploaded images for each document */}
      {documentImages.lab && (
        <Box mt={2}>
          <Typography variant="body2">Document 1 (Click to Remove):</Typography>
          <img
            src={documentImages.lab}
            alt="Document 1"
            style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('lab')} // Remove Document 1 image
          />
        </Box>
      )}

      {documentImages.purchase && (
        <Box mt={2}>
          <Typography variant="body2">Document 2 (Click to Remove):</Typography>
          <img
            src={documentImages.purchase}
            alt="Document 2"
            style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('purchase')} // Remove Document 2 image
          />
        </Box>
      )}

      {documentImages.pharmacy && (
        <Box mt={2}>
          <Typography variant="body2">Document 3  (Click to Remove):</Typography>
          <img
            src={documentImages.pharmacy}
            alt="Document 3"
            style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('pharmacy')} // Remove Document 3 image
          />
        </Box>
      )}
    </CardContent>
  </Card>
</Grid>

        {/* <Grid item xs={12} sm={8}>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <FormControl component="fieldset">
          <RadioGroup row>
            <FormControlLabel
              value="lab"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 1</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
            <FormControlLabel
              value="purchase"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 3</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
            <FormControlLabel
              value="pharmacy"
              control={<Radio size="small" />}
              label={<Typography variant="body2">Document 3</Typography>}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
            />
          </RadioGroup>
        </FormControl>

        <Box display="flex">
  <Button
    sx={{
      textTransform: 'none',
      marginRight: 1,
      backgroundColor: '#bb4d58', // Default background color
      padding: '4px 8px', // Smaller padding for a more compact size
      fontSize: '0.75rem', // Reduce font size
      '&:hover': {
        backgroundColor: '#bd2937', // Background color on hover
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
      },
    }}
    variant="contained"
    color="success"
    size="small" // Use small size
  >
    Scan
  </Button>
  <Button
    sx={{
      textTransform: 'none',
      marginRight: 1,
      backgroundColor: '#bb4d58', // Default background color
      padding: '4px 8px', // Smaller padding for a more compact size
      fontSize: '0.75rem', // Reduce font size
      '&:hover': {
        backgroundColor: '#bd2937', // Background color on hover
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
      },
    }}
    variant="contained"
    color="success"
    size="small" // Use small size
  >
    Camera
  </Button>
</Box>

      </Box>
    </Grid> */}
        </Grid>
       
   </div>

   </>
  );
}

export default AddPrescription;
