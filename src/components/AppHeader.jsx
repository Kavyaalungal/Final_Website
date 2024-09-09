import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilContrast,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'
import './AppHeader.css';
import AppMenu from './AppMenu';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, useMediaQuery, useTheme ,} from '@mui/material';

// import { AppBreadcrumb } from './index'
//  import { AppHeaderDropdown } from './header/Index'

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  // const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const [username, setUsername] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if it's mobile view
  useEffect(() => {
    const storedUsername = localStorage.getItem('loggedInUsername');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  // if (isMobile) {
  //   return null; // Return nothing for desktop mode
  // }
  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* <CHeaderNav className="d-none d-md-flex"> */}
    {/* <AppMenu/> */}
    {!isMobile && (
      <AppMenu/>
    )}

        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <ul className="navbar-nav">
    
      <li className="nav-item dropdown">
        <a
          data-mdb-dropdown-init=""
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Submenu »
            </a>
            <ul className="dropdown-menu dropdown-submenu">
              <li>
                <a className="dropdown-item" href="#">
                  Submenu item 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Submenu item 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Submenu item 3 »{" "}
                </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Multi level 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Multi level 2
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Submenu item 4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Submenu item 5
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav> */}


{/*        
          <CNavItem>
            <CNavLink to="/dashboard" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
        {/* </CHeaderNav> */}
        <CHeaderNav className="ms-auto">
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
          {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li> */}
          <CDropdown variant="nav-item" placement="bottom-end">
            {/* <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu> */}
          </CDropdown>
          {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li> */}
          {/* <AppHeaderDropdown /> */}
        </CHeaderNav>
        <CHeaderNav>
      {username && (
        <div style={{ marginLeft: 'auto', paddingRight: '1rem' }}>
          Welcome, {username}!
        </div>
      )}
    </CHeaderNav>
      </CContainer>
      {/* <CContainer className="px-4" fluid> */}
        {/* <AppBreadcrumb /> */}
      {/* </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
// import { useEffect, useRef, useState } from 'react';
// import { AppBar, Toolbar, Button, Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
// import { ChevronRight, ExpandMore } from '@mui/icons-material';
// import { useDispatch, useSelector } from 'react-redux';
// const AppHeader = () => {
//   const headerRef = useRef();
//   const dispatch = useDispatch();
//   const sidebarShow = useSelector((state) => state.sidebarShow);

//   const [anchorElFrontOffice, setAnchorElFrontOffice] = useState(null);
//   const [anchorElMasterSettings, setAnchorElMasterSettings] = useState(null);
//   const [anchorElTechnical, setAnchorElTechnical] = useState(null);

//   const handleClickFrontOffice = (event) => setAnchorElFrontOffice(event.currentTarget);
//   const handleClickMasterSettings = (event) => setAnchorElMasterSettings(event.currentTarget);
//   const handleClickTechnical = (event) => setAnchorElTechnical(event.currentTarget);
//   const handleClose = () => {
//     setAnchorElFrontOffice(null);
//     setAnchorElMasterSettings(null);
//     setAnchorElTechnical(null);
//   };

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   useEffect(() => {
//     document.addEventListener('scroll', () => {
//       headerRef.current &&
//         headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
//     });
//   }, []);

//   return (
//     <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
//       <CContainer className="border-bottom px-4" fluid>
//         <CHeaderToggler
//           onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
//           style={{ marginInlineStart: '-14px' }}
//         >
//           <CIcon icon={cilMenu} size="lg" />
//         </CHeaderToggler>

//         {/* Material-UI Navbar Integration */}
//         <AppBar position="static">
//           <Toolbar sx={{ backgroundColor: '#bd2937' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: isMobile ? 'center' : 'flex-start',
//                 width: 'auto',
//                 gap: 3,
//                 fontSize: '0.75rem',
//                 flexDirection: isMobile ? 'column' : 'row',
//               }}
//             >
//               <Button color="inherit" onClick={handleClickFrontOffice} sx={{ textTransform: 'none', fontSize: '0.75rem' }}>
//                 Frontoffice <ExpandMore sx={{ width: '20px' }} />
//               </Button>
//               <Button color="inherit" onClick={handleClickMasterSettings} sx={{ textTransform: 'none', fontSize: '0.75rem' }}>
//                 Mastersettings <ExpandMore sx={{ width: '20px' }} />
//               </Button>
//               <Button color="inherit" onClick={handleClickTechnical} sx={{ textTransform: 'none', fontSize: '0.75rem' }}>
//                 Technical <ExpandMore sx={{ width: '20px' }} />
//               </Button>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* FrontOffice Menu */}
//         <Menu anchorEl={anchorElFrontOffice} open={Boolean(anchorElFrontOffice)} onClose={handleClose}>
//           <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>Patient Registration</MenuItem>
//           <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>Edit Demographic Details</MenuItem>
//           {/* Add more menu items as needed */}
//         </Menu>

//         {/* Additional dropdowns for MasterSettings and Technical */}
//         <Menu anchorEl={anchorElMasterSettings} open={Boolean(anchorElMasterSettings)} onClose={handleClose}>
//           <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>Settings Option 1</MenuItem>
//         </Menu>
//         <Menu anchorEl={anchorElTechnical} open={Boolean(anchorElTechnical)} onClose={handleClose}>
//           <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>Technical Option 1</MenuItem>
//         </Menu>

//       </CContainer>
//     </CHeader>
//   );
// };

// export default AppHeader;
