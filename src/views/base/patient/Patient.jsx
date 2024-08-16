import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import Register from './Register';
 import './Patient.css'

function Patient() {
    const [image,setImage] = useState(null)
    const [selectedId, setSelectedId] = useState('');
    const [idFile, setIdFile] = useState(null);
  
    const handleIdChange = (event) => {
      setSelectedId(event.target.value);
    };
  
    const handleFileChange = (event) => {
      setIdFile(event.target.files[0]);
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  return (
   <>
   <Grid container spacing={2} >
    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{height:520}}>
    <CardContent>
    <div className="container">
  <div className="row mb-12">
    <div className="col-12 d-flex justify-content-center align-items-center mb-3">
      <label htmlFor="avatarUpload" className="avatar-label">
        <img
          src={image || '/images/avatar2.png'}
          alt="Avatar"
          className="avatar-img"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      </label>
      <input
        type="file"
        id="avatarUpload"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
    
    <div className="col-12 mb-3">
      <h6 className="m-0">User ID: (12132434)</h6>
    </div>
    
    <div className="col-12 d-flex flex-column">
      <div className="mb-3 w-100">
        <label htmlFor="nationalIdType" className="form-label">Select National ID Type</label>
        <select
          id="nationalIdType"
          className="form-select"
          value={selectedId}
          onChange={handleIdChange}
        >
          <option value="">Select ID Type</option>
          <option value="passport">Passport</option>
          <option value="driverLicense">Driver's License</option>
          <option value="nationalIdCard">National ID Card</option>
          <option value="voterId">Voter ID</option>
        </select>
      </div>
      
      <div className="w-100">
        <label htmlFor="nationalIdUpload" className="form-label">Upload National ID</label>
        <input
          type="file"
          id="nationalIdUpload"
          className="form-control"
          onChange={handleFileChange}
          disabled={!selectedId}
        />
      </div>
    </div>
  </div>
</div>

    {/* <ul className="list-group list-group-flush mb-12">
              
              <li className="list-group-item d-flex justify-content-center align-items-center">
                <label htmlFor="avatarUpload" className="avatar-label">
                  <img
                    src={image || '/images/avatar2.png'}
                    alt="Avatar"
                    className="avatar-img"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </label>
                <input
                  type="file"
                  id="avatarUpload"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <h6 className="m-0">User ID: (12132434)</h6>
              </li>
              <li className="list-group-item d-flex flex-column align-items-start">
                <div className="mb-3 w-100">
                  <label htmlFor="nationalIdType" className="form-label">Select National ID Type</label>
                  <select
                    id="nationalIdType"
                    className="form-select"
                    value={selectedId}
                    onChange={handleIdChange}
                  >
                    <option value="">Select ID Type</option>
                    <option value="passport">Passport</option>
                    <option value="driverLicense">Driver's License</option>
                    <option value="nationalIdCard">National ID Card</option>
                    <option value="voterId">Voter ID</option>
                  </select>
                </div>
                <div className="w-100">
                  <label htmlFor="nationalIdUpload" className="form-label">Upload National ID</label>
                  <input
                    type="file"
                    id="nationalIdUpload"
                    className="form-control"
                    onChange={handleFileChange}
                    disabled={!selectedId}
                  />
                </div>
              </li>
            </ul> */}
    </CardContent>
   </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={9}>
        <Register/>
    {/* <Card>
    <CardContent>
    <Grid container spacing={1}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      label="Search By"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '16px' } }}
                    >
                      <MenuItem value="Patient ID">Patient ID</MenuItem>
                      <MenuItem value="Name">Name</MenuItem>
                      <MenuItem value="Email">Email</MenuItem>
                      <MenuItem value="Phone">Phone</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                      InputProps={{
                        style: { marginBottom: '20px' },
                      }}
                      sx={{
                        '& .MuiAutocomplete-inputRoot': {
                          paddingRight: '0px',
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      id="patientid"
                      label="Patient ID"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={2}>
                    <TextField
                      select
                      label="Prefix"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '14px' } }}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Mr">Mr</MenuItem>
                      <MenuItem value="Mrs">Mrs</MenuItem>
                      <MenuItem value="Ms">Ms</MenuItem>
                      <MenuItem value="Miss">Miss</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={7}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  <Grid item container xs={12} sm={7} spacing={2}>
                    <Grid item xs={3}>
                      <TextField
                        id="yyyy"
                        label="Age YY"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="mm"
                        label="Age MM"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="dd"
                        label="Age DD"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={3}>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel id="genderLabel">Gender</InputLabel>
                        <Select
                          labelId="genderLabel"
                          id="gender"
                          label="Gender"
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={5}>
                    <CDatePicker locale="en-US" placeholder={'Date of Birth'} />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="phone1"
                      label="Phone1"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      id="phone2"
                      label="Phone2"
                      variant="outlined"
                      size="small"
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
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="address"
                      label="Address"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
                  <Grid item>
                    <Button
                      variant="contained"
                      className="button"
                      sx={{ marginTop: 2, marginRight: 1, }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      className="button"
                      sx={{ marginTop: 2, marginLeft: 2,}}
                    >
                      New
                    </Button>
                  </Grid>
                </Grid>
    </CardContent>
   </Card> */}
    </Grid>
   
   </Grid>

   </>
  )
}

export default Patient;