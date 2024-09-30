import { Autocomplete, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField,InputAdornment } from '@mui/material'
import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './Patient.css';
import './Register.css';
import Buttons from './Buttons';
import SearchIcon from '@mui/icons-material/Search';

function Register({patientDetails,
  setPatientDetails,
  handleGenderChange, 
  closeModal,
  resetForm,
  fetchNewPatientId,
  searchCriteria,
  errors,
  setErrors,
  isEditMode,
  searchValue,
  suggestions,
  renderOption,
  handleTitleChange,
  handlePatientIdChange,
  handleSelectPatient,
  handleSearchValueChange,
  handleNewPatient,
  handleSearchCriteriaChange,
  handleDateOfBirthChange,
  handleAgeChange,
  isSaving,
  newPatientId,
  handleSaveOrUpdate,
  flag,
  patientData,
  setPatientData,
  handleDOBChange}) {

console.log('patientdata',patientData)
  
 return (
   <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
    <Card
  sx={{
    height: {xs:140,sm:75},
    marginLeft: { xs: -2, sm: -3.5 }, 
    width: { xs: 370,md:725 }, 
    marginTop: { xs: 0, sm: -1 },
  }}
  className='customwidth'
>
  <CardContent>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <TextField
          select
          label="Search By"
           value={searchCriteria}
           onChange={handleSearchCriteriaChange}
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
        >
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Patient ID">Patient ID</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Autocomplete
          freeSolo
          options={suggestions}
          getOptionLabel={(option) =>
            `${option.Patient_Name || ''}, ${option.Patient_Email || ''}, ${option.Patient_Phno || ''}, ${option.Patient_Code || ''}`
          }
          onInputChange={handleSearchValueChange}
          onChange={handleSelectPatient}
          onClose={resetForm}
          renderOption={renderOption}
          renderInput={(params) => (
            <TextField
              {...params}
              label={searchCriteria}
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
              InputProps={{
                ...params.InputProps,
                style: { marginBottom: '20px' },
              }}
              sx={{
                '& .MuiAutocomplete-inputRoot': {
                  paddingRight: '0px',
                },
              }}
            />
          )}
          inputValue={searchValue}
        />
      </Grid>
    </Grid>
  </CardContent>
</Card>

    </Grid>
    <Grid item xs={12}>
  <Card 
    sx={{
      marginLeft: { xs: -2, sm: -3.5 }, 
      width: { xs: 370 ,md:725},
      height: {xs:'auto',sm:345},
    }} 
    className='customwidth customheight'
  >
    <CardContent>
      <Grid container spacing={2}>
      {/* <TextField
  id="patientid"
  label="Patient ID"
  variant="outlined"
  value={
    !patientDetails ? '' // New Entry: field is empty
    : patientDetails.Patient_Code && patientData ? patientDetails.Patient_Code // Editing: use existing patient data
    : patientDetails.Patient_Code // Default: for already existing data
  }
  onChange={handlePatientIdChange}
  size="small"
  fullWidth
  InputLabelProps={{ style: { fontSize: '1rem' } }}
  InputProps={{ readOnly: !patientData }} // Make the field read-only if viewing existing data, editable when editing
/> */}

      <Grid item xs={12} sm={4} md={4}>
  <TextField
    id="patientid"
    label="Patient ID"
    variant="outlined"
    value={patientData ? patientData.Patient_Code :(patientDetails ? patientDetails.Patient_Code : '')}
    onChange={handlePatientIdChange}
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '1rem' } }}
     InputProps={{
                 readOnly: true,
              }}
  />
</Grid>
 <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="abhaid"
            label="ABHA ID"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="memberid"
            label="Member ID"
            variant="outlined"
            
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            InputProps={{
              readOnly: true,
           }}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
        <TextField
          select
          label="Prefix"
          variant="outlined"
          value={patientData?patientData.
            Patient_Title:(patientDetails ? patientDetails.Patient_Title : '')}
          onChange={handleTitleChange}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Mr">Mr</MenuItem>
          <MenuItem value="Mrs">Mrs</MenuItem>
          <MenuItem value="Miss">Miss</MenuItem>
        </TextField>
      </Grid>

        <Grid item xs={12} sm={9} md={10}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
          
            value={patientData ? patientData.Patient_Name : (patientDetails ? patientDetails.Patient_Name : '')}   
            onChange={(e) => {
              const newValue = e.target.value;
            
              // Update patientDetails
              setPatientDetails({ ...patientDetails, Patient_Name: newValue });
            
              // If patientData is editable, update it as well
              if (patientData) {
                setPatientDetails({ ...patientData, Patient_Name: newValue });
              }
            
              // Clear any existing errors for Patient_Name
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
            }}
                              
            // onChange={(e) => {
            //   setPatientDetails({ ...patientDetails, Patient_Name: e.target.value });
            //   setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
            // }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Name}
          />
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="yyyy"
          label="Age YY"
          variant="outlined"
          size="small"
          value={patientData ? patientData.Patient_Ageyy :(patientDetails ? patientDetails.Patient_Ageyy : '')}
          onChange={(e) => handleAgeChange('yy', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="mm"
          label="Age MM"
          variant="outlined"
          size="small"
          value={patientData ? patientData.Patient_Agemm :(patientDetails ? patientDetails.Patient_Agemm : '')}   
          onChange={(e) => handleAgeChange('mm', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="dd"
          label="Age DD"
          variant="outlined"
          size="small"
          value={patientData ? patientData.Patient_Agedd :(patientDetails ? patientDetails.Patient_Agedd : '')}   
          onChange={(e) => handleAgeChange('dd', e.target.value)}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      <Grid item xs={12} sm={3} md={3}>
        <TextField
          id="dob"
          label="Date of Birth"
          type="date"
          variant="outlined"
          size="small"
          fullWidth
          value={patientData ? patientData.Patient_Dob ? patientData.Patient_Dob.split('T')[0] : '' : (patientDetails ? patientDetails.Patient_Dob ? patientDetails.Patient_Dob.split('T')[0] : '' : '')}
          onChange={handleDateOfBirthChange}
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
 <Grid item xs={12} sm={3} md={3}>
        <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel id="genderLabel">Gender</InputLabel>
          <Select
            labelId="genderLabel"
            id="gender"
            label="Gender"
            value={patientData ? patientData.Patient_Ismale :(patientDetails ? patientDetails.Patient_Ismale : '')}
            onChange={handleGenderChange}
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Ismale}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.Patient_Ismale && (
            <Typography variant="caption" color="error">
              {errors.Patient_Ismale}
            </Typography>
          )}
        </FormControl>
      </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="phone1"
            label="Phone1"
            variant="outlined"
            value={patientData ? patientData.Patient_Phno :(patientDetails ? patientDetails.Patient_Phno : '')}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Phno: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Phno: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            // error={!!errors.Patient_Phno}
            // helperText={errors.Patient_Phno}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="phone2"
            label="Phone2"
            variant="outlined"
            size="small"
            value={patientData ? patientData.Patient_mobile :(patientDetails ? patientDetails.Patient_mobile : '')}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_mobile: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_mobile: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            // error={!!errors.Patient_mobile}
            // helperText={errors.Patient_mobile}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={patientData ? patientData.Patient_Email :(patientDetails ? patientDetails.Patient_Email : '')}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Email: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Email: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            // error={!!errors.Patient_Email}
            // helperText={errors.Patient_Email}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            size="small"
            value={patientData ? patientData.Patient_Address :(patientDetails ? patientDetails.Patient_Address : '')}    
            onChange={(e)=>setPatientDetails({...patientDetails, Patient_Address: e.target.value})}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>
        
      </Grid>
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

export default Register