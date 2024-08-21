// import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

// import React, { useState } from 'react'
// import { CDatePicker } from '@coreui/react-pro';
// import '@coreui/coreui/dist/css/coreui.min.css'
// import '@coreui/coreui-pro/dist/css/coreui.min.css'
// import Register from './Register';
//  import './Patient.css'
//  import BasicTabs from './Tab';
//  import { usePatient } from './PatientContext';
// // import LoadingSpinner from './LoadingSpinner';

// function UserCard() {
//   const { patientDetails } = usePatient();

//   if (!patientDetails) {
//     return null;
//     // return <LoadingSpinner />;
//     // Placeholder while data is loading
//   }

//     const [image,setImage] = useState(null)
//     const [selectedId, setSelectedId] = useState('');
//     const [idFile, setIdFile] = useState(null);
  
//     const handleIdChange = (event) => {
//       setSelectedId(event.target.value);
//     };
  
//     const handleFileChange = (event) => {
//       setIdFile(event.target.files[0]);
//     };
//     const handleImageChange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImage(reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//     const genderAvatar = patientDetails.Patient_Ismale === 'Male' ? '/images/male.jpg' : '/images/avatar2.png';
//   return (
//    <>
//    <Grid container spacing={2} >
//     <Grid item xs={12}>
//     <Card sx={{height:515}} className='user'>
//     <CardContent>
//     <div className="container">
//   <div className="row mb-12">
//     <div className="col-12 d-flex justify-content-center align-items-center mb-3">
//       <label htmlFor="avatarUpload" className="avatar-label">
//         <img
//         src={image || genderAvatar}
//           alt="Avatar"
//           className="avatar-img"
//           style={{
//             width: '100px',
//             height: '100px',
//             borderRadius: '50%',
//             objectFit: 'cover',
//             cursor: 'pointer',
//           }}
//         />
//       </label>
//       <input
//         type="file"
//         id="avatarUpload"
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//       />
//     </div>
//   </div>

//   <div className="row mb-12">
//     <div className="col-12 d-flex ">
//       <div className="patient-details">
//       <h2>{patientDetails.Patient_Title}. {patientDetails.Patient_Name}</h2>
//       <p><strong>Patient ID:</strong> {patientDetails.Patient_Code}</p>
//       <p><strong>Gender:</strong> {patientDetails.Patient_Ismale}</p>
//       <p><strong>Contact:</strong>  {patientDetails.Patient_Phno}</p>
       
//       </div>
//     </div>
//   </div>
// </div>


  
//     </CardContent>
//    </Card>
//     </Grid>
  
   
//    </Grid>

//    </>
//   )
// }

// export default UserCard;
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { usePatient } from './PatientContext';
import './Patient.css';

function UserCard() {
  const { patientDetails } = usePatient();
  const [image, setImage] = useState(null);
  const [selectedId, setSelectedId] = useState('');
  const [idFile, setIdFile] = useState(null);

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleFileChange = (event) => {
    setIdFile(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Placeholder data for initial rendering
  const placeholderDetails = {
    Patient_Title: '',
    Patient_Name: '',
    Patient_Code: '',
    Patient_Ismale: '',
    Patient_Phno: '',
    Patient_mobile:'',
    Patient_Dob:'',
    Patient_Email:'',
  };

  const details = patientDetails || placeholderDetails;
  const genderAvatar = details.Patient_Ismale === 'Male' ? '/images/male.jpg' : '/images/avatar2.png';

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ height: 515 }} className='user'>
            <CardContent>
              <div className="container">
                <div className="row mb-12">
                  <div className="col-12 d-flex justify-content-center align-items-center mb-3">
                    <label htmlFor="avatarUpload" className="avatar-label">
                      <img
                        src={image || genderAvatar}
                        alt="Avatar"
                        className="avatar-img"
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          cursor: 'pointer',
                        }}
                      />
                    </label>
                    <input
                      type="file"
                      id="avatarUpload"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="row mb-12">
                  <div className="col-12 d-flex ">
                    <div className="patient-details">
                      <h4>{details.Patient_Title} {details.Patient_Name}</h4>
                      <p><strong>Patient ID:</strong> {details.Patient_Code}</p>
                      <p><strong>Gender:</strong> {details.Patient_Ismale}</p>
                      <p><strong>DOB:</strong> {details.Patient_Dob.split('T')[0]}</p>
                      <p><strong>Contact No:</strong> {details.Patient_Phno}</p>
                      <p><strong>Alternate No:</strong> {details.Patient_mobile}</p>
                      <p><strong>Email:</strong> {details.Patient_Email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;



 
  