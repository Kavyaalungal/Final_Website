
import { Grid,TextField} from "@mui/material"

function Labno() {
    return (
        <>
           
                    <Grid container direction="column" spacing={2}>
                        {/* Row for Lab No and icons */}
                        <Grid item>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <TextField
                                        id="outlined-basic"
                                        label="Lab No"
                                        variant="outlined"
                                        size="small"
                                        sx={{ fontSize: '1rem', width: '150px', height: '50px', color: 'black',
                                            border: 'none', // Remove border
                                            '& fieldset': {
                                                border: 'none', // Remove border around the dropdown
                                            },
                                            '&:focus': {
                                                border: 'none', // Remove border when focused
                                            },
                                         }}
                                    />
                                </Grid> 
                                
                            </Grid>
                        </Grid>
                    </Grid>
               


        </>
    )
}

export default Labno