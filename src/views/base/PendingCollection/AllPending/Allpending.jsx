import { Card, CardContent, Grid, Button, Checkbox, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { CDatePicker } from "@coreui/react-pro";
import { useState } from "react";


function Allpending() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  return (
    <>
      <Card sx={{ width: 'auto', height: 'auto', marginTop: 1 }}>
        <CardContent>
          <Grid container spacing={2} display="flex" flexWrap="wrap">
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
               
                <Grid item xs={12} sm={4} md={3}>
                  <CDatePicker
                    locale="en-US"
                    value={dateFrom}
                    onChange={(newDate) => setDateFrom(newDate)}
                    className="custom-date-picker"
                    placeholder="From"
                  />
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                  <CDatePicker
                    locale="en-US"
                    value={dateTo}
                    onChange={(newDate) => setDateTo(newDate)}
                    className="custom-date-picker"
                    placeholder="To"
                  />
                </Grid>

                <Grid item xs={12} sm={4} md={2}>
                  Corporate
                  <Checkbox />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <Grid container spacing={1}>
             
                    <Grid item>
                      <Button variant="contained" size="small">
                        Refresh
                      </Button>
                    </Grid>

                    <Grid item>
                      <Button variant="contained" size="small">
                        Print
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <TableContainer
                component={Paper}
                sx={{
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
                }}
              >
                <Table>
                  <TableHead style={{ position: 'sticky', top: '0', background: '#BD2937', backdropFilter: 'blur(10px)', zIndex: '1' }}>
                    <TableRow>
                      <TableCell sx={{ color: 'white' }}>SlNO</TableCell>
                      <TableCell sx={{ color: 'white' }}>Lab</TableCell>
                      <TableCell sx={{ color: 'white' }}>Date</TableCell>
                      <TableCell sx={{ color: 'white' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white' }}>Balance</TableCell>
                      <TableCell sx={{ color: 'white' }}>Corporate</TableCell>
                      <TableCell sx={{ color: 'white' }}>User</TableCell>
                      <TableCell sx={{ color: 'white' }}>View</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="table">
                      <TableCell>1</TableCell>
                      <TableCell>35360</TableCell>
                      <TableCell>10-10-2024</TableCell>
                      <TableCell>P.Name</TableCell>
                      <TableCell>3500</TableCell>
                      <TableCell>corporate.name</TableCell>
                      <TableCell>user.name</TableCell>
                      <TableCell><button>View</button></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Allpending;
