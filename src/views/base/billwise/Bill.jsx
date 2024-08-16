import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Paper,
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  IconButton,
  Button
} from '@mui/material';
import { CButton, CCard, CCardBody } from '@coreui/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Litepicker from 'litepicker';

const Bill = () => {
  const [collectionType, setCollectionType] = useState('lab');
  const [documentType, setDocumentType] = useState('cash')
  const [date, setDate] = useState(null);
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
    { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
    { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
    { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
  ];
  // useEffect(() => {
  //   const initializeLitepicker = () => {
  //     const picker = new Litepicker({
  //       element: document.getElementById('litepicker'),
  //       autoApply: false,
  //       showWeekNumbers: true,
  //       dropdowns: {
  //         minYear: 1990,
  //         maxYear: null,
  //         months: true,
  //         years: true,
  //       },
  //       onSelect: (date) => {
  //         setDate(date.format()); // Update state with the selected date
  //       },
  //     });
  //   };

  //   initializeLitepicker();

  //   // Cleanup function
  //   return () => {
  //     // Optional: Cleanup Litepicker instance if necessary
  //   };
  // }, []); 

  return (
    <CCardBody>
      {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding="16px"> */}
        {/* <Container component="main" maxWidth="md" className=""> */}
          {/* <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}> */}
          {/* <Box sx={{ padding: 2 }}> */}
              {/* <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    sx={{
                      margin: 0,
                      fontSize: '24px',
                      fontWeight: 'bold',
     */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
                    <FormControlLabel
                      value="lab"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">LabCollection</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="purchase"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Purchase</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="pharmacy"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Pharmacy</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
                    <FormControlLabel
                      value="cash"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Cash</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="cheque"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Cheque</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    <FormControlLabel
                      value="bhim"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="corporate"
                  label="Corporate"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <IconButton color="primary">
              <MoreHorizIcon />
            </IconButton>

              <Grid item xs={12} md={3}>
                <TextField
                  id="from"
                  label="FromDate"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              {/* <Grid item xs={12} md={3}>
      <div className="relative w-56 mx-auto">
        <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
          <lucide icon="Calendar" className="w-4 h-4"></lucide>
        </div>
        <input
          id="litepicker"
          type="text"
          placeholder="Select date"
          className="pl-12"
        />
      </div>
    </Grid> */}

              <Grid item xs={12} md={3}>
         

                <TextField
                  id="out"
                  label="Out"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="amount"
                  label="Amount"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
              <Button
                  variant="contained"
           
                  // onClick={resetForm}
                   sx={{backgroundColor:'#3095E5' }}
                >
                  Allocate
                </Button>
                {/* <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                  Allocate
                </CButton> */}
              </Grid>
              <Grid item xs={12}>
             
              <TableContainer component={Paper}>
                <Table size="small" stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>SlNo</TableCell>
                      <TableCell>Lab</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Select</TableCell>
                      <TableCell>Patient</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Balance</TableCell>
                      <TableCell>Allocated.Amt</TableCell>
                      <TableCell>Current.Bal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.col1}</TableCell>
                        <TableCell>{row.col2}</TableCell>
                        <TableCell>{row.col3}</TableCell>
                        <TableCell>{row.col4}</TableCell>
                        <TableCell>{row.col5}</TableCell>
                        <TableCell>{row.col6}</TableCell>
                        <TableCell>{row.col7}</TableCell>
                        <TableCell>{row.col7}</TableCell>
                      
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
              {/* <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Lab</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Date</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Select</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Patient</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Amount</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Balance</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding: '8px' }}>Allocated.Amt</TableCell>
                        <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '1rem', padding:'8px' }}>Current.Bal</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.id}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col1}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col2}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col3}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col4}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col5}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col6}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid> */}
            </Grid>
            <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleSaveOrUpdate}
                  sx={{ marginTop: 2, marginLeft: 2 ,backgroundColor:'#3095E5'}}
                >
                  Fetch
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  sx={{ marginTop: 2, marginLeft: 2 ,backgroundColor:'#3095E5'}}
                >
                  Print
                </Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2, marginLeft:2,backgroundColor:'#3095E5'}}
                >New</Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Save</Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Exit</Button>
              </Grid>
            </Grid>
          {/* </Paper> */}
        {/* </Container> */}
      {/* </Box> */}
      </CCardBody>
    //  </CCard>
  );
};

export default Bill;

