import React, { useState } from 'react';
import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CBadge, CNavGroup, CCollapse,  } from '@coreui/react';
import Patient from '../views/base/patient/Patient';
import CIcon from '@coreui/icons-react';
import { cilBackspace, cilSpeedometer, cilGroup, cilSpreadsheet, cilBarcode,cilCalculator,cilCash } from '@coreui/icons';
import './NavigationWithModals.css';
import Cancel from '../views/base/Cancelinvoice/MainModel/Mainmode';
import Pending from '../views/base/PendingCollection/Main/Main';
import { useNavigate } from 'react-router-dom';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Link } from 'react-router-dom';
import useModal from './UseModal';

const NavigationWithModals = () => {
  const { modal, modalContent, modalTitle, modalSize, toggleModal, closeModal } = useModal();
  // const [modal, setModal] = useState(false);
  // const [modalContent, setModalContent] = useState(null);
  // const [modalTitle, setModalTitle] = useState('');
  // const [modalSize, setModalSize] = useState('xl'); 
  // const [isNavGroupOpen, setIsNavGroupOpen] = useState(false); 
   const navigate = useNavigate();
  // const closeModal = () => setModal(false);

  // const toggleModal = (title, content, size = 'xl') => {
  //   setModalTitle(title);
  //   setModalContent(content);
  //   setModalSize(size);
  //   setModal(true);
  // };

  // const toggleNavGroup = () => {
  //   setIsNavGroupOpen(!isNavGroupOpen);
  // };

  return (
    <>
      <div className='custom-nav-container'>
        <CNavItem className="custom-nav-item">
          <CNavLink className="custom-nav-link">
            <CIcon icon={cilSpeedometer} className="me-2" /> Dashboard
            {/* <CBadge color="info" className="ms-2">NEW</CBadge> */}
          </CNavLink>
        </CNavItem>
     
        <CNavItem className="custom-nav-item">
          <CNavLink className="custom-nav-link" onClick={() => toggleModal('Patient Registration', <Patient closeModal={closeModal} />,'lg')}>
            <CIcon icon={cilGroup} className="me-2" /> Patient Registration
          </CNavLink>
        </CNavItem>
        <CNavItem className="custom-nav-item">
      <CNavLink className="custom-nav-link" onClick={() => navigate('/invoice')}>
      <CIcon icon={cilBackspace} className="me-2"  />
      Lab  Invoice View
      </CNavLink>
    </CNavItem>
    <CNavItem className="custom-nav-item">
      <CNavLink className="custom-nav-link" >
        <CIcon icon={cilBarcode}  className="me-2" />  Barcode/Labeling
      </CNavLink>
    </CNavItem>
    <CNavItem className="custom-nav-item">
      <CNavLink className="custom-nav-link" >
        <CIcon icon={cilCash} className="me-2" />  Pending Collection
      </CNavLink>
    </CNavItem>
    <CNavItem className="custom-nav-item">
      <CNavLink className="custom-nav-link" onClick={() => navigate('/invoice')}>
        <CIcon icon={cilBackspace} className="me-2" />  Result Releasing
      </CNavLink>
    </CNavItem>

        {/* <CNavItem className="custom-nav-item">
          <CNavLink className="custom-nav-link" onClick={() => toggleModal('Cancel Invoice', <Cancel />, 'lg')}>
            <CIcon icon={cilBackspace} className="me-2" /> Cancel Invoice
          </CNavLink>
        </CNavItem> */}
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilCash} className='me-2' /> Pending Collection
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link' >
            <CIcon icon={cilSpreadsheet} className='me-2' /> Payments
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link' >
            <CIcon icon={cilSpreadsheet} className='me-2' /> Cash Closing
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link' >
            <CIcon icon={cilCalculator} className='me-2' /> Calculator
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Appointment
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Chat/Alerts
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Home Collection
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Email List
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Alarm
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> About Us
          </CNavLink>
        </CNavItem>
        <CNavItem className='custom-nav-item'>
          <CNavLink className='custom-nav-link'>
            <CIcon icon={cilSpreadsheet} className='me-2' /> Exit
          </CNavLink>
        </CNavItem>

        {/* CNavGroup for expandable/collapsible section */}
        {/* <CNavGroup style={{listStyleType:'none'}}
          toggler={
            <div className="d-flex justify-content-between align-items-center w-100 custom-nav-link"
             onClick={toggleNavGroup}
             style={{ fontSize: '1.25rem',listStyleType:'none' }} >
              <span>
                <CIcon icon={cilPuzzle} className="me-2" /> More Options
              </span>
              {isNavGroupOpen ? (
          <ExpandLessOutlinedIcon style={{ fontSize: '24px' }} />
        ) : (
          <ExpandMoreOutlinedIcon style={{ fontSize: '24px' }} />
        )}
             
            </div>
          }
        >
          <CCollapse visible={isNavGroupOpen}>
          <CNavItem className="custom-nav-item">
          <CNavLink className="custom-nav-link" onClick={() => toggleModal('Patient Registration', <Patient closeModal={closeModal} />)}>
            <CIcon icon={cilGroup} className="me-2" /> Patient Registration
          </CNavLink>
        </CNavItem>
            <CNavItem className="custom-nav-item">
              <CNavLink className="custom-nav-link" onClick={() => toggleModal('Dropdown Item 2', <div>Content for Dropdown Item 2</div>)}>Dropdown Item 2</CNavLink>
            </CNavItem>
          </CCollapse>
        </CNavGroup> */}

        <CModal visible={modal} onClose={closeModal} 
                size={modalSize}
                centered 
                className='modal custom-modal-close custom-modal-width custom-centered-modal'
                backdrop='static'
                // scrollable
                aria-labelledby="OptionalSizesExample2"
               >
          <CModalHeader className='custom-modal-header'>
            <CModalTitle className='custom-modal-title'>{modalTitle}</CModalTitle>
          </CModalHeader>
          <CModalBody className='c-modal-body no-scroll ' style={{zoom:'0.8'}}>
            {modalContent}
          </CModalBody>
        </CModal>
      </div>
    </>
  );
};

export default NavigationWithModals;
