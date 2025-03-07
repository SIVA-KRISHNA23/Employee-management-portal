// import React, { useState } from 'react';
// import { Box, Container, Typography,  Grid, Card, CardContent, IconButton, Menu, MenuItem } from '@mui/material';
// import { Download as DownloadIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
// import jsPDF from 'jspdf';
// import './Reports.css';

// const sampleData = [
//   { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Active', lastLogin: '2024-12-09 12:00:00' },
//   { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Inactive', lastLogin: '2024-12-08 14:30:00' },
//   { id: 3, name: 'Samuel Johnson', email: 'samuelj@example.com', status: 'Active', lastLogin: '2024-12-07 16:15:00' },
//   // Add more data as needed
// ];

// const Reports = () => { 
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const openMenu = Boolean(anchorEl);

//   // Handle Menu Open
//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Handle Menu Close
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Generate PDF Report
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text('User Report', 14, 20);
//     doc.setFontSize(12);
    
//     let yPosition = 30;
//     sampleData.forEach((item) => {
//       doc.text(`Name: ${item.name}`, 14, yPosition);
//       doc.text(`Email: ${item.email}`, 14, yPosition + 5);
//       doc.text(`Status: ${item.status}`, 14, yPosition + 10);
//       doc.text(`Last Login: ${item.lastLogin}`, 14, yPosition + 15);
//       yPosition += 25;
//     });
    
//     doc.save('user-report.pdf');
//   };

//   // Handle Report Export
//   const handleExport = (type) => {
//     if (type === 'pdf') {
//       generatePDF();
//     } else {
//       // Implement other export options like CSV or Excel
//       alert('Export to CSV or Excel is not implemented yet.');
//     }
//     handleMenuClose();
//   };

//   return (
//     <Box className="reports-container">
//       {/* Hero Section */}
//       <Box className="reports-hero">
//         <Typography variant="h3" className="reports-title">
//           Reports
//         </Typography>
//         <Typography variant="subtitle1" className="reports-subtitle">
//           Generate detailed reports and export them for further analysis.
//         </Typography>
//       </Box>

//       {/* Report Section */}
//       <Container className="reports-list-container">
//         <Grid container spacing={3}>
//           {sampleData.map((report) => (
//             <Grid item xs={12} md={6} lg={4} key={report.id}>
//               <Card className="report-card">
//                 <CardContent>
//                   <Typography variant="h6" className="report-name">
//                     {report.name}
//                   </Typography>
//                   <Typography variant="body2" className="report-email">
//                     {report.email}
//                   </Typography>
//                   <Typography variant="body2" className="report-status">
//                     Status: {report.status}
//                   </Typography>
//                   <Typography variant="body2" className="report-last-login">
//                     Last Login: {report.lastLogin}
//                   </Typography>
//                   <Box className="report-actions">
//                     <IconButton
//                       aria-controls={openMenu ? 'report-menu' : undefined}
//                       aria-haspopup="true"
//                       onClick={handleMenuClick}
//                       className="report-menu-button"
//                     >
//                       <MoreVertIcon />
//                     </IconButton>
//                     <Menu
//                       anchorEl={anchorEl}
//                       open={openMenu}
//                       onClose={handleMenuClose}
//                       MenuListProps={{
//                         'aria-labelledby': 'report-menu-button',
//                       }}
//                     >
//                       <MenuItem onClick={() => handleExport('pdf')}>Export to PDF</MenuItem>
//                       <MenuItem onClick={() => handleExport('csv')}>Export to CSV</MenuItem>
//                     </Menu>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Reports;
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton, Menu, MenuItem } from '@mui/material';
import { Download as DownloadIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import jsPDF from 'jspdf';
import { fetchReports } from '../services/api'; // Import API function
import './Reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]); // State to store reports from the backend
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const openMenu = Boolean(anchorEl);

  // Fetch reports from the backend when the component mounts
  useEffect(() => {
    fetchReports()
      .then((response) => {
        setReports(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  // Handle Menu Open
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle Menu Close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Generate PDF Report
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('User Report', 14, 20);
    doc.setFontSize(12);

    let yPosition = 30;
    reports.forEach((item) => {
      doc.text(`Name: ${item.name}`, 14, yPosition);
      doc.text(`Email: ${item.email}`, 14, yPosition + 5);
      doc.text(`Status: ${item.status}`, 14, yPosition + 10);
      doc.text(`Last Login: ${item.lastLogin}`, 14, yPosition + 15);
      yPosition += 25;
    });

    doc.save('user-report.pdf');
  };

  // Handle Report Export
  const handleExport = (type) => {
    if (type === 'pdf') {
      generatePDF();
    } else {
      // Implement other export options like CSV or Excel
      alert('Export to CSV or Excel is not implemented yet.');
    }
    handleMenuClose();
  };

  return (
    <Box className="reports-container">
      {/* Hero Section */}
      <Box className="reports-hero">
        <Typography variant="h3" className="reports-title">
          Reports
        </Typography>
        <Typography variant="subtitle1" className="reports-subtitle">
          Generate detailed reports and export them for further analysis.
        </Typography>
      </Box>

      {/* Report Section */}
      <Container className="reports-list-container">
        <Grid container spacing={3}>
          {reports.map((report) => (
            <Grid item xs={12} md={6} lg={4} key={report.id}>
              <Card className="report-card">
                <CardContent>
                  <Typography variant="h6" className="report-name">
                    {report.name}
                  </Typography>
                  <Typography variant="body2" className="report-email">
                    {report.email}
                  </Typography>
                  <Typography variant="body2" className="report-status">
                    Status: {report.status}
                  </Typography>
                  <Typography variant="body2" className="report-last-login">
                    Last Login: {report.lastLogin}
                  </Typography>
                  <Box className="report-actions">
                    <IconButton
                      aria-controls={openMenu ? 'report-menu' : undefined}
                      aria-haspopup="true"
                      onClick={handleMenuClick}
                      className="report-menu-button"
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'report-menu-button',
                      }}
                    >
                      <MenuItem onClick={() => handleExport('pdf')}>Export to PDF</MenuItem>
                      <MenuItem onClick={() => handleExport('csv')}>Export to CSV</MenuItem>
                    </Menu>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Reports;
