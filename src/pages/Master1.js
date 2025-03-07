import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import './AdminDashboard.css';

// Import all the images for the admin features
import userManagement from '../assets/user-management.jpg';
import analytics from '../assets/analytics.jpg';
import systemLogs from '../assets/system-logs.jpg';
import notifications from '../assets/notifications.jpg';
import reports from '../assets/reports.jpg';
import settings from '../assets/settings.jpg';

// Mock admin feature data
const adminFeatures = [
  {
    id: 1,
    title: 'User Management',
    description: 'Manage user accounts, roles, and permissions.',
    image: userManagement,
    link: '/UserManagement',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Access detailed analytics and system insights.',
    image: analytics,
    link: '/AnalyticsDashboard',
  },
  {
    id: 3,
    title: 'System Logs',
    description: 'Track system activities and logs.',
    image: systemLogs,
    link: '/SystemLogs',
  },
  {
    id: 4,
    title: 'Notifications',
    description: 'Configure and manage system notifications.',
    image: notifications,
    link: '/Notifications',
  },
  {
    id: 5,
    title: 'Reports',
    description: 'Generate and export detailed reports.',
    image: reports,
    link: '/Reports',
  },
  {
    id: 6,
    title: 'Settings',
    description: 'Adjust system configurations and preferences.',
    image: settings,
    link: '/Settings',
  },
];

const AdminDashboard = () => {
  return (
    <Box className="admin-dashboard-container">
      {/* Smoke Animation */}
      <div className="admin-animated-smoke"></div>

      {/* Hero Banner */}
      <div className="admin-hero-banner">
        <Typography variant="h2" className="admin-dashboard-title">
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" className="admin-dashboard-subtitle">
          Empowering you to manage and monitor with style.
        </Typography>
      </div>

      {/* Feature Cards */}
      <Container maxWidth="lg" className="admin-dashboard-content">
        <Grid container spacing={4}>
          {adminFeatures.map((feature) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={feature.id}
              className="admin-dashboard-grid-item"
            >
              <Box className="admin-dashboard-card-container">
                <Card className="admin-dashboard-card">
                  <Box
                    className="admin-dashboard-card-image"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  ></Box>
                  <CardContent className="admin-dashboard-card-content">
                    <Typography
                      variant="h6"
                      className="admin-dashboard-card-title"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="admin-dashboard-card-description"
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="admin-dashboard-card-actions">
                    <Button
                      size="small"
                      variant="contained"
                      className="admin-dashboard-card-button"
                      href={feature.link}
                    >
                      Explore
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}

          {/* Navigation to Master Dashboard */}
          <Grid item xs={12}>
            <Box className="admin-dashboard-card-container">
              <Card className="admin-dashboard-card" style={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" className="admin-dashboard-card-title">
                    Switch to Master Dashboard
                  </Typography>
                  <Typography variant="body2" className="admin-dashboard-card-description" style={{ marginBottom: '20px' }}>
                    Switch back to your master dashboard to manage global settings and monitoring.
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button
                    size="large"
                    variant="contained"
                    className="admin-dashboard-card-button"
                    href="/GlobalDashboard"
                    style={{ padding: '10px 20px', backgroundColor: '#4CAF50' }}
                  >
                    Go to Master Dashboard
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
