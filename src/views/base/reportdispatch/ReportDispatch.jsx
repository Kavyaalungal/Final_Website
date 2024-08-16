import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Box,
  FormGroup
} from '@mui/material';
import { CCardBody } from '@coreui/react';

const ReportDispatch = () => {
  // const [selectedModes, setSelectedModes] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const dispatchModes = [
    { id: 1, mode: 'Phone', userInfo: 'user1' },
    { id: 2, mode: 'ByHand', userInfo: 'user2' },
    { id: 3, mode: 'Email', userInfo: 'user3' },
    { id: 4, mode: 'Courier', userInfo: 'user4' },
    { id: 5, mode: 'Through Branch', userInfo: 'user5' },
  ];


  const handleDispatchModeDoubleClick = (mode) => {
    setSelectedRows((prevSelectedRows) => [
      ...prevSelectedRows,
      { ...mode, id: prevSelectedRows.length + 1,  } // Add a new instance with a new ID or unique identifier
    ]);
  };


  // const handleDispatchModeDoubleClick = (mode) => {
  //   setSelectedModes((prevSelectedModes) => {
  //     if (prevSelectedModes.includes(mode.mode)) {
  //       return prevSelectedModes;
  //     } else {
  //       return [...prevSelectedModes, mode.mode];
  //     }
  //   });
  // };

  return (
    <>
     <CCardBody>
     <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField 
           id='entryno' 
          label="Entry No" 
          variant="outlined"
           fullWidth
            size="small"
            InputLabelProps={{ style:  {fontSize:'1rem'} }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          id='patientname' 
          label="Patient Name"
          variant="outlined" 
          fullWidth 
          size="small"
          InputLabelProps={{  style:  {fontSize:'1rem'}  }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
            <TextField
            id='server'
            label='Server'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{ style: {fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='datetime'
            label='Date Time'
            variant='outlined'
            fullWidth
            size='small'
            type='datetime-local'
            InputLabelProps={{ shrink:true, style:{fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='labno'
            label='Lab No'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='yyyy'
            label='Age YY'
            variant='outlined'
            size='small'
            fullWidth
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='mm'
            label='Age MM'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='dd'
            label='Age DD'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='branchname'
            label='Branch Name'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='refby'
            label='Reference By'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <TextField
            id='ipop'
            label='IP/OP'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        </Grid>
        </Box>
       <Box sx={{border:'1px solid #ddd', padding:'16px', borderRadius:'8px',marginBottom:'10px', marginTop:'10px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                id='sampleon'
                label='Sample On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                id='reporton'
                label='Report On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox name="personally" />}
                    label="Personally"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="courier" />}
                    label="Courier"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="phone" />}
                    label="phone"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="email" />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="sms" />}
                    label="SMS"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
        
</Grid>
</Box>
 <Box
      sx={{
      border:'1px solid #ddd',
      padding:'16px',
      borderRadius:'8px',
      marginTop:'10px',
      marginBottom:'10px',
      overflowX:'auto'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TableContainer
            sx={{
              // border: '1px solid #ddd',
              // borderRadius: '8px',
              // overflow: 'hidden',
              // boxShadow: 1,
            }}
          >
            <Table sx={{border: '1px solid #ddd'}}>
              <TableHead>
                <TableRow sx={{ backgroundColor: ' #3095E5' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dispatchModes.map((mode) => (
                  <TableRow
                    key={mode.id}
                    onDoubleClick={() => handleDispatchModeDoubleClick(mode)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#99c5de' },
                    }}
                  >
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{mode.id}</TableCell>
                    <TableCell>{mode.mode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer
            sx={{
              // border: '1px solid #ddd',
              // borderRadius: '8px',
              // overflow: 'hidden',
              // boxShadow: 1,
            }}
          >
            <Table sx={{border: '1px solid #ddd'}}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#3095E5',borderRight: '1px solid #ddd' }}>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>SlNo</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Select</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Person</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ddd', fontWeight: 'bold' }}>Dispatch Mode</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>User Info</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedRows.map((row, index) => (
                  <TableRow key={index} sx={{'&:hover': { backgroundColor: ' #99c5de '},cursor:'pointer'}}>
                    <TableCell sx={{ borderRight: '1px solid #ddd' ,}}>{row.id}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>
                      <Checkbox />
                    </TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{row.person || '-'}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #ddd' }}>{row.mode}</TableCell>
                    <TableCell>{row.userInfo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          marginTop: '16px',
        }}
      >
        <Button variant="contained" sx={{backgroundColor:'#3095E5'}}>
          Remove
        </Button>
      </div>
    </Box>
  <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px', marginTop: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
             <TextField
             id='register'
             label='Registration Note'
             variant='outlined'
             size='small'
             fullWidth
             InputLabelProps={{style: {fontSize:'1rem'}}}
             multiline
             rows={3}
             />
              </Grid>
              <Grid item xs={12} sm={6}>
             <TextField
             id='note'
             label='Note'
             variant='outlined'
             size='small'
             fullWidth
             InputLabelProps={{style: {fontSize:'1rem'}}}
             multiline
             rows={3}
             />
              </Grid>
            </Grid>
            </Box>
            <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" sx={{backgroundColor:'#3095E5'}}>New</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{backgroundColor:'#3095E5'}}>Delete</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{backgroundColor:'#3095E5'}}>Save</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{backgroundColor:'#3095E5'}}>Exit</Button>
          </Grid>
        </Grid>
    
    
        
        
        
        
       
      
      
    
      {/* </Grid> */}
    {/* </Paper> */}
    </CCardBody>
    </>
  );
};

export default ReportDispatch;


 
  

 




     
      
        
                      
                              

                 
