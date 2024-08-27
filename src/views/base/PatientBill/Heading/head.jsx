import { Card, CardContent, Typography } from '@mui/material';

function Header() {
  return (
    <Card sx={{ backgroundColor: '#fbf5f6', height: 40, marginLeft: -14, marginTop: -4, width: 1465 }}>
    <CardContent>
      <Typography
        variant="h5"
        component="div"
        display="flex"
        alignItems="center"
        textAlign="center"
        color="#bd1616"
        sx={{ position: 'relative', marginTop:-2, fontSize: '2rem', fontWeight: 'bold',marginLeft:5 }}
      >
        Lab Invoice
      </Typography>
    </CardContent>
  </Card>
  
  );
}

export default Header;
