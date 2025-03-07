import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll

// Importing the local logo image
import logo from '../../assets/log.png'; // Update the path based on your file structure

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault(); // Prevent the default behavior
    window.location.href = '/'; // Navigate to the root path
    window.location.reload(); // Reload the page
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f6f6f0', padding: '0 10px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RouterLink to="/" style={{ marginRight: '20px' }}>
            <img src={logo} alt="Logo" style={{ height: 45 }} />
          </RouterLink>
          <Typography
            variant="h6"
            component="a"
            href="/"
            onClick={handleHomeClick}
            sx={{ color: '#1c160a', textDecoration: 'none', marginLeft: '10px', marginRight: '10px', cursor: 'pointer' }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component={ScrollLink}
            to="blogs-section" // The name of the target section
            smooth={true} // Enable smooth scrolling
            duration={500} // Animation duration in milliseconds
            spy={true}
            offset={-70} // Adjust the offset for AppBar height
            sx={{ color: '#1c160a', textDecoration: 'none', cursor: 'pointer', marginLeft: '10px', marginRight: '10px' }}
          >
            Blogs
          </Typography>
          <Typography
            variant="h6"
            component={ScrollLink}
            to="about-section" // The name of the target section
            smooth={true} // Enable smooth scrolling
            duration={500} // Animation duration in milliseconds
            spy={true}
            offset={-70} // Adjust the offset for AppBar height
            sx={{ color: '#1c160a', textDecoration: 'none', cursor: 'pointer', marginLeft: '10px', marginRight: '10px' }}
          >
            About
          </Typography>
        </Box>

        {/* Box to make Login (as Button) and Signup (as link) side by side */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              sx={{
                backgroundColor: '#32260f',
                color: '#fff',
                marginRight: '10px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1c160a',
                },
                padding: '8px 16px',
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to="/login"
              sx={{
                backgroundColor: '#32260f',
                color: '#fff', // Text color for the button (white)
                marginRight: '10px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#1c160a', // Darker shade on hover
                },
                padding: '8px 16px', // Add padding for better button size
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
