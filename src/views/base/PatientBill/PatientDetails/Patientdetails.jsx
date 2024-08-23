import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

function Patientdetails() {
  return (
    <>
      <Card sx={{ 
        width: { xs: '100%', sm: '100%', md: '97%' }, // Responsive width
        maxWidth: 'auto', 
        maxHeight: 700,
        height: 522,  
        p: 2
      }}>
        <CardContent>
          {/* Heading */}
          <Typography 
            sx={{ 
              fontSize: { xs: 16, sm: 18, md: 20 }, // Responsive font size
              mb: 1, 
              mt: -3, 
              textAlign: 'center' // Center-align for small screens
            }} 
            color="#0d6efd" 
            variant="h6"
          >
            Patient Details
          </Typography>

          {/* Profile Image and Name */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            mb: 2 
          }}>
            {/* Avatar */}
            <Avatar 
              sx={{ 
                width: { xs: 60, sm: 70, md: 80 }, // Responsive size
                height: { xs: 60, sm: 70, md: 80 }, // Responsive size
                mb: 3 
              }} 
              alt="Patient Avatar" 
              src="https://avatars.githubusercontent.com/u/10924138" 
            />
            
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                marginTop: -1, 
                fontWeight: 'bold', 
                fontSize: { xs: 16, sm: 18, md: 17 } // Responsive font size
              }}
            >
              Patient Name
            </Typography>

            {/* Age and Gender */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center', 
              mt: 1 
            }}>
              <Typography 
                sx={{ 
                  mr: 2,
                  mt:-2, 
                  fontWeight: 'bold', 
                  fontSize: { xs: 14, sm: 16, md: 15 } // Responsive font size
                }} 
                color="black"
              >
                25
              </Typography>
              <Typography 
                color="black" 
                sx={{
                  mt:-2,
                  fontWeight: 'bold', 
                  fontSize: { xs: 14, sm: 16, md: 15 } // Responsive font size
                }}
              >
                Male
              </Typography>
            </Box>
          </Box>

          {/* Rest of the Details */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            mt: 2 
          }}>
            <Typography 
              sx={{ 
                mb: 1.5, 
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              Contact Number
            </Typography>
            <Typography 
              sx={{ 
                mt:-2,
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              8129691215
            </Typography>
            <Typography 
              sx={{ 
                mt: 1, 
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              Email Patient@gmail.com
            </Typography>
            <Typography 
              sx={{ 
                mt: 1, 
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              PatientID
            </Typography>
            <Typography 
              sx={{ 
        
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
             1258
            </Typography>
            <Typography 
              sx={{ 
                mt: 1, 
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              Address:
            </Typography>
            <Typography 
              sx={{ 
              
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              05,flat,india
            </Typography>
            <Typography 
              sx={{ 
                mt: 1, 
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              Branch: Branch Name
            </Typography>
            <Typography 
              sx={{ 
             
                fontSize: { xs: 14, sm: 16, md: 16 } // Responsive font size
              }} 
              color="#b0b0b0"
            >
              Branch Name
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default Patientdetails;
