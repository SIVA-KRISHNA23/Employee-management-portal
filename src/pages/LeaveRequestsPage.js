// import React from 'react';
// import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
// import './LeaveRequestsPage.css';

// const LeaveRequestsPage = () => {
//   // Mock leave data
//   const leaveData = {
//     balance: 15,
//     pendingRequests: 2,
//   };

//   return (
//     <Container maxWidth="md" className="leave-requests-container">
//       <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
//         <Typography variant="h3" className="leave-requests-title">
//           Leave Requests
//         </Typography>
//         <Typography variant="h6" color="textSecondary" className="leave-requests-subtitle">
//           Manage your leave requests and balance efficiently.
//         </Typography>
//       </Box>

//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Paper className="leave-summary-card">
//             <Typography variant="h5">Leave Balance</Typography>
//             <Typography variant="h6" className="leave-balance">{leaveData.balance} days</Typography>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper className="leave-summary-card">
//             <Typography variant="h5">Pending Requests</Typography>
//             <Typography variant="h6" className="pending-requests">{leaveData.pendingRequests} requests</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

//       <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
//         Apply for Leave
//       </Button>
//     </Container>
//   );
// };

// export default LeaveRequestsPage;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { fetchLeaveRequests } from '../services/api'; // Import the API function
import './LeaveRequestsPage.css'; // Import the CSS file

const LeaveRequestsPage = () => {
  const [leaveData, setLeaveData] = useState({ balance: 0, pendingRequests: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = 1; // Replace with the actual user ID from your auth logic

    const fetchData = async () => {
      try {
        const response = await fetchLeaveRequests(userId);
        setLeaveData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch leave data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Typography variant="h6" className="loading-text">
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" className="error-text">
        {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" className="leave-requests-container">
      <Box className="leave-requests-header">
        <Typography variant="h3" className="leave-requests-title">
          Leave Requests
        </Typography>
        <Typography variant="h6" className="leave-requests-subtitle">
          Manage your leave requests and balance efficiently.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper className="leave-summary-card">
            <Typography variant="h5" className="leave-card-title">
              Leave Balance
            </Typography>
            <Typography variant="h6" className="leave-balance">
              {leaveData.balance} days
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="leave-summary-card">
            <Typography variant="h5" className="leave-card-title">
              Pending Requests
            </Typography>
            <Typography variant="h6" className="pending-requests">
              {leaveData.pendingRequests} requests
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Button variant="contained" className="apply-leave-button">
        Apply for Leave
      </Button>
    </Container>
  );
};

export default LeaveRequestsPage;
