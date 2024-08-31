import { useState, useRef } from 'react';
import {
  Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox } from '@mui/icons-material';

function Maintable() {
  const [rows, setRows] = useState([]);
  const [currentRow, setCurrentRow] = useState({ id: Date.now(), testCode: '', testName: '', isEditable: true });
  const testCodeRef = useRef(null);
  const testNameRef = useRef(null);

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
  sx={{ mb: 1, position: 'relative', top: '-60px', left: '-120px' }} // Adjust the top and left position of the fields
>
<Grid 
  item 
  sx={{ position: 'relative', left: '-100px' }} // Adjust 'left' value as needed
>
  <TextField
    label="Date/Time"
    variant="outlined"
    size="small"
    type="datetime-local"
    InputLabelProps={{ shrink: true }}
  />
</Grid>

  <Grid item>
    <TextField
      label="Lab No   "
      variant="outlined"
      size="small"
      InputProps={{ readOnly: true,marginRight:'3px' }}
      InputLabelProps={{ style: { fontSize: '1.3rem',marginTop:'-5px' } }}
      sx={{
        // fontSize: '12rem',
        height: 40,
        '& input': { padding: '8px', textAlign: 'right', },
        maxWidth: '100%'
      }}
    />
  </Grid>
</Grid>


    <Card sx={{ height: '85%', overflow: 'hidden',marginLeft:-23 ,width:1030,marginTop:-8}}>
      <CardContent>
        {/* <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
          <TextField
            label="Lab No"
            variant="outlined"
            size="small"
            InputProps={{readOnly:true}}
            sx={{
              fontSize: '1rem',
              height: 40,
              '& input': { padding: '8px' ,textAlign:'right' },
              maxWidth: '100%' 
              
            }}
          />
        </Grid> */}

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
    <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: 'white' }}>
      <TableRow sx={{ border: '1px solid #000' }}>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '8%', border: '1px solid #000' }}>Sl No</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '15%', border: '1px solid #000' }}>Test Code</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '50%', border: '1px solid #000' }}>Test Name</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #000' }}>Price</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #000' }}>Discount</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #000' }}>Total</TableCell>
        <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '10%', border: '1px solid #000' }}>Remove</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell sx={{ fontSize: '0.95rem', width: '5%' }}>{index + 1}</TableCell>
          <TableCell sx={{ width: '15%' }}>{row.testCode}</TableCell>
          <TableCell sx={{ width: '50%' }}>{row.testName}</TableCell>
          <TableCell sx={{ width: '10%' }}>{row.price || ''}</TableCell>
          <TableCell sx={{ width: '10%' }}>{row.discount || ''}</TableCell>
          <TableCell sx={{ width: '10%' }}>{row.total || ''}</TableCell>
          <TableCell sx={{ width: '10%' }}>
            <IconButton onClick={() => handleRemoveRow(row.id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell sx={{ fontSize: '0.95rem', width: '5%' }}>{rows.length + 1}</TableCell>
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
        <TableCell sx={{ width: '50%' }}>
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
        <TableCell sx={{ width: '10%' }}></TableCell>
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


        <Grid container justifyContent="flex-end" sx={{ mt: 2}}>
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
        </Grid>
       
              <Grid container spacing={2} sx={{mt:2}}>
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
                  {/* <FormControl component="fieldset">
                    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox name="personally" />}
                        label="Personally"
                      />
                      <FormControlLabel
                        control={<Checkbox  name="courier" />}
                        label="Courier"
                      />
                      <FormControlLabel
                        control={<Checkbox  name="phone" />}
                        label="phone"
                      />
                    <FormControlLabel
                        control={<CheckBox  name="email" />}
                        label="Email"
                      />
                      <FormControlLabel
                        control={<Checkbox  name="sms" />}
                        label="SMS"
                      />
                    </FormGroup>
                  </FormControl> */}

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
              </Grid>
            
      </CardContent>
    </Card>
    </>
  );
}

export default Maintable;
