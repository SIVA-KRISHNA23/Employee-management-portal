// import React from 'react';
// import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
// import './SalaryDetailsPage.css';

// const SalaryDetailsPage = () => {
//   // Mock employee salary data
//   const salaryData = {
//     basic: 5000,
//     bonus: 1000,
//     deductions: 500,
//     netSalary: 5500,
//   };

//   return (
//     <Container maxWidth="md" className="salary-details-container">
//       <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
//         <Typography variant="h3" className="salary-details-title">
//           Salary Details
//         </Typography>
//         <Typography variant="h6" color="textSecondary" className="salary-details-subtitle">
//           View and manage your salary details securely.
//         </Typography>
//       </Box>

//       <Box className="salary-summary-container">
//         <Paper className="salary-summary-card">
//           <Typography variant="h5" className="salary-summary-title">Salary Breakdown</Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Typography variant="body1">Basic Salary: ${salaryData.basic}</Typography>
//               <Typography variant="body1">Bonus: ${salaryData.bonus}</Typography>
//               <Typography variant="body1">Deductions: ${salaryData.deductions}</Typography>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography variant="h6" className="net-salary">Net Salary: ${salaryData.netSalary}</Typography>
//             </Grid>
//           </Grid>
//           <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
//             Download Salary Slip
//           </Button>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default SalaryDetailsPage;
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { fetchSalaryDetails } from '../services/api'; // Import the API function
import './SalaryDetailsPage.css';

const SalaryDetailsPage = () => {
  const [salaryData, setSalaryData] = useState(null); // State to store salary data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch salary details from the backend
  useEffect(() => {
    fetchSalaryDetails(1) // Replace `1` with the user ID if needed
      .then((response) => {
        setSalaryData(response.data); // Set fetched salary data
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching salary details:', err);
        setError('Failed to load salary details.');
        setLoading(false);
      });
  }, []);

  // Display loading or error messages
  if (loading) {
    return <Typography variant="h6" align="center">Loading salary details...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="md" className="salary-details-container">
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h3" className="salary-details-title">
          Salary Details
        </Typography>
        <Typography variant="h6" color="textSecondary" className="salary-details-subtitle">
          View and manage your salary details securely.
        </Typography>
      </Box>

      <Box className="salary-summary-container">
        <Paper className="salary-summary-card">
          <Typography variant="h5" className="salary-summary-title">Salary Breakdown</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">Basic Salary: ${salaryData.basic}</Typography>
              <Typography variant="body1">Bonus: ${salaryData.bonus}</Typography>
              <Typography variant="body1">Deductions: ${salaryData.deductions}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" className="net-salary">Net Salary: ${salaryData.netSalary}</Typography>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
            Download Salary Slip
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default SalaryDetailsPage;
