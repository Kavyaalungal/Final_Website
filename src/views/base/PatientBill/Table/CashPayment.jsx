import React, { useState } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
import './CashPayment.css';
import { TextField, Grid,MenuItem,Typography,Box,Button } from '@mui/material';
import WalletIcon from '../assets/wallet.svg';
import UpiIcon from '../assets/Upi.svg';
import Corporateicon from '../assets/corporate-icon.svg'

import { CreditCard as CreditCardIcon } from '@mui/icons-material';
import { usePatient } from '../../patient/PatientContext';
import axios from 'axios';

const CashPayment = ({ visible, setVisible }) => {
    const { patientDetails } = usePatient(); // Get patient details from context
    const [netAmount, setNetAmount] = useState('2500.00');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };
    const handleChange = (event) => {
        setNetAmount(event.target.value);
      };


      const handleSavePayment = async () => {
        const payload = {
          saveEditflag: true,
          cmpyId: "2",
          YrId: "2425",
          LabNo: 24935,
          Date: new Date().toISOString(), // Adjust as necessary
          // Other fixed payload values...
          Address: patientDetails?.Patient_Address || "N/A", // Include fetched patient data
          PhnNo: patientDetails?.Patient_mobile || "N/A",
          Age: patientDetails?.Patient_Ageyy || "N/A",
          Gender: patientDetails?.Patient_Ismale === "Male" ? "M" : "F",
          Name: patientDetails?.Patient_Name || "N/A",
          // Include other properties as needed...
          InvTestDlts: [
            {
              cmpyId: 2,
              TestRate: 500, // Example value, adjust as necessary
              tstid: 8, // Example value, adjust as necessary
              YrId: 2425,
              Orgrate: 500,
              Discamt: 10
            }
          ]
        };
    
        try {
          const response = await axios.post('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate/InvoiceMstr', payload);
          console.log('Payment saved successfully:', response.data);
        } catch (error) {
          console.error('Error saving payment:', error);
        }
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
      <CModalBody className='custombody' >
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
          <Grid item xs={12} sm={3} >
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

        <Grid item xs={12} sm={9} >
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
      {/* <MenuItem value="none"></MenuItem> */}
      <MenuItem value="Cash"><img src={WalletIcon} style={{ width: 25,marginRight:5  }} alt="Wallet Icon" />
      Cash</MenuItem>
      <MenuItem value="Debit/Credit"><CreditCardIcon sx={{mr:1}}/>Debit/Credit</MenuItem>
      <MenuItem value="Credit"> <img src={Corporateicon} style={{width: 23,marginRight:7}}/> Credit </MenuItem>
      <MenuItem value="BHIM/UPI Online Payment"><img src={UpiIcon} style={{ width: 25, marginRight: 5 }} alt="UPI Icon" />
      BHIM/UPI Online Payment</MenuItem>
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
      {(paymentMethod === 'Credit') && (
          <Grid item xs={12}>
          <TextField
            label="Corporate"
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
             onClick={handleSavePayment}   
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
// import React, { useState, useEffect } from 'react';
// import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
// import './CashPayment.css';
// import { TextField, Grid, MenuItem, Typography, Box, Button } from '@mui/material';
// import WalletIcon from '../assets/wallet.svg';
// import UpiIcon from '../assets/Upi.svg';
// import Corporateicon from '../assets/corporate-icon.svg';
// import { CreditCard as CreditCardIcon } from '@mui/icons-material';

// const CashPayment = ({ visible, setVisible }) => {
//     const [netAmount, setNetAmount] = useState('3500.00');
//     const [paymentMethod, setPaymentMethod] = useState('');
//     const [discountPercentage, setDiscountPercentage] = useState('');
//     const [discountAmount, setDiscountAmount] = useState('0.00');

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//     };

//     const handleNetAmountChange = (event) => {
//         setNetAmount(event.target.value);
//     };

//     const handleDiscountPercentageChange = (event) => {
//         const percentage = event.target.value;
//         setDiscountPercentage(percentage);

//         // Calculate discount amount based on net amount
//         const discount = (parseFloat(netAmount) * percentage) / 100;
//         setDiscountAmount(discount.toFixed(2));
//     };

//     useEffect(() => {
//         // Update discount amount if netAmount changes
//         const discount = (parseFloat(netAmount) * discountPercentage) / 100;
//         setDiscountAmount(discount.toFixed(2));
//     }, [netAmount, discountPercentage]);

//     return (
//         <CModal
//             alignment="center"
//             backdrop='static'
//             size='sm'
//             visible={visible}
//             className='custom-modal-close'
//             onClose={() => setVisible(false)}
//             aria-labelledby="VerticallyCenteredExample"
//         >
//             <CModalHeader className='modalheader'>
//                 <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
//             </CModalHeader>
//             <CModalBody className='custombody'>
//                 <Grid container spacing={1.5}>
//                     <Grid item xs={12}>
//                         <TextField
//                             id='ntamt'
//                             label="Net Amount"
//                             variant="outlined"
//                             size="small"
//                             value={netAmount}
//                             onChange={handleNetAmountChange}
//                             fullWidth
//                             InputLabelProps={{
//                                 style: {
//                                     fontSize: '1rem',
//                                     top: '1px',
//                                     left: '1px'
//                                 },
//                             }}
//                             sx={{
//                                 '& .MuiInputBase-input': {
//                                     padding: '6px',
//                                     fontSize: '0.95rem',
//                                     textAlign: 'right',
//                                 },
//                                 '& .MuiOutlinedInput-root': {
//                                     height: '30px',
//                                 },
//                             }}
//                         />
//                     </Grid>

//                     <Grid item xs={12} sm={3}>
//                         <TextField
//                         label='disc%'
//                             select
//                             variant="outlined"
//                             size="small"
//                             value={discountPercentage}
//                             onChange={handleDiscountPercentageChange}
//                             fullWidth
//                             InputLabelProps={{
//                                 style: {
//                                     fontSize: '0.95rem',
//                                     top: '-6px',
//                                     left: '1px'
//                                 },
//                             }}
//                             sx={{
//                                 '& .MuiInputBase-input': {
//                                     padding: '6px',
//                                     fontSize: '0.95rem',
//                                 },
//                                 '& .MuiOutlinedInput-root': {
//                                     height: '30px',
//                                 },
//                             }}
//                         >
//                             <MenuItem value="">Select Percentage</MenuItem>
//                             <MenuItem value="10">10</MenuItem>
//                             <MenuItem value="20">20</MenuItem>
//                             <MenuItem value="30">30</MenuItem>
//                             <MenuItem value="40">40</MenuItem>
//                             <MenuItem value="50">50</MenuItem>
//                             <MenuItem value="100">100</MenuItem>
//                         </TextField>
//                     </Grid>

//                     <Grid item xs={12} sm={9}>
//                         <TextField
//                             id='discount'
//                             label="Discount"
//                             variant="outlined"
//                             size="small"
//                             value={discountAmount}
//                             fullWidth
//                             InputLabelProps={{
//                                 style: {
//                                     fontSize: '0.95rem',
//                                     top: '-3px',
//                                     left: '1px'
//                                 },
//                             }}
//                             sx={{
//                                 '& .MuiInputBase-input': {
//                                     padding: '6px',
//                                     fontSize: '0.95rem',
//                                     textAlign: 'right',
//                                 },
//                                 '& .MuiOutlinedInput-root': {
//                                     height: '30px',
//                                 },
//                             }}
//                             InputProps={{
//                                 readOnly: true, // Make it read-only
//                             }}
//                         />
//                     </Grid>

//                     {/* Remaining code for Service Charge, Payment Mode, etc. */}
//                 </Grid>
//             </CModalBody>
//         </CModal>
//     );
// };

// export default CashPayment;
