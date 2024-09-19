import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Avatar, Link,Grid,TextField } from "@mui/material";
import avatar from "../../../../assets/images/female.png";
import './PatientDetails.css';
import { usePatient } from "../../patient/PatientContext";
function Patientdetails() {
  const { patientDetails } = usePatient();
  // const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    axios
      .post("http://172.16.16.10:8060/api/PatientMstr/PatientSearchMaster", {
        YearId: 2425,
        BranchId: 2,
        SrchItem: "Name",
        SrchVal: "An",
      })
      .then((response) => {
        if (response.data && response.data.patientList) {
          setPatientData(response.data.patientList[0]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  return (
    <>
    <Card
      sx={{
        width: "100%",
        maxWidth: "auto",
        // maxHeight: 700,
        height: 680,
        p: 2,
        overflowY: "auto",
        marginLeft: -35,
        marginTop: -3,
        '@media (max-width: 575px)': {
          fontSize: '1.5rem', 
          marginLeft: '99px',
          width:770,    
        }, 
        '@media (min-width: 575px)': {
          fontSize: '1.5rem', 
          marginLeft: '-120px',
          // width:770,    
        }, 
      }}
      className="firstcard"
    >
      <CardContent
        sx={{
          height: "100%",
          overflowY: "hidden",
        }}
      >


<Typography
          sx={{
            fontSize: { xs: 16, sm: 18, md: 16 },
            mb: 1,
            mt: -2,
            textAlign: "start",
            fontWeight: "Bold",
            '@media (max-width: 575px)': {
              fontSize: '1.4rem', 
               
            },
          }}
          color="#bd2937"
          variant="h6"
        >
          Patient Details
        </Typography>
        {/* Hyperlink at the top of the card */}
        <Box sx={{ mb: 2
, textAlign: "right" ,mt:-2}}>
          <Link
            href="#"
            sx={{
              fontSize: { xs: 14, sm: 16, md: 16 },
              color: "#bd2937",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                 
              },
              // fontWeight: "bold",
              textDecoration: "none",
              '&:hover': {
                textDecoration: "underline",
              },
            }}
          >
            Edit
          </Link>
        </Box>

    

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          {/* <Avatar
            sx={{
              width: { xs: 60, sm: 70, md: 80 },
              height: { xs: 60, sm: 70, md: 80 },
              mb: 3,
              '@media (max-width: 575px)': {
                width:100, 
                height:100  
              }, 
            }}
            alt="Patient Avatar"
            src={patientData.avatar || avatar}
          /> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              ml: -8,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 17, sm: 17, md: 17 },
                '@media (max-width: 575px)': {
                  fontSize: '1.5rem', 
                   
                }, 
              }}
            >
                          {patientDetails?.Patient_Name || "Patient Name"}
              {/* {patientData.Patient_Name || "Patient Name"} */}
            </Typography>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1,
                mt: -1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                  '@media (max-width: 575px)': {
                  fontSize: '1rem', 
                   
                }, 
                }}
                color="black"
              >
                {patientData.Patient_Ageyy || "Age"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                  '@media (max-width: 575px)': {
                    fontSize: '1rem', 
                     
                  }, 
                }}
                color="black"
              >
                {patientData.Patient_Ismale || "Gender"}
              </Typography>
            </Box> */}
          </Box>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              mb: 1.5,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.5rem', 
                width:770,    
              }, 
            }}
            color="#b0b0b0"
          >
            Contact No
          </Typography>
          <Typography
            sx={{
              mt: -2,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                width:770,    
              }, 
            }}
            color="#000"
          >
            {patientData.Patient_mobile || "N/A"}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.5rem', 
                width:770,    
              }, 
            }}
            color="#b0b0b0"
          >
            Email
          </Typography>
          <Typography
            sx={{
              mt: 0,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                width:770,    
              }, 
            }}
            color="#000"
          >
            {patientData.Patient_Email || "N/A"}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.5rem', 
                width:770,    
              }, 
            }}
            color="#b0b0b0"
          >
            PatientID
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                width:770,    
              }, 
            }}
            color="#000"
          >
            {patientData.patientID || "N/A"}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.5rem', 
                width:770,    
              }, 
            }}
            color="#b0b0b0"
          >
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                width:770,    
              }, 
            }}
            color="#000"
          >
            {patientData.Patient_Address || "N/A"}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.5rem', 
                width:770,    
              }, 
            }}
            color="#b0b0b0"
          >
            Branch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 16 },
              wordBreak: "break-word",
              overflowWrap: "break-word",
              '@media (max-width: 575px)': {
                fontSize: '1.2rem', 
                width:770,    
              }, 
            }}
            color="#000"
          >
            {patientData.branch || "N/A"}
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
     <Grid item xs>
     <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width:300,
        mt:1,
        ml:-25,
        '@media (max-width: 768px)': {
         // Adjust font size for smaller screens
          marginLeft: '87px',
              // Remove negative margin for smaller screens
        },
        '@media (max-width: 820px)': {
          fontSize: '1.5rem',  // Adjust font size for smaller screens
          marginLeft: '50px',
          marginTop:59     // Remove negative margin for smaller screens
        },
        '@media (max-width: 1024px)': {
          fontSize: '1.5rem',  // Adjust font size for smaller screens
          marginLeft: '-165px',
          marginTop:110     // Remove negative margin for smaller screens
        },
      
      }}
      className='userinfo'
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
        User Info: 
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
    
      </Typography>
    </Box>

     </Grid> 
     </>
  );
}

export default Patientdetails;
