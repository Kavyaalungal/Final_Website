import { Card, Checkbox, CardContent, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Table, Paper, TableBody, TableCell, TableRow, TableContainer, TableHead, Button } from "@mui/material";
import { parse, format } from "date-fns";
import { CDatePicker } from "@coreui/react-pro";
import Labno from "../LabNo/Labno";

function Pendingpayment() {
    return (
        <>
            <Card sx={{ width: 'auto', height: 450 }} className="card">
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        {/* Row for Lab No */}
                        <Grid item>
                            <Labno />
                        </Grid>

                        {/* Row for Pay Mode, Card No, Bank (aligned horizontally) */}
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="dropdown" sx={{ marginTop: 0 }}>Pay Mode</InputLabel>
                                        <Select
                                            id="dropdown"
                                            size='small'
                                            label="Pay Mode"
                                            variant="outlined"
                                            defaultValue=""
                                            IconComponent={()=>null}
                                            sx={{
                                                
                                                fontSize: '1rem',
                                                height: '40px',
                                                width: '250px',
                                                // marginTop: -1,
                                                border: 'none', // Remove border
                                                '& fieldset': {
                                                    border: 'none', // Remove border around the dropdown
                                                },
                                                '&:focus': {
                                                    border: 'none', // Remove border when focused
                                                },
                                            }}
                                        >
                                            <MenuItem value="default">Cash</MenuItem>
                                            <MenuItem value="branch1">Bhim/Upi</MenuItem>
                                            <MenuItem value="branch2">Debit/Credit</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Card No"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '250px' }}
                                        inputProps={{ readOnly: true }}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Bank"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '250px' }}
                                        inputProps={{ readOnly: true }}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Row for Inv Amount, Current Balance, Collected Amount (aligned horizontally) */}
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Inv Amount"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '240px' }}
                                        inputProps={{ readOnly: true }}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Current Balance"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '240px' }}
                                        inputProps={{ readOnly: true }}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Collected Amount"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '240px' }}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Table */}
                        <Grid item xs={12} sm={12}>
                            <TableContainer component={Paper} sx={{
                                marginTop: 2,
                                overflowY: 'auto',
                                overflowX: 'auto',
                                maxHeight: { xs: 200, sm: 250 },
                                width: '100%',
                                '::-webkit-scrollbar': { width: '8px' }, // set width for WebKit browsers
                                '::-webkit-scrollbar-thumb': { backgroundColor: '#888' }, // scrollbar color
                                '::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' }, // track color
                                '-ms-overflow-style': 'none', // hide scrollbar in IE and Edge
                                'scrollbar-width': 'thin', // set width in Firefox
                                'scrollbar-color': '#888 #f1f1f1',
                            }}>
                                <Table>
                                    <TableHead style={{ position: 'sticky', top: '0', background: '#BD2937', backdropFilter: 'blur(10px)', zIndex: '1' }}>
                                        <TableRow>
                                            <TableCell sx={{ color: 'white' }}>SlNO</TableCell>
                                            <TableCell sx={{ color: 'white' }}>Received Date</TableCell>
                                            <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                                            <TableCell sx={{ color: 'white' }}>Print</TableCell>
                                            <TableCell sx={{ color: 'white' }}>User</TableCell>
                                            <TableCell sx={{ color: 'white' }}>Paymode</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {/* <TableCell sx={{ color: 'black' }} >1</TableCell> */}
                                            <TableCell >1</TableCell>
                                            <TableCell>10-10-2024</TableCell>
                                            <TableCell>1500</TableCell>
                                            <TableCell><Checkbox /></TableCell>
                                            <TableCell>workstation</TableCell>
                                            <TableCell>Cash</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        {/* Note, Date Picker, Print & Save Buttons (aligned horizontally) */}
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Note"
                                        variant="standard"
                                        size="small"
                                        sx={{ fontSize: '1rem', height: '50px', width: '240px' }}
                                        rows={3}
                                        InputProps={{ disableUnderline: true }}
                                    />
                                </Grid>

                                <Grid item>
                                    <CDatePicker
                                        date={format(new Date(), 'yyyy/MM/dd hh:mm:ss a')}
                                        label=""
                                        locale="en-US"
                                        timepicker
                                        inputDateParse={(date) => parse(date, 'MMM dd, yyyy h:mm:ss a', new Date())}
                                        inputDateFormat={(date) => format(new Date(date), 'MMM dd, yyyy h:mm:ss a')}
                                        disabled
                                    />
                                </Grid>

                                <Grid item>
                                    <Button variant="contained" size='small'>Print</Button>
                                </Grid>

                                <Grid item>
                                    <Button variant="contained" size='small'>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Pendingpayment;
