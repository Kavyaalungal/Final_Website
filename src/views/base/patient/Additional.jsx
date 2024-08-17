import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function Additional() {
 return (
   <>
   <Grid container spacing={2}>
   
    <Grid item xs={12}>
    <Card sx={{marginLeft:-3.5,width:830}}>
    <CardContent>
  
                <Grid container spacing={2}>
                   
                <Grid item xs={12} sm={4} md={4}>
                  <TextField
                      id="location"
                      label="Location"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                  <TextField
                      id="nationalid"
                      label="National ID"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                  <TextField
                      id="pin"
                      label="PIN"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                 
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="passport"
                      label="Passport"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="country"
                      label="Country"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="state"
                      label="State"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
           
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="district"
                      label="District"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="city"
                      label="City"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="village"
                      label="Village"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                 
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="localbody"
                      label="Local Body"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <TextField
                      id="localbodytype"
                      label="Local Body Type"
                      variant="outlined"
                    
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                     
                    />
                  </Grid>
                 
                 
                  <Grid item xs={12}>
                  <TextareaAutosize
          minRows={4}
          maxRows={6}

          style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#eaeaea ', borderWidth: '1px', borderStyle: 'solid' }}
          placeholder="Note"
         
        />
                  </Grid>

                  {/* </Grid> */}

                  

                </Grid>

             
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </CardContent>
   </Card>
    </Grid>
    </Grid>
   </>
  )
}

export default Additional;