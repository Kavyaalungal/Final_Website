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
import { Box, Grid } from "@mui/material";
import Header from "../Heading/head";
import Patientdetails from "../PatientDetails/Patientdetails";
import Maintable from "../Table/Table";
import ImageCard from "../Card";
import { useState } from "react";
import { usePatient } from "../../patient/PatientContext";

function PatientMain() {
return (
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
        <Grid item xs={12} sm={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Patientdetails />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Maintable />
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <ImageCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PatientMain;
