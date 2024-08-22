import { useState } from 'react';
import {
  Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Maintable() {
  const [rows, setRows] = useState([]);
  const [testCode, setTestCode] = useState('');
  const [testName, setTestName] = useState('');

  // Handle adding a new row
  const handleAddRow = () => {
    if (testCode && testName) {
      setRows([...rows, { id: Date.now(), testCode, testName, isEditable: true }]);
      setTestCode('');
      setTestName('');
    }
  };

  // Handle removing a row
  const handleRemoveRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  // Handle change in input fields
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setRows(rows.map(row => row.id === id ? { ...row, [name]: value } : row));
  };

  // Handle Enter key press to save the first row and add a new row
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setRows(rows.map(row => row.id === id ? { ...row, isEditable: false } : row));
      handleAddRow();
    }
  };

  return (
    <>
      <Card sx={{ height: '100%', overflow: 'auto' }}>
        <CardContent>
          {/* Lab No textbox at the top right */}
          <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
            <TextField
              label="Lab No"
              variant="outlined"
              size="small"
              sx={{ 
                fontSize: '1rem',
                height: 40,
                '& input': { padding: '8px' },
                maxWidth: '100%' // Ensure it doesn’t overflow
              }}
            />
          </Grid>

          {/* Three input fields aligned horizontally */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Referred By"
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
                    '& .MuiSelect-select': { padding: '8px' }
                  }}
                >
                  <MenuItem value="Direct">Direct</MenuItem>
                  <MenuItem value="Indirect">Indirect</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* IP/OP, Corporate, and Collected By aligned horizontally */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="IP/OP"
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
              <TextField
                label="Corporate"
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
              <TextField
                label="Collected By"
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
          </Grid>

          {/* Add Test Code, Test Name, and Add Button aligned horizontally */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Test Code"
                variant="outlined"
                size="small"
                fullWidth
                value={testCode}
                onChange={(e) => setTestCode(e.target.value)}
                sx={{ 
                  fontSize: '1rem',
                  height: 40,
                  '& input': { padding: '8px' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Test Name"
                variant="outlined"
                size="small"
                fullWidth
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                sx={{ 
                  fontSize: '1rem',
                  height: 40,
                  '& input': { padding: '8px' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                size="small"
                onClick={handleAddRow}
                sx={{ fontSize: '1rem' }}
              >
                Add
              </Button>
            </Grid>
          </Grid>

          {/* Input Table under the previous fields */}
          <TableContainer
            component={Paper}
            sx={{
              height: 240, 
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: 0,
                background: 'transparent',
              },
              scrollbarWidth: 'none', // Firefox
              marginTop: 1
            }}
          >
            <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Sl No</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Test Code</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Test Name</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Price</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Discount</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Total</TableCell>
                  <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>{row.testCode}</TableCell>
                    <TableCell sx={{ fontSize: '1rem', padding: '4px 8px' }}>{row.testName}</TableCell>
                    <TableCell>
                      <TextField
                        name="price"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={row.price || ''}
                        onChange={(e) => handleChange(e, row.id)}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        InputProps={{
                          readOnly: row.isEditable,
                          sx: {
                            '& fieldset': { border: 'none' },
                            input: { padding: '0px', fontSize: '1rem', height: 40 }
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="discount"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={row.discount || ''}
                        onChange={(e) => handleChange(e, row.id)}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        InputProps={{
                          readOnly: row.isEditable,
                          sx: {
                            '& fieldset': { border: 'none' },
                            input: { padding: '0px', fontSize: '1rem', height: 40 }
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="total"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={row.total || ''}
                        onChange={(e) => handleChange(e, row.id)}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        InputProps={{
                          readOnly: row.isEditable,
                          sx: {
                            '& fieldset': { border: 'none' },
                            input: { padding: '0px', fontSize: '1rem', height: 40 }
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemoveRow(row.id)}>
                        <DeleteIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}

export default Maintable;
