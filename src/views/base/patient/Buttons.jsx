import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Buttons.css'

function Buttons() {
  
 return (
   <>
   <Grid container spacing={2}>
   
    <Grid item xs={12}>
    {/* <Card sx={{marginLeft:-38,width:1105}} className='patients'> */}
    {/* <CardContent> */}
    
   {/* <Grid container spacing={2}>
                  <Grid item className='but'>
                  <Button
                      variant="contained"
                      // onClick={resetForm}
                      className="button"
                      sx={{  marginRight:1,
                        textTransform: 'none' 
                      }}
                    >
                      New
                    </Button>
                    <Button
                      variant="contained"
                      className="button"
                      // onClick={handleSaveOrUpdate}
                      sx={{  marginRight: 1,
                        textTransform: 'none' 
                       }}
                    >
                      Save
                    </Button>
                  
                    <Button
                      variant="contained"
                      className="button"
                      
                      sx={{  marginRight:1,
                         
                        textTransform: 'none' 
                      }}
                    >
                      Proceed to bill
                    </Button>
                   
                  </Grid>
                </Grid> */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px',marginRight:'-25px'}}>
  <Button
    variant="contained"
    className="button"
    sx={{
      textTransform: 'none',
      marginRight: 1,
    }}
  >
    New
  </Button>
  <Button
    variant="contained"
    className="button"
    sx={{
      textTransform: 'none',
      marginRight: 1,
    }}
  >
    Save
  </Button>
  <Button
    variant="contained"
    className="button"
    sx={{
      textTransform: 'none',
    }}
  >
    Proceed to bill
  </Button>
</div>

                
             
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    {/* </CardContent> */}
   {/* </Card> */}
    </Grid>
    </Grid>
   </>
  )
}

export default Buttons;