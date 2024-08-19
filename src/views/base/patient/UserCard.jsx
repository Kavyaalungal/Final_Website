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
    <Card sx={{height:515}}>
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