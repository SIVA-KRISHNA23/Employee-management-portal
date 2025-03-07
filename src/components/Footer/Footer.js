import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box id="about-section"
      sx={{
        backgroundColor: '#2d2d2d',
        color: '#fff',
        padding: '30px 20px',
        marginTop: '50px',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Column 1: About */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>
            About Employee Portal
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: '1.8', color: '#bfbfbf' }}>
            Our Employee Portal helps you manage your profile, view salary details, and apply for leaves in a hassle-free manner. Your professional life organized at your fingertips.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/login"
              sx={{
                display: 'block',
                color: '#bfbfbf',
                marginBottom: '8px',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              Manage Profile
            </Link>
            <Link
              href="/login"
              sx={{
                display: 'block',
                color: '#bfbfbf',
                marginBottom: '8px',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              View Salaries
            </Link>
            <Link
              href="/login"
              sx={{
                display: 'block',
                color: '#bfbfbf',
                marginBottom: '8px',
                textDecoration: 'none',
                '&:hover': { color: '#fff' },
              }}
            >
              Apply for Leave
            </Link>
          </Box>
        </Grid>

        {/* Column 3: Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={() => window.open('https://facebook.com', '_blank')}
              style={{
                color: '#bfbfbf',
                textDecoration: 'none',
                fontSize: '24px',
                transition: 'color 0.3s ease',
                background: 'none',
                border: 'none',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#4267B2')} // Facebook blue
              onMouseLeave={(e) => (e.target.style.color = '#bfbfbf')}
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              onClick={() => window.open('https://instagram.com', '_blank')}
              style={{
                color: '#bfbfbf',
                textDecoration: 'none',
                fontSize: '24px',
                transition: 'color 0.3s ease',
                background: 'none',
                border: 'none',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#E1306C')} // Instagram pink
              onMouseLeave={(e) => (e.target.style.color = '#bfbfbf')}
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              style={{
                color: '#bfbfbf',
                textDecoration: 'none',
                fontSize: '24px',
                transition: 'color 0.3s ease',
                background: 'none',
                border: 'none',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#0077B5')} // LinkedIn blue
              onMouseLeave={(e) => (e.target.style.color = '#bfbfbf')}
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #444',
        }}
      >
        <Typography variant="body2" sx={{ color: '#bfbfbf' }}>
          &copy; {new Date().getFullYear()} Employee Portal. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
