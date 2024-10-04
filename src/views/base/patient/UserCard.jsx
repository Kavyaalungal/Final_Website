import { Box, Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import commonDefault from '../../../assets/images/common.png'; // Ensure correct import path
import male from '../../../assets/images/male1.png';
import female from '../../../assets/images/female.png';
import './Patient.css';
import './Register.css';
import axios from 'axios';
import config from '../../../Config';

function UserCard({ patientCode,patientDetails}) {
  const [avatarSrc, setAvatarSrc] = useState(commonDefault); 
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    // Function to get the avatar based on the gender
    const getAvatarByGender = (gender) => {
      if (gender === "Male") {
        return male;
      } else if (gender === "Female") {
        return female;
      } else {
        return commonDefault;
      }
    };

    // Prioritize userData if available
    if (userData && userData.Patient_Ismale) {
      setAvatarSrc(getAvatarByGender(userData.Patient_Ismale));
    } else if (patientDetails && patientDetails.Patient_Ismale) {
      setAvatarSrc(getAvatarByGender(patientDetails.Patient_Ismale));
    } else {
      setAvatarSrc(commonDefault); // Default fallback if no gender info
    }
  }, [userData, patientDetails]);
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.post(`${config.public_apiUrl}/PatientMstr/PatientDetailsMaster`, {
          YearId:config.public_yearId,
          BranchId: config.public_branchId,
          PatCode: patientCode,
          editFlag: true
        });

        if (response.data && response.data.patDetails) {
          setUserData(response.data.patDetails);
        }
      } catch (err) {
        console.error("Failed to fetch patient data:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (patientCode) {
      fetchPatientData();
    }
  }, [patientCode]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              width: "100%",
              maxWidth: "auto",
              maxHeight: 700,
              height: 512,
              p: 2,
              overflowY: "auto",
              marginLeft: -1,
              marginTop: -1
            }}
            className="firstcard"
          >
            <CardContent sx={{ height: "100%", overflowY: "hidden" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    mb: 2,
                  }}
                  alt="Patient Avatar"
                  src={avatarSrc}
                  // src={
                  //   userData.Patient_Ismale === "Male"
                  //     ? male
                  //     : userData.Patient_Ismale === "Female"
                  //     ? female
                  //     : commonDefault
                  // }
                />
              </Box>

              {/* Only show other details after userData is fetched and form is submitted */}
              {!loading && Object.keys(userData).length > 0 ? (
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: -2, marginLeft: -1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: 16, sm: 16, md: 16 },
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {userData.Patient_Name || "Patient Name"}
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 1 }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: 16, sm: 16, md: 16 } }} color="black">
                      {userData.Patient_Ageyy || "Age"}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: 16, sm: 16, md: 16 } }} color="black">
                      {userData.Patient_Ismale || "Gender"}
                    </Typography>
                  </Box>

                  <Typography sx={{ mb: 1.5, fontSize: { xs: 15, sm: 15, md: 15 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Contact No
                  </Typography>
                  <Typography sx={{ mt: -2, fontSize: { xs: 14, sm: 14, md: 14 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_mobile || userData.Patient_Phno || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 15, sm: 15, md: 15 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Email
                  </Typography>
                  <Typography sx={{ mt: 0, fontSize: { xs: 14, sm: 14, md: 14 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Email || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 15, sm: 15, md: 15 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    PatientID
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 14, sm: 14, md: 14 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Code || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 15, sm: 15, md: 15 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Address
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 14, sm: 14, md: 14 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.Patient_Address || "N/A"}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: { xs: 15, sm: 15, md: 15 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#b0b0b0">
                    Branch
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 14, sm: 14, md: 14 }, wordBreak: "break-word", overflowWrap: "break-word" }} color="#000">
                    {userData.branchName || "N/A"}
                  </Typography>
                </Box>
              ) : (
                <Typography sx={{ textAlign: 'center', color: 'grey' }}>
                  {/* Fill in the form to see details. */}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;





