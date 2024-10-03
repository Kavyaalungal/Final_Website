import { useState, useRef, useEffect } from 'react';
import {
  Card, Box, CardContent, Grid, TextField, FormControl, Autocomplete, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';
import { FormControlLabel, FormGroup, Checkbox, Typography, Button } from '@mui/material';
import axios from 'axios';
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import CashPayment from './CashPayment';
import PropTypes from 'prop-types';
import { useActionData } from 'react-router-dom';
import './Table.css'
import CookiePopup from './Deletepopup';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

// Function to get formatted current date and time
const getCurrentDateTime = () => {
  
  const current = new Date();
  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const day = String(current.getDate()).padStart(2, '0');
  let hours = current.getHours();
  const minutes = String(current.getMinutes()).padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12 || 12; // Convert 0 hours to 12 for 12 AM
  const hoursFormatted = String(hours).padStart(2, '0');

  return `${month}/${day}/${year} ${hoursFormatted}:${minutes}${amPm}`;
};


const getCurrentDateTimeForInput = () => {
  const current = new Date();
  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const day = String(current.getDate()).padStart(2, '0');
  const hours = String(current.getHours()).padStart(2, '0');
  const minutes = String(current.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};



function Maintable() {
  const [visible, setVisible] = useState(false)
  const [currentDateTimeForInput, setCurrentDateTimeForInput] = useState(getCurrentDateTimeForInput());
  const [rows, setRows] = useState([]);
  const [currentRow, setCurrentRow] = useState({ id: Date.now(), testCode: '', testName: '', discount: '', tstkey: '', isEditable: true });
  const testCodeRef = useRef(null);
  const testNameRef = useRef(null);
  const [labNo, setLabNo] = useState(null);
  const [accountHeads, setAccountHeads] = useState([]);
  const [masters, setMasters] = useState([]);
  const [referredByInput, setReferredByInput] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [referredByCorporate, setReferredByCorporate] = useState('');
  const [filteredCorporate, setFilteredCorporate] = useState([]);
  const [referredByStaff, setReferredByStaff] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [referredCollectionmode, SetCollectionmode] = useState("DIRECT");
  const [filterCollmode, Setfilcollmode] = useState([]);
  const [refoutdr, setRefoutdr] = useState("")
  const [filteroutdr, setFilteroutdr] = useState([]);
  const [testdata, setTestdata] = useState([]);
  const tableContainerRef = useRef(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [ipOpValue, setIpOpValue] = useState('');
  const [shortNameList, setShortNameList] = useState('');
  const [bankName, setBankname] = useState('')
  const [openPopup, setOpenPopup] = useState(false);  // To manage popup open/close
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [defaultColl,SetDefCollectionmode] = useState('')
  const [urgentvalue,setUrgentValue] = useState('0');
  const [status,setStatus]  = useState(0);
  const [completionDate, setCompletionDate] = useState('');
  //for id
  const [referredByIdd, setReferredById] = useState('');
  const [corporateId, setCorporateId] = useState('')
  const [collbyId, setCollmodeId] = useState('')
  const [StaffCollid, setStaffCollid] = useState('')
  const [defaultId,setDefCollmodeId] = useState('')


  const location = useLocation();
  const labData = location.state?.labData;  
  const { LabNo } = labData || {};
  // Check if labData is present
  // if (!labData) {
  //   return <p>No lab data available.</p>;
  // }

  useEffect(() => {
    // Set up an interval to update the date and time every minute
    const intervalId = setInterval(() => {
      setCurrentDateTimeForInput(getCurrentDateTimeForInput());
    }, 60000); // Update every minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const BranchId = sessionStorage.getItem('selectedBranchKey')
  const YearId = sessionStorage.getItem('latestYearId' || 'selectedYrID')

  // Fetch current Lab No when the component mounts
  useEffect(() => {
    const fetchLabNo = async () => {
      try {
        const response = await axios.get('http://172.16.16.157:8083/api/LabNoMax', {
          params: {
            yrId: YearId,
            CmId: BranchId
          }

        });
        console.log(response.data.LabNo)
        const currentLabNo = response.data.LabNo; // Assuming response contains the Lab No
        setLabNo(currentLabNo);
      } catch (error) {
        console.error('Error fetching Lab No:', error);
      }
    };

    fetchLabNo();
  }, []);



  // Initialize state with the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    // Set up an interval to update the date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(getCurrentDateTime());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // const handleRemoveRow = (id) => {
  //   setRows(rows.filter(row => row.id !== id));
  //   alert('Are you sure you want to remove?')
  // };

  const handleRemoveRow = (id) => {
    setSelectedRowId(id);  // Set the ID of the row to be deleted
    setOpenPopup(true);

  }
  const handleAccept = () => {
    setRows(rows.filter(row => row.id !== selectedRowId));  // Remove the row
    setOpenPopup(false);  // Close the popup
  };

  const handleReject = () => {
    setOpenPopup(false);  // Close the popup without deleting
  };


  const handleChange = (e, value) => {
    const { name } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };
  const convertToHours = (rptD, rptTD) => {
    switch (rptTD) {
      case 'Days':
        return rptD * 24; // Convert days to hours
      case 'Minutes':
        return rptD / 60; // Convert minutes to hours
      case 'Hours':
      default:
        return rptD; // Already in hours
    }
  };

  const handleTestSelection = (event, value, reason, name) => {
    if (reason === 'selectOption') {
      const matchedTest = testdata.find(test =>
        (name === 'testCode' && test.Shortname === value) ||
        (name === 'testName' && test.tstname === value)
      );
      if (matchedTest) {
        setCurrentRow({
          ...currentRow,
          testCode: matchedTest.Shortname,
          testName: matchedTest.tstname,
          price: matchedTest.Rate,
          discount: matchedTest.Discper,
          testkey: matchedTest.tstkey,
          RptD: matchedTest.RptD,
          RptTD: matchedTest.RptTD


        });
      }
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentRow.testCode || currentRow.testName) {
        const matchedTest = testdata.find(test =>
          (currentRow.testCode && test.Shortname === currentRow.testCode) ||
          (currentRow.testName && test.tstname === currentRow.testName)
        );
        if (matchedTest) {
          const reportTimeInHours = convertToHours(matchedTest.RptD, matchedTest.RptTD);
  
          setRows([
            ...rows,
            {
              id: Date.now(),
              testCode: matchedTest.Shortname,
              testName: matchedTest.tstname,
              price: matchedTest.Rate,
              discount: matchedTest.Discper,
              tstkey: matchedTest.tstkey,
              RptD: matchedTest.RptD,
              RptTD: matchedTest.RptTD,
              reportTimeInHours, // Store the report time in hours
              total: (matchedTest.Rate - (matchedTest.Rate * (matchedTest.Discper || 0) / 100)).toFixed(2)
            }
          ]);
  
          // Update shortNameList with hyphen
          setShortNameList(prev => {
            return prev ? `${prev} - ${matchedTest.Shortname}` : matchedTest.Shortname;
          });
  
          setCurrentRow({ id: Date.now(), testCode: '', testName: '', price: '', discount: '', tstkey: '' });
          testCodeRef.current.focus(); // Move focus to test code input for new row
        }
      }
    }
  };
// Function to find the test with the longest report time
const getLongestReportTime = (rows) => {
  if (rows.length === 0) return null;

  let maxReportTimeRow = rows[0];
  
  rows.forEach(row => {
    if (row.reportTimeInHours > maxReportTimeRow.reportTimeInHours) {
      maxReportTimeRow = row;
    }
  });

  return maxReportTimeRow;
};

// Function to calculate the expected report completion date
const calculateCompletionDate = (longestTest) => {
  if (!longestTest) return null;

  const now = dayjs(); // Current date and time
  const reportCompletionTime = now.add(longestTest.reportTimeInHours, 'hour'); // Add the longest time to the current time

  return reportCompletionTime.format('YYYY-MM-DD HH:mm:ss'); // Format the result as date and time
};

// Example of how to use the functions
useEffect(() => {
  const longestTest = getLongestReportTime(rows);
  if (longestTest) {
    const completionDate = calculateCompletionDate(longestTest);
    setCompletionDate(dayjs(completionDate).format('YYYY-MM-DD HH:mm'));
  }
}, [rows]);
  // Filter test data based on user input
  const filterTestData = (inputValue) => {
    return testdata.filter(test =>
      test.Shortname.toLowerCase().includes(inputValue.toLowerCase()) ||
      test.tstname.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const invdlts = rows.map(row => ({
    cmpyId: BranchId,
    TestRate: row.price,
    tstid: row.tstkey,
    YrId: YearId,
    Discamt: row.discount,
    Orgrate: row.price

  }));
  console.log("row", invdlts)

  const calculateTotal = () => {
    return rows.reduce((sum, row) => {
      const price = parseFloat(row.price) || 0;
      const discount = parseFloat(row.discount) || 0;
      const discountedPrice = price - (price * (discount / 100));
      return sum + discountedPrice;
    }, 0).toFixed(2);
  };
  const calculateTotalDiscount = () => {
    return rows.reduce((sum, row) => sum + ((parseFloat(row.price) || 0) * (parseFloat(row.discount) || 0) / 100), 0).toFixed(2);
  };


  useEffect(() => {
    if (tableContainerRef.current) {
      const container = tableContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [rows]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountHeadsResponse = await fetch('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=AccountHeads');
        const mastersResponse = await fetch('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=Masters');
        const testResponse = await fetch('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=Testdlts');
        
        const accountHeadsData = await accountHeadsResponse.json();
        const mastersData = await mastersResponse.json();
        const testData = await testResponse.json();
  
        setAccountHeads(accountHeadsData.Accountvalues);
        setMasters(mastersData.Mastervalues || []); // Ensures `Mastervalues` is always an array
        setTestdata(testData.Testvalues || []);
  
        // Set "DIRECT" as default collection mode and its ID
        if (mastersData.Mastervalues && Array.isArray(mastersData.Mastervalues)) {
          const defaultMode = mastersData.Mastervalues.find(account => account.Desc === 'DIRECT');
          if (defaultMode) {
            SetDefCollectionmode(defaultMode.Desc); // Set "DIRECT" as default
            setDefCollmodeId(defaultMode.Mstrkey);  // Set corresponding ID
          }
        }
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    console.log('defaultColl:', defaultColl);
  }, [defaultColl]);


  const handleIpOpChange = (event) => {
    setIpOpValue(event.target.value);
    console.log('ipop', ipOpValue)
  };


  const handlePaymentClick = () => {
    const total = calculateTotal();
    setTotalAmount(total); // Set the total amount when the button is clicked
    setVisible(true);

  };

  const handleReferredByChange = (event, value) => {
    const selectedoctor = accountHeads.find(account => account.Pname === value);
    setReferredByInput(value || '');
    setReferredById(selectedoctor ? selectedoctor.Ahmstkey : '')
  };


  const handleCorporateByChange = (event, value) => {
    const selectedaccid = accountHeads.find(account => account.Pname === value);
    setReferredByCorporate(value || '');
    setCorporateId(selectedaccid ? selectedaccid.Ahmstkey : '')
  };

  const handleStaffByChange = (event, value) => {
    const selectstaffcoll = accountHeads.find(account => account.Pname === value);
    setReferredByStaff(value || '');
    setStaffCollid(selectstaffcoll ? selectstaffcoll.Ahmstkey : '')
  };

  const handlecollbychange = (event, value) => {
    // const selectedcollmode = masters.find(account => account.Desc === value);
    // SetCollectionmode(value || '');
    // setCollmodeId(selectedcollmode ? selectedcollmode.Mstrkey : '')
    if(value){
      const selectedcollmode = masters.find(account => account.Desc === value);
      if(selectedcollmode){
        SetCollectionmode(value)
        setCollmodeId(selectedcollmode.Mstrkey)
      }
      else{
        SetCollectionmode('')
        setCollmodeId('')
      }
    }
    else{
      SetCollectionmode('')
      setCollmodeId('')
    }

  }



  const handleoutdrchange = (event, value) => {
    console.log('outdrbefore', value)
    setRefoutdr(value || '');

  }




  const getReferredBy = (input) => {
    if (!Array.isArray(accountHeads)) return [];
    return accountHeads.filter(account =>
      account.Type === 'Doctor' && account.Pname.toLowerCase().includes(input.toLowerCase())
    );
  };
  const getoutdrBy = (input) => {
    if (!Array.isArray(accountHeads)) return [];
    return accountHeads.filter(account =>
      account.Type === 'Doctor' && account.Pname.toLowerCase().includes(input.toLowerCase())
    );
  };
  const getCorporateBy = (input) => {
    if (!Array.isArray(accountHeads)) return [];
    return accountHeads.filter(account =>
      (account.Type === 'AccHd' && (account.Grpid.trim() === '27' || account.Grpid.trim() === '28')) ||
      account.Type === 'Hosp' &&
      account.Pname.toLowerCase().includes(input.toLowerCase())
    );
  };
  const getStaffBy = (input) => {
    if (!Array.isArray(accountHeads)) return [];
    return accountHeads.filter(account =>
      account.Type === 'Staff' && account.Pname.toLowerCase().includes(input.toLowerCase())
    );
  }

  const getCollmode = (input) => {
    if (!Array.isArray(masters)) return [];
    return masters.filter(account =>
      account.MstrType === 'CollMode' && account.Desc.toLowerCase().includes(input.toLowerCase())
    )
  }

  const handleInputChange = (event, value) => {
    setFilteredDoctors(getReferredBy(value));
    setFilteredCorporate(getCorporateBy(value));
    setFilteredStaff(getStaffBy(value));
    Setfilcollmode(getCollmode(value));
    setFilteroutdr(getoutdrBy(value));

  };

  //reset
  const resetTable = () => {
    setReferredByInput(' ');
    setRefoutdr(' ');
    SetCollectionmode(' ');
    setIpOpValue(' ');
    setReferredByCorporate(' ');
    setReferredByStaff(' ')

  }
//urgent value checkbox
  const handlecheckboxchange = (event)=>{
    const value = (event.target.checked? 1 : 0);
    setUrgentValue(value);


    if(value===1){
      setStatus(2)
    }else{
      setStatus(0)
    }
    
  };







  return (
    <>
     {/* <div style={{marginBottom:59}}>
      <h5>Proceed to Bill for Lab No: {labData.LabNo}</h5>

      
    </div> */}

      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ mb: 2, position: 'relative', top: '-63px', marginLeft: 15, }}
      >
        {/* Date/Time field */}
        <Grid
          item
          xs={12} sm={6} // Full width on small screens, 6/12 on larger screens
          sx={{
            position: 'relative', width: { xs: '100%', sm: '220px' },
            top: '2px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: { xs: '100%', sm: 300 },
              mt: 2,
              '@media (max-width: 375px)': {

                marginLeft: '111px',
                marginTop: '-790px'
              },
              '@media (max-width:575px)': {

                marginLeft: '220px',
                marginTop: '-810px'     // Remove negative margin for smaller screens
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },

                '@media (max-width: 820px)': {
                  fontSize: '1rem',
                  marginLeft: '-25px',
                },
                '@media (max-width: 1024px)': {
                  fontSize: '1rem',
                  marginLeft: '-190px',

                },
              }}
            >
              Date/Time:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '@media (max-width: 768px)': {
                  marginRight: 5


                },
                '@media (max-width: 820px)': {
                  fontSize: '1rem',  // Adjust font size for smaller screens
                  marginRight: 2   // Remove negative margin for smaller screens
                },
                '@media (max-width: 1024px)': {
                  fontSize: '1rem',  // Adjust font size for smaller screens
                  marginRight: '160px',

                },
              }}
            >
              {currentDateTime}
            </Typography>
          </Box>
        </Grid>

        {/* Lab No field */}
        <Grid
          item
          xs={12} sm={6} // Full width on small screens, 6/12 on larger screens
          sx={{ position: 'relative', width: { xs: '100%', sm: '220px' }, top: '2px', }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: { xs: '100%', sm: 265 },
              mt: 2,
              '@media (max-width: 375px)': {

                marginLeft: '-60px',
                marginTop: '-759px'     // Remove negative margin for smaller screens
              },
              '@media (max-width:575px)': {

                marginLeft: '50px',
                marginTop: '-780px'     // Remove negative margin for smaller screens
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '@media (max-width: 768px)': {

                  marginLeft: '-10px',
                  fontSize: '1rem'

                },

              }}
            >
              Lab No:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },

                '@media (max-width: 768px)': {

                  marginRight: '-11px',
                  fontSize: '1rem'

                },
              }}
            >
              {labNo !== null ? labNo.toString() : LabNo}
            </Typography>
          </Box>
        </Grid>
      </Grid>



      <Card className='secondcard' sx={{
        height: '680px', overflow: 'hidden',
        width: 1000, marginTop: -9, marginLeft: -24,


        '@media (max-width: 375px)': {
          width: 490,
          height: 1530,
          marginLeft: '58px',
          marginTop: '-800px'     
        },

        '@media (max-width:575px)': {
          width: 770,
          height: 1330,
          marginLeft: '100px',
          marginTop: '-830px'     
        },
        '@media (min-width:993px)': {
          width: 870,
          height: 750,
          marginLeft: '-105px',
          // marginTop:'-830px'   
          marginBottom:1  
        },


      }} >
        <CardContent sx={{ marginTop: -1 }}>


        <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filteredDoctors.map((doctor) => doctor.Pname)}
                onInputChange={handleInputChange}
                value={referredByInput}
                onChange={handleReferredByChange}
                // disableClearable
                componentsProps={{
                  popper: {
                    sx: {
                      '& .MuiAutocomplete-listbox': {
                        fontSize: '0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Referred By" variant="outlined" size="small" fullWidth
                    InputProps={{
                      ...params.InputProps,
                      sx: {

                        '& input:focus': {
                          backgroundColor: '#adff2f', // Set background color when focused
                        },
                      },
                    }} />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filteroutdr.map((doctor) => doctor.Pname)}
                onInputChange={handleInputChange}
                value={refoutdr}
                onChange={handleoutdrchange}
                // disableClearable
                componentsProps={{
                  popper: {
                    sx: {
                      '& .MuiAutocomplete-listbox': {
                        fontSize: '0.75rem',
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label='Out Dr'
                    variant='outlined'
                    size='small'
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      sx: {

                        '& input:focus': {
                          backgroundColor: '#adff2f', // Set background color when focused
                        },
                      },
                    }}
                  />
                )}
              />

            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filterCollmode.map((mode) => mode.Desc)}
                onInputChange={handleInputChange}
                value={defaultColl||referredCollectionmode}
                onChange={handlecollbychange}
                // disableClearable
                componentsProps={{
                  popper: {
                    sx: {
                      '& .MuiAutocomplete-listbox': {
                        fontSize: '0.75rem',
                        '&input': {
                          '&:focus': {
                            backgroundColor: '#adff2f'
                          }
                        }

                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label='Collection Mode' variant='outlined' size='small' fullWidth
                    InputProps={{
                      ...params.InputProps,
                      sx: {

                        '& input:focus': {
                          backgroundColor: '#adff2f', // Set background color when focused
                        },
                      },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1, marginTop: -3 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="IP/OP"
                variant="outlined"
                value={ipOpValue}
                onChange={handleIpOpChange}
                size="small"
                fullWidth
                sx={{
                  fontSize: '1rem',
                  height: 40,
                  '& input': {
                    padding: '8px', fontSize: '0.95rem',
                    '&:focus': {
                      backgroundColor: '#adff2f'
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filteredCorporate.map((acc) => acc.Pname)}
                onInputChange={handleInputChange}
                value={referredByCorporate}
                onChange={handleCorporateByChange}
                // disableClearable
                componentsProps={{
                  popper: {
                    sx: {
                      '& .MuiAutocomplete-listbox': {
                        fontSize: '0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Corporate" variant="outlined" size="small" fullWidth
                    InputProps={{
                      ...params.InputProps,
                      sx: {

                        '& input:focus': {
                          backgroundColor: '#adff2f', // Set background color when focused
                        },
                      },
                    }} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filteredStaff.map((acc) => acc.Pname)}
                onInputChange={handleInputChange}
                value={referredByStaff}
                onChange={handleStaffByChange}
                // disableClearable
                componentsProps={{
                  popper: {
                    sx: {
                      '& .MuiAutocomplete-listbox': {
                        fontSize: '0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField{...params} label='Collectedby' variant='outlined' size='small' fullWidth
                    InputProps={{
                      ...params.InputProps,
                      sx: {

                        '& input:focus': {
                          backgroundColor: '#adff2f', // Set background color when focused
                        },
                      },
                    }} />
                )}


              />
            </Grid>
          </Grid>



          <TableContainer
            component={Paper}
            ref={tableContainerRef}
            sx={{
              height: 240,
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                width: '0px',
                background: 'transparent',
              },
              scrollbarWidth: 'none',
              marginTop: 2,

            }}
          >
            <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
              <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
                <TableRow sx={{ border: '2px solid #d6d1d1', height: '32px' }}>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1 ', fontWeight: 'bold' }}>Sl No</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Test Code</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '35%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Test Name</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Discount</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Total</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '5%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.id} sx={{ height: '32px' }}>
                    <TableCell sx={{ fontSize: '0.95rem', width: '7%', padding: '4px 8px' }}>{index + 1}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '12%', padding: '4px 8px' }}>{row.testCode}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '35%', padding: '4px 8px' }}>{row.testName}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '7%', padding: '4px 8px' }}>{row.price || ''}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '12%', padding: '4px 8px' }}>{row.discount}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '12%', padding: '4px 8px' }}>{row.total}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '5%', padding: '4px 8px' }}>
                      <IconButton onClick={() => handleRemoveRow(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ height: '32px' }}>
                  <TableCell sx={{ fontSize: '0.95rem', width: '6%', padding: '4px 8px' }}>{rows.length + 1}</TableCell>
                  <TableCell sx={{ width: '10%', padding: '4px 8px' }}>
                    <Autocomplete
                      freeSolo
                      options={testdata
                        .filter(test => test.Shortname && test.Shortname.trim() !== '') //trim for filtering short name 
                        .map(test => test.Shortname)}
                      value={currentRow.testCode}
                      onInputChange={(event, newValue) => handleChange(event, newValue)}
                      onChange={(event, value) => handleTestSelection(event, value, 'selectOption', 'testCode')}
                      inputValue={currentRow.testCode}
                      // disableClearable
                      filterOptions={(options, { inputValue }) => {
                        const filtered = options.filter(option =>
                          option.toLowerCase().includes(inputValue.toLowerCase())
                        );
                        return inputValue ? filtered : options; // Show all options if inputValue is empty
                      }}
                      componentsProps={{
                        popper: {
                          sx: {
                            '& .MuiAutocomplete-listbox': {
                              fontSize: '0.75rem'
                            },
                          },
                        },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="testCode"
                          variant="outlined"
                          size="small"
                          fullWidth
                          inputRef={testCodeRef}
                          onKeyDown={handleKeyDown}
                          onFocus={(e) => e.target.classList.add('caret-custom')}

                          InputProps={{
                            ...params.InputProps,
                            sx: {
                              '& fieldset': { border: 'none' },
                              input: {
                                padding: '0px', fontSize: '1rem', height: 20,
                                '&:focus': {
                                  backgroundColor: '#adff2f'
                                }
                              }
                            }
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ width: '35%', padding: '4px 8px' }}>
                    <Autocomplete
                      freeSolo
                      options={testdata.map(test => test.tstname)}
                      value={currentRow.testName}
                      onInputChange={(event, newValue) => handleChange(event, newValue)}
                      onChange={(event, value) => handleTestSelection(event, value, 'selectOption', 'testName')}
                      inputValue={currentRow.testName}
                      // disableClearable
                      filterOptions={(options, { inputValue }) => {
                        const filtered = options.filter(option =>
                          option.toLowerCase().includes(inputValue.toLowerCase())
                        );
                        return inputValue ? filtered : options; // Show all options if inputValue is empty
                      }}
                      componentsProps={{
                        popper: {
                          sx: {
                            '& .MuiAutocomplete-listbox': {
                              fontSize: '0.75rem'
                            },
                          },
                        },
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="testName"
                          variant="outlined"
                          size="small"
                          fullWidth
                          inputRef={testNameRef}
                          onKeyDown={handleKeyDown}
                          onFocus={(e) => e.target.classList.add('caret-custom')}
                          InputProps={{
                            ...params.InputProps,
                            sx: {
                              '& fieldset': { border: 'none' },
                              input: {
                                padding: '0px', fontSize: '1rem', height: 20,
                                '&:focus': {
                                  backgroundColor: '#adff2f'
                                }
                              }
                            }
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell sx={{ width: '7%', padding: '4px 8px' }}></TableCell>
                  <TableCell sx={{ width: '12%', padding: '4px 8px' }}></TableCell>
                  <TableCell sx={{ width: '12%', padding: '4px 8px' }}></TableCell>
                  <TableCell sx={{ width: '5%', padding: '4px 8px' }}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>

            <Grid item xs={12} sm={3}>
              <TextField
                id="sampleOn"
                label="Sample On"
                type="datetime-local"
                variant="outlined"
                value={currentDateTimeForInput}
                size="small"
                fullWidth
                sx={{width:'105%'}}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: '1rem' },
                }}
                InputProps={{
                  sx: {
                    '&.Mui-focused input': {
                      backgroundColor: '#adff2f',
                    },
                  },
                }}
              />

            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="reportTime"
                label="Report Time"
                type="datetime-local"
                value={completionDate}
                variant="outlined"
                sx={{width:'105%'}}
                size="small"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: '1rem' },
                  
                }}
                InputProps={{
                  sx: {
                    '&.Mui-focused input': {
                      backgroundColor: '#adff2f',
                    },
                  },
                }}
              />
            </Grid>


            <Grid item xs={12} sm={1.5}>
              <TextField
                id="standard-basic"
                label="Discount"
                variant="outlined"
                size="small"
                value={calculateTotalDiscount()}
                sx={{
                  marginLeft: 20, '@media (max-width: 375px)': {

                    marginLeft: '1px',

                  },
                  '@media (max-width:575px)': {

                    marginLeft: '1px',

                  },
                }}
                InputProps={{
                  readOnly: true,
                  sx: {
                    '& input': { textAlign: 'right', padding: '6px', fontSize: '1rem' },
                  },

                }}
                fullWidth
              />
              </Grid>

              <Grid item xs={12} sm={1.5}>
              <TextField
                label="Total"
                variant="outlined"
                size="small"
                value={calculateTotal()}
                sx={{
                  marginLeft: 20, '@media (max-width: 375px)': {

                    marginLeft: '1px',

                  },
                  '@media (max-width:575px)': {

                    marginLeft: '1px',

                  },
                }}
                InputProps={{
                  readOnly: true,
                  sx: {
                    '& input': { textAlign: 'right', padding: '6px', fontSize: '1rem' },
                  },
                }}
                fullWidth
              />
            </Grid>

          </Grid>
          <FormControl component="fieldset" fullWidth sx={{ mt: 1 }}>
  <Grid container alignItems="center" spacing={2}>
    <Grid item>
      <Typography variant="body1">Report Requested Through</Typography>
    </Grid>
    <Grid item xs>
      <FormGroup row sx={{ ml: 4 }}>
        <FormControlLabel
          control={<Checkbox name="personally" sx={{
            color: 'grey', // Unchecked color
            '&.Mui-checked': {
              color: '#bd2937', // Checked color
            },
          }} />}
          label="Personally"
        />
        <FormControlLabel
          control={<Checkbox name="whatsapp" sx={{
            color: 'grey', // Unchecked color
            '&.Mui-checked': {
              color: '#bd2937', // Checked color
            },
          }} />}
          label="WhatsApp"
        />
        <FormControlLabel
          control={<Checkbox name="courier"
            sx={{
              color: 'grey', // Unchecked color
              '&.Mui-checked': {
                color: '#bd2937', // Checked color
              },
            }} />}
          label="Courier"
        />
        <FormControlLabel
          control={<Checkbox name="email" sx={{
            color: 'grey', // Unchecked color
            '&.Mui-checked': {
              color: '#bd2937', // Checked color
            },
          }} />}
          label="Email"
        />
        <FormControlLabel
          control={<Checkbox name="sms" sx={{
            color: 'grey', // Unchecked color
            '&.Mui-checked': {
              color: '#bd2937', // Checked color
            },
          }} />}
          label="SMS"
        />
        <FormControlLabel
          control={<Checkbox name="telephone" sx={{
            color: 'grey', // Unchecked color
            '&.Mui-checked': {
              color: '#bd2937', // Checked color
            },
          }} />}
          label="Telephone"
        />
        {/* Add the TextField directly here to align with checkboxes */}
        <TextField
          label="Other Report Request"
          variant="outlined"
          size="small"
         
         
         sx={{
            ml: 2,
            fontSize: '1rem',
            height: 40,
            '& input': {
              padding: '8px', fontSize: '0.95rem',
              '&:focus': {
                backgroundColor: '#adff2f'
              }
            } 
          }}

          // Add some left margin for spacing
        />
      </FormGroup>
    </Grid>
  </Grid>
</FormControl>


          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6}>
              <Grid container spacing={2}>
               


              <Grid item xs={12}>
                  <TextField
                    id="notes"
                    label="Notes"
                    variant="outlined"
                    multiline
                    rows={3}
                    size="small"
                    fullWidth
                    sx={{
                      mt:1,
                      '@media (max-width: 320px)': {
                        width: '100%', // Ensure full width on small screens
                      },
                      '& .MuiOutlinedInput-root.Mui-focused': {
                        backgroundColor: '#adff2f', // Set background color on focus
                      },
                    }}
                  />

                </Grid>

                <Grid item >
                  <FormControlLabel
                    control={<Checkbox name="urgent" onChange={handlecheckboxchange} sx={{
                      color: 'grey',
                      '&.Mui-checked': {
                        color: '#bd2937',
                      },
                    }} />}
                    label="Urgent"
                  />
                </Grid>

                <Grid item>
                  <FormControlLabel
                    control={<Checkbox name="printpreview" sx={{
                      color: 'grey', // Unchecked color
                      '&.Mui-checked': {
                        color: '#bd2937', // Checked color
                      },
                    }} />}
                    label="Print Preview"
                  />
                </Grid>

                <Grid item sx={{marginTop:-2}}>
                  <FormControlLabel
                    control={<Checkbox name="billformattwo" sx={{
                      color: 'grey', // Unchecked color
                      '&.Mui-checked': {
                        color: '#bd2937', // Checked color\
                        
                      },
                    }} />}
                    label="Bill Format Two"

                  />
                </Grid>



              </Grid>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="center">
                {/* Grid for Net Amount Label */}
                <Grid item xs={12} sx={{
                  width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5,

                  '@media (max-width: 575px)': {
                    marginTop: -22

                  },
                }}>
                  <Typography
                    variant="h6"

                    sx={{
                      fontWeight: 'bold',
                      color: '#bd2937',
                      fontSize: 16,
                      marginRight: -4,
                      marginTop: 3,
                      '@media (max-width: 375px)': {
                        fontSize: '1.5rem',  // Adjust font size for smaller screens
                        marginRight: '-270px',

                      },
                      '@media (max-width:575px)': {
                        fontSize: '1.5rem',
                        marginRight: '-400px',

                      },
                    }}
                  >
                    Total Amount

                  </Typography>
                </Grid>

                {/* Grid for Net Amount Value */}
                <Grid item xs={12} sx={{
                  width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5,


                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#bd2937',
                      fontSize: 40,
                      textAlign: 'right',
                      minWidth: '100px',
                      marginRight: -4,
                      '@media (max-width: 375px)': {

                        marginRight: '-270px',

                      },
                      '@media (max-width:575px)': {

                        marginRight: '-400px',

                      },
                      // Ensure enough space for larger values
                    }}
                  >
                    {calculateTotal()}   {/* This is where your dynamic value would go */}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>

                    <Button
                      variant="contained"
                      // className="button"
                      sx={{
                        textTransform: 'none', marginRight: 3, backgroundColor: '#bb4d58', marginTop: 6, padding: '8px 18px',
                        fontSize: '1rem',
                        // Media query for screen width <= 375px
                        '@media (max-width: 375px)': {
                          margin: '10px auto', // Center the button and reduce space
                          fontSize: '0.8rem', // Smaller font size
                          padding: '4px 8px', // Less padding to reduce width
                          display: 'block', // Ensure it's block-level for better control
                          maxWidth: '100px',
                          marginLeft: '350px' // Optionally, limit the max width
                        },
                        '@media (max-width:575px)': {
                          margin: '10px auto', // Center the button and reduce space
                          fontSize: '1rem', // Smaller font size
                          padding: '4px 12px', // Less padding to reduce width
                          display: 'block', // Ensure it's block-level for better control
                          maxWidth: '120px',
                          marginLeft: '600px',
                          marginTop: -33// Optionally, limit the max width
                        },

                        // Default background color
                        '&:hover': {
                          backgroundColor: '#bd2937', // Background color on hover
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                        },
                      }}
                      onClick={handlePaymentClick}
                    >
                      Payment
                    </Button>
                    <CashPayment labno={labNo} totalAmount={totalAmount} visible={visible} setVisible={setVisible}
                      referredByInput={referredByInput}
                      referredById={referredByIdd}
                      refoutdr={refoutdr}
                      referredCollectionmode={referredCollectionmode}
                      referredByStaff={referredByStaff}
                      corporateId={corporateId}
                      collbyId={collbyId}
                      StaffCollid={StaffCollid}
                      invdlts={invdlts}
                      ipOpValue={ipOpValue}
                      accountHeads={accountHeads}
                      currentDateTime={currentDateTime}
                      masters={masters}
                      shortNameList={shortNameList}
                      resetTable={resetTable}
                      defaultId={defaultId}
                      defaultColl={defaultColl}
                      urgentvalue={urgentvalue}
                      status={status}
                      completionDate={completionDate}



                    />


                    <CookiePopup
                      onAccept={handleAccept}
                      onReject={handleReject}
                      open={openPopup}
                      onClose={handleReject}

                    />

                  </div>

                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </CardContent>
      </Card>
    </>
  );
}
Maintable.propTypes = {
  // calculateTotal: PropTypes.func.isRequired,
  labNo: PropTypes.string.isRequired
};

export default Maintable;
