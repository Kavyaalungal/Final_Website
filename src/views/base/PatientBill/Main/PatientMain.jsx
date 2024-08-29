import { Box, Grid } from "@mui/material"
import Header from "../Heading/head"
import Patientdetails from "../PatientDetails/Patientdetails"
import Maintable from "../Table/Table"
import Footer from "../Footer/Footer"
import CustomBreadcrumbs from "../Breadcrumbs"


function PatientMain() {
    return (
        <>
         <CustomBreadcrumbs current="Lab Invoice" />
            <Box sx={{

                padding: 1,
                zoom: 0.8
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        {/* <Header /> */}
                    </Grid>
                    <Grid item xs={12} sm={2.5}>
                        <Patientdetails />
                    </Grid>
                    <Grid item xs={12} sm={9.5}>
                        <Maintable />
                        <Grid item spacing={1}>
                        <Footer/>
                    </Grid>
                    </Grid>
                   


                </Grid>
               

            </Box>

        </>
    )
}

export default PatientMain
