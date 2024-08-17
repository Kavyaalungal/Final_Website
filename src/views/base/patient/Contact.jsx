import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

function Contact() {
 return (
   <>
   <Grid container spacing={2}>
   
    <Grid item xs={12}>
    <Card>
    <CardContent>
  
                <Grid container spacing={2}>
                 
               
             
                 
             
                  
                

                  {/* </Grid> */}

                  

                </Grid>

             
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </CardContent>
   </Card>
    </Grid>
    </Grid>
   </>
  )
}

export default Contact