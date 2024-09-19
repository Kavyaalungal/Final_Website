import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/Index'

const DefaultLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
// import React from 'react';
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/Index';
// import { Grid } from '@mui/material';

// const DefaultLayout = () => {
//   return (
//     <Grid container>
//       {/* Sidebar */}
//       <Grid item xs={12} md={2}>
//         <AppSidebar />
//       </Grid>

//       {/* Main content */}
//       <Grid item xs={12} md={10} className="d-flex flex-column min-vh-100">
//         <AppHeader />
        
//         <Grid item className="flex-grow-1">
//           <AppContent />
//         </Grid>
        
//         <AppFooter />
//       </Grid>
//     </Grid>
//   );
// };

// export default DefaultLayout;
