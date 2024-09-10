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
        marginLeft: '-198px',  // Initial margin for larger screens
        '@media (max-width: 576px)': {
          fontSize: '1.2rem',  // Adjust font size for smaller screens
          marginLeft: '0',     // Remove negative margin for smaller screens
        },
        '@media (max-width: 320px)': {
          fontSize: '1rem',    // Further reduce font size for very small screens
          marginLeft: '60px',     // Ensure no negative margin at 320px
        }
      }} 
      className='lab'
    >
      Lab Invoice
    </Typography>
  );
}

export default Header;
