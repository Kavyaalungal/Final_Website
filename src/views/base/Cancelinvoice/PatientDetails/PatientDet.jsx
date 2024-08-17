import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function PatientDetails() {
    return (
        <Box sx={{ minWidth: 'auto', minHeight: 'auto', marginTop: -0.01 }}>
            <Card sx={{ width: { xs: '100%', sm: '100%', md: '100%' }, maxWidth: 'auto', maxHeight: 500 }}>
                <CardContent>
                    {/* Heading */}
                    <Typography sx={{ fontSize: 16, mb: 2 }} color="#0d6efd" variant="h6">
                        Patient Details
                    </Typography>

                    {/* Profile Image and Name */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h5" component="div" sx={{ marginTop: 2 ,fontWeight:'bold'}}>
                            Patient Name
                        </Typography>

                        {/* Age and Gender */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 0}}>
                            <Typography sx={{ mr: 2,fontWeight:'bold' }} color="black">
                                 25
                            </Typography>
                            <Typography color="black" sx={{fontWeight:'bold'}}>
                                 Male
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rest of the Details */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', mt: 4 }}>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Phno: Patient number
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Email: Patient@gmail.com
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Address: Patient address
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Reg.on: 10-12-24
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            PatientID: 10244
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Referred By: Dr. name
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Coll.At: Home
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
