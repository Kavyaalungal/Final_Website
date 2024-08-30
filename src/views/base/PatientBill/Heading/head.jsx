import { Card, CardContent, Typography } from '@mui/material';

function Header() {
  return (
    <Card sx={{backgroundColor:'#bd2937', height:35,marginTop:-3,marginLeft:-7,width:'108.5%'}}>
      <CardContent>
        <Typography variant="h5" component="div" display={'flex'} alignItems={'center'} textAlign={'center'} color={'white'} sx={{position:'relative',top:-10,fontSize:'1rem'}}>
          Lab Invoice
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Header;
