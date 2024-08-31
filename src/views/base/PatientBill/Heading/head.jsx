import { Card, CardContent, Typography } from '@mui/material';
import { Bold } from 'lucide-react';

function Header() {
  return (
    // <Card sx={{backgroundColor:'#bd2937', height:35,marginTop:-3,marginLeft:-7,width:'108.5%'}}>
      // <CardContent>
        <Typography variant="h2" component="div" display={'flex'} alignItems={'center'} textAlign={'center'} color={'#bd2937'} sx={{position:'relative',top:-25,fontSize:'1.5rem',fontWeight:'Bold',marginLeft:-24}}>
         Lab Invoice
        </Typography>
      // </CardContent>
    // </Card>
  );
}

export default Header;
