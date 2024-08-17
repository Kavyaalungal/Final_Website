import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
import './main.css'

import { Grid } from '@mui/material';

import PatientDetails from '../PatientDetails/Patientdetails';
import Pendingpayment from '../PendingPay/Pendingpayment';
import Allpending from '../AllPending/Allpending';


function Pending() {
    const [visibleXL, setVisibleXL] = useState(false);

    return (
        <>
            {/* <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
                Large modal
            </CButton> */}
            {/* <CModal
                size='xl'
                visible={visibleXL}
                onClose={() => setVisibleXL(false)}
                aria-labelledby="OptionalSizesExample2"
                backdrop="static" // Prevents closing the modal when clicking outside
                scrollable // Allows scrolling within the modal if content overflows
                className="custom-modal-width"

            >
                <CModalHeader
                    className='cheader'
                    style={{ backgroundColor: '#BD2937', color: 'white', paddingBottom: 3, height: 40 }}
                >
                    <CModalTitle id="OptionalSizesExample2" style={{ paddingBottom: 10, fontSize: '1rem' }}>
                     Pending collection
                    </CModalTitle>
                </CModalHeader>
                <CModalBody className="modal-body-scroll" style={{ backgroundColor: '#FEEAEB' }}> */}
                    <Grid container sx={{ marginTop: -1.3, }} spacing={1}>
                        <Grid item xs={12} sm={3}>
                         {/* <Labno/> */} <PatientDetails/>
                         {/* <Grid item marginTop={1}>
                        
                         </Grid> */}
                         </Grid>
                        
                        <Grid item xs={12} sm={9} >
                   <Pendingpayment/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} >
                            <Allpending/>
                        </Grid>
                    </Grid>
                {/* </CModalBody>
            </CModal> */}
        </>
    );
}

export default  Pending;
