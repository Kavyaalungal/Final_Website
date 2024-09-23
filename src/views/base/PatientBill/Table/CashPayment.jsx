// import React, { useEffect, useState } from 'react';
// import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
// import './CashPayment.css';
// import { TextField, Grid,MenuItem,Typography,Box,Button } from '@mui/material';
// import WalletIcon from '../assets/wallet.svg';
// import UpiIcon from '../assets/Upi.svg';
// import Corporateicon from '../assets/corporate-icon.svg'

// import { CreditCard as CreditCardIcon } from '@mui/icons-material';
// import { useLocation } from 'react-router-dom';

// const CashPayment = ({ visible, setVisible,patientCode  }) => {
//   const [patientData, setPatientData] = useState(null);


//   // const location = useLocation();
//   // const { patientData } = location.state || {}; // Patient data from previous page
//   const [patient, setPatient] = useState(patientData || null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (patientCode) {
//       console.log("Patient Code Received:", patientCode);
//       // Perform your API call here using patientCode
//       // Example API call to fetch patient details using patientCode
//       fetchPatientData(patientCode);
//     }
//   }, [patientCode]);

//   const fetchPatientData = async (code) => {
//     try {
//       const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
//         YearId: 2425,
//         BranchId: 2,
//         PatCode: code,
//         editFlag: true,
//       });
//       setPatientData(response.data.patDetails);
//     } catch (error) {
//       console.error('Error fetching patient data:', error);
//     }
//   };

//     const [netAmount, setNetAmount] = useState('2500.00');
//     const [paymentMethod, setPaymentMethod] = useState('');

//     const handlePaymentMethodChange = (event) => {
//         setPaymentMethod(event.target.value);
//       };
//     const handleChange = (event) => {
//         setNetAmount(event.target.value);
//       };
    
//   return (
//     <CModal
//       alignment="center"
//       backdrop='static'
//       size='sm'
//       visible={visible}
//       className='custom-modal-close'
//       onClose={() => setVisible(false)}
//       aria-labelledby="VerticallyCenteredExample"
//     >
//       <CModalHeader className='modalheader' >
//         <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
//       </CModalHeader>
//       <CModalBody className='custombody' >
//       <Grid container spacing={1.5}>
//           {/* First row - Full-width TextField */}
         


//           <div>
//       {visible && (
//         <div>
//           <h1>Cash Payment</h1>
//           {patientData ? (
//             <div>
//               <p>Name: {patientData.Patient_Name}</p>
//               <p>Age: {patientData.Patient_Ageyy}</p>
//               <p>Gender: {patientData.Patient_Ismale ? 'Male' : 'Female'}</p>
//               <p>Contact: {patientData.Patient_mobile}</p>
//             </div>
//           ) : (
//             <p>No patient data available</p>
//           )}
//           <Button onClick={() => setVisible(false)}>Close</Button>
//         </div>
//       )}
//     </div>
//           <Grid item xs={12}>
//           <TextField
//           id='ntamt'
//       label="Net Amount"
//       variant="outlined"
//       size="small"
//       value={netAmount}
//       onChange={handleChange}
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '1rem', 
//           top: '1px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign: 'right', // Adjust input text size
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
//         </Grid>
         

//           {/* Second row - Discount Field */}
//           <Grid item xs={12} sm={3} >
//           <TextField
//       select
   
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//         // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem',
//           top: '-6px',
//           left: '1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
          
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     >
        
//       <MenuItem value="10">10</MenuItem>
//       <MenuItem value="20">20</MenuItem>
//       <MenuItem value="30">30</MenuItem>
//       <MenuItem value="40">40</MenuItem>
//       <MenuItem value="50">50</MenuItem>
//       <MenuItem value="100">100</MenuItem>
//     </TextField>
//       </Grid>

//         <Grid item xs={12} sm={9} >
//         <TextField
//           id='discount'
//       label="Discount"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem', 
//           top: '-3px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign: 'right', // Adjust input text size
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//           id='s.charge'
//       label="Service Charge"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem', 
//           top: '-3px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign: 'right', // Adjust input text size
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
        
      
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//       select
//       label='Payment Mode'
//       variant="outlined"
//       size="small"
//       value={paymentMethod}
//       onChange={handlePaymentMethodChange}
//       fullWidth
//       InputLabelProps={{
//         // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem',
//           top: '-3px',
//           left: '1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
          
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     >
//       {/* <MenuItem value="none"></MenuItem> */}
//       <MenuItem value="Cash"><img src={WalletIcon} style={{ width: 25,marginRight:5  }} alt="Wallet Icon" />
//       Cash</MenuItem>
//       <MenuItem value="Debit/Credit"><CreditCardIcon sx={{mr:1}}/>Debit/Credit</MenuItem>
//       <MenuItem value="Credit"> <img src={Corporateicon} style={{width: 23,marginRight:7}}/> Credit </MenuItem>
//       <MenuItem value="BHIM/UPI Online Payment"><img src={UpiIcon} style={{ width: 25, marginRight: 5 }} alt="UPI Icon" />
//       BHIM/UPI Online Payment</MenuItem>
//     </TextField>
//         </Grid>
//         {(paymentMethod === 'Debit/Credit' || paymentMethod === 'BHIM/UPI Online Payment' ) && (
//         <Grid item xs={12}>
//           <TextField
//             label="Bank Name"
//             variant="outlined"
//             size="small"
//             fullWidth
//             InputLabelProps={{
//               style: {
//                 fontSize: '0.95rem',
//                 top: '-3px',
//                 left: '1px'
//               },
//             }}
//             sx={{
//               '& .MuiInputBase-input': {
//                 padding: '6px',
//                 fontSize: '0.95rem',
//               },
//               '& .MuiOutlinedInput-root': {
//                 height: '30px',
//               },
//             }}
//           />
//         </Grid>
//       )}
//       {(paymentMethod === 'Credit') && (
//           <Grid item xs={12}>
//           <TextField
//             label="Corporate"
//             variant="outlined"
//             size="small"
//             fullWidth
//             InputLabelProps={{
//               style: {
//                 fontSize: '0.95rem',
//                 top: '-3px',
//                 left: '1px'
//               },
//             }}
//             sx={{
//               '& .MuiInputBase-input': {
//                 padding: '6px',
//                 fontSize: '0.95rem',
//               },
//               '& .MuiOutlinedInput-root': {
//                 height: '30px',
//               },
//             }}
//           />
//         </Grid>
//       )}
//         <Grid item xs={12}>
//         <TextField
//           id='paidamt'
//       label="Paid Amount"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem', 
//           top: '-3px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign: 'right', // Adjust input text size
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//           id='balance'
//       label="Balance"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem', 
//           top: '-3px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign:'right'
         
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//           id='disc.reason'
//       label="Discount Reason"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{
//        // Ensures the label is always at the top
//         style: {
//           fontSize: '0.95rem', 
//           top: '-3px', 
//           left:'1px'
//         },
//       }}
//       sx={{
//         '& .MuiInputBase-input': {
//           padding: '6px', // Adjust input padding
//           fontSize: '0.95rem',
//           textAlign: 'right', // Adjust input text size
//         },
//         '& .MuiOutlinedInput-root': {
//           height: '30px', // Adjust the height of the TextField container
//         },
//       }}
//     />
//         </Grid>
//         <Grid item xs={12}>
//         <Grid container spacing={2} direction="column" alignItems="center">
//   {/* Grid for Net Amount Label */}
//   <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
//     <Typography
//       variant="h6"
//       sx={{
//         fontWeight: 'bold',
//         color: '#bd2937',
//         fontSize: 16,
//         marginRight:-5
//       }}
//     >
//       Net Amount
//     </Typography>
//   </Grid>

//   {/* Grid for Net Amount Value */}
//   <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
//     <Typography
//       variant="h5"
//       sx={{
//         fontWeight: 'bold',
//         color: '#bd2937',
//         fontSize: 30,
//         textAlign: 'right',
//         minWidth: '100px',
//         marginRight:-5,
//         marginTop:-2 // Ensure enough space for larger values
//       }}
//     >
//       {netAmount} {/* This is where your dynamic value would go */}
//     </Typography>
//   </Grid>
// </Grid>

//       </Grid>
      
//       {/* <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
           
//           <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
//                 fontSize:'1rem', // Default background color
//                 '&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
              
//             >
//               Payment
//             </Button>
               
//           <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
//                 fontSize:'1rem', // Default background color
//                 '&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
              
//             >
//               Payment
//             </Button>
               
//           <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 6,backgroundColor: '#bb4d58',marginTop:3,padding:'8px 18px',
//                 fontSize:'1rem', // Default background color
//                 '&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
              
//             >
//               Payment
//             </Button>
           
         
//           </div>
         
//         </Grid>
//       </Grid> */}

//         </Grid>
//         <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-15px' }}>
      
//             <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58',
//                 fontSize:'0.75rem',padding:'2px 10px', // Default background color
//                 '&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
               
//             >
//               Print
//             </Button>
//             <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58', // Default background color
//                  fontSize:'0.75rem',padding:'4px 16px','&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
             
//             >
//               Save
//             </Button>
//             <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58', // Default background color
//                  fontSize:'0.75rem',padding:'4px 16px','&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
            
//             >
//               Exit
//             </Button>
           
//           </div>

//         </Grid>
//       </Grid>
//       </CModalBody>
     
//     </CModal>
//   );
// };

// export default CashPayment;
// // import React, { useState, useEffect } from 'react';
// // import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
// // import './CashPayment.css';
// // import { TextField, Grid, MenuItem, Typography, Box, Button } from '@mui/material';
// // import WalletIcon from '../assets/wallet.svg';
// // import UpiIcon from '../assets/Upi.svg';
// // import Corporateicon from '../assets/corporate-icon.svg';
// // import { CreditCard as CreditCardIcon } from '@mui/icons-material';

// // const CashPayment = ({ visible, setVisible }) => {
// //     const [netAmount, setNetAmount] = useState('3500.00');
// //     const [paymentMethod, setPaymentMethod] = useState('');
// //     const [discountPercentage, setDiscountPercentage] = useState('');
// //     const [discountAmount, setDiscountAmount] = useState('0.00');

// //     const handlePaymentMethodChange = (event) => {
// //         setPaymentMethod(event.target.value);
// //     };

// //     const handleNetAmountChange = (event) => {
// //         setNetAmount(event.target.value);
// //     };

// //     const handleDiscountPercentageChange = (event) => {
// //         const percentage = event.target.value;
// //         setDiscountPercentage(percentage);

// //         // Calculate discount amount based on net amount
// //         const discount = (parseFloat(netAmount) * percentage) / 100;
// //         setDiscountAmount(discount.toFixed(2));
// //     };

// //     useEffect(() => {
// //         // Update discount amount if netAmount changes
// //         const discount = (parseFloat(netAmount) * discountPercentage) / 100;
// //         setDiscountAmount(discount.toFixed(2));
// //     }, [netAmount, discountPercentage]);

// //     return (
// //         <CModal
// //             alignment="center"
// //             backdrop='static'
// //             size='sm'
// //             visible={visible}
// //             className='custom-modal-close'
// //             onClose={() => setVisible(false)}
// //             aria-labelledby="VerticallyCenteredExample"
// //         >
// //             <CModalHeader className='modalheader'>
// //                 <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
// //             </CModalHeader>
// //             <CModalBody className='custombody'>
// //                 <Grid container spacing={1.5}>
// //                     <Grid item xs={12}>
// //                         <TextField
// //                             id='ntamt'
// //                             label="Net Amount"
// //                             variant="outlined"
// //                             size="small"
// //                             value={netAmount}
// //                             onChange={handleNetAmountChange}
// //                             fullWidth
// //                             InputLabelProps={{
// //                                 style: {
// //                                     fontSize: '1rem',
// //                                     top: '1px',
// //                                     left: '1px'
// //                                 },
// //                             }}
// //                             sx={{
// //                                 '& .MuiInputBase-input': {
// //                                     padding: '6px',
// //                                     fontSize: '0.95rem',
// //                                     textAlign: 'right',
// //                                 },
// //                                 '& .MuiOutlinedInput-root': {
// //                                     height: '30px',
// //                                 },
// //                             }}
// //                         />
// //                     </Grid>

// //                     <Grid item xs={12} sm={3}>
// //                         <TextField
// //                         label='disc%'
// //                             select
// //                             variant="outlined"
// //                             size="small"
// //                             value={discountPercentage}
// //                             onChange={handleDiscountPercentageChange}
// //                             fullWidth
// //                             InputLabelProps={{
// //                                 style: {
// //                                     fontSize: '0.95rem',
// //                                     top: '-6px',
// //                                     left: '1px'
// //                                 },
// //                             }}
// //                             sx={{
// //                                 '& .MuiInputBase-input': {
// //                                     padding: '6px',
// //                                     fontSize: '0.95rem',
// //                                 },
// //                                 '& .MuiOutlinedInput-root': {
// //                                     height: '30px',
// //                                 },
// //                             }}
// //                         >
// //                             <MenuItem value="">Select Percentage</MenuItem>
// //                             <MenuItem value="10">10</MenuItem>
// //                             <MenuItem value="20">20</MenuItem>
// //                             <MenuItem value="30">30</MenuItem>
// //                             <MenuItem value="40">40</MenuItem>
// //                             <MenuItem value="50">50</MenuItem>
// //                             <MenuItem value="100">100</MenuItem>
// //                         </TextField>
// //                     </Grid>

// //                     <Grid item xs={12} sm={9}>
// //                         <TextField
// //                             id='discount'
// //                             label="Discount"
// //                             variant="outlined"
// //                             size="small"
// //                             value={discountAmount}
// //                             fullWidth
// //                             InputLabelProps={{
// //                                 style: {
// //                                     fontSize: '0.95rem',
// //                                     top: '-3px',
// //                                     left: '1px'
// //                                 },
// //                             }}
// //                             sx={{
// //                                 '& .MuiInputBase-input': {
// //                                     padding: '6px',
// //                                     fontSize: '0.95rem',
// //                                     textAlign: 'right',
// //                                 },
// //                                 '& .MuiOutlinedInput-root': {
// //                                     height: '30px',
// //                                 },
// //                             }}
// //                             InputProps={{
// //                                 readOnly: true, // Make it read-only
// //                             }}
// //                         />
// //                     </Grid>

// //                     {/* Remaining code for Service Charge, Payment Mode, etc. */}
// //                 </Grid>
// //             </CModalBody>
// //         </CModal>
// //     );
// // };

// // export default CashPayment;




import React, { useState, useEffect } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
import './CashPayment.css';
import { TextField, Grid, MenuItem, Typography, Button } from '@mui/material';
import WalletIcon from '../assets/wallet.svg';
import UpiIcon from '../assets/Upi.svg';
import Corporateicon from '../assets/corporate-icon.svg';
import PropTypes from 'prop-types';
import { CreditCard as CreditCardIcon } from '@mui/icons-material';

const CashPayment = ({ visible, setVisible, totalAmount }) => {
    const [netAmount, setNetAmount] = useState(totalAmount);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [serviceCharge, setServiceCharge] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleDiscountChange = (event) => {
        const selectedDiscount = Number(event.target.value);
        setDiscountPercentage(selectedDiscount);
        calculateNetAmount(selectedDiscount, serviceCharge);
    };

    const handleServiceChargeChange = (event) => {
        const charge = Number(event.target.value);
        setServiceCharge(charge);
        calculateNetAmount(discountPercentage, charge);
    };

    const handlePaidAmountChange = (event) => {
        const amount = Number(event.target.value);
        setPaidAmount(amount);
        setBalance(amount - netAmount);
    };

    const calculateNetAmount = (discount, charge) => {
        const discountValue = (discount / 100) * totalAmount;
        const newNetAmount = totalAmount - discountValue + charge;
        setNetAmount(newNetAmount);
    };

    useEffect(() => {
        calculateNetAmount(discountPercentage, serviceCharge);
    }, [totalAmount]);

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
            <CModalHeader className='modalheader'>
                <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
            </CModalHeader>
            <CModalBody className='custombody'>
                <Grid container spacing={1.5}>
                    {/* Net Amount Field */}
                    <Grid item xs={12}>
                    <Grid item xs={12}>
    <Typography
        variant="h6"
        sx={{
            fontWeight: 'bold',
            color: '#bd2937',
            fontSize: 13,
            textAlign: 'right',
            padding: '6px',
            marginBottom: '8px',
        }}
    >
        Total Amount: {totalAmount}
    </Typography>
</Grid>

                    </Grid>

                    {/* Discount Percentage Field */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            select
                            variant="outlined"
                            size="small"
                            fullWidth
                            label='DiscPer'
                            value={discountPercentage}
                            onChange={handleDiscountChange}
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-6px', left: '1px' },
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
                        >
                            {[10, 20, 30, 40, 50, 100].map(value => (
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Discount Value Field */}
                    <Grid item xs={12} sm={8}>
                        <TextField
                            id='discount'
                            label="Discount"
                            variant="outlined"
                            size="small"
                            value={((discountPercentage / 100) * totalAmount).toFixed(2)}
                            InputProps={{ readOnly: true }}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Service Charge Field */}
                    <Grid item xs={12}>
                        <TextField
                            id='s.charge'
                            label="Service Charge"
                            variant="outlined"
                            size="small"
                            value={serviceCharge}
                            onChange={handleServiceChargeChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Payment Method Field */}
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
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
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
                        >
                            <MenuItem value="Cash"><img src={WalletIcon} style={{ width: 25, marginRight: 5 }} alt="Wallet Icon" /> Cash</MenuItem>
                            <MenuItem value="Debit/Credit"><CreditCardIcon sx={{ mr: 1 }} /> Debit/Credit</MenuItem>
                            <MenuItem value="Credit"><img src={Corporateicon} style={{ width: 23, marginRight: 7 }} /> Credit</MenuItem>
                            <MenuItem value="BHIM/UPI Online Payment"><img src={UpiIcon} style={{ width: 25, marginRight: 5 }} alt="UPI Icon" /> BHIM/UPI Online Payment</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Bank Name Field */}
                    {(paymentMethod === 'Debit/Credit' || paymentMethod === 'BHIM/UPI Online Payment') && (
                        <Grid item xs={12}>
                            <TextField
                                label="Bank Name"
                                variant="outlined"
                                size="small"
                                fullWidth

                                InputLabelProps={{
                                    style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
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

                    {/* Corporate Field */}
                    {(paymentMethod === 'Credit') && (
                        <Grid item xs={12}>
                            <TextField
                                label="Corporate"
                                variant="outlined"
                                
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
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

                    {/* Paid Amount Field */}
                    <Grid item xs={12}>
                        <TextField
                            id='paidamt'
                            label="Paid Amount"
                            variant="outlined"
                            size="small"
                            value={paidAmount}
                            onChange={handlePaidAmountChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Balance Field */}
                    <Grid item xs={12}>
                        <TextField
                            id='balance'
                            label="Balance"
                            variant="outlined"
                            size="small"
                            value={balance.toFixed(2)}
                            InputProps={{ readOnly: true }}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
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

                    {/* Action Buttons */}
                    <Grid item xs={12}>
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
                </Grid>
                </Grid>
            </CModalBody>
            
        </CModal>
    );
};

CashPayment.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    totalAmount: PropTypes.number.isRequired,
};

export default CashPayment;

