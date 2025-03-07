// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from '@mui/material';
// import { Add, Delete, Edit, Visibility } from '@mui/icons-material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import './GlobalDashboard.css';

// const GlobalDashboard = () => {
//   const [endUsers, setEndUsers] = useState([]);
//   const [masterUsers, setMasterUsers] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [isChartVisible, setIsChartVisible] = useState(false);

//   useEffect(() => {
//     setEndUsers([
//       { id: 1, name: 'John Doe', email: 'john@example.com', role: 'End User' },
//       { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'End User' },
//     ]);

//     setMasterUsers([
//       { id: 1, name: 'Admin Joe', email: 'joe@company.com', role: 'Master User' },
//       { id: 2, name: 'Admin Alice', email: 'alice@company.com', role: 'Master User' },
//     ]);
//   }, []);

//   const handleDelete = (id, type) => {
//     if (type === 'endUser') {
//       setEndUsers(endUsers.filter((user) => user.id !== id));
//     } else if (type === 'masterUser') {
//       setMasterUsers(masterUsers.filter((user) => user.id !== id));
//     }
//   };

//   const handleAddRequest = () => {
//     alert('Feature to send add request to Global Admin is under development.');
//   };

//   const handleAddUser = () => {
//     alert('Feature to add new user is under development.');
//   };

//   const handleFetchChartData = () => {
//     setChartData([
//       { name: 'Jan', value: 4000 },
//       { name: 'Feb', value: 3000 },
//       { name: 'Mar', value: 2000 },
//       { name: 'Apr', value: 2780 },
//       { name: 'May', value: 1890 },
//     ]);
//     setIsChartVisible(true);
//   };

//   return (
//     <Box className="global-dashboard-container">
//       <div className="hero-banner">
//         <Typography variant="h2" className="dashboard-title">
//           Global Dashboard
//         </Typography>
//         <Typography variant="subtitle1" className="dashboard-subtitle">
//           Supreme Authority Dashboard to Monitor and Manage Everything
//         </Typography>
//       </div>

//       <Container maxWidth="lg" className="dashboard-content">
//         <Grid container spacing={4}>
//           {[{ title: 'End Users', data: endUsers, type: 'endUser' }, { title: 'Master Users', data: masterUsers, type: 'masterUser' }].map((section) => (
//             <Grid item xs={12} md={6} key={section.title}>
//               <Card className="dashboard-card">
//                 <CardContent>
//                   <Typography variant="h6">{section.title}</Typography>
//                   <TableContainer component={Paper}>
//                     <Table>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell>Name</TableCell>
//                           <TableCell>Email</TableCell>
//                           <TableCell>Role</TableCell>
//                           <TableCell>Actions</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {section.data.map((user) => (
//                           <TableRow key={user.id}>
//                             <TableCell>{user.name}</TableCell>
//                             <TableCell>{user.email}</TableCell>
//                             <TableCell>{user.role}</TableCell>
//                             <TableCell>
//                               <IconButton onClick={() => handleDelete(user.id, section.type)}>
//                                 <Delete color="error" />
//                               </IconButton>
//                               <IconButton>
//                                 <Edit color="primary" />
//                               </IconButton>
//                               <IconButton>
//                                 <Visibility color="action" />
//                               </IconButton>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}

//           {[{ label: 'Send User Add Request', handler: handleAddRequest }, { label: 'Add New User', handler: handleAddUser }].map((action, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Card className="dashboard-card">
//                 <CardContent style={{ textAlign: 'center' }}>
//                   <Typography variant="h6">{action.label}</Typography>
//                   <Button variant="contained" color={index === 0 ? 'primary' : 'secondary'} startIcon={<Add />} onClick={action.handler} style={{ marginTop: '20px' }}>
//                     {action.label}
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}

//           <Grid item xs={12} md={6}>
//             <Card className="dashboard-card" onClick={handleFetchChartData}>
//               <CardContent style={{ textAlign: 'center' }}>
//                 <Typography variant="h6">Performance Chart</Typography>
//                 <Button variant="outlined" color="primary" style={{ marginTop: '20px' }}>
//                   Show Chart
//                 </Button>
//                 {isChartVisible && (
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="value" stroke="#8884d8" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default GlobalDashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { Business, People, TrendingUp } from '@mui/icons-material';
import './GlobalDashboard.css';

const GlobalDashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Box className="global-dashboard-container">
      <div className="hero-banner">
        <Typography variant="h2" className="dashboard-title">
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" className="dashboard-subtitle">
          Streamlined Control Panel for Managing Company Operations
        </Typography>
      </div>

      <Container maxWidth="lg" className="dashboard-content">
        <Grid container spacing={4}>
          {/* Employee Management Card */}
          <Grid item xs={12} md={4}>
            <Card className="dashboard-card">
              <CardContent style={{ textAlign: 'center' }}>
                <People style={{ fontSize: 60, color: '#1976d2' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>Employee Management</Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                  Monitor and manage employee details, attendance, and performance.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                  onClick={() => navigate('/EmployeeManagement')} // Navigate to Employee Management page
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Profits & Loss Card */}
          <Grid item xs={12} md={4}>
            <Card className="dashboard-card">
              <CardContent style={{ textAlign: 'center' }}>
                <TrendingUp style={{ fontSize: 60, color: '#2e7d32' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>Profits & Loss</Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                  Track company financial performance including profits and losses.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '20px' }}
                  onClick={() => navigate('/CompanyInfo')} // Navigate to Profits & Loss page
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Admin Dashboard Card */}
          <Grid item xs={12} md={4}>
            <Card className="dashboard-card">
              <CardContent style={{ textAlign: 'center' }}>
                <Business style={{ fontSize: 60, color: '#d32f2f' }} />
                <Typography variant="h6" style={{ marginTop: '10px' }}>Admin Dashboard</Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                  Access and control administrative settings and operations.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: '20px' }}
                  onClick={() => navigate('/Master1')} // Navigate to Admin Dashboard page
                >
                  Go to Admin
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: '20px' }}
                  onClick={() => navigate('/Login')} // Navigate to Login page
                >
                  Go to Login
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GlobalDashboard;
