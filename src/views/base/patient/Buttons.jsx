
import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Buttons.css';

function Buttons({
  flag,
  handleSaveOrUpdate,
  closeModal,
  handleNewPatient,
  patientDetails,
  isSaving,
}) {
  const navigate = useNavigate();


  
  const handleProceedToBill = async () => {
    console.log("Proceed Button Clicked");
  
    try {
      // Log start of saving/updating process
      console.log("Saving or updating started");
      
      // Trigger the save or update function and capture the returned details
      const result = await handleSaveOrUpdate();
      
      // Log the returned result to verify it's returned
      console.log("Returned result:", result);
  
      // If save/update is successful and result is returned
      if (result) {
        const { opdno } = result; // Destructure opdno and message from the result
        console.log("Patient data saved/updated successfully. OPD No:", opdno);
        
        // Proceed with closing the modal
        if (typeof closeModal === 'function') {
          console.log('Calling closeModal');
          closeModal(); // Close the modal
        } else {
          console.error("closeModal is not a function");
        }
  
        // Delay navigation to ensure the modal closes and the save/update is complete
        setTimeout(() => {
          console.log("Navigating to /proceedtobill with OPD No:", opdno);
          navigate('/proceedtobill', {
            replace: true,
            state: { opdno} // Pass the opdno and message to the billing page
          });
        }, 300); // Adjust the delay if necessary
      } else {
        console.error("No result returned from handleSaveOrUpdate.");
        toast.error("Failed to retrieve patient information.");
      }
    } catch (error) {
      // Log any errors that occur during the process
      console.error("Error saving/updating patient data:", error);
      toast.error("Failed to save or update patient data.");
    }
  };
  
  

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
            <Button
              sx={{
                textTransform: 'none',
                marginRight: 1,
                backgroundColor: '#bb4d58', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },
              }}
              variant="contained"
              color="success"
              onClick={handleNewPatient}
            >
              New
            </Button>

            <Button
              sx={{
                textTransform: 'none',
                marginRight: 1,
                backgroundColor: '#bb4d58', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },
              }}
              variant="contained"
              color="success"
              onClick={handleSaveOrUpdate}
              disabled={isSaving}
            >
              {flag === 'Save' ? 'Save' : 'Update'}
            </Button>

            <Button
              onClick={handleProceedToBill}
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#bb4d58', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },
              }}
              disabled={isSaving} // Disable during saving
            >
              Proceed to bill
            </Button>
          </div>
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        </Grid>
      </Grid>
    </>
  );
}

export default Buttons;
