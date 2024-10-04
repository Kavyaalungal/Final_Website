import { Autocomplete, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField,InputAdornment } from '@mui/material'
import React, { useEffect } from 'react'
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
  invoiceViewData,
  setPatientData,
  handleDOBChange}) {

// console.log('Labinvoice',patient)
useEffect(() => {
  if (patientData || invoiceViewData) {
      setPatientDetails({ ...patientData,...invoiceViewData }); 
  }
}, [patientData, setPatientDetails,invoiceViewData ]); 
  
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
     
      <Grid item xs={12} sm={4} md={4}>
  <TextField
    id="patientid"
    label="Patient ID"
    variant="outlined"
    value={patientDetails?.Patient_Code  || ''} // Bind to the state
   
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
          value={patientDetails?.Patient_Title || ''}
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
    value={patientDetails?.Patient_Name  || ''} 
    onChange={(e) => {
        const newValue = e.target.value;
        setPatientDetails((prevDetails) => ({
            ...prevDetails,
            Patient_Name : newValue,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
    }}
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '1rem' }}}
    error={!!errors.Patient_Name}
  />
</Grid>


        <Grid item xs={12} sm={2} md={2}>
        <TextField
          id="yyyy"
          label="Age YY"
          variant="outlined"
          size="small"
          value={patientDetails?.Patient_Ageyy  || ''}
        
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
          value={patientDetails?.Patient_Agemm || ''}
          
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
          value={patientDetails?.Patient_Agedd || ''}
         
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
          value={patientDetails?.Patient_Dob ? patientDetails.Patient_Dob.split('T')[0] : ''}
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
            value={patientDetails?.Patient_Ismale || ''}
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
                            value={patientDetails?.Patient_Phno || ''} // Bind to the state
                            onChange={(e) => {
                                const newPhone = e.target.value;
                                setPatientDetails((prevDetails) => ({
                                    ...prevDetails,
                                    Patient_Phno: newPhone, // Update the state with the new value
                                }));
                            }}
                            size="small"
                            fullWidth
                        />
    </Grid>
 <Grid item xs={12} sm={4}>
          <TextField
            id="phone2"
            label="Phone2"
            variant="outlined"
            size="small"
            value={patientDetails?.Patient_mobile  || ''} 
                            onChange={(e) => {
                                const newPhone = e.target.value;
                                setPatientDetails((prevDetails) => ({
                                    ...prevDetails,
                                    Patient_mobile : newPhone, 
                                }));
                                setErrors((prevErrors) => ({ ...prevErrors, Patient_mobile: '' }));
                            }}
            
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
           
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={patientDetails?.Patient_Email  || ''} 
            onChange={(e) => {
                const newEmail = e.target.value;
                setPatientDetails((prevDetails) => ({
                    ...prevDetails,
                    Patient_Email : newEmail, 
                }));
                setErrors((prevErrors) => ({ ...prevErrors, Patient_Email: '' }));
            }}
           
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          
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
            value={patientDetails?.Patient_Address  || ''} 
            onChange={(e) => {
                const newValue = e.target.value;
                setPatientDetails((prevDetails) => ({
                    ...prevDetails,
                    Patient_Address : newValue, 
                }));
               
            }}
          
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