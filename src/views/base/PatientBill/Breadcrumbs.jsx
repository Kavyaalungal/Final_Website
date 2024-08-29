// Breadcrumbs.js
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CustomBreadcrumbs({ current }) {
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
         marginTop:'-30px',
        padding: '10px 20px', // Add padding for better spacing
        // backgroundColor: '#f5f5f5', // Background color for the breadcrumb container
        borderRadius: '8px', // Rounded corners for the container
        color: '#333', // Default text color
        fontSize: '18px', // Text size
      }}
    >
      {/* <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate('/home')}
        sx={{
          cursor: 'pointer',
          color: '#007bff', // Link color
          '&:hover': {
            color: '#0056b3', // Hover color
          },
        }}
      >
        Home
      </Link> */}
      <Typography
        color="textPrimary"
        sx={{
          fontWeight: 'bold', // Bold text for the current page
          color: '#555', // Color for the current page text
        }}
      >
        {current}
      </Typography>
    </Breadcrumbs>
  );
}

export default CustomBreadcrumbs;
