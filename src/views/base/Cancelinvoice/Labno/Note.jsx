import { Card, CardContent, Grid, TextField,Button,Box } from "@mui/material"


function Note() {
  return (
   <>
   <Card sx={{width:'auto',marginTop:1,height:250}}>
    <CardContent>
        <Grid container spacing={1}>
            <Grid item>
                <TextField
                 id="outlined"
                 label='Inv Amount'
                 variant="outlined"
                 size="small"
                 sx={{fontSize:'1rem'}}
                />


            </Grid>
            <Grid item>
            <TextField
            id="outlined-basic"
            label="Note"
            variant="outlined"
            size="small"
            sx={{ fontSize: '1rem', width: '350px', height: '250px', color: 'black' }}
            multiline
            rows={4}
            />

            </Grid>
            <Grid item xs={12} sx={{ marginTop: -15 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="small">
            Save
        </Button>
    </Box>
</Grid>


        </Grid>
    </CardContent>

   </Card>
   
   </>
  )
}

export default Note