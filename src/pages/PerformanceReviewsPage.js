// import React from 'react';
// import { Container, Typography, Box, Grid, Paper, LinearProgress, Button } from '@mui/material';
// import './PerformanceReviewsPage.css';

// const PerformanceReviewsPage = () => {
//   const performanceData = {
//     rating: 4.5,
//     feedback: 'Excellent performance this quarter!',
//   };

//   return (
//     <Container maxWidth="md" className="performance-reviews-container">
//       <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
//         <Typography variant="h3" className="performance-reviews-title">
//           Performance Reviews
//         </Typography>
//         <Typography variant="h6" color="textSecondary" className="performance-reviews-subtitle">
//           View your latest performance reviews and feedback.
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Paper className="performance-card">
//             <Typography variant="h5" className="performance-rating-title">Rating</Typography>
//             <Typography variant="h4" className="performance-rating">{performanceData.rating} / 5</Typography>
//             <LinearProgress variant="determinate" value={performanceData.rating * 20} sx={{ marginTop: '10px' }} />
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper className="performance-card">
//             <Typography variant="h5" className="performance-feedback-title">Feedback</Typography>
//             <Typography variant="body1">{performanceData.feedback}</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

//       <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
//         View Detailed Report
//       </Button>
//     </Container>
//   );
// };

// export default PerformanceReviewsPage;
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Paper, LinearProgress, Button } from '@mui/material';
import { fetchPerformanceReviews } from '../services/api'; // Use fetchPerformanceReviews here
import './PerformanceReviewsPage.css';

const PerformanceReviewsPage = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch performance data from backend
  useEffect(() => {
    const getPerformanceData = async () => {
      try {
        const response = await fetchPerformanceReviews('userId'); // Pass userId here
        setPerformanceData(response.data); // Assuming API returns the performance data
      } catch (error) {
        setError('Failed to load performance data');
      } finally {
        setLoading(false);
      }
    };

    getPerformanceData();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Container maxWidth="md" className="performance-reviews-container">
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className="performance-reviews-container">
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h3" className="performance-reviews-title">
          Performance Reviews
        </Typography>
        <Typography variant="h6" color="textSecondary" className="performance-reviews-subtitle">
          View your latest performance reviews and feedback.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper className="performance-card">
            <Typography variant="h5" className="performance-rating-title">Rating</Typography>
            <Typography variant="h4" className="performance-rating">{performanceData.rating} / 5</Typography>
            <LinearProgress variant="determinate" value={performanceData.rating * 20} sx={{ marginTop: '10px' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="performance-card">
            <Typography variant="h5" className="performance-feedback-title">Feedback</Typography>
            <Typography variant="body1">{performanceData.feedback}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
        View Detailed Report
      </Button>
    </Container>
  );
};

export default PerformanceReviewsPage;
