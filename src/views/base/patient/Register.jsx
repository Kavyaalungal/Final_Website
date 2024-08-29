import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField,InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import './Patient.css';
import Buttons from './Buttons';
import SearchIcon from '@mui/icons-material/Search';
import { usePatient } from './PatientContext';



function Register({ closeModal }) {
  console.log("Parent component closeModal:", closeModal);
  // const { setPatientDetails } = usePatient();
  const { patientDetails, setPatientDetails } = usePatient();
// console.log({ patientDetails, setPatientDetails }); 

    // declaring state variables needed
    const [searchCriteria, setSearchCriteria] = useState('Phone'); // state variable for the searchcrieteria ie, whether it is name,id,email,phone
    const [searchValue, setSearchValue] = useState('');// state variable for searchitem value depends on the search criteria
    const [suggestions, setSuggestions] = useState([]); // state variable for providing suggestions depending on the search value
    const [isEditMode, setIsEditMode] = useState(false); // Default to false for new patients
 // Track edit mode initially it is set to false
    const [errors, setErrors] = useState({}); // state variable for storing the errors 
    const [error, setError] = useState(null);
    const [newPatientId, setNewPatientId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

    useEffect(() => {
        console.log('Component mounted or updated.');
       }, []);
       useEffect(() => {
        if (patientDetails) {
          // If patientDetails exists, switch to edit mode
          setIsEditMode(true);
        } else {
          // If patientDetails is null or undefined, switch to new mode
          setIsEditMode(false);
        }
      }, [patientDetails]);
      
        // function for clearing the form fields
       const resetForm = () => {  
         console.log('Resetting form.');
         setPatientDetails(null);
         setSearchValue('');
         setSuggestions([]);
         setIsEditMode(false);
         setErrors({});
         setNewPatientId(null);
      };

      // function for entering the searchcriteria 
    const handleSearchCriteriaChange = (event) => {   
      setSearchCriteria(event.target.value); // it sets the value selected
     setSearchValue('');  // acording to the search item resets the value and suggestions 
      setSuggestions([]);
    };
  // function to enter the value according to searchcriteria
    const handleSearchValueChange = (event, value) => {
    // Skip validation if an option is selected
    if (isOptionSelected) {
      setIsOptionSelected(false); // Reset flag after handling selection
      setSearchValue(value);
      return;
    }
  
    console.log('Search Criteria:', searchCriteria);
    console.log('Value:', value);
  
    // Clear warnings when input is empty
    if (value === '') {
      setSearchValue(value);
      fetchSuggestions(value);
      return;
    }
  
    if (searchCriteria === 'Phone' || searchCriteria === 'Patient ID') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length === 0) {
        if (!toast.isActive('phoneValidation')) {
          toast.warn('Please enter a number (only digits allowed).', { toastId: 'phoneValidation' });
        }
        return;
      }
    } else if (searchCriteria === 'Name') {
      const namePattern = /^[a-zA-Z\s]*$/; // Allow empty input for names
      if (!namePattern.test(value)) {
        if (!toast.isActive('nameValidation')) {
          toast.warn('Please enter a valid name (only alphabetic characters and spaces allowed).', { toastId: 'nameValidation' });
        }
        return;
      }
    }
  
    console.log('Setting search value and fetching suggestions.');
    setSearchValue(value);
    fetchSuggestions(value);
  };
  
   // function for fetching the suggetions according to the search criteria
    const fetchSuggestions = async (value) => { // search value is passed as parameter 
      console.log('Fetching suggestions with value:', value);
      try {
        const response = await axios.post('http://172.16.16.10:8060/api/PatientMstr/PatientSearchMaster', { // request is send to backend 
          YearId: 2425,   // with parameters yearid, branchid, searchitem, and the value
          BranchId: 2,
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
    const response = await axios.post('http://172.16.16.10:8060/api/PatientMstr/PatientDetailsMaster', { //request sends to backend for taking the patient details
      YearId: 2425,// parameters are sent along with the request that is yearid,branchid and patientcode of the enetrerd patient 
      BranchId: 2,
      PatCode: newValue.Patient_Code,
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
      setIsEditMode(false);  // Log updated state

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



// Fetch a new patient ID
const fetchNewPatientId = async () => {
  try {
    const response = await axios.get('http://172.16.16.10:8060/api/MaxOpdNoPatReg', {
      params: {
        yrId: 2425,
        CmId: 2
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

// Save new patient details
const saveNewPatient = async () => {
  if (isSaving || !newPatientId) return; // Prevent multiple calls and ensure ID is available

  setIsSaving(true);
  const payload = {
        Patient_Code: newPatientId, // Use the new patient ID
        Patient_Title: patientDetails.Patient_Title.trim(),
        Patient_Name: patientDetails.Patient_Name.trim(),
        Patient_Ismale: patientDetails.Patient_Ismale,
        Patient_Dob: patientDetails.Patient_Dob, // Ensure date format is correct
        Patient_Ageyy: patientDetails.Patient_Ageyy,
        Patient_Agemm: patientDetails.Patient_Agemm,
        Patient_Agedd: patientDetails.Patient_Agedd,
        Patient_Email: patientDetails.Patient_Email?.trim() || '',
        Patient_Phno: patientDetails.Patient_Phno?.trim() || '',
        Patient_mobile: patientDetails.Patient_mobile?.trim() || '',
        Patient_Address: patientDetails.Patient_Address?.trim() || '',
        Patient_Note: patientDetails.Patient_Note?.trim() || '',
        Patient_YrId: 2425, 
        Patient_CpyId: 2, 
        EditFlag: 0 // Indicate this is a new record
      };

  try {
    const response = await axios.post('http://172.16.16.10:8060/api/PatientSaveUpdate', payload);
    if (response.data.status && response.data.status[0].status === 'Success') {
      toast.success('Patient details saved successfully');
      resetForm();
    } else {
      toast.error(`Failed to save patient details: ${response.data.status[0].Message}`);
    }
  } catch (error) {
    toast.error('Error saving new patient details');
    console.error('Error saving new patient details:', error);
  } finally {
    setIsSaving(false); // Reset saving status
  }
};

const handleNewPatient = async () => {
  resetForm();
  const newPatientId = await fetchNewPatientId();
  if (newPatientId) {
    setPatientDetails(prevDetails => ({
      ...prevDetails,
      Patient_Code: newPatientId
    }));
    setIsEditMode(false); // Set edit mode for a new patient
  } else {
    toast.error('Failed to fetch a new patient ID');
  }
};


const updatePatient = async () => {
  // Update patient logic
  if (!validate()) return;

  const trimmedDetails = {
    ...patientDetails,
    Patient_Name: patientDetails.Patient_Name.trim(),
    Patient_Email: patientDetails.Patient_Email?.trim() || '',
    Patient_Phno: patientDetails.Patient_Phno?.trim() || '',
    // Patient_Title: patientDetails.Patient_Title,
    // Patient_Ismale: patientDetails.Patient_Ismale,
    Patient_YrId: patientDetails.Patient_YrId,
    Patient_CpyId: patientDetails.Patient_CpyId,
  };

  const editFlag = 1;
  console.log('Data to be sent for saving new patient:', {
    ...trimmedDetails,
    Patient_CpyId: 2,
    Patient_YrId: 2425,
    EditFlag: editFlag,
  });

  try {
    const response = await axios.post('http://172.16.16.10:8060/api/PatientSaveUpdate', {
      ...trimmedDetails,
      Patient_CpyId: 2,
      Patient_YrId: 2425,
      EditFlag: editFlag,
    });

    if (response.data.status && response.data.status.length > 0) {
      const responseStatus = response.data.status[0];
      if (responseStatus.status === 'Success') {
        toast.success('Patient details updated successfully');
        setIsEditMode(false);
        resetForm();
      } else {
        toast.error(`Failed to update patient details: ${responseStatus.Message}`);
      }
    } else {
      toast.error('Invalid response format from server');
    }
  } catch (error) {
    console.error('Error updating patient details:', error);
    toast.error('Error updating patient details');
  }
};

const handleSaveOrUpdate = async () => {
  console.log(`isEditMode: ${isEditMode}`); // Log current mode
  if (isEditMode) {
    console.log('Calling updatePatient()');
    await updatePatient();
  } else {
    console.log('Calling saveNewPatient()');
    await saveNewPatient();
  }
};

const handlePatientIdChange = (e) => {
  setPatientDetails({
    ...patientDetails,
    Patient_Code: e.target.value
  });
};
   // function to calculate age in days, months, and years with the dob value 
const calculateAge = (dob) => { // dob is passed as parameter
 if (!dob) return; // if there is no dob stop the execution here

  const today = new Date();  // takes the current date that is todays date '04-07-2024'
  const birthDate = new Date(dob);  // dob is taken '17-12-2000'

  // Calculate age
  let ageYear = today.getFullYear() - birthDate.getFullYear();  // 2024-2000 = 24
  let ageMonth = today.getMonth() - birthDate.getMonth();  // 7-12 = -5
  let ageDay = today.getDate() - birthDate.getDate();   // 4-17 = -13

  // Adjust negative ageMonth
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {   // here month is -5 so it is negative then
    ageYear--;                                          // 1 is decremented from year here it becomes 24-1 = 23
    ageMonth += 12;                                      // 12 is added to month ie, -5 +12 = 7
  }

  // Adjust negative ageDay
  if (ageDay < 0) {
    const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);  // for getting the last day of previous month of the current date here we get '30-06-2024'
    ageDay = tempDate.getDate() + ageDay;   // 30 + -13 = 17
    ageMonth--;                      // one is decremented from month 7 -1 = 6
  }

  // Update state

  setPatientDetails((prevDetails) => ({
    ...prevDetails,
    Patient_Ageyy: ageYear !== 0 ? ageYear.toString() : prevDetails.Patient_Ageyy,
    Patient_Agemm: ageMonth !== 0 ? ageMonth.toString() : prevDetails.Patient_Agemm,
    Patient_Agedd: ageDay !== 0 ? ageDay.toString() : prevDetails.Patient_Agedd,
  }));
};



// function to validate some fields before saving back to server
const validate = () => {
  const newErrors = {};    //  object for storing errors
  if (!patientDetails.Patient_Name) {    // if no patient name is there when saving it shows the error ie, making it as a required field 
  newErrors.Patient_Name = 'Name is required';
    toast.warn('Please fill the required fields') // it is shown as a toast message
  }
  // for phone numbervalidation ensuring it contains 10 digits here it checks if phone number is available it test using regular expression
 if(patientDetails.Patient_Phno && !/^\d{10}$/.test(patientDetails.Patient_Phno)){
  newErrors.Patient_Phno = 'please enter a valid phone number';
  toast.error('Please enter a valid phone number')  // displays an error message it it does not contain 10 digits
  }
  if(patientDetails.Patient_mobile && !/^\d{10}$/.test(patientDetails.Patient_mobile)){
   newErrors.Patient_mobile = 'Invalid mobile number';
    toast.error('please enter a valid mobile  number')
  }
  // for email validation if email is there and is not in the correct format mentioned it validates and shows an error 
  if (patientDetails.Patient_Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientDetails.Patient_Email)) { // it checks some characters before the @ without
    newErrors.Patient_Email = 'Invalid email address';      // white space and after @ some characters after that . should there and some characters after that without any whitespace
    toast.error('please enter a valid email address')
  }
 // for validating the age fields are mandatory 
  if (
    patientDetails.Patient_Ageyy === 0 &&
    patientDetails.Patient_Agemm === 0 &&
    patientDetails.Patient_Agedd === 0
  ) {
    newErrors.Patient_Age = 'Age is required';
    toast.warn('Please fill in the age fields');
  } 

 // for making gender field is mandatory
 if (!patientDetails.Patient_Ismale) {
   newErrors.Patient_Ismale = 'Gender is required';
   toast.warn('Please select the gender');
 }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // returns true if there is no error and otherwise it is false
};
  // function to set the gender field according to the title
 const handleTitleChange = (e) => {
 const newTitle = e.target.value; // for storing the selected title
 let gender = ''; // initially is null 

  switch (newTitle) { // when the prefix changes gender is set according to it 
    case 'Mr':     // if is selected Mr then gender is set to Male 
      gender = 'Male';
     break;
    case 'Mrs':  // if it selects these fields it is set to female
    case 'Ms':
    case 'Miss':
      gender = 'Female';
      break;
    default:    // if no value is selected it is set to null as initial value 
      gender = '';
  }
    // update the patient details again 
 setPatientDetails((prevDetails) => ({
    ...prevDetails, // spreading the details fetched and updating the title according to the selected one 
   Patient_Title: newTitle,
    Patient_Ismale: gender, // updates the gender according to it 
  }));
  setErrors((prevErrors) => ({   // if any errors occurs in the gender field 
    ...prevErrors,
    Patient_Ismale: '',
  }));
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
   <Grid container spacing={2}>
    <Grid item xs={12}>
    <Card
  sx={{
    height: {xs:140,sm:75},
    marginLeft: { xs: -2, sm: -3.5 }, 
    width: { xs: 370,md:725 }, 
    marginTop: { xs: 0, sm: -1 },
  }}
  //  className="patient heights"
>
  <CardContent>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <TextField
          select
          label="Search By"
          value={searchCriteria}
          onChange={handleSearchCriteriaChange}
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
        >
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Patient ID">Patient ID</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={8} md={8} lg={8}>
        <Autocomplete
          freeSolo
          options={suggestions}
          getOptionLabel={(option) =>
            `${option.Patient_Name || ''}, ${option.Patient_Email || ''}, ${option.Patient_Phno || ''}, ${option.Patient_Code || ''}`
          }
          onInputChange={handleSearchValueChange}
          onChange={handleSelectPatient}
          onClose={resetForm}
          renderOption={renderOption}
          renderInput={(params) => (
            <TextField
              {...params}
              label={searchCriteria}
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
              InputProps={{
                ...params.InputProps,
                style: { marginBottom: '20px' },
              }}
              sx={{
                '& .MuiAutocomplete-inputRoot': {
                  paddingRight: '0px',
                },
              }}
            />
          )}
          inputValue={searchValue}
        />
      </Grid>
    </Grid>
  </CardContent>
</Card>

    </Grid>
    <Grid item xs={12}>
  <Card 
    sx={{
      marginLeft: { xs: -2, sm: -3.5 }, 
      width: { xs: 370 ,md:725},
      height: {xs:'auto',sm:345},
    }} 
    // className='patient cardheight'
  >
    <CardContent>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4}>
  <TextField
    id="patientid"
    label="Patient ID"
    variant="outlined"
    value={patientDetails ? patientDetails.Patient_Code : ''}
    onChange={handlePatientIdChange}
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '1rem' } }}
  />
</Grid>

{/* <Button onClick={saveOrUpdate}>Save Patient</Button> */}

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="abhaid"
            label="ABHA ID"
            variant="outlined"
            size="small"
            fullWidth
            // sx={{ width: { xs: '100%', sm: 240 } }} 
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="memberid"
            label="Member ID"
            variant="outlined"
            
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <TextField
            select
            label="Prefix"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Title : ''}
            onChange={handleTitleChange}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '16px' } }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Mr">Mr</MenuItem>
            <MenuItem value="Mrs">Mrs</MenuItem>
            <MenuItem value="Ms">Ms</MenuItem>
            <MenuItem value="Miss">Miss</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={9} md={10}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Name : ''}                     
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Name: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Name: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Name}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <TextField
            id="yyyy"
            label="Age YY"
            variant="outlined"
            size="small"
            value={patientDetails ? patientDetails.Patient_Ageyy : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Ageyy: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Age}
            helperText={errors.Patient_Age}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <TextField
            id="mm"
            label="Age MM"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Agemm : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Agemm: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Age}
            helperText={errors.Patient_Age}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <TextField
            id="dd"
            label="Age DD"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Agedd : ''}                            
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Agedd: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Age: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Age}
            helperText={errors.Patient_Age}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <TextField
            id="dob"
            label="Date of Birth"
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            value={patientDetails ? patientDetails.Patient_Dob ? patientDetails.Patient_Dob.split('T')[0] : '' : ''}
            onChange={(e) => {
              const dob = e.target.value;
              setPatientDetails({ ...patientDetails, Patient_Dob: dob });
              calculateAge(dob); 
            }}
            InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="genderLabel">Gender</InputLabel>
            <Select
              labelId="genderLabel"
              id="gender"
              label="Gender"
              value={patientDetails ? patientDetails.Patient_Ismale : ''} 
              disabled    
              // InputProps={{
              //   readOnly: true,
              // }}
              InputLabelProps={{ style: { fontSize: '1rem' } }}
              error={!!errors.Patient_Ismale}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.Patient_Ismale && (
              <Typography variant="caption" color="error">
                {errors.Patient_Ismale}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="phone1"
            label="Phone1"
            variant="outlined"
            value={patientDetails ? patientDetails.Patient_Phno : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Phno: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Phno: '' }));
            }}
            size="small"
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Phno}
            helperText={errors.Patient_Phno}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="phone2"
            label="Phone2"
            variant="outlined"
            size="small"
            value={patientDetails ? patientDetails.Patient_mobile : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_mobile: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_mobile: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_mobile}
            helperText={errors.Patient_mobile}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            value={patientDetails ? patientDetails.Patient_Email : ''}    
            onChange={(e) => {
              setPatientDetails({ ...patientDetails, Patient_Email: e.target.value });
              setErrors((prevErrors) => ({ ...prevErrors, Patient_Email: '' }));
            }}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
            error={!!errors.Patient_Email}
            helperText={errors.Patient_Email}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
            size="small"
            value={patientDetails ? patientDetails.Patient_Address : ''}    
            onChange={(e)=>setPatientDetails({...patientDetails, Patient_Address: e.target.value})}
            fullWidth
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextareaAutosize
            minRows={1}
            maxRows={6}
            value={patientDetails ? patientDetails.Patient_Address : ''}    
            onChange={(e)=>setPatientDetails({...patientDetails, Patient_Address: e.target.value})}
            style={{
              width: "100%",
             
               padding: 4,
              fontSize: 16,
             
            }}
            placeholder="Enter your Address"
          />
        </Grid> */}
      </Grid>
    </CardContent>
  </Card>
</Grid>

    <Grid item xs={12} >
      
      <Buttons handleSaveOrUpdate={handleSaveOrUpdate} resetForm={resetForm} fetchNewPatientId={fetchNewPatientId} isEditMode={isEditMode} handleNewPatient={handleNewPatient} saveNewPatient={saveNewPatient} updatePatient={updatePatient} closeModal={closeModal}/>
     
  
    </Grid>
   
    {/* <ToastContainer position="top-center" autoClose={3000} hideProgressBar /> */}
    </Grid>
   </>
  )
}

export default Register