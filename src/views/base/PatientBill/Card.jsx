// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";


// // function ImageCard() {


// //   return (
    
// //     <Card
// //       sx={{
// //         width: "130%",
// //         maxWidth: "auto",
// //         maxHeight: 700,
// //         height: 623,
// //          p: 2,
// //         overflowY: "auto",
// //         marginTop:-2,
// //         marginLeft:15
// //       }}
// //     >
// //       <CardContent
// //         sx={{
// //           height: "100%",
// //           overflowY: "hidden",
// //         }}
// //       >
       
      
      
// //       </CardContent>
// //     </Card>
// //   );
// // }

// // export default ImageCard;
// import React from 'react';
// import {Grid, Card, IconButton,CardContent, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// function ImageCard() {
//   // Sample data for the table
//   const rows = [
//     { slno: '1', docName: 'prescription', view: '', delete: '' },
//     { slno: '2',  docName: 'prescription', view: '', delete: '' },
//     // Add more rows as needed
//   ];

//   return (
//     <Card
//       sx={{
//         width: '130%',  // Adjust to fit the container
//         // maxWidth: 700,  // Set a max-width
//         // maxHeight: 700,
//         height: '640px',
//         p: 2,
//         overflowY: 'auto',
//         marginTop: -2,
//         marginLeft: 15,
//       }}
//     >
//       <CardContent
//         sx={{
//           height: '100%',
//           overflowY: 'auto',
//         }}
//       >
//          <Typography variant="h6" gutterBottom sx={{color:'#bd2937',fontWeight:'500'}}>
//           Attached Document List
//         </Typography>
//           <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '-2px' }}>
           
//             <Button
//               variant="contained"
//               className="button"
//               sx={{ textTransform: 'none', }}
//             >
//               Add Document
//             </Button>
           
         
//           </div>
//         <TableContainer component={Paper} sx={{marginTop:2}}>
//           <Table>
//           <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
//       <TableRow sx={{ border: '2px solid #d6d1d1',position: 'sticky' }}>
       
//         <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Sl No</TableCell>
//         <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Doc.Name</TableCell>
//         <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1',backgroundColor:'#d6d1d1' }}>Action</TableCell>

//         {/* <IconButton>
//               <DeleteIcon />
//             </IconButton> */}
       
//       </TableRow>
//     </TableHead>
//             <TableBody>
//               {rows.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.slno}</TableCell>
//                   <TableCell>{row.docName}</TableCell>
//                   <TableCell>{row.view}</TableCell>
                
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
      
//       </CardContent>
//     </Card>
//   );
// }

// export default ImageCard;
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ImageCard() {
  // Sample data for the table
  const initialRows = [
    { slno: '1', docName: 'prescription 1', details: 'Details of prescription 1' },
    { slno: '2', docName: 'prescription 2', details: 'Details of prescription 2' },
    // Add more rows as needed
  ];

  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = (rowToDelete) => {
    setRows(rows.filter(row => row.slno !== rowToDelete.slno));
  };

  return (
    <Card
      sx={{
        width: '130%',  // Adjust to fit the container
        height: '640px',
        p: 2,
        overflowY: 'auto',
        marginTop: -3,
        marginLeft: 15,
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#bd2937', fontWeight: '500' }}>
          Attached Document List
        </Typography>
        <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '-2px' }}>
          <Button
            variant="contained"
            className="button"
            sx={{ textTransform: 'none' }}
          >
            Add Document
          </Button>
        </div>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
              <TableRow sx={{ border: '2px solid #d6d1d1', position: 'sticky' }}>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '7%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1' }}>Sl #</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1' }}>Doc.Name</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', padding: '4px 8px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.slno}</TableCell>
                  <TableCell>{row.docName}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="view"
                      onClick={() => handleOpen(row)}
                      size="small"
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteClick(row)}
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Modal for viewing details */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              {selectedRow?.docName}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {selectedRow?.details}
            </Typography>
            <Button
            variant="contained"
            className="button"
            sx={{ textTransform: 'none',mt:2 }}
            onClick={handleClose}
          >
            Close
          </Button>
          
          </Box>
        </Modal>

      </CardContent>
    </Card>
  );
}

export default ImageCard;


