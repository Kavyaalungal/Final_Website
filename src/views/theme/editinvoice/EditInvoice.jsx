import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox, Container, Paper } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';

const EditInvoice = () => {
  // state variables declared for inputing and editing the form 
  const [labNo, setLabNo] = useState('');
  const [invNo, setInvNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [cpyId, setCpyId] = useState(null);
  const [invDate, setInvDate] = useState('');
  const [invTime, setInvTime] = useState('');
  const [prefix, setPrefix] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [wardId, setWardId] = useState('')
  const [email, setEmail] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [refBy, setRefBy] = useState('');
  const [outDr, setOutDr] = useState('');
  const [passport, setPassport] = useState('');
  const [srfNo, setSrfNo] = useState('');
  const [branch, setBranch] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [ipOpNo, setIpOpNo] = useState('');
  const [collMode, setCollMode] = useState('');
  const [collBy, setCollBy] = useState('');
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    courier: false,
    phone: false,
    email: false,
    sms: false,

  });
  const [invDateTime, setInvDateTime] = useState('');
  const [report, setReport] = useState({ urgentwork: false });
  const [notes, setNotes] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [errorAadhar, setErrorAadhar] = useState('');
  // flag to check data is updated or not initially it is set to false
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  // state variables for email validation
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhone1Valid, setIsPhone1Valid] = useState(true);
  const [isPhone2Valid, setIsPhone2Valid] = useState(true);
  const [smplDate, setSmplDate] = useState('');
  const [invSmplDate, setInvSmplDate] = useState('');
  const [repTime, setRepTime] = useState('');
  const [invRepTime, setInvRepTime] = useState('');

  // States for search results for different fields

  const [searchResultsRefBy, setSearchResultsRefBy] = useState([]);
  const [searchResultsCollBy, setSearchResultsCollBy] = useState([]);
  const [searchResultsBranch, setSearchResultsBranch] = useState([]);
  const [searchResultsCollMode, setSearchResultsCollMode] = useState([]);

  // Error states for each search field
  const [errorRefBy, setErrorRefBy] = useState(null);
  const [errorCollBy, setErrorCollBy] = useState(null);
  const [errorBranch, setErrorBranch] = useState(null);
  const [errorCollMode, setErrorCollMode] = useState(null);

  // Selected key states for each search field
  const [selectedRefByKey, setSelectedRefByKey] = useState('');
  const [selectedCollByKey, setSelectedCollByKey] = useState('');
  const [selectedBranchKey, setSelectedBranchKey] = useState('');
  const [selectedCollModeKey, setSelectedCollModeKey] = useState('')
  const [invData, setInvData] = useState({
    Inv_DrId: invoiceData?.Inv_DrId || 0,
    Inv_CltnID: invoiceData?.Inv_CltnID || 0,
    Inv_CollModeId: invoiceData?.Inv_CollModeId || 0,
    Inv_BrId: invoiceData?.Inv_BrId || 0
  });
  useEffect(() => {
    // Check if yrId is updated
    if (yearId !== null) {
      // Update cpyId to match yrId
      setCpyId(yearId);
    }
  }, [yearId]); // Run this effect whenever yrId changes



  useEffect(() => {

    setIsDataUpdated(
      prefix !== (invoiceData?.Inv_Tittle || '') ||
      name !== (invoiceData?.Inv_name || '') ||
      day !== (invoiceData?.Inv_ageDD || '') ||
      month !== (invoiceData?.Inv_ageMM || '') ||
      year !== (invoiceData?.Inv_ageYY || '') ||
      gender !== (invoiceData?.Inv_Gender || '') ||
      dob !== (invoiceData?.Inv_Dob || '') ||
      phone1 !== (invoiceData?.Inv_phno || '') ||
      phone2 !== (invoiceData?.Inv_Mob || '') ||
      email !== (invoiceData?.Inv_Email || '') ||
      nationality !== (invoiceData?.Inv_Nationality || '') ||
      outDr !== (invoiceData?.Inv_OutDr || '') ||
      passport !== (invoiceData?.Inv_Passport || '') ||
      srfNo !== (invoiceData?.Inv_SRFno || '') ||
      aadhar !== (invoiceData?.Inv_Aadhaar || '') ||
      refBy !== (invoiceData?.Inv_RefBy || '') ||
      branch !== (invoiceData?.Branch || '') ||
      collBy !== (invoiceData?.Inv_CollBy || '') ||
      collMode !== (invoiceData?.Inv_CollMode || '') ||
      wardNo !== (invoiceData?.Inv_Ward || '') ||
      ipOpNo !== (invoiceData?.Inv_RsltNO || '') ||
      smplDate !== (invoiceData?.SmplDate || '') ||
      invSmplDate !== (invoiceData?.Inv_SmplDate || '') ||
      repTime !== (invoiceData?.RepTime || '') ||
      invRepTime !== (invoiceData?.Inv_RepTime || '') ||
      notes !== (invoiceData?.Inv_Comment || '') ||
      wardId !== (invoiceData?.Inv_WardId || '') ||
      reportRequestedThrough.personally !== (invoiceData?.Inv_RepThrPersonal || false) ||
      reportRequestedThrough.courier !== (invoiceData?.Inv_RepThrCourier || false) ||
      reportRequestedThrough.phone !== (invoiceData?.Inv_RepThrPhone || false) ||
      reportRequestedThrough.sms !== (invoiceData?.Inv_RepThrSms || false) ||
      reportRequestedThrough.email !== (invoiceData?.Inv_RepThrEmail || false) ||
      address !== (invoiceData?.Inv_Address || '') ||
      invDate !== (invoiceData?.Inv_Date || '') ||
      invTime !== (invoiceData?.Inv_time || '') ||
      invNo !== (invoiceData?.Inv_No || '')
    );
  }, [prefix, name, day, month, year, gender, dob, phone1, phone2, email, nationality, address,
    outDr, passport, srfNo, wardNo, ipOpNo, aadhar, refBy, branch, collBy, collMode,
    repTime, notes, reportRequestedThrough, invDate, invTime, invNo, smplDate, wardId, invRepTime, invSmplDate, invoiceData,
  ]);


  useEffect(() => {
    const prefixToGender = {
      Mr: 'M', Mrs: 'F', Ms: 'F', Miss: 'F',
    };

    setGender(prefixToGender[prefix] || '');
  }, [prefix]);


  const handleAadharChange = (e) => {
    const inputValue = e.target.value;
    setAadhar(inputValue);

    // Clear Aadhar error when Aadhar field is changed
    if (!/^\d{12}$/.test(inputValue)) {
      setErrorAadhar('Aadhar number must be 12 digits');
    } else {
      setErrorAadhar('');
    }
  };


  const handleAadharBlur = () => {
    // Validate Aadhar number when input loses focus
    if (!/^\d{12}$/.test(aadhar)) {
      setErrorAadhar('Aadhar number must be 12 digits');
      toast.error('Aadhar number must be 12 digits'); // Display toast message
    }
  };


  // Function to validate email using regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

  };
  // function to validate phone number
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);

  };

  // for fetching data
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://172.16.16.10:8060/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: 2425,
          BranchId: 2,
        },
      });
      const invoiceData = response.data.invoiceDtls;
      setInvoiceData(invoiceData);
      // for refby field
      const refByValue = invoiceData.Inv_RefBy || '';
      setRefBy(refByValue);
      if (refByValue) {
        setSearchResultsRefBy([{ AhMst_pName: refByValue }]);
      } else {
        setSearchResultsRefBy([]);
      }

      // for CollBy field
      const collByValue = invoiceData.Inv_CollBy || '';
      setCollBy(collByValue);
      if (collByValue) {
        setSearchResultsCollBy([{ AhMst_pName: collByValue }]);
      } else {
        setSearchResultsCollBy([]);
      }
      // for collmode value
      const collModeValue = invoiceData.Inv_CollMode || '';
      setCollMode(collModeValue);
      if (collModeValue) {
        setSearchResultsCollMode([{ Mstr_Desc: collModeValue }]);
      } else {
        setSearchResultsCollMode([]);
      }
      // for branch value
      const branchValue = invoiceData.Branch || '';
      setBranch(branchValue);
      if (branchValue) {
        setSearchResultsBranch([{ BrMst_Name: branchValue }]);
      } else {
        setSearchResultsBranch([]);
      }
      setInvData({
        Inv_DrId: invoiceData?.Inv_DrId || 0,
        Inv_CltnID: invoiceData?.Inv_CltnID || 0,
        Inv_CollModeId: invoiceData?.Inv_CollModeId || 0,
        Inv_BrId: invoiceData?.Inv_BrId || 0
      });
      setInvNo(invoiceData?.Inv_No || '');
      const validPrefixes = ['', 'Mr', 'Mrs', 'Ms', 'Miss'];
      setPrefix(validPrefixes.includes(invoiceData.Inv_Tittle) ? invoiceData.Inv_Tittle : '');
      setName(invoiceData.Inv_name || '');
      setDay(invoiceData.Inv_ageDD !== null && invoiceData.Inv_ageDD !== undefined ? invoiceData.Inv_ageDD : '');
      setMonth(invoiceData.Inv_ageMM || '');
      setYear(invoiceData.Inv_ageYY || '');
      setDob(invoiceData.Inv_Dob || '');
      const validGender = ['', 'M', 'F', 'O'];
      setGender(validGender.includes(invoiceData.Inv_Gender) ? invoiceData.Inv_Gender : '');
      setEmail(invoiceData.Inv_Email || '');
      setPhone1(invoiceData.Inv_phno || '');
      setPhone2(invoiceData.Inv_Mob || '');
      setNationality(invoiceData.Inv_Nationality || '');
      setAddress(invoiceData.Inv_Address || '');
      setNotes(invoiceData.Inv_Comment || '');
      setOutDr(invoiceData.Inv_OutDr || '');
      setSrfNo(invoiceData.Inv_SRFno !== null && invoiceData.Inv_SRFno !== undefined ? invoiceData.Inv_SRFno : '');
      setRefBy(invoiceData.Inv_RefBy || '');
      setSearchResultsRefBy([invoiceData.Inv_RefBy]);
      setBranch(invoiceData.Branch || '');
      setCollMode(invoiceData.Inv_CollMode || '');
      setWardId(invoiceData.Inv_WardId || '');
      setSearchResultsBranch([invoiceData.Branch]);
      setCollBy(invoiceData.Inv_CollBy || '');
      setSearchResultsCollBy([invoiceData.Inv_CollBy]);
      setSearchResultsCollMode([invoiceData.Inv_CollMode]);
      setPassport(invoiceData.Inv_Passport || '');
      setAadhar(invoiceData.Inv_Aadhaar || '');
      setIpOpNo(invoiceData.Inv_RsltNO || '');
      setWardNo(invoiceData.Inv_Ward || '');
      setReportRequestedThrough({
        personally: invoiceData.Inv_RepThrPersonal || false,
        courier: invoiceData.Inv_RepThrCourier || false,
        phone: invoiceData.Inv_RepThrPhone || false,
        email: invoiceData.Inv_RepThrEmail || false,
        sms: invoiceData.Inv_RepThrSms || false,

      });
      setSmplDate(invoiceData.SmplDate || '');
      setRepTime(invoiceData.RepTime || '');
      setInvRepTime(invoiceData.Inv_RepTime || '');
      setInvDate(invoiceData.Inv_Date || '');
      setInvTime(invoiceData.Inv_time || '');
      setInvSmplDate(invoiceData.Inv_SmplDate)


      setError('');
      console.log('data fetched successfully')
      toast.success('data fetched successfully')
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  // function for sample on and report on field 
  const handleSmplDateChange = (event) => {
    const newSmplDate = event.target.value;
    setSmplDate(newSmplDate);


    // Get the current ISO formatted date (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];

    // Construct ISO formatted time with current date and new time
    const isoTime = `${newSmplDate}:00.000Z`;

    // Update state with the ISO formatted time for storing
    setInvSmplDate(isoTime);
  };

  const handleRepTimeChange = (event) => {
    const newRepTime = event.target.value;

    // Update state with the formatted time for display
    setRepTime(newRepTime);

    // Get the current ISO formatted date (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];

    // Construct ISO formatted time with current date and new time
    const isoTime = `${newRepTime}:00.000Z`;

    // Update state with the ISO formatted time for storing
    setInvRepTime(isoTime);
  };

  useEffect(() => {
    if (invoiceData) {
      // Initialize time from invoiceData
      const initialRepTime = invoiceData.Inv_RepTime || ''; // Assuming Inv_RepTime is a string
      const initialSmplDate = invoiceData.Inv_SmplDate || ''
      // Set initial values
      setRepTime(initialRepTime);
      setSmplDate(initialSmplDate)

      // Extract time part from invoiceData and set for storing
      const initialTime = initialSmplDate.slice(11, 16)
      const initialTimePart = initialRepTime.slice(11, 16); // Extracts HH:mm
      setInvRepTime(initialTimePart + ':00.000Z');
      setInvSmplDate(initialTime + ':00.000z') // Ensure format HH:mm:ss.SSSZ
    }
  }, [invoiceData]);
  const convertAMPMTo24Hour = (time) => {
    let [hour, minutePeriod] = time.split(':');
    const minute = minutePeriod.slice(0, 2);
    const period = minutePeriod.slice(3).toUpperCase();

    hour = parseInt(hour, 10);
    if (period === 'PM' && hour < 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, '0')}:${minute}`;
  };

  // Utility function to format date and time for input field
  const formatDateTimeForInput = (date, time) => {
    return `${date}T${time}`;
  };
  useEffect(() => {
    if (invoiceData) {
      // Convert the fetched time to 24-hour format if it is in AM/PM
      const time24Hour = convertAMPMTo24Hour(invoiceData.Inv_time);
      const formattedDateTime = formatDateTimeForInput(invoiceData.Inv_Date.slice(0, 10), time24Hour);
      setInvDateTime(formattedDateTime);
    }
  }, [invoiceData]);

  const handleDateTimeChange = (e) => {
    const datetimeValue = e.target.value;
    setInvDateTime(datetimeValue); // Update state with new datetime value
  };

  const formatTimeToAMPM = (time) => {
    let [hour, minute] = time.split(':').map(Number);
    const period = hour >= 12 ? 'PM' : 'AM';
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
  };


  // saving data back to server

  const saveDataToAPI = () => {

    console.log('Aadhar state:', aadhar);
    // Check if Aadhar number is empty or not 12 digits
    if (!aadhar || !/^\d{12}$/.test(aadhar)) {
      setErrorAadhar('Aadhar number must be 12 digits');
      return;
    }
    // Check if email is filled and validate email format
    if (email && !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Check if phone1 is filled and validate phone number format
    if (phone1 && !validatePhone(phone1)) {
      setIsPhone1Valid(false);
      return;
    }

    // Check if phone2 is filled and validate phone number format
    if (phone2 && !validatePhone(phone2)) {
      setIsPhone2Valid(false);
      return;
    }

    const payload = {
      ...invoiceData,
      // LabNo:labNo,
      Inv_No: invNo,
      Inv_Tittle: prefix,
      Inv_name: name,
      Inv_ageDD: day,
      Inv_ageMM: month,
      Inv_ageYY: year,
      Inv_Gender: gender,
      Inv_Dob: dob,
      Inv_Email: email,
      Inv_phno: phone1,
      Inv_Mob: phone2,
      Inv_Nationality: nationality,
      Inv_Address: address,
      Inv_Aadhaar: aadhar,
      Inv_OutDr: outDr,
      Inv_Passport: passport,
      Inv_RsltNO: ipOpNo,
      Inv_SRFno: srfNo,
      Inv_Ward: wardNo,
      Inv_CollBy: collBy,
      Inv_CollMode: collMode,
      Inv_RefBy: refBy,
      Inv_DrId: invData.Inv_DrId,
      Inv_CltnID: invData.Inv_CltnID,
      Inv_CollModeId: invData.Inv_CollModeId,
      Inv_BrId: invData.Inv_BrId,
      // Branch: branch,
      Inv_WardId: wardId || null,
      SmplDate: smplDate,
      Inv_SmplDate: invSmplDate,
      RepTime: repTime,
      Inv_RepTime: invRepTime,
      Inv_RepThrPersonal: reportRequestedThrough.personally,
      Inv_RepThrCourier: reportRequestedThrough.courier,
      Inv_RepThrPhone: reportRequestedThrough.phone,
      Inv_RepThrEmail: reportRequestedThrough.email,
      Inv_RepThrSms: reportRequestedThrough.sms,
      Inv_Comment: notes,
      Inv_Date: invDateTime.slice(0, 10), // Extract date part
      Inv_time: formatTimeToAMPM(invDateTime.slice(11, 16)),  // Extract time part in HH:mm format
    };
    console.log('Payload to be sent to API:', payload);

    axios.post('http://172.16.16.10:8060/api/EditInvSave', payload)
      .then(response => {
        console.log('Data saved successfully: ', response.data);
        toast.success('Data updated successfully!');
      })
      .catch(error => {
        console.error('Error saving data:', error);
        toast.error('Error saving data.');
      });
  };
  // function for age calculation
  const calculateAge = (dob) => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      // Adjust for negative months
      if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
      }

      // Adjust for negative days
      if (days < 0) {
        const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        days = tempDate.getDate() - birthDate.getDate() + today.getDate();
        months--;
      }

      // Update the age states
      setYear(years.toString());
      setMonth(months.toString());
      setDay(days.toString());
      setAge(years.toString()); // Update the age state as well
    }
  };

  // Function to fetch search results from the API
  const fetchSearchResults = async (searchType, value) => {
    try {
      const response = await axios.get(`http://172.16.16.10:8060/api/SearchMaster`, {
        params: {
          SrchItem: searchType,
          SrchVal: value
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch search results');
    }
  };

  // Function to handle search input changes and fetch results based on searchType
  const handleSearchChange = async (searchType, value, setSearchResults, setError) => {
    try {
      const results = await fetchSearchResults(searchType, value);
      switch (searchType) {

        case 'RefBy':
          results.refByDetails.sort((a, b) => {
            const nameA = a.AhMst_pName.trim().toLowerCase();
            const nameB = b.AhMst_pName.trim().toLowerCase();
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.refByDetails);
          setError(null);
          break;

        case 'CollBy':
          results.collByDetails.sort((a, b) => {
            const nameA = a.AhMst_pName.trim().toLowerCase();
            const nameB = b.AhMst_pName.trim().toLowerCase();
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.collByDetails);
          setError(null);
          break;

        case 'Branch':
          results.brnchDetails.sort((a, b) => {
            const nameA = a.BrMst_Name.trim().toLowerCase();
            const nameB = b.BrMst_Name.trim().toLowerCase();
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.brnchDetails);
          console.log(results.brnchDetails);
          setError(null);
          break;

        case 'CollMode':
          results.mastrDetails.sort((a, b) => {
            const nameA = a.Mstr_Desc.trim().toLowerCase();
            const nameB = b.Mstr_Desc.trim().toLowerCase();
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.mastrDetails);
          console.log(results.mastrDetails);
          setError(null);
          break;

        default:
          break;
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleRefByChange = (event, newValue) => {
    if (newValue) {
      const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
      if (selectedRefBy) {
        setSelectedRefByKey(selectedRefBy.AhMst_Key);
        setRefBy(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_DrId: selectedRefBy.AhMst_Key,
        }));
        setOutDr('');
      }
    } else {
      setSelectedRefByKey('');
      setRefBy('');
      setInvData(prevState => ({
        ...prevState,
        Inv_DrId: 0,
      }));
    }
  };

  // Handler for changing Out Dr
  const handleOutDrChange = (event) => {
    setOutDr(event.target.value);
    setRefBy(''); // Clear Ref By when Out Dr changes
  };
  // Event handler for CollBy field changes
  const handleCollByChange = (event, newValue) => {
    if (newValue) {
      const selectedCollBy = searchResultsCollBy.find(result => result.AhMst_pName === newValue);
      if (selectedCollBy) {
        setSelectedCollByKey(selectedCollBy.AhMst_Key);
        setCollBy(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_CltnID: selectedCollBy.AhMst_Key,
        }));
      }
    } else {
      setSelectedCollByKey('');
      setCollBy('');
      setInvData(prevState => ({
        ...prevState,
        Inv_CltnID: 0,
      }));
    }
  };
  // Event handler for Branh field changes
  const handleBranchChange = (event, newValue) => {
    if (newValue) {
      const selectedBranch = searchResultsBranch.find(result => result.BrMst_Name === newValue);
      if (selectedBranch) {
        setSelectedBranchKey(selectedBranch.BrMst_Key);
        setBranch(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_BrId: selectedBranch.BrMst_Key,
        }));
      }
    } else {
      setSelectedBranchKey('');
      setBranch('');
      setInvData(prevState => ({
        ...prevState,
        Inv_BrId: 0,
      }));
    }
  };
  // eventhandler for collmode field changes
  const handleCollModeChange = (event, newValue) => {
    if (newValue) {
      const selectedCollMode = searchResultsCollMode.find(result => result.Mstr_Desc === newValue);
      if (selectedCollMode) {
        setSelectedCollModeKey(selectedCollMode.Mstr_Key);
        setCollMode(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_CollModeId: selectedCollMode.Mstr_Key,
        }));
      }
    } else {
      setSelectedCollModeKey('');
      setCollMode('');
      setInvData(prevState => ({
        ...prevState,
        Inv_CollModeId: 0,
      }));
    }
  };

  // Event handler for report requested through checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setReportRequestedThrough(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      fetchData();
    }
  }

  // for clearing the fields
  const clearDetails = () => {
    setLabNo(''); setBranchId(''); setYearId(''); setInvoiceData(null); setError(null);
    setInvDate(''); setInvTime(''); setPrefix(''); setName(''); setDay(''); setMonth(''); setYear(''); setGender('');
    setDob(''); setPhone1(''); setPhone2(''); setEmail(''); setNationality(''); setAddress(''); setRefBy(''); setOutDr('');
    setPassport(''); setSrfNo(''); setBranch(''); setAadhar(''); setWardNo(''); setIpOpNo(''); setCollMode(''); setCollBy('');
    setReportRequestedThrough({
      personally: false, courier: false, email: false, sms: false,
      phone: false,
    }); setReport({ urgentwork: false }); setNotes('');
  };
  // Event handler for "NEW" button click
  const handleNewButtonClick = () => {
    clearDetails();
  };


return (
    <>
    
      <CCardBody>
        {error && <Typography variant="body2" color="error">{error}</Typography>}
          <>
            <Box sx={{ border: '1px solid #ddd', padding: '16px', marginBottom: '10px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="labno"
                    label="Lab No"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={labNo}
                    onKeyDown={handleKeyDown}
                    // value={invoiceData ? invoiceData.labNo : ''}
                    onChange={(e) => setLabNo(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                    style={{ marginTop: '10px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="invDateTime"
                    label="Date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="datetime-local"
                    value={invDateTime}
                    onChange={handleDateTimeChange}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginTop: '10px' }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px',  marginBottom: '10px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                  <TextField
                    select
                    label="Prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
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
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item container xs={12} sm={7} spacing={1}>
                  <Grid item xs={3}>
                    <TextField
                      id="yyyy"
                      label="Age YY"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="mm"
                      label="Age MM"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="dd"
                      label="Age DD"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
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
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        label="Gender"
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
                    id="dob"
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                      calculateAge(e.target.value);
                    }}
                    InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                  />
                </Grid>
        <Grid item xs={12} sm={4}>
                  <TextField
                    id="phone1"
                    label="Phone1"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={phone1}
                    onChange={(e) => {
                      setPhone1(e.target.value)
                      setIsPhone1Valid(true)
                    }}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                    error={!isPhone1Valid}
                    helperText={!isPhone1Valid ? "Invalid Phone number" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="phone2"
                    label="Phone2"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={phone2}
                    onChange={(e) => {
                      setPhone2(e.target.value)
                      setIsPhone2Valid(true)
                    }}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                    error={!isPhone2Valid}
                    helperText={!isPhone2Valid ? "Invalid Phone number" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailValid(true);
                    }}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                    error={!isEmailValid}
                    helperText={!isEmailValid ? "Invalid email address" : ""}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="nationality"
                    label="Nationality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px', marginBottom: '10px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    freeSolo
                    options={searchResultsRefBy.map((result) => result ? result.AhMst_pName : '')}
                    value={refBy}
                    onInputChange={(event, newValue) => handleSearchChange('RefBy', newValue, setSearchResultsRefBy, setErrorRefBy)}
                    onChange={handleRefByChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="refBy"
                        label="Ref By"
                        variant="outlined"
                        size="small"
                        fullWidth
                        // error={!!errorRefBy}
                        // helperText={errorRefBy}
                        disabled={!!outDr}
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outDr"
                    label="Out Dr"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={outDr}
                    onChange={handleOutDrChange}
                    disabled={!!refBy} // Disable if Ref By has a value
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="passport"
                    label="Passport"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="srfno"
                    label="SRF No."
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={srfNo}
                    onChange={(e) => setSrfNo(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    freeSolo
                    options={searchResultsBranch.map((result) => result ? result.BrMst_Name : '')}
                    value={branch}
                    onInputChange={(event, newValue) => handleSearchChange('Branch', newValue, setSearchResultsBranch, setErrorBranch)}
                    onChange={handleBranchChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="branch"
                        label="Branch"
                        variant="outlined"
                        size="small"
                        fullWidth
                        // error={!!errorBranch}
                        // helperText={errorBranch}
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="aadhar"
                    label="Aadhar"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={aadhar}
                    onChange={handleAadharChange}
                    onBlur={handleAadharBlur}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                    error={!!errorAadhar}
                    helperText={errorAadhar}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="wardno"
                    label="Ward No"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={wardNo}
                    onChange={(e) => setWardNo(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="ipopno"
                    label="IP/OP NO"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={ipOpNo}
                    onChange={(e) => setIpOpNo(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    freeSolo
                    options={searchResultsCollMode.filter(result => result).map(result => result.Mstr_Desc || '')}
                    value={collMode}
                    onInputChange={(event, newValue) => handleSearchChange('CollMode', newValue, setSearchResultsCollMode, setErrorCollMode)}
                    onChange={handleCollModeChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="collMode"
                        label="Coll Mode"
                        variant="outlined"
                        size="small"
                        fullWidth
                        // error={!!errorCollMode}
                        // helperText={errorCollMode}
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    )}
                  />
                </Grid>
            <Grid item xs={12} sm={6}>
                  <Autocomplete
                    freeSolo
                    options={searchResultsCollBy.map((result) => result ? result.AhMst_pName : '')}
                    value={collBy}
                    onInputChange={(event, newValue) => handleSearchChange('CollBy', newValue, setSearchResultsCollBy, setErrorCollBy)}
                    onChange={handleCollByChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="collBy"
                        label="Coll By"
                        variant="outlined"
                        size="small"
                        fullWidth
                        // error={!!errorCollBy}
                        // helperText={errorCollBy}
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '16px',  marginBottom: '10px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="sampleOn"
                    label="Sample On"
                    type="datetime-local"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={smplDate}
                    onChange={handleSmplDateChange}
                    InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="reportTime"
                    label="Report Time"
                    type="datetime-local"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={repTime}
                    onChange={handleRepTimeChange}
                    InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                  />
                </Grid>
          <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox checked={reportRequestedThrough.personally} onChange={handleCheckboxChange} name="personally" />}
                        label="Personally"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={reportRequestedThrough.courier} onChange={handleCheckboxChange} name="courier" />}
                        label="Courier"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={reportRequestedThrough.phone} onChange={handleCheckboxChange} name="phone" />}
                        label="phone"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={reportRequestedThrough.email} onChange={handleCheckboxChange} name="email" />}
                        label="Email"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={reportRequestedThrough.sms} onChange={handleCheckboxChange} name="sms" />}
                        label="SMS"
                      />
                    </FormGroup>
                  </FormControl>

                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="notes"
                    label="Notes"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
              </Grid>
            </Box>
          </>
        <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Button
              variant="contained"
             
              onClick={saveDataToAPI} disabled={!isDataUpdated}
              sx={{ marginTop: 2, marginRight: 1,backgroundColor:'#3095E5' }}
            >Save</Button>
            <Button
              variant="contained"
            
              onClick={handleNewButtonClick}
              sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
            >New</Button>
            <Button
              variant='contained'
           
              sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
            >Exit</Button>
          </Grid>
        </Grid>
<ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </CCardBody>
</>
  )};
export default EditInvoice;
