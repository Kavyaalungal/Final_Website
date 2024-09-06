import React, { useState } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
import './CashPayment.css';
import { TextField, Grid,MenuItem,Typography,Box,Button } from '@mui/material';
const CashPayment = ({ visible, setVisible }) => {

    const [netAmount, setNetAmount] = useState('2500.00');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };
    const handleChange = (event) => {
        setNetAmount(event.target.value);
      };
    
  return (
    <CModal
      alignment="center"
      backdrop='static'
      size='sm'
      visible={visible}
      className='custom-modal-close'
      onClose={() => setVisible(false)}
      aria-labelledby="VerticallyCenteredExample"
    >
      <CModalHeader className='modalheader' >
        <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
      </CModalHeader>
      <CModalBody >
      <Grid container spacing={1.5}>
          {/* First row - Full-width TextField */}
         
          <Grid item xs={12}>
          <TextField
          id='ntamt'
      label="Net Amount"
      variant="outlined"
      size="small"
      value={netAmount}
      onChange={handleChange}
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '1rem', 
          top: '1px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign: 'right', // Adjust input text size
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        </Grid>
         

          {/* Second row - Discount Field */}
          <Grid item xs={3} sm={3} >
          <TextField
      select
   
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
        // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem',
          top: '-6px',
          left: '1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    >
        
      <MenuItem value="10">10</MenuItem>
      <MenuItem value="20">20</MenuItem>
      <MenuItem value="30">30</MenuItem>
      <MenuItem value="40">40</MenuItem>
      <MenuItem value="50">50</MenuItem>
      <MenuItem value="100">100</MenuItem>
    </TextField>
      </Grid>

        <Grid item xs={9} sm={9} >
        <TextField
          id='discount'
      label="Discount"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem', 
          top: '-3px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign: 'right', // Adjust input text size
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id='s.charge'
      label="Service Charge"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem', 
          top: '-3px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign: 'right', // Adjust input text size
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        
      
        </Grid>
        <Grid item xs={12}>
        <TextField
      select
      label='Payment Mode'
      variant="outlined"
      size="small"
      value={paymentMethod}
      onChange={handlePaymentMethodChange}
      fullWidth
      InputLabelProps={{
        // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem',
          top: '-3px',
          left: '1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    >
      <MenuItem value="Cash">Cash</MenuItem>
      <MenuItem value="Debit/Credit">Debit/Credit</MenuItem>
      <MenuItem value="Credit">Credit</MenuItem>
      <MenuItem value="BHIM/UPI Online Payment">BHIM/UPI Online Payment</MenuItem>
    </TextField>
        </Grid>
        {(paymentMethod === 'Debit/Credit' || paymentMethod === 'BHIM/UPI Online Payment' ) && (
        <Grid item xs={12}>
          <TextField
            label="Bank Name"
            variant="outlined"
            size="small"
            fullWidth
            InputLabelProps={{
              style: {
                fontSize: '0.95rem',
                top: '-3px',
                left: '1px'
              },
            }}
            sx={{
              '& .MuiInputBase-input': {
                padding: '6px',
                fontSize: '0.95rem',
              },
              '& .MuiOutlinedInput-root': {
                height: '30px',
              },
            }}
          />
        </Grid>
      )}
        <Grid item xs={12}>
        <TextField
          id='paidamt'
      label="Paid Amount"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem', 
          top: '-3px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign: 'right', // Adjust input text size
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id='balance'
      label="Balance"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem', 
          top: '-3px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign:'right'
         
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id='disc.reason'
      label="Discount Reason"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{
       // Ensures the label is always at the top
        style: {
          fontSize: '0.95rem', 
          top: '-3px', 
          left:'1px'
        },
      }}
      sx={{
        '& .MuiInputBase-input': {
          padding: '6px', // Adjust input padding
          fontSize: '0.95rem',
          textAlign: 'right', // Adjust input text size
        },
        '& .MuiOutlinedInput-root': {
          height: '30px', // Adjust the height of the TextField container
        },
      }}
    />
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={2} direction="column" alignItems="center">
  {/* Grid for Net Amount Label */}
  <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        color: '#bd2937',
        fontSize: 16,
        marginRight:-5
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
        fontSize: 30,
        textAlign: 'right',
        minWidth: '100px',
        marginRight:-5,
        marginTop:-2 // Ensure enough space for larger values
      }}
    >
      {netAmount} {/* This is where your dynamic value would go */}
    </Typography>
  </Grid>
</Grid>

      </Grid>
      
      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
           
          <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
                fontSize:'1rem', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
              
            >
              Payment
            </Button>
               
          <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
                fontSize:'1rem', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
              
            >
              Payment
            </Button>
               
          <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
                fontSize:'1rem', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
              
            >
              Payment
            </Button>
           
         
          </div>
         
        </Grid>
      </Grid> */}

        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-15px' }}>
      
            <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58',
                fontSize:'0.75rem',padding:'2px 10px', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
               
            >
              Print
            </Button>
            <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58', // Default background color
                 fontSize:'0.75rem',padding:'4px 16px','&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
             
            >
              Save
            </Button>
            <Button
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58', // Default background color
                 fontSize:'0.75rem',padding:'4px 16px','&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
            
            >
              Exit
            </Button>
           
          </div>

        </Grid>
      </Grid>
      </CModalBody>
     
    </CModal>
  );
};

export default CashPayment;
