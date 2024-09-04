import { useState, useRef, useEffect } from 'react';
import {
  Card,Box, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';
import {   FormControlLabel, FormGroup, Checkbox, Typography ,Button} from '@mui/material';
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
          fontWeight: 'normal',
        }}
      >
       {currentDateTime}
      </Typography>
    </Box>
{/* <TextField
      label="Date/Time"
      variant="standard"  // Changed variant to 'standard'
      size="small"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      value={currentDateTime}  // Set the current date and time as the default value
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
        justifyContent: 'space-between', // Aligns content to the right
        alignItems: 'center',
        width:300,
        mt:2,
        ml:1
       // Margin bottom for spacing
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
          fontWeight: 'normal',
        }}
      >
       2888880001
      </Typography>
    </Box>
{/* <TextField
      label="Date/Time"
      variant="standard"  // Changed variant to 'standard'
      size="small"
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      value={currentDateTime}  // Set the current date and time as the default value
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

{/* <Grid item>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end', 
        alignItems: 'center',
        
        
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          mr: 1, 
          mt:2
          
        }}
      >
        Lab No:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'normal',
        }}
      >
        2
      </Typography>
    </Box>
  
</Grid> */}

</Grid>


    <Card sx={{ height: '101%', overflow: 'hidden' ,
      width:1000,marginTop:-9,marginLeft:-24}} className='secondcard'>
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
    marginTop: 2,
  }}
>
  <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
    <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
      <TableRow sx={{ border: '2px solid #d6d1d1', height: '32px' }}>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '6%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1 '}}>Sl No</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Test Code</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '35%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Test Name</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Price</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Discount</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Total</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '5%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}></TableCell>
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

{/* <TableContainer
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
      <TableRow sx={{ border: '2px solid #d6d1d1', height: '28px' }}>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '6%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1 '}}>Sl No</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '10%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Test Code</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '35%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Test Name</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '7%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Price</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Discount</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}>Total</TableCell>
        <TableCell sx={{ fontSize: '0.85rem', padding: '2px 4px', width: '5%', border: '1px solid #d6d1d1', backgroundColor:'#d6d1d1' }}></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.id} sx={{ height: '28px' }}>
          <TableCell sx={{ fontSize: '0.85rem', width: '6%', padding: '2px 4px' }}>{index + 1}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '10%', padding: '2px 4px' }}>{row.testCode}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '35%', padding: '2px 4px' }}>{row.testName}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '7%', padding: '2px 4px' }}>{row.price || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '12%', padding: '2px 4px' }}>{row.discount || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '12%', padding: '2px 4px' }}>{row.total || ''}</TableCell>
          <TableCell sx={{ fontSize: '0.85rem', width: '5%', padding: '2px 4px' }}>
            <IconButton size="small" sx={{ padding: '2px' }} onClick={() => handleRemoveRow(row.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow sx={{ height: '28px' }}>
        <TableCell sx={{ fontSize: '0.85rem', width: '6%', padding: '2px 4px' }}>{rows.length + 1}</TableCell>
        <TableCell sx={{ width: '10%', padding: '2px 4px' }}>
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
                input: { padding: '0px', fontSize: '0.85rem', height: 18 },
              },
            }}
          />
        </TableCell>
        <TableCell sx={{ width: '35%', padding: '2px 4px' }}>
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
                input: { padding: '0px', fontSize: '0.85rem', height: 18 },
              },
            }}
          />
        </TableCell>
        <TableCell sx={{ width: '7%', padding: '2px 4px' }}></TableCell>
        <TableCell sx={{ width: '12%', padding: '2px 4px' }}></TableCell>
        <TableCell sx={{ width: '12%', padding: '2px 4px' }}></TableCell>
        <TableCell sx={{ width: '5%', padding: '2px 4px' }}></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer> */}


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

<Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
     
      <Grid item xs={12} sm={3}>
        <TextField
          id="sampleOn"
          label="Sample On"
          type="datetime-local"
          variant="outlined"
          value={currentDateTime} 
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
          value={currentDateTime} 
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
          <FormGroup row>
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
          <Grid item>
            <TextField
              label="Additional Info"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item >
            <FormControlLabel
              control={<Checkbox name="urgent" sx={{
                color: 'grey', // Unchecked color
                '&.Mui-checked': {
                  color: '#bd2937', // Checked color
                },}}  />}
              label="Urgent"
            />
          </Grid>

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
          
       
          {/* <Button
            variant="contained"
            className="button"
            sx={{ textTransform: 'none' }}
          >
            Add Document
          </Button> */}
        </Grid>
      </Grid>

      {/* Right Column */}
      <Grid item xs={6}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2,color:'#bd2937' }}>
              Net Amount: 0.00
            </Typography>
          </Grid>

          {/* <Grid item>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2,color:'#bd2937' }}>
              Curr. Balance: 0.00
            </Typography>
          </Grid> */}
          <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
           
            <Button
              variant="contained"
              className="button"
              sx={{ textTransform: 'none', marginRight: 7,marginTop:4,fontSize:20 }}
             
            >
             Payment
            </Button>
           
          
          </div>
         
        </Grid>
      </Grid>
        </Grid>

      </Grid>
    
    </Grid>

 
      
      

     
    {/* <Grid container alignItems="center" spacing={2} sx={{ mt: -2.5 }}>
     
      <Grid item xs={4}>
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
    </Grid> */}
    {/* <Grid container alignItems="center" spacing={2} sx={{ mt: -1 }}>
      
      <Grid item xs={4}>
        <TextField
        id='notes'
          label="Notes"
          variant="outlined"
          multiline
          row={3}
          size="small"
          fullWidth
        />
      </Grid>
    </Grid> */}
    {/* <Grid container alignItems="center" spacing={2} sx={{mt:-1}}>
     
     
     <Grid item>
       <FormControlLabel
         control={<Checkbox name="printpreview" />}
         label="Print Preview"
       />
     </Grid>
     <Grid item>
       <FormControlLabel
         control={<Checkbox name="billformattwo" />}
         label="Bill Format Two"
       />
     </Grid>
   </Grid> */}
      {/* <Grid item xs>
       <TextField
         label="User Info"
         variant="outlined"
         size="small"
         fullWidth
         InputProps={{
          readOnly: true,
       }}
       />
     </Grid> */}
            
      </CardContent>
    </Card>
    </>
  );
}

export default Maintable;
