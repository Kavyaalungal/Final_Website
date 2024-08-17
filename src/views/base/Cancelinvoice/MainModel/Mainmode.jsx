import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/coreui-pro/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
import './main.css'
import PatientDetails from '../PatientDetails/PatientDet';
import { Grid } from '@mui/material';
import Labno from '../Labno/Labno';
import Note from '../Labno/Note';

function Cancel() {
    const [visibleXL, setVisibleXL] = useState(false);

    return (
        <>
            {/* <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
                Large modal
            </CButton> */}
            {/* <CModal
                size='lg'
                visible={visibleXL}
                onClose={() => setVisibleXL(false)}
                aria-labelledby="OptionalSizesExample2"
                backdrop="static" // Prevents closing the modal when clicking outside
                scrollable // Allows scrolling within the modal if content overflows
                className="custom-modal-width"

            > */}
                {/* <CModalHeader
                    className='cheader'
                    style={{ backgroundColor: '#BD2937', color: 'white', paddingBottom: 3, height: 40 }}
                > 
                    <CModalTitle id="OptionalSizesExample2" style={{ paddingBottom: 10, fontSize: '1rem' }}>
                     Cancel Invoice
                    </CModalTitle>
                </CModalHeader>
                <CModalBody className="modal-body-scroll" style={{ backgroundColor: '#FEEAEB' }}> */}
                    <Grid container sx={{ marginTop: -2.5, }} spacing={1.5}>
                        <Grid item xs={12} sm={5}>

                            <PatientDetails />
                        </Grid>


                        <Grid item xs={12} sm={7} >
                            <Labno />

                        <Grid >
                            <Note />
                        </Grid>
                        
                        </Grid>
                    </Grid>
                {/* </CModalBody>
            </CModal> */}
        </>
    );
}

export default Cancel;
