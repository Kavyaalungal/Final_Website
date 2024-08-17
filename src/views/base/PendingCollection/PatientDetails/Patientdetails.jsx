import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function PatientDetails() {
    return (
        <Box sx={{ minWidth: 'auto', minHeight: 'auto', marginTop: 0 }}>
            <Card sx={{ 
                width: { xs: '100%', sm: '100%', md: '100%' }, 
                maxWidth: 'auto', 
                maxHeight: 450,  // Increase the maxHeight
                height: 450,     // Increase the height
                padding: 2,      // Add padding for better spacing
            }}>
                <CardContent>
                    {/* Heading */}
                    <Typography sx={{ fontSize: 18, mb: 2 }} color="#0d6efd" variant="h6">
                        Patient Details
                    </Typography>

                    {/* Profile Image and Name */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h5" component="div" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                            Patient Name
                        </Typography>

                        {/* Age and Gender */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 1 }}>
                            <Typography sx={{ mr: 2, fontWeight: 'bold' }} color="black">
                                25
                            </Typography>
                            <Typography color="black" sx={{ fontWeight: 'bold' }}>
                                Male
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rest of the Details */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', mt: 2 }}>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Phno: Patient number
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Email: Patient@gmail.com
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            PatientID: 10244
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Referred By: Dr. name
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            IP/OP NO: 24587
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Branch: Branch Name
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
