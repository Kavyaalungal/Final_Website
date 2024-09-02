import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
// import { Bold } from "lucide-react";
// import avatar from "../../../../../public/images/female.png"

function ImageCard() {
//   const [patientData, setPatientData] = useState([]);

//   useEffect(() => {
//     axios
//       .post("http://172.16.16.10:8060/api/PatientMstr/PatientSearchMaster", {
//         YearId: 2425,
//         BranchId: 2,
//         SrchItem: "Name",
//         SrchVal: "An",
//       })
//       .then((response) => {
//         if (response.data && response.data.patientList) {
//           setPatientData(response.data.patientList[0]);
//         }
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the patient data!", error);
//       });
//   }, []);

  return (
    <Card
      sx={{
        width: "132%",
        maxWidth: "auto",
        maxHeight: 700,
        height: 643,
         p: 2,
        overflowY: "auto",
        marginTop:-2,
        marginLeft:14
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          overflowY: "hidden",
        }}
      >
        {/* <Typography
          sx={{
            fontSize: { xs: 16, sm: 18, md: 16 },
            mb: 1,
            mt: -2,
            textAlign: "start",
            fontWeight:'Bold' 
          }}
          color="#bd2937"
          variant="h6"
        
        >
          Patient Details
        </Typography> */}

        {/* <Box
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
            src={
              patientData.avatar ||
              avatar
            }
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              ml:-8 // Align patient name and details to the left
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 17, sm: 17, md: 17 },
              }}
            >
              {patientData.Patient_Name || "Patient Name"}
            </Typography>

          
            <Box
              sx={{
                display: "flex",
                flexDirection: "row", // Horizontal alignment
                justifyContent: "flex-start",
                gap: 1, // Space between Age and Gender
                mt: -1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                }}
                color="black"
              >
                {patientData.Patient_Ageyy || "Age"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 14, sm: 16, md: 15 },
                }}
                color="black"
              >
                {patientData.Patient_Ismale || "Gender"}
              </Typography>
            </Box>
          </Box>
        </Box> */}

      
      
      </CardContent>
    </Card>
  );
}

export default ImageCard;
