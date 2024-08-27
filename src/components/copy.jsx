// import React, { useState } from 'react';
// import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CBadge } from '@coreui/react';
// import CIcon from '@coreui/icons-react';
// import { cilBackspace, cilSpeedometer, cilGroup, cilSpreadsheet } from '@coreui/icons';
// import Register from '../views/base/patient/Register';
// import './NavigationWithModals.css'; // Import your custom CSS file

// const NavigationWithModals = () => {
//   const [modal, setModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [modalTitle, setModalTitle] = useState('');
//   const [modalSize, setModalSize] = useState('xl'); // Default size

//   const closeModal = () => setModal(false);

//   // Function to set modal content and open the modal
//   const openModalWithContent = (title, content, size = 'xl') => {
//     setModalTitle(title);
//     setModalContent(content);
//     setModalSize(size);
//     setModal(true);
//   };

//   return (
//     <>
//       <div className='custom-nav-container'>
//         <CNavItem className="custom-nav-item">
//           <CNavLink className="custom-nav-link" onClick={() => openModalWithContent('Patient Registration', <Register closeModal={closeModal} />)}>
//             <CIcon icon={cilGroup} className="me-2" /> Patient Registration
//           </CNavLink>
//         </CNavItem>
//         <CNavItem className="custom-nav-item">
//           <CNavLink className="custom-nav-link" onClick={() => openModalWithContent('Cancel Invoice', <div>Cancel Invoice Content</div>, 'lg')}>
//             <CIcon icon={cilBackspace} className="me-2" /> Cancel Invoice
//           </CNavLink>
//         </CNavItem>
//         <CNavItem className='custom-nav-item'>
//           <CNavLink className='custom-nav-link' onClick={() => openModalWithContent('Pending Collection', <div>Pending Collection Content</div>)}>
//             <CIcon icon={cilSpreadsheet} className='me-2'/>Pending Collection
//           </CNavLink>
//         </CNavItem>
//         <CModal visible={modal} onClose={() => setModal(false)} 
//                   size={modalSize}
//                   centered 
//                   className='modal custom-modal-close custom-modal-width custom-centered-modal'
//                   backdrop='static'
//                   scrollable
//                   aria-labelledby="OptionalSizesExample2">
//           <CModalHeader className='custom-modal-header'>
//             <CModalTitle className='custom-modal-title'>{modalTitle}</CModalTitle>
//           </CModalHeader>
//           <CModalBody className='c-modal-body no-scroll'>
//             {modalContent}
//           </CModalBody>
//         </CModal>
//       </div>
//     </>
//   );
// };

// export default NavigationWithModals;



import React, { useState } from 'react';
import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CBadge , CCloseButton  } from '@coreui/react';
import Patient from '../views/base/patient/Patient';
import CIcon from '@coreui/icons-react';
import { cilBackspace,cilSpeedometer,cilGroup,cilPencil,cilBank,cilBarcode,cilNotes, cilCash,cilCopy,cilAddressBook,cilSpreadsheet,cilMoney } from '@coreui/icons';
import Cancelinvoice from '../views/base/cancel/Cancelinvoice';
import './NavigationWithModals.css'; // Import your custom CSS file
import Dashboard from '../views/dashboard/Dashboard';
import EditInvoice from '../views/theme/editinvoice/EditInvoice';
import Account from '../views/base/account/Account';
import Bill from '../views/base/billwise/Bill'
import PatientBill from '../views/base/patientviews/PatientBill';
import PendingCollection from '../views/theme/pendingcollection/PendingCollection';
import Cashpayment from '../views/base/cashpayment/Cashpayment';
import CashReceipt from '../views/base/receipt/CashReceipt';
import ReportDispatch from '../views/base/reportdispatch/ReportDispatch';
import BillWisePending from '../views/base/billwisepending/BillWisePending';
import CashClosing from '../views/base/cashclosing/CashClosing';
import BillwiseArea from '../views/base/billwise/BillwiseArea';
import Home from '../views/base/homecollection/Home'
import ScanQueue from '../views/base/scanqueue/ScanQueue';
import BasicForm from '../views/base/basicfrom/BasicForm';

import Cancel from '../views/base/Cancelinvoice/MainModel/Mainmode';
import Pendingpayment from '../views/base/PendingCollection/PendingPay/Pendingpayment';
import Pending from '../views/base/PendingCollection/Main/Main';
import Buttons from '../views/base/patient/Buttons';
import Register from '../views/base/patient/Register';

const NavigationWithModals = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSize, setModalSize] = useState('xl'); // Default size
  const closeModal = () => setModal(false);
  // const toggleModal = (title, content,size = 'xl') => {
   
  //   setModalTitle(title);
  //   setModalContent(content);
  //   setModalSize(size);
  //   setModal(!modal);
  // };
  const toggleModal = (title, content, size = 'xl') => {
    // Ensure Buttons receives closeModal and other props
    setModalTitle(title);
    setModalContent(
      <>
        {content}
        <Register closeModal={closeModal} />
      </>
    );
    setModalSize(size);
    setModal(true);
  };
  return (
    <>
    <div className=' custom-nav-container' >
    <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link">
          <CIcon icon={cilSpeedometer} className="me-2" /> Dashboard
          <CBadge color="info" className="ms-2">NEW</CBadge>
        </CNavLink>
      </CNavItem>
      <CNavItem className="custom-nav-item">
      <CNavLink className="custom-nav-link" onClick={() => toggleModal('Patient Registration', <Patient closeModal={() => setModal(false)} />)}>
  <CIcon icon={cilGroup} className="me-2" /> Patient Registration
</CNavLink>

      </CNavItem>
      <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link" onClick={() => toggleModal('Cancel Invoice', <Cancel />,'lg')}>
          <CIcon icon={cilBackspace} className="me-2" /> Cancel Invoice
        </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
        <CNavLink className='custom-nav-link' onClick={()=> toggleModal('Pending Collection',<Pending/>,)}>
        <CIcon icon={cilSpreadsheet} className='me-2'/>Pending Collection
        </CNavLink>
      </CNavItem>
    <CModal visible={modal} onClose={() => setModal(false)} 
              size={modalSize}
              centered 
              className='modal custom-modal-close custom-modal-width custom-centered-modal'
              backdrop='static'
              scrollable
              aria-labelledby="OptionalSizesExample2">
        <CModalHeader className='custom-modal-header'>
          <CModalTitle className='custom-modal-title '>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody className='c-modal-body no-scroll'  >
          {modalContent}
        </CModalBody>
       
      </CModal>
      </div>
    </>
  );
};

export default NavigationWithModals;
