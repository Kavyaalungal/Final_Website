import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { CCard, CCardBody } from "@coreui/react";

function Patientdetails() {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    axios.post("http://172.16.16.10:8060/api/PatientMstr/PatientSearchMaster", {
      YearId: 2425,
      BranchId: 2,
      SrchItem: "Name",
      SrchVal: "Manu",
    })
      .then(response => {
        if (response.data && response.data.patientList) {
          setPatientData(response.data.patientList[0]);
          console.log(response.data.patientList[0]);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  return (
    <>
    {/* <CCard className="w-50">
    <CCardBody>
      
     </CCardBody>
   </CCard> */}
      <Card
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" }, // Responsive width
          maxWidth: "auto",
          maxHeight: 700,
          height: 562,
          p: 2,
          overflowY: "auto",
          marginLeft:-1,
          marginTop:-2 // Enable scrolling if content overflows
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            overflowY: "hidden"
            , // Enable scrolling within the content
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              mb: 1,
              mt: -2,
              textAlign: "center",
            }}
            color="#0d6efd"
            variant="h6"
          >
            Patient Details
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Avatar
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                mb: 3,
              }}
              alt="Patient Avatar"
              src={patientData.avatar || "https://avatars.githubusercontent.com/u/10924138"}
            />

            <Typography
              variant="h6"
              component="div"
              sx={{
                marginTop: -1,
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 18, md: 17 },
              }}
            >
              {patientData.Patient_Name || "Patient Name"}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  mr: 2,
                  mt: -2,
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                }}
                color="black"
              >
                {patientData.Patient_Ageyy || "Age"}
              </Typography>
              <Typography
                color="black"
                sx={{
                  mt: -2,
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                }}
              >
                {patientData.Patient_Ismale || "Gender"}
              </Typography>
            </Box>
          </Box>

          <Box
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
                wordBreak: "break-word", // Ensures long text wraps
                overflowWrap: "break-word", // Ensures long text wraps
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
              }}
              color="#000"
            >
              {patientData.Patient_Address || "N/A"}
            </Typography>
            {/* <Typography
              sx={{
                mt: 1,
                fontSize: { xs: 14, sm: 16, md: 16 },
                wordBreak: "break-word",
                overflowWrap: "break-word",
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
              }}
              color="#000"
            >
              {patientData.branch || "N/A"}
            </Typography> */}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default Patientdetails;
