import {  Card, CardContent,  Grid, MenuItem, TextField } from '@mui/material'
import React, {  useState } from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Patient.css'
import './Register.css';
import Buttons from './Buttons';

function Additional({patientDetails,setPatientDetails,handleGenderChange, closeModal ,resetForm,fetchNewPatientId,
  searchCriteria,errors,setErrors,isEditMode,searchValue,suggestions,renderOption,setIsEditMode,calculateAge,
  handleTitleChange,fetchSuggestions,handlePatientIdChange,handleSelectPatient,handleSearchValueChange,handleNewPatient,
  handleSearchCriteriaChange,handleDateOfBirthChange,handleAgeChange,isSaving,
  newPatientId,handleSaveOrUpdate,flag}) {
  const [selectedId, setSelectedId] = useState('');
  const [idFile, setIdFile] = useState(null);

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleFileChange = (event) => {
    setIdFile(event.target.files[0]);
  };
 return (
   <>
   <Grid container spacing={2}>
   
   <Grid item xs={12}>
  <Card
    sx={{
      marginLeft: { xs: -2, sm: -3.5 }, 
      width: { xs: 370, sm: 830 ,md:720},  
      height: { xs: 'auto', sm: 435 }, 
      marginTop: { xs: 0, sm: -1 },
    }}
    className='customwidth customheight'
  >
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
            id="pin"
            label="PIN"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="passport"
            label="Passport"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="state"
            label="State"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="district"
            label="District"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
          select
            id="localbodytype"
            label="Local Body Type"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          >
            <MenuItem>Panchayath</MenuItem>
            <MenuItem>Muncipality</MenuItem>
            <MenuItem>Corporation</MenuItem>
          </TextField>
        </Grid>
        

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="localbody"
            label="Local Body"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

       
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="village"
            label="Village"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            select
            id="nationalIdType"
            value={selectedId}
            onChange={handleIdChange}
            label="National ID"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '16px' } }}
          >
            <MenuItem value="Patient ID">Select ID Type</MenuItem>
            <MenuItem value="Name">Passport</MenuItem>
            <MenuItem value="Email">Driver's License</MenuItem>
            <MenuItem value="Phone">National ID Card</MenuItem>
            <MenuItem value="Phone">Voter ID</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <input
            type="file"
            id="nationalIdUpload"
            className="form-control"
            onChange={handleFileChange}
            disabled={!selectedId}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="note"
            label="Note"
            variant="outlined"
            multiline
            rows={7}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

       
      </Grid>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </CardContent>
  </Card>
</Grid>

    <Grid item xs={12} >
    <Buttons  resetForm={resetForm}
       fetchNewPatientId={fetchNewPatientId} 
       isEditMode={isEditMode}
       handleNewPatient={handleNewPatient}
        closeModal={closeModal} 
        newPatientId={newPatientId} 
        isSaving={isSaving}
         handleSaveOrUpdate={handleSaveOrUpdate}
          flag={flag}/>
     
    </Grid>

    </Grid>
   </>
  )
}

export default Additional;