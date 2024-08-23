
// import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { usePatient } from './PatientContext';
// import './Patient.css';

// function UserCard() {
//   const { patientDetails } = usePatient();
//   const [image, setImage] = useState(null);
//   const [selectedId, setSelectedId] = useState('');
//   const [idFile, setIdFile] = useState(null);

//   const handleIdChange = (event) => {
//     setSelectedId(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setIdFile(event.target.files[0]);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Placeholder data for initial rendering
//   const placeholderDetails = {
//     Patient_Title: '',
//     Patient_Name: '',
//     Patient_Code: '',
//     Patient_Ismale: '',
//     Patient_Phno: '',
//     Patient_mobile:'',
//     Patient_Dob:'',
//     Patient_Email:'',
//   };

//   const details = patientDetails || placeholderDetails;
//   const genderAvatar = details.Patient_Ismale === 'Male' ? '/images/male.jpg' : '/images/avatar2.png';

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Card sx={{ height: 502 }} className='user'>
//             <CardContent>
//               <div className="container">
//                 <div className="row mb-12">
//                   <div className="col-12 d-flex justify-content-center align-items-center mb-3">
//                     <label htmlFor="avatarUpload" className="avatar-label">
//                       <img
//                         src={image || genderAvatar}
//                         alt="Avatar"
//                         className="avatar-img"
//                         style={{
//                           width: '100px',
//                           height: '100px',
//                           borderRadius: '50%',
//                           objectFit: 'cover',
//                           cursor: 'pointer',
//                         }}
//                       />
//                     </label>
//                     <input
//                       type="file"
//                       id="avatarUpload"
//                       style={{ display: 'none' }}
//                       onChange={handleImageChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="row mb-12">
//                   <div className="col-12 d-flex ">
//                     <div className="patient-details">
//                       <h4>{details.Patient_Title} {details.Patient_Name}</h4>
//                       <p style={{fontSize:16,color:'grey'}}>Patient ID:<br /><strong style={{fontSize:16,color:'black'}}>{details.Patient_Code}</strong></p>

//                       <p><strong>Gender:</strong><br /> {details.Patient_Ismale}</p>
//                       {/* <p><strong>DOB:</strong> <br />{details.Patient_Dob.split('T')[0]}</p> */}
//                       <p><strong>Contact No:</strong><br /> {details.Patient_Phno}</p>
//                       {/* <p><strong>Alternate No:</strong><br /> {details.Patient_mobile}</p> */}
//                       <p><strong>Email:</strong><br /> {details.Patient_Email}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default UserCard;

import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react';
import { usePatient } from './PatientContext';
import './Patient.css';

function UserCard() {
  const { patientDetails } = usePatient();
  const [image, setImage] = useState(null);

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

  // Calculate age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // Placeholder data for initial rendering
  const placeholderDetails = {
    Patient_Title: '',
    Patient_Name: '',
    Patient_Code: '',
    Patient_Ismale: '',
    Patient_Phno: '',
    Patient_mobile: '',
    Patient_Dob: '',
    Patient_Email: '',
    Patient_Address: '',
  };

  const details = patientDetails || placeholderDetails;
  const genderAvatar = details.Patient_Ismale === 'Male' ? '/images/male.jpg' : '/images/avatar2.png';
  const genderDisplay = details.Patient_Ismale === 'Male' ? 'M' : 'F';
  const age = details.Patient_Dob ? calculateAge(details.Patient_Dob) : '';

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Card sx={{ height: 502 }} className='user'>
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
                      <p><strong>({genderDisplay} - {age} years old)</strong></p>
                      <p style={{ fontSize: 16, color: 'grey'}}>#{details.Patient_Code}</p>
                      
                      <p style={{ fontSize: 16, color: 'grey'}}>Contact No:<br /><strong style={{color:'black'}}>91 {details.Patient_Phno}</strong></p>
                      <p style={{ fontSize: 16, color: 'grey'}}>Email:<br /><strong style={{color:'black'}}>{details.Patient_Email}</strong></p>
                    
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



 
  