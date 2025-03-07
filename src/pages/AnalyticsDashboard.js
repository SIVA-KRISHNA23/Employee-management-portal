// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Tabs,
//   Tab,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Pagination,
// } from '@mui/material';
// import {
//   InsertChart as InsertChartIcon,
//   AccessTime as AccessTimeIcon,
//   TrendingUp as TrendingUpIcon,
//   NotificationImportant as NotificationIcon,
//   Search as SearchIcon,
// } from '@mui/icons-material';
// import './AnalyticsDashboard.css';

// // Mock Data for Analytics Dashboard
// const analyticsStats = [
//   { id: 1, label: 'Total Revenue', value: '$1,245,000', color: '#4caf50' },
//   { id: 2, label: 'Total Visitors', value: '3,245', color: '#2196f3' },
//   { id: 3, label: 'New Signups Today', value: '125', color: '#ff9800' },
// ];

// const recentActivity = [
//   { id: 1, activity: 'User John created a new post', time: '2 minutes ago' },
//   { id: 2, activity: 'User Jane updated profile', time: '5 minutes ago' },
//   { id: 3, activity: 'System backup completed', time: '10 minutes ago' },
// ];

// const tableData = [
//   { id: 1, name: 'Product 1', revenue: '$100,000', visitors: '500', conversion: '5%' },
//   { id: 2, name: 'Product 2', revenue: '$80,000', visitors: '400', conversion: '4%' },
//   { id: 3, name: 'Product 3', revenue: '$60,000', visitors: '300', conversion: '6%' },
//   { id: 4, name: 'Product 4', revenue: '$40,000', visitors: '200', conversion: '3%' },
// ];

// const AnalyticsDashboard = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 5;

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   const handlePaginationChange = (event, page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <Box className="analytics-dashboard-container">
//       {/* Hero Section */}
//       <Box className="analytics-dashboard-hero">
//         <Typography variant="h3" className="analytics-dashboard-title">
//           Analytics Dashboard
//         </Typography>
//         <Typography variant="subtitle1" className="analytics-dashboard-subtitle">
//           Real-time insights and performance tracking at your fingertips.
//         </Typography>
//       </Box>

//       {/* Statistics Section */}
//       <Container className="analytics-stats-container">
//         <Grid container spacing={4}>
//           {analyticsStats.map((stat) => (
//             <Grid item xs={12} sm={6} md={4} key={stat.id}>
//               <Card className="analytics-stat-card" style={{ borderLeft: `5px solid ${stat.color}` }}>
//                 <CardContent className="analytics-stat-content">
//                   <Avatar style={{ backgroundColor: stat.color }} className="analytics-stat-icon">
//                     {stat.label.charAt(0)}
//                   </Avatar>
//                   <Typography variant="h5" className="analytics-stat-value">
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="subtitle1" className="analytics-stat-label">
//                     {stat.label}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Tabs Section */}
//       <Container className="analytics-tabs-container">
//         <Tabs value={tabIndex} onChange={handleTabChange} centered>
//           <Tab label="Overview" />
//           <Tab label="Products" />
//           <Tab label="Recent Activity" />
//         </Tabs>

//         {tabIndex === 0 && (
//           <Box className="overview-tab">
//             <Grid container spacing={4}>
//               {/* Chart Section Placeholder */}
//               <Grid item xs={12} sm={6} md={4}>
//                 <Card className="chart-card">
//                   <Typography variant="h6" gutterBottom>
//                     Revenue Trend
//                   </Typography>
//                   <div className="chart-placeholder">
//                     {/* Placeholder for a chart component */}
//                     <InsertChartIcon fontSize="large" />
//                   </div>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Card className="chart-card">
//                   <Typography variant="h6" gutterBottom>
//                     Visitors Trend
//                   </Typography>
//                   <div className="chart-placeholder">
//                     <InsertChartIcon fontSize="large" />
//                   </div>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>
//         )}

//         {tabIndex === 1 && (
//           <Box className="products-tab">
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Product</TableCell>
//                     <TableCell>Revenue</TableCell>
//                     <TableCell>Visitors</TableCell>
//                     <TableCell>Conversion Rate</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {tableData.map((row) => (
//                     <TableRow key={row.id}>
//                       <TableCell>{row.name}</TableCell>
//                       <TableCell>{row.revenue}</TableCell>
//                       <TableCell>{row.visitors}</TableCell>
//                       <TableCell>{row.conversion}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             {/* Pagination */}
//             <Box display="flex" justifyContent="center" marginTop={2}>
//               <Pagination
//                 count={Math.ceil(tableData.length / usersPerPage)}
//                 page={currentPage}
//                 onChange={handlePaginationChange}
//               />
//             </Box>
//           </Box>
//         )}

//         {tabIndex === 2 && (
//           <Box className="recent-activity-tab">
//             {recentActivity.map((activity) => (
//               <Box className="notification-item" key={activity.id}>
//                 <Typography variant="body1">{activity.activity}</Typography>
//                 <Typography variant="body2" className="time">
//                   <AccessTimeIcon fontSize="small" /> {activity.time}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         )}
//       </Container>

//       {/* Notifications Dialog */}
//       <Dialog open={false} onClose={() => {}}>
//         <DialogTitle>Notifications</DialogTitle>
//         <DialogContent>
//           <Typography>No new notifications.</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => {}} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default AnalyticsDashboard;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Tabs,
  Tab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
} from '@mui/material';
import {
  InsertChart as InsertChartIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { fetchAnalyticsData, fetchReports } from '../services/api'; // Import API calls
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [analyticsStats, setAnalyticsStats] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handlePaginationChange = (event, page) => {
    setCurrentPage(page);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAnalyticsData()
      .then((response) => {
        setAnalyticsStats(response.data.analyticsStats);
        setRecentActivity(response.data.recentActivity);
      })
      .catch((error) => console.error('Error fetching analytics data:', error));

    fetchReports({ page: currentPage, limit: usersPerPage })
      .then((response) => {
        setTableData(response.data.reports);
      })
      .catch((error) => console.error('Error fetching reports data:', error));
  }, [currentPage]);

  return (
    <Box className="analytics-dashboard-container">
      {/* Hero Section */}
      <Box className="analytics-dashboard-hero">
        <Typography variant="h3" className="analytics-dashboard-title">
          Analytics Dashboard
        </Typography>
        <Typography variant="subtitle1" className="analytics-dashboard-subtitle">
          Real-time insights and performance tracking at your fingertips.
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Container className="analytics-stats-container">
        <Grid container spacing={4}>
          {analyticsStats.map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.id}>
              <Card className="analytics-stat-card" style={{ borderLeft: `5px solid ${stat.color}` }}>
                <CardContent className="analytics-stat-content">
                  <Avatar style={{ backgroundColor: stat.color }} className="analytics-stat-icon">
                    {stat.label.charAt(0)}
                  </Avatar>
                  <Typography variant="h5" className="analytics-stat-value">
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" className="analytics-stat-label">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Tabs Section */}
      <Container className="analytics-tabs-container">
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Overview" />
          <Tab label="Products" />
          <Tab label="Recent Activity" />
        </Tabs>

        {tabIndex === 0 && (
          <Box className="overview-tab">
            <Grid container spacing={4}>
              {/* Chart Section Placeholder */}
              <Grid item xs={12} sm={6} md={4}>
                <Card className="chart-card">
                  <Typography variant="h6" gutterBottom>
                    Revenue Trend
                  </Typography>
                  <div className="chart-placeholder">
                    {/* Placeholder for a chart component */}
                    <InsertChartIcon fontSize="large" />
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="chart-card">
                  <Typography variant="h6" gutterBottom>
                    Visitors Trend
                  </Typography>
                  <div className="chart-placeholder">
                    <InsertChartIcon fontSize="large" />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box className="products-tab">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Revenue</TableCell>
                    <TableCell>Visitors</TableCell>
                    <TableCell>Conversion Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.revenue}</TableCell>
                      <TableCell>{row.visitors}</TableCell>
                      <TableCell>{row.conversion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Pagination
                count={Math.ceil(tableData.length / usersPerPage)}
                page={currentPage}
                onChange={handlePaginationChange}
              />
            </Box>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box className="recent-activity-tab">
            {recentActivity.map((activity) => (
              <Box className="notification-item" key={activity.id}>
                <Typography variant="body1">{activity.activity}</Typography>
                <Typography variant="body2" className="time">
                  <AccessTimeIcon fontSize="small" /> {activity.time}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* Notifications Dialog */}
      <Dialog open={false} onClose={() => {}}>
        <DialogTitle>Notifications</DialogTitle>
        <DialogContent>
          <Typography>No new notifications.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AnalyticsDashboard;
