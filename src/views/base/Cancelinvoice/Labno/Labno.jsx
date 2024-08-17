
import { Card,CardContent,Grid,TextField} from "@mui/material"

function Labno() {
    return (
        <>
            <Card sx={{ width: 'auto'  }}>
                <CardContent>
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
                                        sx={{ fontSize: '1rem', width: '150px', height: '50px', color: 'black' }}
                                    />
                                </Grid> 
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>


        </>
    )
}

export default Labno