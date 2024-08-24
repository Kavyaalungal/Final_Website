// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import {
//   CCloseButton,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarFooter,
//   CSidebarHeader,
//   CSidebarToggler,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import { AppSidebarNav } from './AppSidebarNav'

// // import { logo } from 'src/assets/brand/logo'
// import { sygnet } from 'src/assets/brand/Sygnet'
// import iconLogo from '../assets/images/icon-logo.png';

// // sidebar nav config
// import navigation from '../Nav'

// const AppSidebar = () => {
//   const dispatch = useDispatch()
//  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
//   const sidebarShow = useSelector((state) => state.sidebarShow)



//   return (
//     <CSidebar
//      className="border-end"
//       colorScheme="dark"
//       position="fixed"
//       unfoldable={unfoldable}
//      visible={sidebarShow}
//      onVisibleChange={(visible) => {
//         dispatch({ type: 'set', sidebarShow: visible })
//       }}
//    >
//     <CSidebarHeader className="border-bottom">
//        <CSidebarBrand to="/">
//        <img src={iconLogo} alt="icon logo" style={{ height: '45px' }} />
//           {/* <CIcon customClassName="sidebar-brand-full" icon={iconLogo} height={32} /> */}
//          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
//         </CSidebarBrand>
//         <CCloseButton
//           className="d-lg-none"
//           dark
//           onClick={() => dispatch({ type: 'set', sidebarShow: false })}
//         />
//      </CSidebarHeader>
//       <AppSidebarNav items={navigation} />
//       {/* <CSidebarFooter className="border-top d-none d-lg-flex">
//         <CSidebarToggler
//           onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
//         />
//       </CSidebarFooter>  */}
//    </CSidebar>
//   )
// }

// export default React.memo(AppSidebar)

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { AppSidebarNav } from './AppSidebarNav';
import { sygnet } from 'src/assets/brand/Sygnet';
import iconLogo from '../assets/images/icon logo white.png';
import logo from '../assets/images/icon infoware logo white (3).svg';
import NavigationWithModals from './NavigationWithModals'; // Import the modal handling component
import './AppSidebar.css';
// import { ReactComponent as Logo } from '../assets/images/icon logo white.svg'; 
const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
        <img src={logo} alt="logo" style={{ height: '60px', width:'200px', }} />
          {/* <img src={iconLogo} alt="icon logo" style={{ height: '60px', width:'200px' }} /> */}
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <NavigationWithModals /> {/* Use the modal handling component here */}
      {/* Uncomment the following block if you need the footer */}
      {/* <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter> */}
    </CSidebar>
  );
};

export default React.memo(AppSidebar);