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
        // '@media (max-width: 375px)': {
        //   fontSize: '1.5rem', 
        //   marginLeft: '50px',    
        // },
        // '@media (max-width: 575px)': {
        //   fontSize: '1.5rem', 
        //   marginLeft: '94px',    
        // },
        // '@media (max-width: 993px)': {
        //   fontSize: '1.5rem', 
        //   marginLeft: '-12px',    
        // },

   
      }} 
     
    >
      Lab Invoice
    </Typography>
  );
}

export default Header;
