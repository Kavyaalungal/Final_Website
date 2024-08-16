import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Paper,
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  IconButton,
  Button
} from '@mui/material';
import { CButton, CCard, CCardBody } from '@coreui/react';
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import '../homecollection/Home.css';

const ScanQueue = () => {
 


  return (
    <CCardBody>
            <Grid container spacing={2}>
            <Box sx={{ border: '1px solid #ddd', padding: '10px',marginBottom:'10px',marginTop:'10px',marginLeft:'10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  id="doctpr"
                  label="Doctor"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{  style: { fontSize: '1rem' } }}
                />
              </Grid>
            <Grid item xs={12} md={3}>
              <CDatePicker placeholder={'Date'} locale="en-US" />

            </Grid>
            <Grid item xs={12} md={3}>
              <CDatePicker placeholder={'Date'} locale="en-US" />

            </Grid>
            <Grid item xs={12} md={2}>
            <Button variant='contained' sx={{backgroundColor:'#3095E5'}}>View</Button>

            </Grid>
            </Grid>
            </Box>

            <Box sx={{ border: '1px solid #ddd', marginBottom:'10px',marginTop:'10px',marginLeft:'10px',width:'100%' }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', }}>ConsultDate</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', }}>SlotTime</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>BookNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Token</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Patient Name</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Doctor</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Age/gender</TableCell>
                      
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
                        </TableRow>
                      
                    
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={25} />
              
              </Grid>
              </Grid>
              </Box>
              <Box sx={{ border: '1px solid #ddd',padding:'10px', marginBottom:'10px',marginTop:'10px',marginLeft:'10px',width:'100%' }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="patient"
              label="Patient"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="token"
              label="Token"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="doctor"
              label="Doctor"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="date"
              label="ConsultDate"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="time"
              label="ConsultTime"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side Fields Parallel to the Left Side */}
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2} direction="column">
        <Box sx={{ border: '1px solid #ddd', marginBottom:'10px',marginTop:'15px',marginLeft:'10px', }}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                      
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>SlNO</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>TestName</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px',  }}>Rate</TableCell>
                      
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                         
                        </TableRow>
                      
                    
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={28} />
              
              </Grid>
              </Grid>
              </Box>
        </Grid>
      </Grid>
      </Grid>
  <Grid container spacing={2} justifyContent="flex-end">
    <Grid item xs={4} sm={2}>
      <TextField
      id='servicecharge'
      label='ServiceCharge'
      variant='outlined'
      size='small'
      sx={{marginTop:2,marginLeft:2}}
      />
    </Grid>
    <Grid item xs={4} sm={2}>
      <TextField
      id='netamt'
      label='Net Amt'
      variant='outlined'
      size='small'
      sx={{marginTop:2,marginLeft:2}}
      />
    </Grid>
    <Grid item xs={4} sm={2}>
    <Button
                variant='contained'
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Exit</Button>
    </Grid>
              {/* <Grid item>
              
              
               
                
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Exit</Button>
              </Grid> */}
            </Grid>
      </Box>
            </Grid>
          
          {/* </Paper> */}
        {/* </Container> */}
      {/* </Box> */}
      </CCardBody>
    //  </CCard>
  );
};

export default ScanQueue;






















