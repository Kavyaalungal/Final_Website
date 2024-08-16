//importing neccessary conditions for the react component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox, Container, Paper } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
// declaring the function component
const Cancelinvoice = () => {
  // initializing state variables to manage form data  and request parameters 
  const initialFormData = {
    PatTitle: '',
    BillDate: '',
    PatName: '',
    PatAgedd: '',
    PatAgemm: '',
    PatAgeyy: '',
    PatGender: '',
    PatPhone: '',
    PatEmail: '',
    RefBy: '',
    OutDr: '',
    BranchName: '',
    PatOpNo: '',
    CollMode: '',
    collBy: '',
    SampleOn: '',
    ReportTime: '',
    ReportRequest: '',
    Reportreqpersonal: false,
    ReportReqphn: false,
    ReportReqcourier: false,
    ReportReqemail: false,
    ReportReqsms: false,
    NetAmount: '',
    CancelDate: '',
    Reason: ''
  };
  
  const initialParams = {
    LabNo: '',
    YrId: 2324,
    CmId: 2
  };

  const [formData, setFormData] = useState(initialFormData);
  const [params, setParams] = useState(initialParams);
  const clearDetails = () => {
    setFormData(initialFormData);
    setParams(initialParams);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setParams(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    console.log('FormData after change:', { ...formData, [id]: value });
  };

  const handleKeyPress = (e) => {
    const enterKeyCodes = ['Enter', 'NumpadEnter'];

    // Handle both standard 'Enter' keys and variations in mobile
    if (
        enterKeyCodes.includes(e.code) ||     // Standard 'Enter' and 'NumpadEnter'
        e.key === 'Enter' ||                  // Mobile 'Enter'
        e.key === 'Go' ||                     // Some mobile keyboards show 'Go'
        e.key === 'Done' ||                   // Some mobile keyboards show 'Done'
        e.key === 'Search' ||                 // Some mobile keyboards show 'Search'
        e.key === 'Next'                      // Some mobile keyboards show 'Next'
    ) {
        fetchData();
    }
};

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     fetchData();
  //   }
  //   // console.log('key is prssed');
    
  // };
  const getPatTitleValue = (title) => {
    const titles = {
      'Mr.': 'Mr',
      'Mrs.': 'Mrs',
      'Ms.': 'Ms',
      'Miss.': 'Miss'
    };
    return titles[title] || '';
  };

  const fetchData = () => {
    const { LabNo, YrId, CmId } = params;
    axios.get(`http://172.16.16.10:8060/api/Cancelinvget`, {
      params: {
        LabNo,
        YrId,
        CmId
      }
    })
      .then(response => {
        console.log(response);
        const data = response.data.exist_dlts[0];
        setFormData(data);
        toast.success('data fetched successfully')
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        toast.error('error in fetching data')
      });
  };


  const handleSave = () => {
    console.log('Form Data before save:', formData); // Check if CancelDate is correct
    const { PatName, CancelDate, LabNo, Reason, cmpyid, yrid, PatPhone, PatEmail, PatAgedd, PatAgemm, PatAgeyy } = formData;
    const finalCancelDate = CancelDate || new Date().toISOString().split('T')[0];
    console.log('Final CancelDate:', finalCancelDate);
    console.log('Data being sent :', {
      PatName,
      finalCancelDate,
      LabNo,
      Reason
    });
    if (!PatName || !LabNo || !Reason || !finalCancelDate) {
      console.error('Validation failed: Missing required fields');
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!Reason || Reason.trim() === '') {
      console.error('Validation failed: Reason field is empty');
      toast.error('Please provide a reason.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (PatEmail && !emailRegex.test(PatEmail)) {
      console.error('Validation failed: Invalid email format');
      toast.error('Please provide a valid email address.');
      return;
    }
    // Validate Phone Number
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust the regex as needed for your phone number format
    if (PatPhone && !phoneRegex.test(PatPhone)) {
      console.error('Validation failed: Invalid phone number');
      toast.error('Please provide a valid phone number.');
      return;
    }
    // Validate Age
    const calculateAge = (dd, mm, yyyy) => {
      const today = new Date();
      const birthDate = new Date(`${yyyy}-${mm}-${dd}`);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    };
    if (PatAgedd && PatAgemm && PatAgeyy) {
      const age = calculateAge(PatAgedd, PatAgemm - 1, PatAgeyy); // Months are zero-indexed in Date object
      if (age > 100) {
        console.error('Validation failed: Age is greater than 100');
        toast.error('Age cannot be greater than 100.');
        return;
      }
    }
    // Create a new object with only the required fields
    const dataToSave = {
      cmpyid,
      yrid,
      PatName,
      CancelDate: finalCancelDate,
      LabNo,
      Reason: Reason || null
    };
    console.log('Data being sent to the backend:', dataToSave);
    axios.post('http://172.16.16.10:8060/api/cancelpatdetails/dltscancel', dataToSave)
      .then(response => {
        console.log('Data saved successfully', response.data);
        toast.success('Data saved successfully!');
      })
      .catch(error => {
        console.error('Error saving the data', error);
        toast.error('Error saving the data.');
      });
  };
  return (
    <>
      <CCardBody>
        <Box sx={{ border: '1px solid #ddd', padding: '16px', marginBottom: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="LabNo"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                value={params.LabNo}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="invDateTime"
                label="Date"
                variant="outlined"
                size="small"
                fullWidth
                value={formData.BillDate}
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ border: '1px solid #ddd', padding: '16px',  marginBottom: '10px', marginTop: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <TextField
                select
                label="Prefix"
                value={getPatTitleValue(formData.PatTitle)}
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
                <MenuItem value="Ms">Ms</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
              </TextField>

            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                value={formData.PatName}
                onChange={handleFormChange}
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item container xs={12} sm={7} spacing={1}>
              <Grid item xs={3}>
                <TextField
                  id="yyyy"
                  label="Age YY"
                  variant="outlined"
                  value={formData.PatAgeyy}
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="mm"
                  label="Age MM"
                  variant="outlined"
                  value={formData.PatAgemm}
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="dd"
                  label="Age DD"
                  variant="outlined"
                  value={formData.PatAgedd}
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="genderLabel"
                    sx={{
                      fontSize: '1rem',
                      color: 'rgba(0, 0, 0, 0.6)',
                      marginTop: '-1px'
                    }}>Gender</InputLabel>
                  <Select
                    labelId="genderLabel"
                    id="gender"
                    label="Gender"
                    value={formData.PatGender}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="O">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                id="phone1"
                label="Phone1"
                variant="outlined"
                size="small"
                value={formData.PatPhone}
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={formData.PatEmail}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px', marginBottom: '10px', marginTop: '10px' }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="refby"
                label="RefBy"
                value={formData.RefBy}
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outDr"
                label="Out Dr"
                variant="outlined"
                value={formData.OutDr}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                value={formData.BranchName}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ipop"
                label="IP/OP"
                variant="outlined"
                value={formData.PatOpNo}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="collmode"
                label="Coll. Mode"
                variant="outlined"
                value={formData.CollMode}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="collby"
                label="Coll. By"
                variant="outlined"
                value={formData.collBy}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px',  marginBottom: '10px', marginTop: '10px' }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sampleOn"
                label="Sample On"
                type="datetime-local"
                variant="outlined"
                value={formData.SampleOn}
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="reportTime"
                label="Report Time"
                type="datetime-local"
                variant="outlined"
                value={formData.ReportTime}
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox checked={formData.Reportreqpersonal} name="personally" />}
                    label="Personally"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.ReportReqcourier} name="courier" />}
                    label="Courier"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.ReportReqphn} name="phone" />}
                    label="phone"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.ReportReqemail} name="email" />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={formData.ReportReqsms} name="sms" />}
                    label="SMS"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px',  marginBottom: '10px', marginTop: '10px' }}>
            <Grid container spacing={2}>
            {/* <Grid item sm={6}></Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                id='invamount'
                label='Inv_Amount'
                variant='outlined'
                size='small'
                value={formData.NetAmount}
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="Reason"
                label="Reason"
                variant="outlined"
                required
                size="small"
                value={formData.Reason || ''} // Ensure an empty string is passed if Reason is null
                onChange={handleFormChange}
                fullWidth
                multiline
                rows={5}
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Grid>
          </Grid>
        </Box>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </CCardBody>
      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
        <Grid item>
          <Button
            variant="contained"
          
            onClick={handleSave}
            sx={{ marginTop: 2, marginRight: 1 ,backgroundColor:'#3095E5'}}
          > Save </Button>
          <Button
            variant="contained"
           
            onClick={clearDetails}
            sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
          > New</Button>
          <Button
            variant="contained"
         
            onClick={clearDetails}
            sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
          >Exit</Button>
        </Grid>
      </Grid>
    </>
  )
};
export default Cancelinvoice;






















































































































































































































































