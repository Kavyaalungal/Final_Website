
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
import { usePatient } from './PatientContext'; // import custom hook to access the patient details from a context
import './Patient.css';

function UserCard() {
  const { patientDetails } = usePatient(); // retrieves patient data from a context using customhook usePatient
  const [image, setImage] = useState(null); // Initializes state for storing the selected image with a default value of null.
// function for handling file input changes
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // select the file input and store into variable file
    if (file) {  // checks if the file is selected or not, the rest of the code executes after selecting a file
      const reader = new FileReader(); //creating a new FileReader instance and storing it into a variable named reader,
                                        //FileReader() is a built in javascript library for reading the contents of the file stored in the users computer
      reader.onloadend = () => { //it is an event handler that is called only after a file is read successfully,it is triggered only after reading operation is complete
        setImage(reader.result); // sets the image state with result of the reading operation to display the image selected
      };                         //reader.result contains the data url of the file for images it is in base64encoded string
      reader.readAsDataURL(file); // this method used to read the file and converts it into base64encoded string which can be directly used as the source for an image or other file types in the web application
    }
  };

  //Function to  Calculate age from DOB
  const calculateAge = (dob) => { // it takes dob as parameter
    const birthDate = new Date(dob); //creates a new date object based on the dob, if the dob is in string format then it will be formatted to a date object
    //calculate time difference in milliseconds taking current timestamp Date.now() subtract the birthdate timestamp
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);  // date object representing the difference
    return Math.abs(ageDate.getUTCFullYear() - 1970); //ageDate has the difference value extracts the year from the date object
                                                      //and subtract it from 1970 Unix Epoch year Maths.abs() for making positive values if in scenerio any negative value comes 
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

  const details = patientDetails || placeholderDetails; //if patient details available make it display otherwise show empty fields
  
  const genderDisplay = details.Patient_Ismale === 'Male' ? 'M' : 'F'; // display the gender M for male and F for female
  const genderAvatar = genderDisplay === 'M' ? '/images/male.jpg' : '/images/avatar2.png'; // if the gender is male display male avatar otherwise display female avatar
  const age = details.Patient_Dob ? calculateAge(details.Patient_Dob) : '';// if dob is available calculate age using the calculateAge function otherwise make it an empty string

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



 
  