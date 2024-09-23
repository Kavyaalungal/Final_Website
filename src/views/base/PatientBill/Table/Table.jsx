import React, { useState, useEffect, useRef } from 'react';
import {
  Autocomplete,
  Card,Box, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table,
   TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';
import {   FormControlLabel, FormGroup, Checkbox, Typography ,Button} from '@mui/material';
import axios from 'axios';
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import CashPayment from './CashPayment';





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
  const [currentRow, setCurrentRow] = useState({ id: Date.now(), testCode: '', testName: '',discount:'', isEditable: true });
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
  const [referredCollectionmode, SetCollectionmode] = useState('');
  const [filterCollmode, Setfilcollmode] = useState([]);
  const [refoutdr,setRefoutdr] = useState('')
  const [filteroutdr,setFilteroutdr] = useState([]);
  const [testdata, setTestdata] = useState([]);
  const tableContainerRef = useRef(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Set up an interval to update the date and time every minute
    const intervalId = setInterval(() => {
      setCurrentDateTimeForInput(getCurrentDateTimeForInput());
    }, 60000); // Update every minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


   // Fetch current Lab No when the component mounts
   useEffect(() => {
    const fetchLabNo = async () => {
      try {
        const response = await axios.get('http://172.16.16.157:8083/api/LabNoMax', {
          params: {
            yrId: 2425,
            CmId: 2
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

  


  

  const handleRemoveRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleChange = (e, value) => {
    const { name } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
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
          setRows([
            ...rows,
            {
              id: Date.now(),
              testCode: matchedTest.Shortname,
              testName: matchedTest.tstname,
              price: matchedTest.Rate,
              discount: matchedTest.Discper,
              total: (matchedTest.Rate - (matchedTest.Rate * (matchedTest.Discper || 0) / 100)).toFixed(2)
            }
          ]);
          setCurrentRow({ id: Date.now(), testCode: '', testName: '', price: '',discount: '' });
          testCodeRef.current.focus(); // Move focus to test code input for new row
        }
      }
    }
  };

  // Filter test data based on user input
  const filterTestData = (inputValue) => {
    return testdata.filter(test =>
      test.Shortname.toLowerCase().includes(inputValue.toLowerCase()) ||
      test.tstname.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // Calculate total price
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
        const mastersResponse = await fetch('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=Masters')
        const testResponse = await fetch('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=Testdlts');
        const accountHeadsData = await accountHeadsResponse.json();
        const mastersData = await mastersResponse.json()
        const testData = await testResponse.json();
        setAccountHeads(accountHeadsData.Accountvalues);
        setMasters(mastersData.Mastervalues)
        setTestdata(testData.Testvalues || []);
        console.log(testData.Testvalues)

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);


  const handlePaymentClick = () => {
    const total = calculateTotal();
    setTotalAmount(total); // Set the total amount when the button is clicked
    setVisible(true); 
    
  };

  const handleReferredByChange = (event, value) => {
    setReferredByInput(value || '');
  };

  const handleCorporateByChange = (event, value) => {
    setReferredByCorporate(value || '');
  };

  const handleStaffByChange = (event, value) => {
    setReferredByStaff(value || '');
  };
  const handlecollbychange = (event, value) => {
    SetCollectionmode(value || '');
  }
  const handleoutdrchange = (event,value)=>{
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
      account.Type === 'AccHd' && account.Pname.toLowerCase().includes(input.toLowerCase())
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



  return (
    <>
  
<Grid 
  container 
  justifyContent="flex-end" 
  spacing={2}
  sx={{ mb: 2, position: 'relative', top: '-63px',marginLeft:15, }}
>
  {/* Date/Time field */}
  <Grid 
    item 
    xs={12} sm={6} // Full width on small screens, 6/12 on larger screens
    sx={{ position: 'relative', width: { xs: '100%', sm: '220px' }, 
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
        mt: 1,
        ml:-1,
        '@media (max-width: 375px)': {
       
          marginLeft: '111px', 
          marginTop: '-790px'
        },
        '@media (max-width:575px)': {
       
          marginLeft: '220px',
          marginTop:'-810px'     // Remove negative margin for smaller screens
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
         
        },}}
      >
        Date/Time:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          '@media (max-width: 768px)': {
       marginRight:5
      
         
        },
        '@media (max-width: 820px)': {
          fontSize: '1rem',  // Adjust font size for smaller screens
         marginRight:2   // Remove negative margin for smaller screens
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
        width: { xs: '100%', sm: 300 },
        mt: 1,
        '@media (max-width: 375px)': {
       
          marginLeft: '-60px',
          marginTop:'-759px'     // Remove negative margin for smaller screens
        },
        '@media (max-width:575px)': {
       
          marginLeft: '50px',
          marginTop:'-780px'     // Remove negative margin for smaller screens
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          '@media (max-width: 768px)': {
      
          marginLeft: '-17px',
          fontSize:'1rem'
              
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
          fontSize:'1rem'
              
        }, 
        }}
      >
        {labNo !== null ? labNo.toString() : 'Loading...'}
      </Typography>
    </Box>
  </Grid>
</Grid>



    <Card className='secondcard' sx={{ height: '680px', overflow: 'hidden' ,
      width:1030,marginTop:-9,marginLeft:-27,
    
     
        '@media (max-width: 375px)': {
        width:490,
         height:1530,
          marginLeft: '58px',
          marginTop:'-800px'     // Remove negative margin for smaller screens
        },
       
        '@media (max-width:575px)': {
          width:770,
           height:1330,
            marginLeft: '100px',
            marginTop:'-830px'     // Remove negative margin for smaller screens
          },
          '@media (min-width:993px)': {
            width:870,
             height:750,
              marginLeft: '-105px',
              // marginTop:'-830px'     // Remove negative margin for smaller screens
            },
          
           
              }} >
      <CardContent sx={{marginTop:-1}}>
      

        <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filteredDoctors.map((doctor) => doctor.Pname)}
                onInputChange={handleInputChange}
                value={referredByInput}
                onChange={handleReferredByChange}
                componentsProps={{
                  popper:{
                    sx:{
                      '& .MuiAutocomplete-listbox':{
                        fontSize:'0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Referred By" variant="outlined" size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Autocomplete
            freeSolo
            options={filteroutdr.map((doctor)=>doctor.Pname)}
            onInputChange={handleInputChange}
            value={refoutdr}
            onChange={handleoutdrchange}
            componentsProps={{
              popper:{
                sx:{
                  '& .MuiAutocomplete-listbox':{
                    fontSize:'0.75rem'
                  },
                },
              },
            }}
            renderInput={(params)=>(
              <TextField {...params} label='Out Dr' variant='outlined' size='small' fullWidth/>
            )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={filterCollmode.map((mode) => mode.Desc)}
                onInputChange={handleInputChange}
                value={referredCollectionmode}
                onChange={handlecollbychange}
                componentsProps={{
                  popper:{
                    sx:{
                      '& .MuiAutocomplete-listbox':{
                        fontSize:'0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label='Collection Mode' variant='outlined' size='small' fullWidth />
                )}
              />
            </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 1, marginTop: -3 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="IP/OP"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ 
                fontSize: '1rem',
                height: 40,
                '& input': { padding: '8px',fontSize:'0.95remrem' }
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
                componentsProps={{
                  popper:{
                    sx:{
                      '& .MuiAutocomplete-listbox':{
                        fontSize:'0.75rem'
                      },
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Corporate" variant="outlined" size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
           <Autocomplete
           freeSolo
           options={filteredStaff.map((acc)=>acc.Pname)}
           onInputChange={handleInputChange}
           value={referredByStaff}
           onChange={handleStaffByChange}
           componentsProps={{
            popper:{
              sx:{
                '& .MuiAutocomplete-listbox':{
                  fontSize:'0.75rem'
                },
              },
            },
          }}
           renderInput={(params)=>(
            <TextField{...params}label='Collectedby' variant='outlined' size='small' fullWidth/>
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
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '6%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1 ', fontWeight: 'bold' }}>Sl No</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1', fontWeight: 'bold' }}>Test Code</TableCell>
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
                    <TableCell sx={{ fontSize: '0.95rem', width: '6%', padding: '4px 8px' }}>{index + 1}</TableCell>
                    <TableCell sx={{ fontSize: '0.95rem', width: '10%', padding: '4px 8px' }}>{row.testCode}</TableCell>
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
                    options={testdata.map(test => test.Shortname)}
                    value={currentRow.testCode}
                    onInputChange={(event, newValue) => handleChange(event, newValue)}
                    onChange={(event, value) => handleTestSelection(event, value, 'selectOption', 'testCode')}
                    inputValue={currentRow.testCode}
                    componentsProps={{
                      popper:{
                        sx:{
                          '& .MuiAutocomplete-listbox':{
                            fontSize:'0.75rem'
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
                        InputProps={{
                          ...params.InputProps,
                          sx: {
                            '& fieldset': { border: 'none' },
                            input: { padding: '0px', fontSize: '1rem', height: 20 }
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
                    componentsProps={{
                      popper:{
                        sx:{
                          '& .MuiAutocomplete-listbox':{
                            fontSize:'0.75rem'
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
                        InputProps={{
                          ...params.InputProps,
                          sx: {
                            '& fieldset': { border: 'none' },
                            input: { padding: '0px', fontSize: '1rem', height: 20 }
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
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          id="reportTime"
          label="Report Time"
          type="datetime-local"
          value={currentDateTimeForInput} 
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={1.5}>
        <TextField
           id="standard-basic"
          label="Discount"
          variant="outlined"
          size="small"
          value={calculateTotalDiscount()}
          sx={{marginLeft:20,'@media (max-width: 375px)': {
          
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
          sx={{marginLeft:20,'@media (max-width: 375px)': {
          
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
          <FormGroup row sx={{ml:4}}>
            <FormControlLabel
              control={<Checkbox name="personally" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}} />}
              label="Personally"
            />
            <FormControlLabel
              control={<Checkbox name="whatsapp" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}}  />}
              label="WhatsApp"
            />
            <FormControlLabel
              control={<Checkbox name="courier"
                sx={{
                  color: 'grey', // Unchecked color
                  '&.Mui-checked': {
                    color: '#bd2937', // Checked color
                  },}}  />}
              label="Courier"
            />
            <FormControlLabel
              control={<Checkbox name="email" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}}  />}
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox name="sms" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}}  />}
              label="SMS"
            />
            <FormControlLabel
              control={<Checkbox name="telephone" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}}  />}
              label="Telephone"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item sx={{ml:31,'@media (max-width: 320px)': {
            // Further reduce font size for very small screens
        marginLeft: '30px', 
      },
      '@media (max-width: 375px)': {
        // Further reduce font size for very small screens
    marginLeft: '300px', 
  },'@media (max-width: 430px)': {
       
          marginLeft: '-1px',     // Remove negative margin for smaller screens
        },
        '@media (max-width: 768px)': {
         // Adjust font size for smaller screens
          marginLeft: '7px',
              // Remove negative margin for smaller screens
        },
        '@media (max-width: 820px)': {
          fontSize: '1.5rem',  // Adjust font size for smaller screens
          marginLeft: '5px',     // Remove negative margin for smaller screens
        },}}>
            <TextField
              label="Other Report Request"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          {/* <Grid item >
            <FormControlLabel
              control={<Checkbox name="urgent" sx={{
                color: 'grey',
                '&.Mui-checked': {
                  color: '#bd2937', 
                },}}  />}
              label="Urgent"
            />
          </Grid> */}

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
                '@media (max-width: 320px)': {
                  width: '100%', // Ensure full width on small screens
                },
              }}
            />
          </Grid>
          <Grid item >
            <FormControlLabel
              control={<Checkbox name="urgent" sx={{
                color: 'grey',
                '&.Mui-checked': {
                  color: '#bd2937', 
                },}}  />}
              label="Urgent"
            />
          </Grid>

          <Grid item>
            <FormControlLabel
              control={<Checkbox name="printpreview" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}} />}
              label="Print Preview"
            />
          </Grid>

          <Grid item>
            <FormControlLabel
              control={<Checkbox name="billformattwo"   sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },
              }} />}
              label="Bill Format Two"
            
            />
          </Grid>
          
       
         
        </Grid>
      </Grid>

      {/* Right Column */}
      <Grid item xs={6}>
      <Grid container  direction="column" alignItems="center">
  {/* Grid for Net Amount Label */}
  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 ,
  // '@media (max-width: 320px)': {
  //       marginLeft:25 
  //     },
      // '@media (max-width: 430px)': {
     
      //     marginLeft: '255px',    
      //   },
    
        // '@media (max-width: 768px)': {
      
        //   marginLeft: '10px', 
        //   marginTop:20    
        // },
        // '@media (max-width: 820px)': {
        //   fontSize: '1.5rem',  
        //   marginLeft: '10px', 
        //   marginTop:10    
        // },
        // '@media (max-width: 1024px)': {
        //   fontSize: '1.5rem',  
        //   marginLeft: '10px', 
        //   marginTop:8   
        // },
        '@media (max-width: 575px)': {
         marginTop:-22
           
        },
        }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: '#bd2937',
        fontSize: 16,
        marginRight:-4,
        marginTop:3,
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
  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5, 
    // '@media (max-width: 320px)': {
    //     marginLeft:25 
    //   },
    //   '@media (max-width: 430px)': {
     
    //     marginLeft: '255px',    
    //   },
      
   
  }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        color: '#bd2937',
        fontSize: 40,
        textAlign: 'right',
        minWidth: '100px',
        marginRight:-4,
        '@media (max-width: 375px)': {
           
          marginRight: '-270px', 
         
        },
        '@media (max-width:575px)': {
        
          marginRight: '-400px', 
       
               },
        // Ensure enough space for larger values
      }}
    >
      {calculateTotal()} {/* This is where your dynamic value would go */}
    </Typography>
  </Grid>
</Grid>



        <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
           
          <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 3,backgroundColor: '#bb4d58',marginTop:6,padding:'8px 18px',
                fontSize:'1rem', 
              // Media query for screen width <= 375px
              '@media (max-width: 375px)': {
                margin: '10px auto', // Center the button and reduce space
                fontSize: '0.8rem', // Smaller font size
                padding: '4px 8px', // Less padding to reduce width
                display: 'block', // Ensure it's block-level for better control
                maxWidth: '100px',
                marginLeft:'350px' // Optionally, limit the max width
              },
              '@media (max-width:575px)': {
                margin: '10px auto', // Center the button and reduce space
                fontSize: '1rem', // Smaller font size
                padding: '4px 12px', // Less padding to reduce width
                display: 'block', // Ensure it's block-level for better control
                maxWidth: '120px',
                marginLeft:'600px',
                marginTop:-33// Optionally, limit the max width
              },
    
    // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
                onClick={handlePaymentClick}
            >
              Payment
            </Button>
            <CashPayment  totalAmount={totalAmount} visible={visible} setVisible={setVisible} />
            {/* <CashPayment visible={visible} setVisible={setVisible} /> */}
          </div>
         
        </Grid>
      </Grid>
      </Grid>
    
    </Grid>
    {/* <CButton color="primary" onClick={() => setVisible(!visible)}>Vertically centered modal</CButton> */}
    {/* <CModal
      alignment="center"
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="VerticallyCenteredExample"
    >
      <CModalHeader>
        <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </CModalBody>
      <CModalFooter>
       
      </CModalFooter>
    </CModal> */}
   </CardContent>
    </Card>
    </>
  );
}

export default Maintable;







 



    







// import React, { useState, useEffect, useRef } from 'react';
// import { Autocomplete, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';

// const TestTable = () => {
//   const [rows, setRows] = useState([]);
//   const [testValues, setTestValues] = useState([]);
//   const [currentRow, setCurrentRow] = useState({
//     testCode: '',
//     testName: ''
//   });

//   const testCodeRef = useRef(null);
//   const testNameRef = useRef(null);

//   // Fetch the test values using Axios
//   useEffect(() => {
//     axios.get('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate?type=Testdlts')
//       .then(response => {
//         setTestValues(response.data.Testvalues || []);
//       })
//       .catch(error => {
//         console.error('Error fetching test values:', error);
//       });
//   }, []);

//   // Handle field change and auto-fill logic for testCode and testName
//   const handleTestCodeChange = (event, value) => {
//     const selectedTest = testValues.find(test => test.Shortname === value);
//     if (selectedTest) {
//       setCurrentRow({
//         testCode: selectedTest.Shortname,
//         testName: selectedTest.tstname
//       });
//       testNameRef.current.value = selectedTest.tstname;
//     } else {
//       setCurrentRow({
//         ...currentRow,
//         testCode: value
//       });
//     }
//   };

//   const handleTestNameChange = (event, value) => {
//     const selectedTest = testValues.find(test => test.tstname === value);
//     if (selectedTest) {
//       setCurrentRow({
//         testCode: selectedTest.Shortname,
//         testName: selectedTest.tstname
//       });
//       testCodeRef.current.value = selectedTest.Shortname;
//     } else {
//       setCurrentRow({
//         ...currentRow,
//         testName: value
//       });
//     }
//   };

//   // Handle Enter key press to add row and reset input
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       setRows([...rows, { ...currentRow, id: rows.length + 1 }]);
//       setCurrentRow({ testCode: '', testName: '' });
//       testCodeRef.current.value = '';
//       testNameRef.current.value = '';
//       testCodeRef.current.focus();
//     }
//   };

//   const handleRemoveRow = (id) => {
//     setRows(rows.filter(row => row.id !== id));
//   };

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         height: 240,
//         overflowY: 'scroll',
//         '&::-webkit-scrollbar': { width: '0px', background: 'transparent' },
//         scrollbarWidth: 'none',
//         marginTop: 2,
//         width:900,
//         marginLeft:-10
//       }}
//     >
//       <Table sx={{ minWidth: 800, tableLayout: 'fixed' }}>
//         <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
//           <TableRow sx={{ border: '2px solid #d6d1d1', height: '32px' }}>
//             <TableCell>Sl No</TableCell>
//             <TableCell>Test Code</TableCell>
//             <TableCell>Test Name</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Discount</TableCell>
//             <TableCell>Total</TableCell>
//             <TableCell></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={row.id}>
//               <TableCell>{index + 1}</TableCell>
//               <TableCell>{row.testCode}</TableCell>
//               <TableCell>{row.testName}</TableCell>
//               <TableCell>{row.price}</TableCell>
//               <TableCell>{row.discount}</TableCell>
//               <TableCell>{row.total}</TableCell>
//               <TableCell>
//                 <IconButton onClick={() => handleRemoveRow(row.id)}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//           <TableRow>
//             <TableCell>{rows.length + 1}</TableCell>
//             <TableCell>
//               <Autocomplete
//                 options={testValues.map(test => test.Shortname)}
//                 value={currentRow.testCode}
//                 onChange={handleTestCodeChange}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     variant="outlined"
//                     size="small"
//                     inputRef={testCodeRef}
//                     onKeyDown={handleKeyDown}
//                     InputProps={{
//                       ...params.InputProps,
//                       sx: {
//                         '& fieldset': { border: 'none' },
//                         input: { padding: '0px', fontSize: '0.95rem', height: 20 },
//                       },
//                     }}
//                   />
//                 )}
//               />
//             </TableCell>
//             <TableCell>
//               <Autocomplete
//                 options={testValues.map(test => test.tstname)}
//                 value={currentRow.testName}
//                 onChange={handleTestNameChange}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     variant="outlined"
//                     size="small"
//                     inputRef={testNameRef}
//                     onKeyDown={handleKeyDown}
//                     InputProps={{
//                       ...params.InputProps,
//                       sx: {
//                         '& fieldset': { border: 'none' },
//                         input: { padding: '0px', fontSize: '0.95rem', height: 40 },
//                       },
//                     }}
//                   />
//                 )}
//               />
//             </TableCell>
//             <TableCell>{/* Other fields go here */}</TableCell>
//             <TableCell></TableCell>
//             <TableCell></TableCell>
//             <TableCell></TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default TestTable;
