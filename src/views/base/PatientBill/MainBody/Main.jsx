import { Box, Grid } from "@mui/material";
import Header from "../Header/Header";
import Patientdetails from "../PatientDetails/Patientdetails";
import Maintable from "../Main/Maintable";
import Footer from "../Footer/Footer";

function ProceedToBill() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '110vh',  
        width: '100vw',   
        backgroundColor: 'white',
        padding: 1,
        boxSizing: 'border-box' 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
          borderRadius: 1,
          padding: 2,
          backgroundColor: '#fef6f4',
          width: '120%',
          maxWidth: 1200,
          minHeight: 600, // Minimum height to ensure space
          boxSizing: 'border-box',
          marginTop:-4
        }}

      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Patientdetails />
          </Grid>
          <Grid item xs={12} sm={9} >
            <Maintable />
           
          </Grid>
          <Grid container >
            <Grid item xs={12} sm={12}>
            
              <Footer />
       
            </Grid>
          </Grid>

        </Grid>

      </Box>
     </Box>
  );
}

export default ProceedToBill;
