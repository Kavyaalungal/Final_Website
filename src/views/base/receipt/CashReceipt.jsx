import React from 'react'
import { Box, Button, Grid,TextareaAutosize,TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CCardBody } from '@coreui/react'
function CashReceipt() {
  return (
    <CCardBody>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
            id='transno'
            label='Trans No'
            fullWidth
            size='small'
            variant='outlined'
            InputLabelProps={{  style: {fontSize:'1rem'}  }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            id='date'
            label='Date'
            fullWidth
            size='small'
            type='date'
            variant='outlined'
             InputLabelProps={{ shrink:true , style:{fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12}>
            <Box display={'flex'} alignItems={'center'} >
            <TextField
            id='account'
            label='Account'
            fullWidth
            size='small'
            variant='outlined'
            InputLabelProps={{  style:  {fontSize:'1rem'}  }} 
            />
            <Button variant='contained' component='label' sx={{ml : 1,backgroundColor:'#3095E5'}} >
            <AddIcon/>
            <input type="file" hidden />
            </Button>
            </Box>
        </Grid>
        <Grid item xs={3}>
          <TextField
          id='amount'
          label='Amount'
          fullWidth
          size='small'
          variant='outlined'
          InputLabelProps={{ style: {fontSize:'1rem'}}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
          minRows={4}
          maxRows={6}
          style={{width:'100%',padding:'8px',borderRadius:'4px',borderColor:'#ccc',borderWidth:'1px',borderStyle:'solid'}}
          placeholder='Narration'
          />
        </Grid>
        <Grid item xs={12} md={9}>
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
                 
                  sx={{backgroundColor:'#3095E5'}}
                  
                >
                  Print Preview
                </Button>
                {/* <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                  Allocate
                </CButton> */}
              </Grid>
        {/* <Grid item xs={10}>
         
            <TextField
            id='userinfo'
            label='User Info'
            fullWidth
            size='small'
            variant='outlined'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid> */}
        <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleSaveOrUpdate}
                  sx={{ marginTop: 2, marginLeft: 2 ,backgroundColor:'#3095E5'}}
                >
                  Print
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  sx={{ marginTop: 2, marginLeft: 2 ,backgroundColor:'#3095E5'}}
                >
                  New
                </Button>
                <Button
                variant='contained'
                color='primary'
                sx={{marginTop:2, marginLeft:2,backgroundColor:'#3095E5'}}
                >Save</Button>
                <Button 
                variant='contained'
                color='primary'
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Delete</Button>
                <Button
                variant='contained'
                
                sx={{marginTop:2,marginLeft:2,backgroundColor:'#3095E5'}}
                >Exit</Button>
              </Grid>
             
            </Grid>
    </Grid>
     </CCardBody>
  )
}

export default CashReceipt