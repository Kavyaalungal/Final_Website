import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Buttons.css'
import Additional from './Additional';

function Buttons({handleSaveOrUpdate,resetForm}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/proceedtobill'); 
  };
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
                <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
  <Button
    variant="contained"
    className="button"
    sx={{
      textTransform: 'none',
      marginRight: 1,
    }}
    onClick={() => {
      resetForm();
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
    onClick={() => {
      handleSaveOrUpdate();
      toast.success('Data saved successfully!');
    }}
  >
    Save
  </Button>
  <Button
    onClick={handleButtonClick}
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