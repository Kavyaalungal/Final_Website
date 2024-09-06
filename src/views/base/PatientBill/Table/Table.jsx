import { useState, useRef, useEffect } from 'react';
import {
  Card,Box, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
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
  const [currentRow, setCurrentRow] = useState({ id: Date.now(), testCode: '', testName: '', isEditable: true });
  const testCodeRef = useRef(null);
  const testNameRef = useRef(null);
  const [labNo, setLabNo] = useState(null);


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
        const response = await axios.get('http://172.16.16.10:8060/api/LabNoMax', {
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


  // const getCurrentDateTime = () => {
  //   const current = new Date();
  //   const year = current.getFullYear();
  //   const month = String(current.getMonth() + 1).padStart(2, '0');
  //   const day = String(current.getDate()).padStart(2, '0');
  //   const hours = String(current.getHours()).padStart(2, '0');
  //   const minutes = String(current.getMinutes()).padStart(2, '0');
  //   const seconds = String(current.getSeconds()).padStart(2, '0');

  //   return `${year}-${month}-${day}T${hours}:${minutes}`;
  // };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentRow.testCode && !currentRow.testName) {
        testNameRef.current.focus();
      } else if (currentRow.testCode && currentRow.testName) {
        setRows([...rows, currentRow]);
        setCurrentRow({ id: Date.now(), testCode: '', testName: '', isEditable: true });
        testCodeRef.current.focus();
      }
    }
  };

  // Calculate the total value from rows
  const calculateTotal = () => {
    return rows.reduce((sum, row) => sum + (parseFloat(row.total) || 0), 0).toFixed(2);
  };


 

  return (
    <>
   <Grid 
  container 
  justifyContent="flex-end" 
  spacing={2} // Add space between the Grid items
  sx={{ mb: 1, position: 'relative', top: '-63px', left: '90px' }} // Adjust the top and left position of the fields
>
<Grid 
  item 
  sx={{ position: 'relative', left: '-110px',width:'220px' ,top:'2px'}} // Adjust 'left' value as needed
>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Aligns content to the right
        alignItems: 'center',
        width:300,
        mt:2,
        ml:-12
       // Margin bottom for spacing
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Date/Time: 
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
       {currentDateTime}
      </Typography>
    </Box>
{/* <TextField
      label="Date/Time"
      variant="standard"  
      size="small"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      value={currentDateTime}  
      fullWidth
    /> */}
{/* <TextField
        label="Date/Time"
        variant="outlined"
        size="small"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
        defaultValue={getCurrentDateTime()} // Set the current date and time as the default value
      /> */}
</Grid>
<Grid 
  item 
  sx={{ position: 'relative', left: '-110px',width:'220px' ,top:'2px'}} // Adjust 'left' value as needed
>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width:300,
        mt:2,
        ml:1
      
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Lab No: 
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
      {labNo !== null ? labNo.toString() : 'Loading...'}
      </Typography>
    </Box>


</Grid>



</Grid>


    <Card className='secondcard' sx={{ height: '680px', overflow: 'hidden' ,
      width:1000,marginTop:-9,marginLeft:-24}} >
      <CardContent>
      

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Referred By"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ 
             
                height: 40,
                '& input': { padding: '8px',fontSize:'0.95rem' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Out Dr"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ 
                fontSize: '1rem',
                height: 40,
                '& input': { padding: '8px' }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Collection Mode</InputLabel>
              <Select
                label="Collection Mode"
                defaultValue=""
                sx={{ 
                  fontSize: '1rem',
                  height: 40,
                  '& .MuiSelect-select': { padding: '8px',fontSize:'0.95remrem' }
                }}
              >
                <MenuItem value="Direct">Direct</MenuItem>
                <MenuItem value="Indirect">Indirect</MenuItem>
              </Select>
            </FormControl>
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
            <TextField
              label="Corporate"
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
            <TextField
              label="Collected By"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ 
                fontSize: '1rem',
                height: 40,
                '& input': { padding: '8px' ,fontSize:'0.95remrem'}
              }}
            />
          </Grid>
        </Grid>


        <TableContainer
  component={Paper}
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
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '6%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1 ',fontWeight:'bold'}}>Sl No</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold'}}>Test Code</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '35%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold' }}>Test Name</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold' }}>Price</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold' }}>Discount</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold' }}>Total</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '5%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1',fontWeight:'bold' }}></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.id} sx={{ height: '32px' }}>
          <TableCell sx={{ fontSize: '0.95rem', width: '6%', padding: '4px 8px' }}>{index + 1}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '10%', padding: '4px 8px' }}>{row.testCode}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '35%', padding: '4px 8px' }}>{row.testName}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '7%', padding: '4px 8px' }}>{row.price || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '12%', padding: '4px 8px' }}>{row.discount || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '12%', padding: '4px 8px' }}>{row.total || ''}</TableCell>
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
          <TextField
            name="testCode"
            variant="outlined"
            size="small"
            fullWidth
            value={currentRow.testCode}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            inputRef={testCodeRef}
            InputProps={{
              sx: {
                '& fieldset': { border: 'none' },
                input: { padding: '0px', fontSize: '0.95rem', height: 20 },
              },
            }}
          />
        </TableCell>
        <TableCell sx={{ width: '35%', padding: '4px 8px' }}>
          <TextField
            id={`testName-${currentRow.id}`}
            name="testName"
            variant="outlined"
            size="small"
            fullWidth
            value={currentRow.testName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            inputRef={testNameRef}
            InputProps={{
              sx: {
                '& fieldset': { border: 'none' },
                input: { padding: '0px', fontSize: '0.95rem', height: 40 },
              },
            }}
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
          value={calculateTotal()}
          sx={{marginLeft:20}}
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
          sx={{marginLeft:20}}
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
          <Grid item sx={{ml:31}}>
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
      <Grid container spacing={2} direction="column" alignItems="center">
  {/* Grid for Net Amount Label */}
  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: '#bd2937',
        fontSize: 16,
        marginRight:-4
      }}
    >
      Net Amount
    </Typography>
  </Grid>

  {/* Grid for Net Amount Value */}
  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 'bold',
        color: '#bd2937',
        fontSize: 40,
        textAlign: 'right',
        minWidth: '100px',
        marginRight:-4 // Ensure enough space for larger values
      }}
    >
      2500.00 {/* This is where your dynamic value would go */}
    </Typography>
  </Grid>
</Grid>



        <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
           
          <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 3,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
                fontSize:'1rem', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
                onClick={() => setVisible(true)}
            >
              Payment
            </Button>
           
            <CashPayment visible={visible} setVisible={setVisible} />
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
