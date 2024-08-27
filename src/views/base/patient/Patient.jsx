import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

 import './Patient.css'
 import BasicTabs from './Tab';
import UserCard from './UserCard';
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';
import Register from './Register';


function Patient({closeModal}) {
 
  return (
   <>
   <Grid container spacing={2} >
   <Grid item xs={12} sm={6} md={3}>
      <UserCard  />
    </Grid>
   {/* <Grid item xs={12} sm={6} md={9}>
   <CAccordion activeItemKey={2}>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
    <CAccordionBody>
     
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
    <CAccordionBody>
     <Register/>
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
</Grid>  */}
   
    <Grid item xs={12} sm={6} md={9}>
      <BasicTabs closeModal={closeModal}/>
      
  
    </Grid>
   

   </Grid>


   </>
  )
}

export default Patient;