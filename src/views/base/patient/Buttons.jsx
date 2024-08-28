// // import { Autocomplete, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// // import React, { useEffect, useState } from 'react'

// // import '@coreui/coreui/dist/css/coreui.min.css'
// // import '@coreui/coreui-pro/dist/css/coreui.min.css'
// // import { ToastContainer, toast } from 'react-toastify';
// // import { useNavigate } from 'react-router-dom';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './Buttons.css'
// // import Additional from './Additional';

// // function Buttons({handleSaveOrUpdate,resetForm,closeModal,fetchNewPatientId,isEditMode,handleNewPatient,saveNewPatient,updatePatient}) {
// //   const navigate = useNavigate();
// //   const handleButtonClick = () => {
// //     console.log("Proceed Button Clicked");
// //     console.log("closeModal is:", closeModal); // Log the closeModal function
// //     console.log('Received closeModal in Buttons:', closeModal);

// //     if (typeof closeModal === 'function') {
// //       closeModal(); // This should close the modal
// //     } else {
// //       console.error("closeModal is not a function");
// //     }
  
// //     navigate('/proceedtobill'); 
// //   };
// //  return (
// //    <>
// //    <Grid container spacing={2}>
   
// //     <Grid item xs={12}>
// //   <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
 
// //   <Button
// //   variant="contained"
// //    className="button"
// //   sx={{ textTransform: 'none', marginRight: 1 }}
// //   onClick={handleNewPatient}
// // >
// //   New
// // </Button>
// //   <Button
// //   variant="contained"
// //   className="button"
// //   sx={{ textTransform: 'none', marginRight: 1 }}
// //   onClick={updatePatient}

// // >
// // Update
// // </Button>
// // <Button
// //   variant="contained"
// //   className="button"
// //   sx={{ textTransform: 'none', marginRight: 1 }}
// //   onClick={saveNewPatient}

// // >
// // Save
// // </Button>
// //   <Button
// //     onClick={handleButtonClick}
// //     variant="contained"
// //     className="button"
// //     sx={{
// //       textTransform: 'none',
// //     }}
// //   >
// //     Proceed to bill
// //   </Button>
// // </div>


                
             
// //                 <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

// //     </Grid>
// //     </Grid>
// //    </>
// //   )
// // }

// // export default Buttons;

// import { Button, Grid } from '@mui/material';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Buttons.css';

// function Buttons({ handleSaveOrUpdate, resetForm, closeModal, fetchNewPatientId, isEditMode, handleNewPatient, saveNewPatient, updatePatient }) {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     console.log("Proceed Button Clicked");
    
//     if (typeof closeModal === 'function') {
//       console.log('Calling closeModal');
//       closeModal(); // Close the modal
//     } else {
//       console.error("closeModal is not a function");
//     }
//     navigate('/proceedtobill', { replace: true });
//     // Delay navigation to ensure modal closes
//     // setTimeout(() => {
     
//     // }, 300); // Adjust the delay if necessary
//   };

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
//             <Button
//               variant="contained"
//               className="button"
//               sx={{ textTransform: 'none', marginRight: 1 }}
//               onClick={handleNewPatient}
//             >
//               New
//             </Button>
//             <Button
//               variant="contained"
//               className="button"
//               sx={{ textTransform: 'none', marginRight: 1 }}
//               onClick={updatePatient}
//             >
//               Update
//             </Button>
//             <Button
//               variant="contained"
//               className="button"
//               sx={{ textTransform: 'none', marginRight: 1 }}
//               onClick={saveNewPatient}
//             >
//               Save
//             </Button>
//             <Button
//               onClick={handleButtonClick}
//               variant="contained"
//               className="button"
//               sx={{ textTransform: 'none' }}
//             >
//               Proceed to bill
//             </Button>
//           </div>
//           <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default Buttons;



import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Buttons.css';

function Buttons({
  handleSaveOrUpdate,
  resetForm,
  closeModal,
  fetchNewPatientId,
  isEditMode,
  handleNewPatient,
  saveNewPatient,
  updatePatient
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Proceed Button Clicked");

    if (typeof closeModal === 'function') {
      console.log('Calling closeModal');
      closeModal(); // Close the modal
    } else {
      console.error("closeModal is not a function");
    }
    
    // Delay navigation to ensure modal closes
    setTimeout(() => {
      navigate('/proceedtobill', { replace: true });
    }, 300); // Adjust the delay if necessary
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-25px' }}>
            <Button
              variant="contained"
              className="button"
              sx={{ textTransform: 'none', marginRight: 1 }}
              onClick={async () => {
                await handleNewPatient();
                // Additional logic if needed after generating a new patient ID
              }}
            >
              New
            </Button>
            <Button
              variant="contained"
              className="button"
              sx={{ textTransform: 'none', marginRight: 1 }}
              onClick={updatePatient}
            >
              Update
            </Button>
            <Button
              variant="contained"
              className="button"
              sx={{ textTransform: 'none', marginRight: 1 }}
              onClick={async () => {
                await saveNewPatient();
                // Additional logic if needed after saving the patient
              }}
            >
              Save
            </Button>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              className="button"
              sx={{ textTransform: 'none' }}
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
