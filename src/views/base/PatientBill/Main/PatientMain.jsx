import { Box, Grid } from "@mui/material"
import Header from "../Heading/head"
import Patientdetails from "../PatientDetails/Patientdetails"
import Maintable from "../Table/Table"
import Footer from "../Footer/Footer"
import CustomBreadcrumbs from "../Breadcrumbs"
import './PattientMain.css';
import Card from "../Card";
import ImageCard from "../Card"

function PatientMain() {
    return (
        <>
         {/* <CustomBreadcrumbs current="Lab Invoice" /> */}
         <Box 
  sx={{ 
    position: 'relative',
    width: '100%', 
    maxWidth: '1200px', // Initially, the max-width is set
    margin: '0 auto',   // Center-align at full zoom
    transition: 'all 0.3s ease-in-out',
    zoom:'0.9',

    '@media (max-width: 1200px)': {
      maxWidth: '1100px', // Reduce width at lower resolutions
      marginLeft: '-2%',  // Slightly move left
    },

    '@media (max-width: 992px)': {
      maxWidth: '900px',
      marginLeft: '-5%',
    },

    '@media (max-width: 768px)': {
      maxWidth: '700px',
      marginLeft: '-10%',
    },

    '@media (max-width: 576px)': {
      maxWidth: '500px',
      marginLeft: '-15%',
    },

    '@media (max-width: 360px)': {
      maxWidth: '300px',
      marginLeft: '-20%',
    }
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


        </>
    )
}

export default PatientMain
