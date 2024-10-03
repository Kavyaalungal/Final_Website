import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Register from './Register';
import './Patient.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Additional from './Additional';
import { usePatient } from './PatientContext';
import { useState,useEffect } from 'react';
import axios from 'axios';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ closeModal ,
  patientDetails,
  setPatientDetails,
  resetForm,
  fetchNewPatientId,
  isEditMode,
  handleNewPatient,
  handleSearchCriteriaChange,
  handleSearchValueChange,
  fetchSuggestions,
  handleSelectPatient,
  handlePatientIdChange,
  calculateAge,
  handleTitleChange,
  renderOption,
  searchCriteria,
  searchValue,
  suggestions,
  setIsEditMode,
  errors,
  setErrors,
  handleDateOfBirthChange,
  handleAgeChange,
  handleGenderChange,
  handleSaveOrUpdate,
  isSaving,
  flag,
  handleDOBChange,
  patientData,
  setPatientData,
  invoiceViewData,
  handleChange,
  value
}) {
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='option '>
          <Tab label="Basic Details" {...a11yProps(0)} sx={{ textTransform: 'none' }}/>
          <Tab label="Additional Details" {...a11yProps(1)} sx={{ textTransform: 'none' }} />
      
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Register
        patientDetails={patientDetails} 
        setPatientDetails={setPatientDetails}
         closeModal={closeModal}
          resetForm={resetForm}
           fetchNewPatientId={fetchNewPatientId}
            isEditMode={isEditMode} 
            handleNewPatient={handleNewPatient}
           handleSearchCriteriaChange={handleSearchCriteriaChange}
             handleSearchValueChange={handleSearchValueChange}
             fetchSuggestions={fetchSuggestions}
             handleSelectPatient={handleSelectPatient}
             handlePatientIdChange={handlePatientIdChange}
             calculateAge={calculateAge}
             handleTitleChange={handleTitleChange}
             renderOption={renderOption} 
             searchCriteria={searchCriteria}
             searchValue={searchValue}
             suggestions={suggestions}
             setIsEditMode={setIsEditMode}
             errors={errors}
             setErrors={setErrors}
             handleDateOfBirthChange={handleDateOfBirthChange}
             handleAgeChange={handleAgeChange}
             handleGenderChange={handleGenderChange}
             handleSaveOrUpdate={handleSaveOrUpdate}
             isSaving={isSaving}
             flag={flag}
             handleDOBChange={handleDOBChange}
             patientData={patientData}
             setPatientData={setPatientData}
             invoiceViewData={invoiceViewData}
             />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Additional patientDetails={patientDetails} 
        setPatientDetails={setPatientDetails}
         closeModal={closeModal}
          resetForm={resetForm}
           fetchNewPatientId={fetchNewPatientId}
            isEditMode={isEditMode} 
            handleNewPatient={handleNewPatient}
           handleSearchCriteriaChange={handleSearchCriteriaChange}
             handleSearchValueChange={handleSearchValueChange}
             fetchSuggestions={fetchSuggestions}
             handleSelectPatient={handleSelectPatient}
             handlePatientIdChange={handlePatientIdChange}
             calculateAge={calculateAge}
             handleTitleChange={handleTitleChange}
             renderOption={renderOption} 
             searchCriteria={searchCriteria}
             searchValue={searchValue}
             suggestions={suggestions}
             setIsEditMode={setIsEditMode}
             errors={errors}
             setErrors={setErrors}
             handleDateOfBirthChange={handleDateOfBirthChange}
             handleAgeChange={handleAgeChange}
             handleGenderChange={handleGenderChange}
             handleSaveOrUpdate={handleSaveOrUpdate}
             isSaving={isSaving}
             flag={flag}
             patientData={patientData}
             setPatientData={setPatientData}
            />
      </CustomTabPanel>
    </Box>
  );
}