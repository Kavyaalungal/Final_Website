import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

 import './Patient.css'
 import BasicTabs from './Tab';
import UserCard from './UserCard';
import Buttons from './Buttons';

function Patient() {
  return (
   <>
   <Grid container spacing={2} >
    <Grid item xs={12} sm={6} md={3}>
      <UserCard/>
    </Grid>
    <Grid item xs={12} sm={6} md={9}>
      <BasicTabs/>
      
  
    </Grid>
   
    {/* <Grid item xs={12} >
      <Buttons/>
     
  
    </Grid>
    */}
   </Grid>
   {/* <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={3}>
    <UserCard/>
  </Grid>
  
  <Grid item xs={12} sm={6} md={9}>
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <BasicTabs/>
      </Grid>
      <Grid item>
        <Buttons/>
      </Grid>
    </Grid>
  </Grid>
</Grid> */}


   </>
  )
}

export default Patient;