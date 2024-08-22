import { Box, Grid } from "@mui/material"
import Header from "../Heading/head"
import Patientdetails from "../PatientDetails/Patientdetails"
import Maintable from "../Table/Table"
import Footer from "../Footer/Footer"


function PatientMain() {
    return (
        <>
            <Box sx={{
                border: '1px solid black',
                padding: 1,
                marginTop: 1,

                marginLeft: 10,
                marginRight: 10,
                height: 'auto',
                width: 'auto',
                backgroundColor: '#fef6f4',
                overflow: 'auto', // Enable scrolling
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar in WebKit browsers
    },
    scrollbarWidth: 'none',
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12} sm={2.5}>
                        <Patientdetails />
                    </Grid>
                    <Grid item xs={12} sm={9.5}>
                        <Maintable />
                    </Grid>


                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12}>

                    <Footer/>
                    </Grid>

                </Grid>

            </Box>

        </>
    )
}

export default PatientMain
