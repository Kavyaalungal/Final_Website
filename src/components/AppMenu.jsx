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
 const [anchorElReportsSub1, setAnchorElReportsSub1] = useState(null);
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
 const handleClickReportsSub1 = (event) => {
     setAnchorElReportsSub1(event.currentTarget);
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
     setAnchorElSampleFlow(null)
     setAnchorElTechnical(null);
     setAnchorElAccount(null);
     setAnchorElMasterSettings(null);
     setAnchorElReports(null)
     setAnchorElMarketing(null);
     setAnchorElAdministrator(null);
     setAnchorElHelp(null);
     setAnchorElReportsSub1(null);
     setAnchorElFrontOfficeSub(null);
     setAnchorElMasterSettingsSub(null);
     setAnchorElTechnicalSub(null);
    
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
        flexDirection: isMobile ? 'column' : 'row', 
        // Stack buttons vertically on mobile
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
        width: '35ch',
        // maxHeight: '400px', // Limit height to avoid overflowing
        overflowY: 'scroll',  // Enable scrolling
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    },
}}
sx={{
  '&& .MuiMenu-paper': {
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
    },
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
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Result Register
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Test Wise Register
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
        Batch wise Second Level Authorization
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Email/Whatsapp Queue
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Email Radiology Report
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Pending Test
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Pending Bills Test Wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Whatsapp Files
    </MenuItem>
</Menu>
{/*Accounts Menu */}

<Menu
  anchorEl={anchorElAccount}
  open={Boolean(anchorElAccount)}
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
        Account Ledger
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cash Payments
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Cash Reciepts
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Day book
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Journal
    </MenuItem>
    {/* <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Bank Payment
    </MenuItem> */}
    {/* <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Bank Reciept
    </MenuItem> */}
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Cheque issue
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Cheque Reciept
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cheque Transaction
    </MenuItem>
    {/* <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cash Posting
    </MenuItem> */}
    {/* <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Bank Invoice Posting
    </MenuItem> */}
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    BHIM/UPI Receival(Bill Wise)
    </MenuItem>
    {/* <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Bank Invoice  Remove
    </MenuItem> */}
   </Menu>


   {/*MasterSettings Menu */}
   <Menu
  anchorEl={anchorElMasterSettings}
  open={Boolean(anchorElMasterSettings)}
  onClose={handleClose}
  PaperProps={{
    style: {
        height: 'auto',
        width: '27ch',
        // maxHeight: '400px', // Limit height to avoid overflowing
        overflowY: 'scroll',  // Enable scrolling
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    },
}}
sx={{
  '&& .MuiMenu-paper': {
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
    },
  },

  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Doctor's Leave
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Hospital
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Agent
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Patient
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Employee
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Antibiotic
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Look up Entry
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       FeeMaster
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Appointment Session
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Set Group Test
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Set Batch Wise Tests
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Customize1
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Set Customize2
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Customize3
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Customize4
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Culture
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Test Order
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Head Staff group
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Antibiotic Order
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Special Rate
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Discount %
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Result Template
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Contacts
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Monthly Planner
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Event Scheduler
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Doctors Payments
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Assign Study To Doctor
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Branch
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Analyzer
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Corporate
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Analyzer Normal Range
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
      Set Branch wise Normal Range
    </MenuItem>
   </Menu>

{/*Reports Menu */}
<Menu
  anchorEl={anchorElReports}
  open={Boolean(anchorElReports)}
  onClose={handleClose}
  PaperProps={{
      style: {
          height: 'auto',
          width: '28ch',
      },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClickReportsSub1} sx={{ fontSize: '0.75rem' }}>
        Daily Periodic Collection Statements
        <ChevronRight sx={{ width: '15px', marginLeft: 1 }} />
    </MenuItem>
    
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Credit Collection Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Cash Due/Pending Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Technical Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Doctor/Ref.By Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Test Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Master Values
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Accounts
    </MenuItem>
    {/*Reports SubMenu1*/}
    <Menu
        anchorEl={anchorElReportsSub1}
        open={Boolean(anchorElReportsSub1)}
        onClose={handleClose}
        PaperProps={{
            style: {
                height: 'auto',
                width: '35ch',
                // maxHeight: '400px', // Limit height to avoid overflowing
                overflowY: 'scroll',  // Enable scrolling
                scrollbarWidth: 'none', // Hide scrollbar for Firefox
                msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
            },
        }}
        sx={{
          '&& .MuiMenu-paper': {
            '&::-webkit-scrollbar': {
              display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
            },
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
            Daily Collection Statement
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Daily/Monthly Collection Summary
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Daily Collection Summary2
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Collection Statement Branch Wise
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Collection Summary Branch Wise
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Daily Cash Invoice
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Patient ID Wise Bill Collection
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Monthly Collection Division Summary
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Monthly Collection Summary BranchWise
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            User Wise Collection
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
             User Wise Collection Summary
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
             Patient Wise Invoices
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
            Division Wise Invoices
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Division Wise Invoices2
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Division Wise Summary
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Division Summary3
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Branch wise Invoices
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Cancelled Invoices
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Doctors Meeting
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Department Wise Invoices
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Division Wise Performance
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Refund statements
        </MenuItem>
    </Menu>
   </Menu>

{/*Marketing Menu */}
<Menu
  anchorEl={anchorElMarketing}
  open={Boolean(anchorElMarketing)}
  onClose={handleClose}
  PaperProps={{
    style: {
        height: 'auto',
        width: '27ch',
        // maxHeight: '400px', // Limit height to avoid overflowing
        overflowY: 'scroll',  // Enable scrolling
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    },
}}
sx={{
  '&& .MuiMenu-paper': {
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
    },
  },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        PRO Hospital wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        PRO Specialized wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Doctors List (No Business)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Doctor Wise Monthly Summary
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Monthly Incentive Statements
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Set Dr Incentive
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Set Dr Payments Test Wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Monthly Incentive
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Doctor Payments
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Monthly Incentive(DateWise)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Monthly Doctor Wise Incentive
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Pro Wise Graph
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        PRO Wise Income
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Collection Boy Wise Graph
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Collection Boy Wise Income 
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       OP Wise Graph(no Refered)
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Client Lab Graph
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Client Lab Income
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       PRO Performance Invoice Wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       PRO Performance Division Wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       PRO Daily Report
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Total Summary Test Wise
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Doctor Comparison
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Doctor Graph
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Doctor Batch Wise Incentive
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Patient Data
    </MenuItem>
   </Menu>
 {/*Administrator Menu*/}
 <Menu
  anchorEl={anchorElAdministrator}
  open={Boolean(anchorElAdministrator)}
  onClose={handleClose}
  PaperProps={{
    style: {
        height: 'auto',
        width: '27ch',
        // maxHeight: '400px', // Limit height to avoid overflowing
        overflowY: 'scroll',  // Enable scrolling
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    },
}}
sx={{
  '&& .MuiMenu-paper': {
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
    },
  },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        User Settings
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        User Logins
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Edited Invoice
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    User Track Report
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Edit Discount
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Email Configuration
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Create New Financial Year
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Settings
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Account Settings
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Restore Database
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Remove Barcode Data
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
    Agent Wise Incentive
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Agent Wise Incentive 2
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Convert Invoice
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Merge Accounts 
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Corporate Web Register
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Result Letter Head
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Set Customize2 Default Template
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Opening balance Set
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Integrity Check
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Bill wise Remove
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Whats New
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
       Hospital Wise Collection
    </MenuItem>

   </Menu>

   <Menu
  anchorEl={anchorElHelp}
  open={Boolean(anchorElHelp)}
  onClose={handleClose}
  PaperProps={{
    style: {
        height: 'auto',
        width: '22ch',
        // maxHeight: '400px', // Limit height to avoid overflowing
        overflowY: 'scroll',  // Enable scrolling
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    },
}}
sx={{
  '&& .MuiMenu-paper': {
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Edge
    },
  },
  }}
  onMouseLeave={handleClose} // Hide on mouse leave
>


    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        About Us
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        Help
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
        Settings
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem', }}>
    Barcode
    </MenuItem>
</Menu>
{/* MasterSettings Menu */}
{/* <Menu
    anchorEl={anchorElMasterSettings}
    open={Boolean(anchorElMasterSettings)}
    onClose={handleClose}
    PaperProps={{
        style: {
            height: 'auto',
            width: '22ch',
        },
    }}
    onMouseLeave={handleClose}
>
    <MenuItem onClick={handleClickMasterSettingsSub} sx={{ fontSize: '0.75rem' }}>
        MasterSettings Sub
        <ChevronRight sx={{ width: '15px', marginLeft: 4 }} />
    </MenuItem>
    <MenuItem onClick={handleClose} sx={{ fontSize: '0.75rem' }}>
        MasterSettings Item 2
    </MenuItem>

   
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
</Menu> */}

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