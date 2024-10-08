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
import React, { useRef, useState } from 'react';
// import {   Typography, Table, TableContainer, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import {Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent, Typography, Button, Table, TableBody, TextField,TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddPrescription from './Table/AddPrescription'
import './Card.css';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
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
  const [visible, setVisible] = useState(false)

   // State to control the modal open/close
   const [open, setOpen] = useState(false);

   // Function to open the modal
   const handleClickOpen = () => {
     setOpen(true);
   };
 
   // Function to close the modal
   const handleClose = () => {
     setOpen(false);
   };
 
  // Sample data for the table
  const [rows, setRows] = useState([{ slno: 1, docName: '', completed: false }]);
  const [editMode, setEditMode] = useState({ rowIndex: null, column: null });
  const [tempValue, setTempValue] = useState('');

  const handleCellClick = (rowIndex, column) => {
    setEditMode({ rowIndex, column });
    setTempValue(rows[rowIndex][column]);
  };

  const handleKeyPress = (e, rowIndex, column) => {
    if (e.key === 'Enter') {
      const newRows = [...rows];
      newRows[rowIndex][column] = tempValue;
      setRows(newRows);
      setEditMode({ rowIndex: null, column: null });

      // Move to the next column or row
      if (column === 'docName' && rowIndex === rows.length - 1) {
        // Automatically add a new row if both columns are filled
        setRows([...newRows, { slno: rows.length + 1, docName: '', completed: false }]);
      }
    }
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };
 
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

 

   const handleDeleteClick = (rowIndex) => {
    const newRows = rows.filter((_, index) => index !== rowIndex);

    // Update the serial numbers after a row is deleted
    const updatedRows = newRows.map((row, index) => ({
      ...row,
      slno: index + 1,
    }));

    setRows(updatedRows);
  };


  return (
    <Card
      sx={{
        width: '130%',  // Adjust to fit the container
        height: '680px',
        p: 2,
        overflowY: 'auto',
        marginTop: -3,
        marginLeft: 15,
      }}
      className='thirdcard'
    >
      <CardContent
        sx={{
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: '#bd2937', fontWeight: '500' }}>
          Prescription Attachment
        </Typography>
        <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '-2px' }}>
          <Button
            variant="contained"
            // className="button"
            sx={{ textTransform: 'none',backgroundColor: '#bb4d58',padding:'6px 18px',fontSize:'1rem', // Default background color
              '&:hover': {
                backgroundColor: '#bd2937', // Background color on hover
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
              },
              '@media (max-width:575px)': {
                margin: '10px auto', // Center the button and reduce space
                fontSize: '1rem', // Smaller font size
                padding: '4px 16px', // Less padding to reduce width
                display: 'block', // Ensure it's block-level for better control
                maxWidth: '150px',
                marginLeft:'500px',
                marginTop:-33// Optionally, limit the max width
              },
             
             }}
             onClick={() => setVisible(true)} 
          >
            Add Prescription
          </Button>
        </div>
        {/* Modal Component */}
        <CModal
              size="lg"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)} // Close modal on click
        aria-labelledby="ScrollingLongContentExampleLabel2"
         className='modal custom-modal-close custom-modal-width custom-centered-modal'
                backdrop='static'
      >
        <CModalHeader className='custom-modal-header' >
          <CModalTitle id="ScrollingLongContentExampleLabel2" className='custom-modal-title'>Attach Prescription</CModalTitle>
        </CModalHeader>
        <CModalBody className='c-modal-body no-scroll'>
      
          <AddPrescription/>
        </CModalBody>
        {/* <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter> */}
      </CModal>

 <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
          <TableRow sx={{ border: '2px solid #d6d1d1', height: '32px' }}>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '7%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Sl #</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Doc. Name</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ height: '32px' }}>
              <TableCell sx={{ padding: '4px 8px' }}>
                {row.slno}
              </TableCell>
              <TableCell sx={{ padding: '4px 8px' }} onClick={() => handleCellClick(rowIndex, 'docName')}>
                {editMode.rowIndex === rowIndex && editMode.column === 'docName' ? (
                  <input
                    value={tempValue}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, rowIndex, 'docName')}
                    autoFocus
                    onBlur={() => setEditMode({ rowIndex: null, column: null })}
                  />
                ) : (
                  row.docName
                )}
              </TableCell>
              <TableCell sx={{ padding: '4px 8px' }}>
                <IconButton
                  aria-label="view"
                  onClick={() => handleOpen(row)}
                  size="small"
                  sx={{ padding: '6px' }}
                >
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteClick(rowIndex)}
                  size="small"
                  sx={{ padding: '6px' }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>


    <Typography variant="h6" gutterBottom sx={{ color: '#bd2937', fontWeight: '500',marginTop:20 }}>
          Document Attachment
        </Typography>
        <div className="responsive-buttons" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '-2px' }}>
          <Button
            variant="contained"
            // className="button"
            sx={{ textTransform: 'none',backgroundColor: '#bb4d58',padding:'6px 18px',fontSize:'1rem', // Default background color
              '&:hover': {
                backgroundColor: '#bd2937', // Background color on hover
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
              },
              '@media (max-width:575px)': {
                margin: '10px auto', // Center the button and reduce space
                fontSize: '1rem', // Smaller font size
                padding: '4px 16px', // Less padding to reduce width
                display: 'block', // Ensure it's block-level for better control
                maxWidth: '150px',
                marginLeft:'500px',
                marginTop:-33// Optionally, limit the max width
              },
    
             }}
          >
            Add Document
          </Button>
        </div>
  
 <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead sx={{ position: 'sticky', zIndex: 1, top: 0, backgroundColor: '#d6d1d1' }}>
          <TableRow sx={{ border: '2px solid #d6d1d1', height: '32px' }}>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '7%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Sl #</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Doc. Name</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', padding: '2px 4px', width: '12%', border: '1px solid #d6d1d1', backgroundColor: '#d6d1d1',fontWeight:'bold' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ height: '32px' }}>
              <TableCell sx={{ padding: '4px 8px' }}>
                {row.slno}
              </TableCell>
              <TableCell sx={{ padding: '4px 8px' }} onClick={() => handleCellClick(rowIndex, 'docName')}>
                {editMode.rowIndex === rowIndex && editMode.column === 'docName' ? (
                  <input
                    value={tempValue}
                    onChange={handleInputChange}
                    onKeyPress={(e) => handleKeyPress(e, rowIndex, 'docName')}
                    autoFocus
                    onBlur={() => setEditMode({ rowIndex: null, column: null })}
                  />
                ) : (
                  row.docName
                )}
              </TableCell>
              <TableCell sx={{ padding: '4px 8px' }}>
                <IconButton
                  aria-label="view"
                  onClick={() => handleOpen(row)}
                  size="small"
                  sx={{ padding: '6px' }}
                >
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteClick(rowIndex)}
                  size="small"
                  sx={{ padding: '6px' }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>




      
      </CardContent>
    </Card>
  );
}

export default ImageCard;


