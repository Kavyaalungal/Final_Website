import { Card, CardContent, Button, Modal, Box, IconButton, Typography, Stack, Checkbox, TextField, Collapse, Fade } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import PaymentsIcon from '@mui/icons-material/Payment';
import WalletIcon from '../assets/wallet.svg';
import UpiIcon from '../assets/Upi.svg';

function PaymentModal() {
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const [paymentModes, setPaymentModes] = useState({
    Card: false,
    upi: false,
    cash: false
  }); 
  // Payment modes state
  const [amounts, setAmounts] = useState({
    Card: '',
    upi: '',
    cash: ''
  }); // Amounts state

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handlePaymentModeChange = (event) => {
    setPaymentModes({
      ...paymentModes,
      [event.target.name]: event.target.checked
    });
  };

  const handleAmountChange = (event) => {
    setAmounts({
      ...amounts,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Calculate the total amount
    const totalAmount = Object.values(amounts).reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0);
    // Handle the split payment logic here
    console.log('Selected Payment Methods:', paymentModes);
    console.log('Amounts:', amounts);
    console.log('Total Amount:', totalAmount);
    handleClose();
  };

  return (
    <>
      <Card sx={{  height: 81,marginTop:2,marginLeft:1,width:1040 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }} >
          <Button 
           
            onClick={handleOpen} 
            sx={{color:'#bd2937',border:'1px solid #bd2937',
              marginTop:1
            }}
            
          >
            Payment Method
          </Button>
        </CardContent>
      </Card>
      
      <Modal open={modalOpen} onClose={handleClose} hideBackdrop
      sx={{backdropFilter:'brightness(60%)'}} >
        {/* <Fade in={modalOpen}> */}
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: { xs: '90%', sm: 400 }, // Responsive width
          maxWidth: 500, // Max width for larger screens
          bgcolor: 'background.paper', 
           border: '1px solid #000', 
          boxShadow: 24, 
          p: 2, 
          borderRadius: 2
        }}>
          <IconButton 
            onClick={handleClose} 
            sx={{ position: 'absolute', top: 1, right: 1 }} // Adjust position
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom>Select Payment Mode</Typography>
          <Stack spacing={2} mt={2}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderRadius: 2, 
              p: 1, 
              backgroundColor: 'white'
            }}>
              <Checkbox checked={paymentModes.Card} onChange={handlePaymentModeChange} name="Card" />
              <PaymentsIcon sx={{ mr: 1 }} />
              <Typography variant="body1">Credit Card or Debit Card</Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderRadius: 2, 
              p: 1, 
              backgroundColor: 'white'
            }}>
              <Checkbox checked={paymentModes.upi} onChange={handlePaymentModeChange} name="upi" />
              <img src={UpiIcon} style={{ width: 25, marginRight: 10 }} alt="UPI Icon" />
              <Typography variant="body1">UPI Payments</Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              borderRadius: 2, 
              p: 1, 
              backgroundColor: 'white'
            }}>
              <Checkbox checked={paymentModes.cash} onChange={handlePaymentModeChange} name="cash" />
              <img src={WalletIcon} style={{ width: 25, marginRight: 10 }} alt="Wallet Icon" />
              <Typography variant="body1">Cash</Typography>
            </Box>
          </Stack>

         
          {Object.keys(paymentModes).map((mode) => (
            <Collapse in={paymentModes[mode]} key={mode} timeout='auto' unmountOnExit>
              <Box sx={{ mt: 2 }}>
                <TextField
                  label={`${mode.charAt(0).toUpperCase() + mode.slice(1)} Amount`}
                  variant="outlined"
                  size="small"
                  fullWidth
                  name={mode}
                  value={amounts[mode] || ''}
                  onChange={handleAmountChange}
                 
                />
              </Box>
            </Collapse>
          ))}

          <Button 
            variant="contained" 
            onClick={handleSubmit} 
            sx={{ mt: 2, ml:16}} 
          >
            Submit
          </Button>
        </Box>
        {/* </Fade> */}
      </Modal>
    </>
  );
}

export default PaymentModal;