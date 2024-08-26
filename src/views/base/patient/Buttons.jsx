import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Buttons.css'
import Additional from './Additional';

function Buttons({handleSaveOrUpdate,resetForm,fetchNewPatientId,isEditMode,handleNewPatient,saveNewPatient,updatePatient}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/proceedtobill'); 
  };
 return (
   <>
   <Grid container spacing={2}>
   
    <Grid item xs={12}>
  <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
 
  <Button
  variant="contained"
   className="button"
  sx={{ textTransform: 'none', marginRight: 1 }}
  onClick={handleNewPatient}
>
  New
</Button>
  <Button
  variant="contained"
  className="button"
  sx={{ textTransform: 'none', marginRight: 1 }}
  onClick={updatePatient}

>
Update
</Button>
<Button
  variant="contained"
  className="button"
  sx={{ textTransform: 'none', marginRight: 1 }}
  onClick={saveNewPatient}

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

    </Grid>
    </Grid>
   </>
  )
}

export default Buttons;