import { useState, useRef, useEffect } from 'react';
import {
  Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';
import {   FormControlLabel, FormGroup, Checkbox, Typography } from '@mui/material';
function Maintable() {
  const [rows, setRows] = useState([]);
  const [currentRow, setCurrentRow] = useState({ id: Date.now(), testCode: '', testName: '', isEditable: true });
  const testCodeRef = useRef(null);
  const testNameRef = useRef(null);
  const [labNo, setLabNo] = useState(1);

  useEffect(() => {
    // Increment lab number logic
    const incrementLabNo = () => {
      const currentLabNo = parseInt(localStorage.getItem('labNo')) || 1;
      setLabNo(currentLabNo);
      localStorage.setItem('labNo', currentLabNo + 1);
    };

    incrementLabNo();
  }, []);

  const getCurrentDateTime = () => {
    const current = new Date();
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const day = String(current.getDate()).padStart(2, '0');
    const hours = String(current.getHours()).padStart(2, '0');
    const minutes = String(current.getMinutes()).padStart(2, '0');
    const seconds = String(current.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

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
  sx={{ mb: 1, position: 'relative', top: '-68px', left: '94px' }} // Adjust the top and left position of the fields
>
<Grid 
  item 
  sx={{ position: 'relative', left: '-110px',width:'220px' }} // Adjust 'left' value as needed
>
<TextField
      label="Date/Time"
      variant="standard"  // Changed variant to 'standard'
      size="small"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      value={currentDateTime}  // Set the current date and time as the default value
      fullWidth
    />
{/* <TextField
        label="Date/Time"
        variant="outlined"
        size="small"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
        defaultValue={getCurrentDateTime()} // Set the current date and time as the default value
      /> */}
</Grid>

<Grid item>
  <TextField
    id="standard-basic"
    label="Lab No"
    variant="standard"
    // value={labNo}
    fullWidth
    
    InputProps={{
      readOnly: true,
      sx: {
        textAlign: 'right', // Aligns the text to the right
        '& input': {
          textAlign: 'right', // Ensures the text inside the input is right-aligned
        },
      },
    }}
    InputLabelProps={{
      sx: {
        right: 0, // Move the label to the right
        left: 'auto', // Disable the default left alignment
        transformOrigin: 'top right', // Align transform origin to the right
      },
    }}
  />
</Grid>

</Grid>


    <Card sx={{ height: '101%', overflow: 'hidden' ,width:1000,marginTop:-9,marginLeft:-24}}>
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
                '& input': { padding: '8px',fontSize:'0.95remrem' }
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
    marginTop: 3,
  }}
>
  <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
    <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
      <TableRow sx={{ border: '2px solid #d6d1d1',position: 'sticky' }}>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '6%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1 '}}>Sl No</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '15%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Test Code</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '40%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Test Name</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Price</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Discount</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Total</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '5.5%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell sx={{ fontSize: '0.95rem', width: '6%' }}>{index + 1}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem', width: '15%' }}>{row.testCode}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem,',width: '40%' }}>{row.testName}</TableCell>
          <TableCell sx={{fontSize: '0.95rem', width: '10%' }}>{row.price || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.95rem',width: '10%' }}>{row.discount || ''}</TableCell>
          <TableCell sx={{fontSize: '0.95rem', width: '10%' }}>{row.total || ''}</TableCell>
          <TableCell sx={{fontSize: '0.95rem', width: '8%' }}>
            <IconButton onClick={() => handleRemoveRow(row.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell sx={{ fontSize: '0.95rem', width: '6%' }}>{rows.length + 1}</TableCell>
        <TableCell sx={{ width: '15%' }}>
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
        <TableCell sx={{ width: '40%' }}>
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
        <TableCell sx={{ width: '10%' }}></TableCell>
        <TableCell sx={{ width: '10%' }}></TableCell>
        <TableCell sx={{ width: '10%' }}></TableCell>
        <TableCell sx={{ width: '8%' }}></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

      

        {/* Total Box */}
        {/* <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
  <Grid item container xs={12} sm={8} spacing={1} alignItems="center">
   
    <Grid item xs={12} sm={7}>
      <TextField
        label="Date/Time"
        variant="outlined"
        size="small"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
      />
    </Grid>
    <Grid item xs={12} sm={5}>
      <TextField
        label="Field 2"
        variant="outlined"
        size="small"
        InputProps={{
          sx: {
            '& input': { padding: '6px', fontSize: '1rem' },
          }
        }}
      />
    </Grid>
  </Grid>

 
  <Grid item xs={12} sm={2}>
    <TextField
      label="Total"
      variant="outlined"
      size="small"
      value={calculateTotal()}
      InputProps={{
        readOnly: true,
        sx: {
          '& input': { textAlign: 'right', padding: '6px', fontSize: '1rem' },
        }
      }}
    />
  </Grid>
</Grid> */}

<Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
     
      <Grid item xs={12} sm={3}>
        <TextField
          id="sampleOn"
          label="Sample On"
          type="datetime-local"
          variant="outlined"
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
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
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
      <Grid item xs={12} sm={2}>
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
    <FormControl component="fieldset" fullWidth sx={{ mt: 2 }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="body1">Report Requested Through</Typography>
        </Grid>
        <Grid item xs>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox name="personally" />}
              label="Personally"
            />
            <FormControlLabel
              control={<Checkbox name="whatsapp" />}
              label="WhatsApp"
            />
            <FormControlLabel
              control={<Checkbox name="courier" />}
              label="Courier"
            />
            <FormControlLabel
              control={<Checkbox name="email" />}
              label="Email"
            />
            <FormControlLabel
              control={<Checkbox name="sms" />}
              label="SMS"
            />
            <FormControlLabel
              control={<Checkbox name="telephone" />}
              label="Telephone"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
    <Grid container alignItems="center" spacing={2} sx={{ mt: -2.5 }}>
     
      <Grid item xs>
        <TextField
          label="Additional Info"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<Checkbox name="urgent" />}
          label="Urgent"
        />
      </Grid>
    </Grid>
    <Grid container alignItems="center" spacing={2} sx={{ mt: 1 }}>
      
      <Grid item xs>
        <TextField
          label="Notes"
          variant="outlined"
          size="small"
          fullWidth
        />
      </Grid>
    </Grid>
        {/* <Grid container justifyContent="flex-end" sx={{ mt: 2}}>
          <Grid item xs={12} sm={2}>
            <TextField
              label="Total"
              variant="outlined"
              size="small"
            
              value={calculateTotal()}
              InputProps={{
                readOnly: true,
                sx: {
                  '& input': { textAlign: 'right', padding: '6px' ,fontSize:'1rem' },
                }
              }}
            />
          </Grid>
        </Grid> */}
       
              {/* <Grid container spacing={2} sx={{mt:2}}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="sampleOn"
                    label="Sample On"
                    type="datetime-local"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // value={smplDate}
                    // onChange={handleSmplDateChange}
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
                    // value={repTime}
                    // onChange={handleRepTimeChange}
                    InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                  />
                </Grid>
          <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox name="personally" />}
                        label="Personally"
                      />
                       <FormControlLabel
                        control={<Checkbox  name="whatsapp" />}
                        label="WhatsApp"
                      />
                      <FormControlLabel
                        control={<Checkbox  name="courier" />}
                        label="Courier"
                      />
                       <FormControlLabel
                        control={<Checkbox  name="email" />}
                        label="Email"
                      />
                     
                      <FormControlLabel
                        control={<Checkbox  name="sms" />}
                        label="SMS"
                      />
                       <FormControlLabel
                        control={<Checkbox  name="telephone" />}
                        label="Telephone"
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
                 
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="notes"
                    label="Notes"
                    variant="outlined"
                    size="small"
                    fullWidth
                 
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
                </Grid>
              </Grid> */}
            
      </CardContent>
    </Card>
    </>
  );
}

export default Maintable;
