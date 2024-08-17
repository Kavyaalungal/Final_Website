import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import Register from './Register';
 import './Patient.css'
 import BasicTabs from './Tab';

function UserCard() {
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
    <Grid item xs={12}>
    <Card sx={{height:575}}>
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
    
    {/* <div className="col-12 mb-3">
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
    </div> */}
  </div>
</div>

  
    </CardContent>
   </Card>
    </Grid>
  
   
   </Grid>

   </>
  )
}

export default UserCard;