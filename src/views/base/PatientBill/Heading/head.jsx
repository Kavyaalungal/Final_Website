// import { Card, CardContent, Typography } from '@mui/material';
// import { Bold } from 'lucide-react';
// import './Head.css';
// function Header() {
//   return (
//     // <Card sx={{backgroundColor:'#bd2937', height:35,marginTop:-3,marginLeft:-7,width:'108.5%'}}>
//       // <CardContent>
//         <Typography variant="h2" 
//         component="div" display={'flex'}
//          alignItems={'center'} textAlign={'center'} 
//          color={'#bd2937'} 
//          sx={{position:'relative',
//          top:-22,fontSize:'1.5rem',
//          fontWeight:'Bold',
//         marginLeft:-24}} className='lab'>
//          Lab Invoice
//         </Typography>
//       // </CardContent>
//     // </Card>
//   );
// }

// export default Header;


import { Typography } from '@mui/material';
import './Head.css';

function Header() {
  return (
    <Typography 
      variant="h2" 
      component="div" 
      display={'flex'}
      alignItems={'center'} 
      textAlign={'center'} 
      color={'#bd2937'}
      sx={{
        position: 'relative',
        top: -22,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '-198px', 
        '@media (max-width: 375px)': {
          fontSize: '1.5rem', 
          marginLeft: '50px',    
        },
        '@media (max-width: 575px)': {
          fontSize: '1.5rem', 
          marginLeft: '94px',    
        },
        '@media (min-width: 993px)': {
          fontSize: '1.5rem', 
          marginLeft: '-124px',    
        },

   
      }} 
     
    >
      Lab Invoice
    </Typography>
  );
}

export default Header;
