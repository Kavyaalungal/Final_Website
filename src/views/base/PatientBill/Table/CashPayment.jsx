import React, { useState, useEffect, useRef } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
import './CashPayment.css';
import { TextField, Grid, MenuItem, Typography, Button, Autocomplete } from '@mui/material';
import WalletIcon from '../assets/wallet.svg';
import UpiIcon from '../assets/Upi.svg';
import Corporateicon from '../assets/corporate-icon.svg';
import PropTypes from 'prop-types';
import { CreditCard as CreditCardIcon } from '@mui/icons-material';
import { usePatient } from '../../patient/PatientContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Patient from './../../patient/Patient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CashPayment = ({ visible,
    setVisible,
    totalAmount,
    refoutdr,
    labno,
    referredById,
    corporateId,
    collbyId,
    StaffCollid,
    invdlts,
    ipOpValue,
    accountHeads,
    currentDateTime,
    masters,
    shortNameList }) => {

    const [netAmount, setNetAmount] = useState(totalAmount);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [serviceCharge, setServiceCharge] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    // Ensure this is set correctly
    const [patientData, setPatientData] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const location = useLocation();
    const { opdno } = location.state || {};
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredCorporate, setFilteredCorporate] = useState([]);
    const [referredByCorporate, setReferredByCorporate] = useState('')
    const [filteredDisc, setFilteredDisc] = useState([]);
    const [discountReason, setDiscountReason] = useState('')
    const [Discreasonid, setDiscRId] = useState('')
    const [discountAmount, setDiscountAmount] = useState();

    //input from the session storage
    const BranchId = sessionStorage.getItem('selectedBranchKey')
    const YearId = sessionStorage.getItem('latestYearId' || 'selectedYrID')

    //to make the textcursor in input field after the initial value
    const inputRef = useRef(null); //useref for the input 

    const handleFocus = () => {
        setTimeout(() => {
            const input = inputRef.current;
            if (input) {
                const length = input.value.length;
                input.setSelectionRange(length, length);
            }
        }, 0);
    };

    useEffect(() => {
        if (inputRef.current && inputRef.current.value === '0') {
            inputRef.current.setSelectionRange(1, 1); // Place cursor after the '0'
        }
    },);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleDiscountChange = (event, value) => {
        if (typeof value === 'number') {
            // selected a predefined percentage from options
            const selectedDiscount = value; 
            setDiscountPercentage(selectedDiscount); 
            const calculatedDiscount = (selectedDiscount / 100) * totalAmount; 
            setDiscountAmount(calculatedDiscount); 
            calculateNetAmount(calculatedDiscount, serviceCharge); 
        } else if (event.target.value) {
            // User typed a custom value
            const inputDiscount = Number(event.target.value); // Convert input to a number
            if (!isNaN(inputDiscount)) {
                setDiscountPercentage(inputDiscount); // Update the discount percentage state
                const calculatedDiscount = (inputDiscount / 100) * totalAmount; // Calculate discount amount based on totalAmount
                setDiscountAmount(calculatedDiscount); // Update the discount amount
                calculateNetAmount(calculatedDiscount, serviceCharge); // Recalculate net amount
            }
        }
    };


    const handleDiscountAmountChange = (event) => {
        const amount = Number(event.target.value);
        const roundedAmount = parseFloat(amount.toFixed(2));
        // Update discount amount directly from input
        setDiscountAmount(roundedAmount);
        // Update discount percentage based on the amount input
        const discountPercentage = (roundedAmount / totalAmount) * 100;
        setDiscountPercentage(parseFloat(discountPercentage.toFixed(2)));
        // Recalculate the net amount
        calculateNetAmount(roundedAmount, serviceCharge);
    };

    const handleServiceChargeChange = (event) => {
        const charge = Number(event.target.value);
        const roundedCharge = parseFloat(charge.toFixed(2)); // Round service charge to 2 decimal places
        setServiceCharge(roundedCharge);
        // Recalculate net amount whenever service charge changes
        calculateNetAmount(discountAmount, roundedCharge);
    };

    const handlePaidAmountChange = (event) => {
        const amount = Number(event.target.value);
        setPaidAmount(amount);
        setBalance(amount - netAmount);
    };

    const calculateNetAmount = (discountValue, charge) => {
        // Use safe defaults to prevent NaN results
        const safeDiscountValue = typeof discountValue === 'number' ? discountValue : 0; // Default to 0
        const safeCharge = typeof charge === 'number' ? charge : 0; // Default to 0
        const safeTotalAmount = totalAmount  ? totalAmount : 0; // Default to 0
    
        const newNetAmount = safeTotalAmount - safeDiscountValue + safeCharge;
    
        // Set the net amount, rounding to 2 decimal places
        setNetAmount(parseFloat(newNetAmount.toFixed(2)));
    };
    

    useEffect(() => {
        // Recalculate net amount whenever totalAmount changes, while maintaining existing discount and service charge values
        calculateNetAmount(discountAmount, serviceCharge);
    }, [totalAmount]);


    const getCorporateBy = (input) => {
        if (!Array.isArray(accountHeads)) return [];
        return accountHeads.filter(account =>
            account.Type === 'AccHd' && account.Pname.toLowerCase().includes(input.toLowerCase())
        );
    };
    const getDiscres = (input) => {
        if (!Array.isArray(masters)) return [];
        return masters.filter(master =>
            master.MstrType === 'DiscR' && master.Desc.toLowerCase().includes(input.toLowerCase())
        )
    }
    const handleInputChange = (event, value) => {
        setFilteredCorporate(getCorporateBy(value));
        setFilteredDisc(getDiscres(value))

    };
    const handleCorporateByChange = (event, value) => {
        setReferredByCorporate(value || '');
    };
    const handleDiscreason = (event, value) => {
        const selecteddiscreason = masters.find(account => account.Desc === value);
        setDiscountReason(value || '')
        setDiscRId(selecteddiscreason ? selecteddiscreason.Mstrkey : '')
    }


    useEffect(() => {
        console.log("Current Patient Code:", opdno); // Log opdno

        const fetchPatientData = async () => {
            if (!opdno) {
                setError("No Patient_Code provided.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.post('http://172.16.16.157:8083/api/PatientMstr/PatientDetailsMaster', {
                    YearId: YearId,
                    BranchId: BranchId,
                    PatCode: opdno,
                    editFlag: true
                });

                console.log("Response from API:", response.data); // Check this log

                if (response.data && response.data.patDetails) {
                    setPatientData(response.data.patDetails);
                } else {
                    setError("No patient data found.");
                }
            } catch (err) {
                console.error("Failed to fetch patient data:", err);
                setError("Failed to fetch patient data.");
            } finally {
                setLoading(false);
            }
        };

        fetchPatientData();
    }, [opdno]);

    console.log('patientage', patientData)

    //reset form
    const resetform = () => {

        setDiscountPercentage(0);
        setDiscountAmount();
        setServiceCharge(0);
        setPaymentMethod('');
        setPaidAmount(0);
        setBalance(0);
        setDiscountReason('');
        calculateNetAmount(0)
        
        
    }

    const saveData = async () => {
        console.log('RefOutDr inside saveData:', refoutdr);
        console.log('corporteid inside saveData:', corporateId);
        console.log('refredid inside save data', referredById)
        console.log('patientage', patientData)
        console.log('labno in save', labno)
        console.log('testkey', invdlts)
        console.log('accountheads', accountHeads)
        console.log('idkey', Discreasonid)
        // Prepare the base data
        let requestData = {
            saveEditflag: false,  // true for update, false for new save
            cmpyId: patientData.Patient_CpyId,
            YrId: YearId,
            LabNo: labno,
            Date: currentDateTime,
            ReferredById: referredById,
            OutDr: refoutdr,
            CollectionModeId: collbyId,
            IP_OP: ipOpValue,
            Corporate: corporateId,
            CollectedById: StaffCollid,
            SampleOn: currentDateTime,
            "ReportTime": "2024-09-19T15:30:00",
            Discount: discountAmount,
            Total: totalAmount,
            "RepThrPersonal": true,
            "RepThrEmail": true,
            "RepThrCourier": false,
            "RepThrTelephn": false,
            "RepThrSms": true,
            "OtherRepReq": "none",
            "Note": "Urgent report required",
            "Urgent": 1,
            email: patientData.Patient_Email,
            BrId: sessionStorage.getItem(BranchId),
            Address: patientData.Patient_Address,
            PhnNo: patientData.Patient_Phno,
            Ageymd: "year",
            Age: patientData.Patient_Ageyy,
            Gender: patientData.Patient_Ismale,
            Name: patientData.Patient_Name,
            title: patientData.Patient_Title,
            pntInvId: patientData.opdno,
            pntId: patientData.opdno,
            ItemDisc: 0,
            ShortName: shortNameList,
            sercharge: serviceCharge,
            DiscrsnId: Discreasonid,
            Paymode: paymentMethod,
            RcvdAmt: paidAmount,
            BalAmt: balance,
            CurRcvdAmt: paidAmount,
            CurBalAmt: Math.abs(balance),
            NetAmt: netAmount,

            InvTestDlts: invdlts

        };

        // If it's an update, include the lab number in the request data

        try {
            const response = await axios.post('http://172.16.16.157:8083/api/LabInvoiceSaveUpdate/InvoiceMstr', requestData);
            console.log('Data saved:', response.data);
            toast.success('Saved Succesfully')
            resetform()
        } catch (error) {
            console.error('Failed to save data', error);
            toast.error('Failed to save data! Please try again.')
        }
    };

    // Function to trigger save or update
    const handleSave = () => {

        saveData();
      

        // Call the saveData function
    };



    console.log('service', serviceCharge)
    console.log('paymode', paymentMethod)
    console.log('balance', (balance))

    return (


        <CModal
            alignment="center"
            backdrop='static'
            size='sm'
            visible={visible}
            className='custom-modal-close'
            onClose={() => {
                resetform();
                setVisible(false)
            }}
            aria-labelledby="VerticallyCenteredExample"
        >
            <CModalHeader className='modalheader'>
                <CModalTitle id="VerticallyCenteredExample" className='modaltitle'>Payment</CModalTitle>
            </CModalHeader>
            <CModalBody className='custombody'>

                <Grid container spacing={1.5}>
                    {/* Net Amount Field */}
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#bd2937',
                                    fontSize: 13,
                                    textAlign: 'right',
                                    padding: '6px',
                                    marginBottom: '8px',
                                }}
                            >
                                Total Amount: {totalAmount}


                            </Typography>
                        </Grid>



                    </Grid>

                    {/* Discount Percentage Field */}
                    <Grid item xs={12} sm={4}>
                        <Autocomplete
                            freeSolo
                            options={[0, 10, 20, 30, 40, 50, 100]} // These represent percentage options
                            onChange={handleDiscountChange}
                            value={discountPercentage} // Set the current discount percentage
                            disableClearable
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    label="Disc %"
                                    onChange={handleDiscountChange} // Call handleDiscountChange on change
                                    InputLabelProps={{
                                        style: { fontSize: '0.95rem', top: '-6px', left: '1px' },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            padding: '6px',
                                            fontSize: '0.95rem',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            height: '30px',
                                        },
                                    }}
                                />
                            )}
                            sx={{
                                '& .MuiAutocomplete-input': {
                                    fontSize: '0.95rem',
                                    padding: '4px',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                            
                      
                        
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <TextField
                            id='discount'
                            label="Discount"
                            variant="outlined"
                            size="small"
                            value={discountAmount} // Use discountAmount here
                            onChange={handleDiscountAmountChange} // Add the new handler
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Service Charge Field */}
                    <Grid item xs={12}>
                        <TextField
                            inputRef={inputRef} // Step 3: Attach the ref to the input field
                            id="s.charge"
                            label="Service Charge"
                            variant="outlined"
                            size="small"
                            value={serviceCharge} // Bind your state value
                            onChange={handleServiceChargeChange} // Handle changes
                            onFocus={handleFocus} // Step 3: Move the cursor to the end on focus
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right', // Align text to the right
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Payment Method Field */}
                    <Grid item xs={12}>
                        <TextField
                            select
                            label='Payment Mode'
                            variant="outlined"
                            size="small"
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        >
                            <MenuItem value="Cash"><img src={WalletIcon} style={{ width: 25, marginRight: 5 }} alt="Wallet Icon" /> Cash</MenuItem>
                            <MenuItem value="Debit/Credit"><CreditCardIcon sx={{ mr: 1 }} /> Debit/Credit</MenuItem>
                            <MenuItem value="Credit"><img src={Corporateicon} style={{ width: 23, marginRight: 7 }} /> Credit</MenuItem>
                            <MenuItem value="BHIM/UPI Online Payment"><img src={UpiIcon} style={{ width: 25, marginRight: 5 }} alt="UPI Icon" /> BHIM/UPI Online Payment</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Bank Name Field */}
                    {(paymentMethod === 'Debit/Credit' || paymentMethod === 'BHIM/UPI Online Payment') && (
                        <Grid item xs={12}>
                            <Autocomplete
                                freeSolo
                                options={filteredCorporate.map((acc) => acc.Pname)}
                                onInputChange={handleInputChange}
                                value={referredByCorporate}
                                onChange={handleCorporateByChange}
                                componentsProps={{
                                    popper: {
                                        sx: {
                                            '& .MuiAutocomplete-listbox': {
                                                fontSize: '0.75rem'
                                            },
                                        },
                                    },
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Bank" variant="outlined" size="small" fullWidth 
                                    InputLabelProps={{
                                        style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            padding: '6px',
                                            fontSize: '0.95rem',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            height: '30px',
                                        },
                                    }}/>
                                )}
                            />
                        </Grid>
                    )}

                    {/* Corporate Field */}
                    {(paymentMethod === 'Credit') && (
                        <Grid item xs={12}>
                            <Autocomplete
                                freeSolo
                                options={filteredCorporate.map((acc) => acc.Pname)}
                                onInputChange={handleInputChange}
                                value={referredByCorporate}
                                onChange={handleCorporateByChange}
                                componentsProps={{
                                    popper: {
                                        sx: {
                                            '& .MuiAutocomplete-listbox': {
                                                fontSize: '0.75rem'
                                            },
                                        },
                                    },
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Corporate" variant="outlined" size="small" fullWidth 
                                    InputLabelProps={{
                                        style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            padding: '6px',
                                            fontSize: '0.95rem',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            height: '30px',
                                        },
                                    }}/>
                                )}
                            />
                        </Grid>
                    )}

                    {/* Paid Amount Field */}
                    <Grid item xs={12}>
                        <TextField

                            id='paidamt'
                            label="Paid Amount"
                            variant="outlined"
                            size="small"
                            value={paidAmount}
                            onChange={handlePaidAmountChange}

                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Balance Field */}
                    <Grid item xs={12}>
                        <TextField
                            id='balance'
                            label="Balance"
                            variant="outlined"
                            size="small"
                            value={balance.toFixed(2)}
                            InputProps={{ readOnly: true }}
                            fullWidth
                            InputLabelProps={{
                                style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    padding: '6px',
                                    fontSize: '0.95rem',
                                    textAlign: 'right',
                                },
                                '& .MuiOutlinedInput-root': {
                                    height: '30px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            freeSolo
                            options={filteredDisc.map((acc) => acc.Desc)}
                            onInputChange={handleInputChange}
                            value={discountReason}
                            onChange={handleDiscreason}
                            componentsProps={{
                                popper: {
                                    sx: {
                                        '& .MuiAutocomplete-listbox': {
                                            fontSize: '0.75rem'
                                        },
                                    },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="DiscR"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        ...params.InputProps,
                                        style: {
                                            height: '32px', // Adjust height
                                            padding: '0 8px', // Adjust horizontal padding
                                            lineHeight: '1.4',
                                            fontSize: '14px' // Adjust line height
                                        },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: '32px', // Adjust height
                                        },
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} direction="column" alignItems="center">
                            {/* Grid for Net Amount Label */}
                            <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#bd2937',
                                        fontSize: 16,
                                        marginRight: -5
                                    }}
                                >
                                    Net Amount
                                </Typography>
                            </Grid>

                            {/* Grid for Net Amount Value */}
                            <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 5 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#bd2937',
                                        fontSize: 30,
                                        textAlign: 'right',
                                        minWidth: '100px',
                                        marginRight: -5,
                                        marginTop: -2 // Ensure enough space for larger values
                                    }}
                                >
                                    {netAmount} {/* This is where your dynamic value would go */}
                                </Typography>
                            </Grid>
                        </Grid>

                        {/* Action Buttons */}
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px', marginRight: '-15px' }}>

                                    <Button
                                        variant="contained"
                                        // className="button"
                                        sx={{
                                            textTransform: 'none', marginRight: 1, backgroundColor: '#bb4d58',
                                            fontSize: '0.75rem', padding: '2px 10px', // Default background color
                                            '&:hover': {
                                                backgroundColor: '#bd2937', // Background color on hover
                                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                                            },
                                        }}

                                    >
                                        Print
                                    </Button>
                                    <Button
                                        variant="contained"
                                        // className="button"
                                        sx={{
                                            textTransform: 'none', marginRight: 1, backgroundColor: '#bb4d58', // Default background color
                                            fontSize: '0.75rem', padding: '4px 16px', '&:hover': {
                                                backgroundColor: '#bd2937', // Background color on hover
                                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                                            },
                                        }}

                                        onClick={handleSave}  >
                                        Save
                                       
                                    </Button>
                                    <Button
                                        variant="contained"
                                        // className="button"
                                        sx={{
                                            textTransform: 'none', marginRight: 1, backgroundColor: '#bb4d58', // Default background color
                                            fontSize: '0.75rem', padding: '4px 16px', '&:hover': {
                                                backgroundColor: '#bd2937', // Background color on hover
                                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                                            },
                                        }}

                                    >
                                        Exit
                                    </Button>

                                </div>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </CModalBody>
            <ToastContainer 
            position='top-center' autoClose={1000} hideProgressBar/>
        </CModal>
    );
};

CashPayment.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    // totalAmount: PropTypes.number.isRequired,
    labNo: PropTypes.number.isRequired
};

export default CashPayment;
