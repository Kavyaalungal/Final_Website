import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, useMediaQuery, useTheme ,} from '@mui/material';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

function AppMenu() {
    const dispatch = useDispatch();
    // State for main menus
 const [anchorElFrontOffice, setAnchorElFrontOffice] = useState(null);
 const[anchorElSampleFlow,setAnchorElSampleFlow] = useState(null)
 const [anchorElTechnical, setAnchorElTechnical] = useState(null);
 const[anchorElAccount,setAnchorElAccount] =useState(null)
 const [anchorElMasterSettings, setAnchorElMasterSettings] = useState(null);
 const [anchorElReports, setAnchorElReports] = useState(null);
 const [anchorElMarketing, setAnchorElMarketing] = useState(null);
 const [anchorElAdministrator, setAnchorElAdministrator] = useState(null);
 const [anchorElHelp, setAnchorElHelp] = useState(null);


 // State for submenus
 const [anchorElFrontOfficeSub, setAnchorElFrontOfficeSub] = useState(null);
 const [anchorElMasterSettingsSub, setAnchorElMasterSettingsSub] = useState(null);
 const [anchorElTechnicalSub, setAnchorElTechnicalSub] = useState(null);

 // Handlers to open menus on click
 const handleClickFrontOffice = (event) => {
     setAnchorElFrontOffice(event.currentTarget);
 };
 const handleClickSampleFlow = (event) => {
    setAnchorElSampleFlow(event.currentTarget);
};
const handleClickTechnical = (event) => {
    setAnchorElTechnical(event.currentTarget);
};
const handleClickAccounts = (event) => {
    setAnchorElAccount(event.currentTarget);
};

 const handleClickMasterSettings = (event) => {
     setAnchorElMasterSettings(event.currentTarget);
 };

 const handleClickReports = (event) => {
    setAnchorElReports(event.currentTarget);
};
const handleClickMarketing = (event) => {
    setAnchorElMarketing(event.currentTarget);
};

const handleClickAdministrator = (event) => {
    setAnchorElAdministrator(event.currentTarget);
};
const handleClickHelp = (event) => {
    setAnchorElHelp(event.currentTarget);
};



 // Handlers to open submenus on click
 const handleClickFrontOfficeSub = (event) => {
     setAnchorElFrontOfficeSub(event.currentTarget);
 };

 const handleClickMasterSettingsSub = (event) => {
     setAnchorElMasterSettingsSub(event.currentTarget);
 };

 const handleClickTechnicalSub = (event) => {
     setAnchorElTechnicalSub(event.currentTarget);
 };
 


 // Handlers to close menus
 const handleClose = () => {
     setAnchorElFrontOffice(null);
     setAnchorElMasterSettings(null);
     setAnchorElTechnical(null);
     setAnchorElFrontOfficeSub(null);
     setAnchorElMasterSettingsSub(null);
     setAnchorElTechnicalSub(null);
     setAnchorElSampleFlow(null)
 };

 // Responsive adjustments using MUI's useMediaQuery
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust for small screens
//  const handleMenuClick = () => {
//     if (isMobile) {
//       dispatch({ type: 'set', sidebarShow: false }); // Close sidebar on mobile
//     }
//     handleClose(); // Close menu
//   };

 

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])
  return (
    <>
    <Box
    sx={{
      
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start', // Center on mobile
        width: 'auto',
        gap: 1,
        fontSize: '0.75rem',
        flexDirection: isMobile ? 'column' : 'row', // Stack buttons vertically on mobile
    }}
>
    {/* <Button
        color="inherit"
        onClick={handleClickFrontOffice}
        onMouseEnter={(e) => handleClickFrontOffice(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Frontoffice
        <ExpandMore sx={{ width: '20px' }} />
    </Button> */}
      <Button
        color="inherit"
        onClick={handleClickFrontOffice}
        onMouseEnter={(e) => handleClickFrontOffice(e)} 
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
       Front Office
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickSampleFlow}
        onMouseEnter={(e) => handleClickSampleFlow(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
       Sample Flow
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickTechnical}
        onMouseEnter={(e) => handleClickTechnical(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Technical
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickAccounts}
        onMouseEnter={(e) => handleClickAccounts(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Accounts
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickMasterSettings}
        onMouseEnter={(e) => handleClickMasterSettings(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
         Mastersettings
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickReports}
        onMouseEnter={(e) => handleClickReports(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Reports
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickMarketing}
        onMouseEnter={(e) => handleClickMarketing(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Marketing
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickAdministrator}
        onMouseEnter={(e) => handleClickAdministrator(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Administrator
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
    <Button
        color="inherit"
        onClick={handleClickHelp}
        onMouseEnter={(e) => handleClickHelp(e)} // Show on hover
        sx={{ textTransform: 'none', fontSize: '1rem' }}
    >
        Help
        <ExpandMore sx={{ width: '20px' }} />
    </Button>
</Box>

{/* FrontOffice Menu */}
<Menu
  anchorEl={anchorElFrontOffice}
  open={Boolean(anchorElFrontOffice)}
  onClose={handleClose}
  PaperProps={{
      style: {
          height: 'auto',
          width: '29ch',
      },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>
<MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Patient Registration
    </MenuItem>

<MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Edit Demographic Details
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Pending Collection
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Corporate Pending Collection(Cash bills)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cash Closing
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Report Dispatching
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cancel Invoice
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Bill Wise Collection
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Home Collection Booking Area
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Scan Booking
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Envelop  
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        PatientView
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Accept Corporate Bill Queue
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Result Delivery Status
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Bulk Corporate Registration
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        UPI Verification
    </MenuItem>
 
</Menu>

{/* Sample Flow */}
<Menu
  anchorEl={anchorElSampleFlow}
  open={Boolean(anchorElSampleFlow)}
  onClose={handleClose}
  PaperProps={{
      style: {
          height: 'auto',
          width: '27ch',
      },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Barcode Generation
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Biochemistry Sample Receiving
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Haemetology Sample Receiving
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Microbiology Sample Receiving
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Clinical Pathology Sample Receiving
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Sample Tracking
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Sample Rejection
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Sample Receiving
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Sample Handover Receiving Queue
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Sample Handover TAT
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Sample Branch Verification
    </MenuItem>
 
</Menu>
{/* Technical Menu */}
<Menu
  anchorEl={anchorElTechnical}
  open={Boolean(anchorElTechnical)}
  onClose={handleClose}
  PaperProps={{
      style: {
          height: 'auto',
          width: '27ch',
      },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Result Issueing
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Referal Lab Management
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        TAT out Explanation
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    ECHO Report
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Work Register(Test Wise)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Work Register(Bill Wise)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
     Work Order
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        SRF NO Generator
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Attach Document
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Scan Queue Management
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Us Scan/X-Ray/Ecg/Mammography management
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        First Level Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Second Authorization Queue
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Batch wise Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Remove Authorization
    </MenuItem>
</Menu>



{/* MasterSettings Menu */}
<Menu
    anchorEl={anchorElMasterSettings}
    open={Boolean(anchorElMasterSettings)}
    onClose={handleClose}
    PaperProps={{
        style: {
            height: 'auto',
            width: '22ch',
        },
    }}
    onMouseLeave={handleClose} // Hide on mouse leave
>
    <MenuItem onClick={handleClickMasterSettingsSub} sx={{ fontSize: '0.75rem' }}>
        MasterSettings Sub
        <ChevronRight sx={{ width: '15px', marginLeft: 4 }} />
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        MasterSettings Item 2
    </MenuItem>

    {/* Submenu for MasterSettings */}
    <Menu
        anchorEl={anchorElMasterSettingsSub}
        open={Boolean(anchorElMasterSettingsSub)}
        onClose={handleClose}
        PaperProps={{
            style: {
                height: 'auto',
                width: '22ch',
            },
        }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Submenu Item 1
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Submenu Item 2
        </MenuItem>
    </Menu>
</Menu>

{/* Technical Menu */}
{/* <Menu
    anchorEl={anchorElTechnical}
    open={Boolean(anchorElTechnical)}
    onClose={handleClose}
    PaperProps={{
        style: {
            height: 'auto',
            width: '22ch',
        },
    }}
    onMouseLeave={handleClose} 
>
    <MenuItem onClick={handleClickTechnicalSub} sx={{ fontSize: '0.75rem' }}>
        Technical Submenu
        <ChevronRight sx={{ width: '15px', marginLeft: 4 }} />
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Technical Item 2
    </MenuItem>

 
    <Menu
        anchorEl={anchorElTechnicalSub}
        open={Boolean(anchorElTechnicalSub)}
        onClose={handleClose}
        PaperProps={{
            style: {
                height: 'auto',
                width: '22ch',
            },
        }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Submenu Item 1
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Submenu Item 2
        </MenuItem>
    </Menu>
</Menu> */}
</>
  )
}

export default AppMenu