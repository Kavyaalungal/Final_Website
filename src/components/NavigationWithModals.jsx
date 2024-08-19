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

const NavigationWithModals = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSize, setModalSize] = useState('xl'); // Default size

  const toggleModal = (title, content,size = 'xl') => {
    setModalTitle(title);
    setModalContent(content);
    setModalSize(size);
    setModal(!modal);
  };

  return (
    <>
    <div className=' custom-nav-container'>
    <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link">
          <CIcon icon={cilSpeedometer} className="me-2" /> Dashboard
          <CBadge color="info" className="ms-2">NEW</CBadge>
        </CNavLink>
      </CNavItem>
      <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link" onClick={() => toggleModal('Patient Registration', <Patient />,)}>
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
              // visible={visibleLg}
              // onClose={() => setVisibleLg(false)}
              className='modal custom-modal-close'
              backdrop='static'
              scrollable
              aria-labelledby="OptionalSizesExample2">
        <CModalHeader className='custom-modal-header'>
          <CModalTitle className='custom-modal-title '>{modalTitle}</CModalTitle>
          {/* <CCloseButton onClick={() => setVisibleXL(false)} /> */}
        </CModalHeader>
        <CModalBody className='c-modal-body no-scroll' >
          {modalContent}
        </CModalBody>
        {/* <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>Close</CButton>
        </CModalFooter> */}
      </CModal>
      </div>
    </>
  );
};

export default NavigationWithModals;
