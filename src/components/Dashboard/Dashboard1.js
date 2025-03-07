import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import './Dashboard.css'; // Import the CSS file

// Import all the images at the top
import personal from '../../assets/personal.jpg';
import salary from '../../assets/salary.jpg';
import leave from '../../assets/leave-requests.jpg';
import performance from '../../assets/performance-reviews.jpg';
import training from '../../assets/training-programs.jpg';
import announcements from '../../assets/company-announcements.jpg';

// Mock employee data
const employeeData = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'View and update your personal information.',
    image: personal, // Use imported images
    link: '/personalinfo',
  },
  {
    id: 2,
    title: 'Salary Details',
    description: 'Access your salary slips and payment history.',
    image: salary, // Use imported images
    link: '/Salarydetails',
  },
  {
    id: 3,
    title: 'Leave Requests',
    description: 'View leave balance and apply for leave.',
    image: leave, // Use imported images
    link: '/LeaveRequest',
  },
  {
    id: 4,
    title: 'Performance Reviews',
    description: 'Check your performance and appraisals.',
    image: performance, // Use imported images
    link: '/Performace',
  },
  {
    id: 5,
    title: 'Training Programs',
    description: 'Explore and enroll in new training programs.',
    image: training, // Use imported images
    link: '/Training',
  },
  {
    id: 6,
    title: 'Company Announcements',
    description: 'Stay updated with the latest company news.',
    image: announcements, // Use imported images
    link: '/CompanyAnnouncement',
  },
];

const Dashboard1 = () => {
  return (
    <Box className="dashboard-container">
      {/* Live background */}
      <div className="animated-background"></div>

      <Container maxWidth="lg" className="dashboard-content">
        <Typography variant="h4" className="dashboard-title">
          Welcome to Your Dashboard
        </Typography>

        <Typography variant="subtitle1" className="dashboard-subtitle">
          Your one-stop solution for managing all your employee tasks.
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: '25px' }}>
          {employeeData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id} className="dashboard-grid-item">
              <Box className="dashboard-card-container">
                <Card className="dashboard-card">
                  <Box
                    className="dashboard-card-image"
                    style={{ backgroundImage: `url(${item.image})` }} // Use the imported image
                  ></Box>
                  <CardContent className="dashboard-card-content">
                    <Typography variant="h6" className="dashboard-card-title">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="dashboard-card-description">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="dashboard-card-actions">
                    <Button
                      size="small"
                      variant="contained"
                      className="dashboard-card-button"
                      href={item.link}
                    >
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Navigation to Admin Dashboard */}
        <Grid item xs={12} sx={{ marginTop: '40px' }}>
          <Box className="admin-dashboard-card-container">
            <Card className="admin-dashboard-card" style={{ textAlign: 'center' }}>
              <CardContent>
                <Typography variant="h6" className="admin-dashboard-card-title">
                  Switch to Admin Dashboard
                </Typography>
                <Typography variant="body2" className="admin-dashboard-card-description" style={{ marginBottom: '20px' }}>
                  Switch to the admin dashboard to manage employee data and company settings.
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button
                  size="large"
                  variant="contained"
                  className="admin-dashboard-card-button"
                  href="/admin-dashboard"
                  style={{ padding: '10px 20px', backgroundColor: '#4CAF50' }}
                >
                  Go to Admin Dashboard
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>

        <Box sx={{ marginTop: '64px' }}></Box> {/* Space after cards */}
      </Container>
    </Box>
  );
};

export default Dashboard1;
