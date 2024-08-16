import { CCardBody } from '@coreui/react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function BillWisePending() {
  return (
    <CCardBody>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            {/* <Box sx={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px',marginBottom:'10px' }}> */}
            <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="ledger"
                label="Ledger Name"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="fromdate"
                label="From Date"
                variant="outlined"
                size="small"
                type='date'
                fullWidth
                InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="todate"
                label="To Date"
                variant="outlined"
                size="small"
                type='date'
                fullWidth
                InputLabelProps={{ shrink:true, style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{  style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                  variant="contained"
                 
              
                   sx={{backgroundColor:'#3095E5' }}
                >
                  AutoAllocate
                </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl component="fieldset" fullWidth>
                    <FormGroup row>
                      <FormControlLabel
                        label="Select All"
                        labelPlacement='end'
                        control={
                          <Checkbox
                            name="selectall"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
            </Box>
          </Grid>
            </Grid>
            {/* </Box> */}
            </Grid>



            <Grid item xs={12} md={6}>
            {/* <Box sx={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px',marginBottom:'10px' }}> */}
            <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <TextField
                    select
                    label="Pay Mode"
                    // value={prefix}
                    // onChange={(e) => setPrefix(e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="UPI">UPI</MenuItem>
                    <MenuItem value="BANK">BANK</MenuItem>
                    <MenuItem value="CASH">CASH</MenuItem>
                    {/* <MenuItem value=""></MenuItem> */}
                  </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="bank"
                label="Bank"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{  style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          
            </Grid>
            {/* </Box> */}
            </Grid>
   <Grid item xs={6}>
   <Box sx={{ display: 'flex', alignItems: 'center' }}>
   <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{  style: { fontSize: '1rem' } }}
              />
              </Box>
   </Grid>
    <Grid item xs={12}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Patient</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Amount</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Balance</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Allocated.Amt</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Current.Bal</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          {/* <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell> */}
                        </TableRow>
                      
                      {/* {rows.map((row) => (
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
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={50} />
                <Box display="flex" justifyContent="flex-end" mt={2}>
        <Grid container spacing={2} style={{ maxWidth: '600px' }}>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.amount}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Amount"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.balance}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Balance"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.allocatedAmt}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Allocated Amt"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.currentBal}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Current Bal"
            />
          </Grid>
        </Grid>
      </Box>
              </Grid>
            
        </Grid>
    </CCardBody>
  )
}

export default BillWisePending