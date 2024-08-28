import { useState, useRef } from 'react';
import {
  Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <Card sx={{ height: '80%', overflow: 'auto',marginLeft:-7 ,width:1100,marginTop:1}}>
      <CardContent>
        <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
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
        </Grid>

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
              background: 'transparent'
            },
            scrollbarWidth: 'none',
            marginTop: 1,
          }}
        >
          <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
            <TableHead sx={{ position: 'sticky', zIndex: 1, backgroundColor: 'white', top: 0 }}>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Sl No</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Test Code</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Test Name</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Price</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Discount</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Total</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px' }}>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{index + 1}</TableCell>
                  <TableCell>{row.testCode}</TableCell>
                  <TableCell>{row.testName}</TableCell>
                  <TableCell>{row.price || ''}</TableCell>
                  <TableCell>{row.discount || ''}</TableCell>
                  <TableCell>{row.total || ''}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleRemoveRow(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>{rows.length + 1}</TableCell>
                <TableCell>
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
                        input: { padding: '0px', fontSize: '0.95rem', height: 20 }
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
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
                        input: { padding: '0px', fontSize: '0.95rem', height: 40 }
                      }
                    }}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Total Box */}
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
      
      </CardContent>
    </Card>
  );
}

export default Maintable;
