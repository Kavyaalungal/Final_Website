import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react';
import { usePatient } from './PatientContext'; // import custom hook to access the patient details from a context
import './Patient.css';
import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
import Patient from './Patient';
import './Register.css';
import male from '../../../assets/images/male1.png';
import female from '../../../assets/images/female.png';
function UserCard({patientData}) {
  const { patientDetails } = usePatient(); // retrieves patient data from a context using custom hook usePatient
  const [image, setImage] = useState(null); // Initializes state for storing the selected image with a default value of null.
    
  
  // Function for handling file input changes
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Select the file input and store it into the variable file
    if (file) { // Checks if the file is selected or not
      const reader = new FileReader(); // Create a new FileReader instance
      reader.onloadend = () => { // Event handler that is called only after a file is read successfully
        setImage(reader.result); // Set the image state with the result of the reading operation
      };
      reader.readAsDataURL(file); // Read the file and convert it into a base64-encoded string
    }
  };

  // Function to calculate age from DOB
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
    Patient_Ageyy:'',
    Patient_Email: '',
    Patient_Address: '',
  };

  const details = patientDetails || patientData || placeholderDetails  // Use patient details if available, otherwise use placeholder data
  // const genderDisplay = details.Patient_Ismale === 'Male' ? 'M' : 'F'; // Display gender as M for male and F for female
  // const genderAvatar = genderDisplay === 'M' ? male : female; // Set avatar based on gender
  // const age = details.Patient_Dob ? calculateAge(details.Patient_Dob) : ''; // Calculate age if DOB is available
const age = details.Patient_Ageyy || (details.Patient_Dob? calculateAge(details.Patient_Dob): '');
  // Determine which image to use: user-uploaded image, gender-based avatar, or default image
  // const avatarSrc =  (details.Patient_Ismale ? genderAvatar : commonDefault);


  const genderDisplay = details.Patient_Ismale === 'Male'
  ? 'M'
  : (details.Patient_Ismale === 'Female' ? 'F' : 'O'); // Use 'O' for 'Other'

// Determine the gender-specific avatar
const genderAvatar = genderDisplay === 'M'
  ? male
  : (genderDisplay === 'F' ? female : commonDefault); // Use commonDefault for 'Other' as well

// Set the avatar source based on gender display
const avatarSrc = genderAvatar;





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
                        src={avatarSrc}
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

                {/* {patientDetails && (
                  <div className="row mb-12">
                    <div className="col-12 d-flex">
                      <div className="patient-details">
                        <h4 style={{ wordBreak: 'break-word' }} className='textFieldStyle'>
                          {details.Patient_Title} {details.Patient_Name}
                        </h4>
                        <p className='textFieldStyle'>
                          <strong>({genderDisplay} - {age} Years)</strong>
                        </p>
                        <p style={{ fontSize: 16, color: 'grey', fontFamily: "sans-serif" }}>
                          #{details.Patient_Code}
                        </p>
                        <p className="textFieldStyle">
                          Contact No:<br /><strong style={{ color: 'black' }}>91 {details.Patient_Phno}</strong>
                        </p>
                        <p className="textFieldStyle" style={{ wordBreak: 'break-word' }}>
                          Email:<br />
                          <strong style={{ color: 'black', wordBreak: 'break-word' }}>
                            {details.Patient_Email}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;
