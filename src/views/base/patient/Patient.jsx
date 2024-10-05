import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import './Patient.css'
 import BasicTabs from './Tab';
import UserCard from './UserCard';
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';
import Register from './Register';
import { usePatient } from './PatientContext';
import axios from 'axios';
import config from '../../../Config';

function Patient({closeModal ,



  patientData,
  setPatientData,
  invoiceViewData}) {


  // declaring state variables needed

  const { patientDetails, setPatientDetails } = usePatient();
   const patientCode = patientDetails?.Patient_Code;
  const [isEditMode, setIsEditMode] = useState(false);// Default to false for new patients
  const [newPatientId, setNewPatientId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [flag, setFlag] = useState('Save'); // 'Save' initially
  const [isNewPatient, setIsNewPatient] = useState(false);
  const [errors, setErrors] = useState({});// state variable for storing the errors 
  const [searchCriteria, setSearchCriteria] = useState('Phone'); // state variable for the searchcrieteria ie, whether it is name,id,email,phone
  const [searchValue, setSearchValue] = useState('');// state variable for searchitem value depends on the search criteria
  const [suggestions, setSuggestions] = useState([]); // state variable for providing suggestions depending on the search value
 
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(()=>{
  if(patientData || invoiceViewData ){
    setFlag('')
  }
  else{
    setFlag('Save')
  }
},[patientData, invoiceViewData])

     

 // function for entering the searchcriteria 
  const handleSearchCriteriaChange = (event) => {   
    setSearchCriteria(event.target.value); // it sets the value selected according tho the user selection
   setSearchValue('');  // according to the search criteria it  resets the searchvalue and suggestions 
    setSuggestions([]);
  };


  // function to enter the value according to searchcriteria
  const handleSearchValueChange = (event, value) => {
    console.log('Search value changed:', value);
      setSearchValue(value);  // according to search item search value set to the value entered
      fetchSuggestions(value); // suggestions according to the value
     };


   // function for fetching the suggetions according to the search criteria
  const fetchSuggestions = async (value) => { // search value is passed as parameter 
    console.log('Fetching suggestions with value:', value);

    try {
      const response = await axios.post(`${config.public_apiUrl}/PatientMstr/PatientSearchMaster`, { // request is send to backend 
        SrchItem: searchCriteria,
        srchVal:value
        // SrchVal: value.toLowerCase(),
       
      });
      
      console.log(response.data);
      
      if (response.data && response.data.patientList) { // if response.data exist and the patientlist is not null then the suggestions is set with the patient details
        setSuggestions(response.data.patientList);
       
      }
       else {
        setSuggestions([]); // if no response the suggetions is set to empty
      }
      
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      toast.error('Error fetching suggestions');  // any error in fetching data is displayed using toast
    }
  };


    // function for normailizing the title ie, to convert title to standard form
  const normalizeTitle = (title) => {
    switch (title) {   // differnt cases for that if the title is MR it is set to Mr form like that rest of the following
      case 'MR':
        return 'Mr';
      case 'MRS':
        return 'Mrs';
      case 'MS':
        return 'Ms';
      case 'MISS':
        return 'Miss';
      default:
        return title;
   }
 };
 

  // for selecting the patient object from the list and populating it to the form
 const handleSelectPatient = async (event, newValue) => { // two parameters the value and event is passed
  if (!newValue) return; // if no value it exits here and stop the function

  try {
    console.log('Selected Patient:', newValue); // Log selected patient for debugging
    const response = await axios.post(`${config.public_apiUrl}/PatientMstr/PatientDetailsMaster`, { //request sends to backend for taking the patient details 
      PatCode: newValue.Patient_Code,
      editFlag:true
    });
    console.log('Response from fetchPatientDetails:', response); // Log API response for debugging

    if (response.data && response.data.patDetails) { // if response data exists and patdetils is not null then spreading the details and also normalizing the title
      const { patDetails } = response.data; // destructuring the patientdetails from response.data

      // Function to trim string values and remove commas
      const trimStrings = (obj) => { // obj is passed as an argument to trimStrings function
        const trimmedObj = {}; // an empty is created to store the  processed key value pairs
        Object.keys(obj).forEach(key => { // iterate over each key in obj object
          if (typeof obj[key] === 'string') { // checks if the value associated with the key of the type is string 
            trimmedObj[key] = obj[key].trim().replace(/\s*,\s*/g, ','); // remove all the white spaces around it replace with th regular expression trim all spaces before and after comma
          } else {
            trimmedObj[key] = obj[key];  //if it is not string directly assigned to the key in trimmedObj without any modification
          }
        });
        return trimmedObj;// return the trimmed object
      };
      

      // Trim patient details
      const trimmedPatientDetails = trimStrings(patDetails);

      // Normalize title
      trimmedPatientDetails.Patient_Title = normalizeTitle(trimmedPatientDetails.Patient_Title);

      // Update patient details
      setPatientDetails(trimmedPatientDetails);// Update patient details with full details
      // setIsEditMode(false);  // Log updated state
      setFlag('');
    // Update searchValue to show the selected search item value in the TextField only 
      let selectedValue;
      switch (searchCriteria) {
          case 'Phone':
          selectedValue = newValue.Patient_Phno;
          break;
        case 'Patient ID':
          selectedValue = newValue.Patient_Code;
          break;
        case 'Name':
          selectedValue = newValue.Patient_Name;
          break;
        case 'Email':
          selectedValue = newValue.Patient_Email;
          break;
        default:
          selectedValue = '';
      }
      setSearchValue(selectedValue); // update the value with the selected value field  ie, when name is selected corresponding value only appears on the textfield 
    } else {
      toast.error('Patient details not found');  // if no data it displays a toast message
    }
  } catch (error) {
    console.error('Error fetching patient details:', error); // Log the error to console
    toast.error('Error fetching patient details'); // for displaying any errors during the request
  }
};


    // function for clearing the form fields
   const resetForm = () => {  
     console.log('Resetting form.');
     setPatientDetails(null);
     setSearchValue('');
     setSuggestions([]);
     setIsEditMode(false);
     setErrors({});
    //  setNewPatientId(null);
     setIsNewPatient(false);
     setNewPatientId('');
     setFlag('Save')// Ensure button text is reset // Reset new patient flag if used
  };


  // Fetch a new patient ID
  const fetchNewPatientId = async () => {
    try {
      const response = await axios.get(`${config.public_apiUrl}/MaxOpdNoPatReg`, {
        params: {
          yrId: config.public_yearId,
          CmId: config.public_branchId
        }
      });
      if (response.data.success) {
        setNewPatientId(response.data.opdno);
        return response.data.opdno;
      } else {
        toast.error('Failed to fetch new patient ID');
        return null;
      }
    } catch (error) {
      toast.error('Error fetching new patient ID');
      console.error('Error fetching new patient ID:', error);
      return null;
    }
  };
  

   // Reset form and fetch new patient ID for creating a new patient
   const handleNewPatient = async () => {
    console.log('Before resetting:', isEditMode, patientDetails);
    resetForm();
    const newId = await fetchNewPatientId();
    if (newId) {
      setPatientDetails(prevDetails => ({
        ...prevDetails,
        Patient_Code: newId,
      }));
      setFlag('Save')
    
    } else {
      toast.error('Failed to fetch a new patient ID');
    }
    console.log('After resetting:', isEditMode, patientDetails);
  };
  

//function for saving a new patient and updating a existing a patient 
const handleSaveOrUpdate = async () => {
  if (!validate()) return;

  const editFlag = flag === '' ? 1 : 0;
  const payload = {
    ...patientDetails,
    EditFlag: editFlag,
    Patient_YrId: config.public_yearId,
    Patient_CpyId: config.public_branchId,
    Patient_Code: flag === '' ? patientDetails.Patient_Code : newPatientId,
  };

  try {
    const response = await axios.post(`${config.public_apiUrl}/PatientSaveUpdate`, payload);
    
    // Log the full response from the backend for debugging
    console.log("Response from backend:", response);

    if (response.data.status && response.data.status[0].status === 'Success') {
      // const updatedPatientData = response.data.patDetails;

      // // Update the parent component's patientData state
      // setPatientData(updatedPatientData);  
      toast.success(flag === 'Edit' ? 'Patient details updated successfully' : 'Patient details saved successfully');
      
    
    
      const opdno = response.data.status[0].opdno; 

      resetForm();
      
      // Returning an object with the message and opdno after a successful save/update
      return { opdno };

    } else {
      toast.error(`Failed to ${flag === 'Edit' ? 'update' : 'save'} patient details: ${response.data.status[0].Message}`);
    }
  } catch (error) {
    console.error("Error occurred during save/update:", error);
    toast.error(`Error ${flag === 'Edit' ? 'updating' : 'saving'} patient details`);
  }
};




//function for changing the patient id field 
  const handlePatientIdChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      Patient_Code: e.target.value
    });
  };


//function for changing the title according to the gender
   const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    // Update title and gender based on selected title
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      Patient_Title: newTitle,
      Patient_Ismale: 
        newTitle === 'Mr' ? 'Male' :
        newTitle === 'Mrs' || newTitle === 'Ms' || newTitle === 'Miss' ? 'Female' :
        '', // Default value when no title is selected
    }));
  };


  //function for changing the title according to the gender change
  const handleGenderChange = (event) => {
    const newGender = event.target.value;
    // Update gender and title based on selected gender
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      Patient_Ismale: newGender,
      Patient_Title: 
        newGender === 'Male' ? 'Mr' :
        newGender === 'Female' ? 'Ms' :
        '', // Default value when no gender is selected
    }));
  };


//function for  calculating the age according to the dob
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let ageYY = today.getFullYear() - birthDate.getFullYear();
    let ageMM = today.getMonth() - birthDate.getMonth();
    let ageDD = today.getDate() - birthDate.getDate();

    // Adjust months and years if days or months are negative
    if (ageDD < 0) {
      ageMM--;
      ageDD += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get last day of the previous month
    }
    if (ageMM < 0) {
      ageYY--;
      ageMM += 12;
    }

    return {
      years: ageYY,
      months: ageMM,
      days: ageDD
    };
  };
//function for changing the age fields according to the dob changes
  const handleDateOfBirthChange = (e) => {
    const dob = e.target.value;
    setPatientDetails(prevDetails => ({ 
      ...prevDetails, 
      Patient_Dob: dob 
    }));
    const { years, months, days } = calculateAge(dob);
    setPatientDetails(prevDetails => ({
      ...prevDetails,
      Patient_Ageyy: years,
      Patient_Agemm: months,
      Patient_Agedd: days
    }));
  };
//updating the dob field according to the age field changes
const handleDOBChange = (e) => {
  const dob = e.target.value; // Format YYYY-MM-DD
  const today = new Date(2024, 8, 19); // 19th September 2024

  if (dob) {
    const dobDate = new Date(dob);
    let ageYY = today.getFullYear() - dobDate.getFullYear();
    let ageMM = today.getMonth() - dobDate.getMonth();
    let ageDD = today.getDate() - dobDate.getDate();

    if (ageDD < 0) {
      ageMM--;
      const lastDayPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageDD += lastDayPrevMonth;
    }

    if (ageMM < 0) {
      ageYY--;
      ageMM += 12;
    }

    setPatientDetails(prevDetails => ({
      ...prevDetails,
      Patient_Dob: dob,
      Patient_Ageyy: ageYY,
      Patient_Agemm: ageMM,
      Patient_Agedd: ageDD
    }));
  }
};



const handleAgeChange = (field, value) => {
  const ageYY = parseInt(patientDetails.Patient_Ageyy, 10) || 0;
  const ageMM = parseInt(patientDetails.Patient_Agemm, 10) || 0;
  const ageDD = parseInt(patientDetails.Patient_Agedd, 10) || 0;

  const today = new Date(2024, 8, 19); // 19th September 2024

  let dobYear = today.getFullYear() - ageYY;
  let dobMonth = today.getMonth();
  let dobDay = today.getDate();

  dobMonth -= ageMM;
  dobDay -= ageDD;

  if (dobDay < 1) {
    dobMonth--;
    const lastDayPrevMonth = new Date(dobYear, dobMonth + 1, 0).getDate();
    dobDay += lastDayPrevMonth;
  }

  if (dobMonth < 0) {
    dobYear--;
    dobMonth += 12;
  }

  const dob = new Date(dobYear, dobMonth, dobDay).toISOString().split('T')[0];

  setPatientDetails(prevDetails => ({
    ...prevDetails,
    [`Patient_Age${field}`]: value,
    Patient_Dob: dob
  }));
};



// function for validation
 const validate = () => {
    const newErrors = {}; // Object for storing errors
  
    // Check if the patient's name is empty
    if (!patientDetails.Patient_Name) {
      newErrors.Patient_Name = 'Name is required';
      toast.warn('Please fill the required fields');
    }
  
    // Check if the phone number is valid
    if (patientDetails.Patient_Phno && !/^\d{10}$/.test(patientDetails.Patient_Phno)) {
      newErrors.Patient_Phno = 'Please enter a valid phone number';
      toast.error('Please enter a valid phone number');
    }
  
    // Check if the mobile number is valid
    if (patientDetails.Patient_mobile && !/^\d{10}$/.test(patientDetails.Patient_mobile)) {
      newErrors.Patient_mobile = 'Invalid mobile number';
      toast.error('Please enter a valid mobile number');
    }
  
    // Check if the email is valid
    if (patientDetails.Patient_Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientDetails.Patient_Email)) {
      newErrors.Patient_Email = 'Invalid email address';
      toast.error('Please enter a valid email address');
    }
  
    // Validate age fields
    const ageYY = parseInt(patientDetails.Patient_Ageyy, 10) || 0;
    const ageMM = parseInt(patientDetails.Patient_Agemm, 10) || 0;
    const ageDD = parseInt(patientDetails.Patient_Agedd, 10) || 0;
  
    // Check if at least one age field is filled
    if (ageYY === 0 && ageMM === 0 && ageDD === 0) {
      newErrors.Patient_Age = 'At least one age field is required';
      toast.warn('At least one age field is required');
    } else {
      // Calculate total age in years
      const ageInYears = ageYY + ageMM / 12 + ageDD / 365; // Simple approximation
  
      // Check if age exceeds 100 years
      if (ageInYears > 100) {
        newErrors.Patient_Age = 'Age cannot exceed 100 years';
        toast.warn('Age cannot exceed 100 years');
      }
    }
  
    // Check if gender is selected
    if (!patientDetails.Patient_Ismale) {
      newErrors.Patient_Ismale = 'Gender is required';
      toast.warn('Please select the gender');
    }
  
    setErrors(newErrors); // Update state with new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
 





// function to display the list of options , hightlighing the matched option .....
  const renderOption = (props, option) => { // two parameters props and option props contains the attributes or other things from the parent component and option contains the patient details
    const { Patient_Name, Patient_Email, Patient_Phno, Patient_Code } = option; // Destructuring the required fields from the list 
    const highlight = searchValue.toLowerCase(); // variable to store the search value
    // Function to render highlighted text
  const renderHighlightedText = (text, isHighlighted) => { // two parameters the text a boolen value 
     if (!isHighlighted) {  // if it false return the text 
        return text;
     }
      // text is the  string to split over the regular expression split is used to split in no.of arrays of substring, gi is flag g for global ensures that not only matches the first character matches the rest of the character, i is for case sensitive matching
      const parts = text.split(new RegExp(`(${highlight})`,'gi'));// text = John Doe, hightlight Do then regex becomes /Do/gi
      return (    // then part  before match John , matched part Do, part after match e, then [ 'John', 'Do', 'e']
        <span>
          {parts.map((part, index) =>
            part.toLowerCase() === highlight ? ( // here it iterates over the array if hightlight matches then it is stored into part span tag with a style the part not matched is stored as plain text
              <span key={index} style={{ fontWeight: 'bold', backgroundColor: '#a6e88d' }}>
                {part}
              </span>
         ) : (
              part
            )
          )}
        </span>
      );
   };
   // for displaying the details in a list in autocomplete hightlight the values according to the search criteria
    return (
      <li key={option.Patient_Code} {...props}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div>{renderHighlightedText(Patient_Name || '', searchCriteria === 'Name')}</div>
          <div>{renderHighlightedText(Patient_Email || '', searchCriteria === 'Email')}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{renderHighlightedText(Patient_Phno || '', searchCriteria === 'Phone')}</span>
            <span>{renderHighlightedText(Patient_Code || '', searchCriteria === 'Patient ID')}</span>
         </div> 
        </div>
      </li>
  );
  };







 
  return (
   <>
   <Grid container spacing={2} >
   <Grid item xs={12} sm={6} md={3}>
      <UserCard 
      patientCode={patientCode}
        handleChange={handleChange}
      value={value}
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
             invoiceViewData={invoiceViewData} />
    </Grid>

   
    <Grid item xs={12} sm={6} md={9}>
      <BasicTabs
      handleChange={handleChange}
      value={value}
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
      
  
    </Grid>
   

   </Grid>


   </>
  )
}

export default Patient;