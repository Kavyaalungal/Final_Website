import React, { useState, useEffect, useRef } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react';
import './CashPayment.css';
import { TextField, Grid, MenuItem, Typography, Button, Autocomplete } from '@mui/material';
import UpiIcon from '../../../../assets/images/upi symbol.svg';
import Debit from '../../../../assets/images/debit & credit symbol.svg'
import Credit from '../../../../assets/images/credit icon.svg'
import PropTypes from 'prop-types';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoCash from '../../../../assets/images/cash svg.svg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PrintPopup from './PrintPopUp';
import config from '../../../../Config';


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
    shortNameList,
    resetTable,
    defaultId,
    defaultColl,
    urgentvalue ,
    status,
    completionDate}) => {
    const [openPopup, setOpenPopup] = useState(false);
    const [invno, setInvno] = useState(null);
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
    const[pending,setPending]= useState(0)
  

    //to make the textcursor in input field after the initial value
    const inputRef = useRef(null); //useref for the input 
    useEffect(() => {
        if (balance !== null && balance !== undefined && balance !== 0) {
          setPending(1); 
        }
      }, [balance]);
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
        const safeTotalAmount = totalAmount ? totalAmount : 0; // Default to 0

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
                const response = await axios.post(`${config.public_apiUrl}/PatientMstr/PatientDetailsMaster`, {
                    YearId: config.public_yearId,
                    BranchId: config.public_branchId,
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
        resetTable()


    }      
     console.log('patdata',patientData)
    
     console.log('ipopno out save',ipOpValue)
     console.log('collbyid',collbyId)
     console.log('corporateid',corporateId)
     console.log('urgentvalue',urgentvalue)
    const saveData = async () => {
    
        console.log('ipopno inside save',ipOpValue)
        console.log('cid inside save',corporateId)
        // Prepare the base data
        let requestData = {
            saveEditflag: false,  // true for update, false for new save
            cmpyId: patientData.Patient_CpyId,
            YrId: config.public_yearId,
            LabNo: labno,
            Date: currentDateTime,
            ReferredById: referredById,
            OutDr: refoutdr,
            CollectionModeId: collbyId ||defaultId,
            IP_OP: ipOpValue,
            CorporateId: corporateId,
            CollectedById: StaffCollid,
            SampleOn: currentDateTime,
            ReportTime:  completionDate,
            Discount: discountAmount,
            Total: totalAmount,
            "RepThrPersonal": true,
            "RepThrEmail": true,
            "RepThrCourier": false,
            "RepThrTelephn": false,
            "RepThrSms": true,
            "OtherRepReq": "none",
            "Note": "Urgent report required",
            Status : status,
            IsUrgent : urgentvalue,
            email: patientData.Patient_Email,
            BrId: config.public_branchId,
            Address: patientData.Patient_Address,
            PhnNo: patientData.Patient_Phno,
            Ageymd: "year",
            Age: patientData.Patient_Ageyy,
            Gender: patientData.Patient_Ismale,
            Name: patientData.Patient_Name,
            title: patientData.Patient_Title,
            pntInvId: labno,
            pntId: patientData.Patient_Code,
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
            UsrId:config.public_userId,
            Ispending:pending,
            InvTestDlts: invdlts

        };

        // If it's an update, include the lab number in the request data

        try {
            console.log("saved data",requestData)
            const response = await axios.post(`${config.public_apiUrl}/LabInvoiceSaveUpdate/InvoiceMstr`, requestData);
            
            console.log('Data saved:', response.data);
            toast.success('Saved Succesfully')
            // const invno = response.data.invno

            const invno = response.data.invno;
            setInvno(invno); // Store the invoice number after save


      resetform()
      console.log('invno',invno)
 
      setOpenPopup(true);    
        } catch (error) {
            console.error('Failed to save data', error);
            toast.error('Failed to save data! Please try again.')
        }
    };


    //  // Print API call
    //  const handlePrint = async () => {
    //     try {
          
    //         const apiUrl = `http://172.16.16.157:8083/api/InvoicePrintPDF?yrid=${YearId}&cmpyid=${BranchId}&labno=${invno}`;

    //         const response = await axios.get(apiUrl);
    //         console.log('Print API Response:', response.data);

    //         // Optionally handle the response (like opening a PDF)

    //     } catch (error) {
    //         console.error('Error during printing:', error);
    //     } finally {
    //         setOpenPopup(false); // Close the dialog after printing or error
    //     }
    // };
  
    // // Function to trigger save or update
    // const handleSave = () => {

    //     saveData();
      

    //     //Call the saveData function
    // };

  
 // Print API call
 const handlePrint = async () => {
    try {
        if (!invno) {
            console.error("No invoice number available for printing.");
            return;
        }

        const apiUrl = `${config.public_apiUrl}/InvoicePrintPDF?yrid=${config.public_yearId}&cmpyid=${config.public_branchId}&labno=${invno}`;

        const response = await axios.get(apiUrl);
        console.log('Print API Response:', response.data);

        // Optionally handle the response (like opening a PDF)
    } catch (error) {
        console.error('Error during printing:', error);
    } finally {
        setOpenPopup(false); // Close the dialog after printing or error
    }
};

// Function to trigger save or update
const handleSave = () => {
    saveData();
};

// Function to accept and trigger print
const handleAccept = () => {
    handlePrint();  // Trigger the print function when user clicks "Yes" in popup
};

// Function to reject print
const handleReject = () => {
    setOpenPopup(false);  // Close the popup without printing
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
                            marginBottom:1
                        }}
                    />
                </Grid>
                {(discountAmount > 0 || discountPercentage > 0) && (
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
                                            fontSize: '0.75rem',
                                        },
                                    },
                                },
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Discount Reason"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    
                                    InputLabelProps={{
                                        style: { fontSize: '0.95rem', top: '-3px', left: '1px' },
                                    }}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            padding: '6px',
                                            fontSize: '0.95rem',
                                            textAlign: 'center',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            height: '30px',
                                        },
                                        marginBottom:1
                                    }}
                                />
                            )}
                        />
                    </Grid>
                )}

                {/* Service Charge Field */}
                <Grid item xs={12} marginBottom={2}>
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
                            style: { fontSize: '0.95rem', top: '-2px', left: '1px' },
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
                            width:"173px",
                            display:'flex',
                            justifyContent:'center',
                            marginLeft:11.6
                                                           
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
                            width:"173px",
                            display:'flex',
                            justifyContent:'center',
                            marginLeft:11.6
                        }}
                    >
                        <MenuItem value="Cash"><img src={LogoCash} style={{ width: 25, marginRight: 5 }} alt="Wallet Icon" /> Cash</MenuItem>
                        <MenuItem value="Debit/Credit"><img src={Debit} style={{ width: 25, marginRight: 5 }} /> Debit/Credit</MenuItem>
                        <MenuItem value="Credit"><img src={Credit} style={{ width: 28, marginRight: 7 }} /> Credit</MenuItem>
                        <MenuItem value="BHIM/UPI Online Payment"><img src={UpiIcon} style={{ width:35, marginRight: 5 }} alt="UPI Icon" /> BHIM/UPI Online Payment</MenuItem>
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
                                    }} />
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
                                    }} />
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
                            width:"173px",
                            display:'flex',
                            justifyContent:'center',
                            marginLeft:11.6
                        }}
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
                                    fontSize: 14,
                                    marginRight: -5
                                }}
                            >
                                Balance Amount :{balance.toFixed(2)}
                            </Typography>
                        </Grid>

                    </Grid>
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
                                    onClick={handlePrint}
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
                                <PrintPopup
                                  onAccept={handleAccept}
                                  onReject={handleReject}
                                  open={openPopup}
                                  onClose={handleReject}/>
                             
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
            position='top-center' autoClose={1000} hideProgressBar />
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
