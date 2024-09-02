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
            <Box sx={{
                zoom:0.9,
                padding: 1,
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} sm={2.5}>
                        <Patientdetails />
                    </Grid>
                   
                    <Grid item xs={12} sm={7}>
                        <Maintable />
                        {/* <Grid item spacing={1}>
                        <Footer/>
                    </Grid> */}
                    
                    </Grid>
                    <Grid item xs={12} sm={2.5}>
                      <ImageCard/>
                    </Grid>
                    
                   


                </Grid>
               

            </Box>

        </>
    )
}

export default PatientMain
