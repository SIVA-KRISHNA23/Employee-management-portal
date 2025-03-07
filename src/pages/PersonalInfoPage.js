// import React from 'react';
// import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
// import './PersonalInfoPage.css'; // Add styles here

// const PersonalInfoPage = () => {
//   // You can mock employee data here, or if it's dynamic, use state or props
//   const employee = {
//     name: 'John Doe',
//     profileImage: 'https://via.placeholder.com/150', // Replace with actual image URL or state
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     address: '123 Street Name, City, Country',
//     designation: 'Software Engineer',
//   };

//   return (
//     <Container maxWidth="lg" className="personal-info-container">
//       <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
//         <Typography variant="h3" className="personal-info-title">
//           Personal Information
//         </Typography>
//         <Typography variant="h6" color="textSecondary" className="personal-info-subtitle">
//           Manage your personal details securely and professionally.
//         </Typography>
//       </Box>

//       <Box className="personal-info-card-container">
//         <Card className="personal-info-card">
//           <Grid container spacing={3} sx={{ padding: '30px' }}>
//             <Grid item xs={12} md={4} className="personal-info-image-container">
//               <img
//                 src={employee.profileImage}
//                 alt="Profile"
//                 className="personal-info-profile-image"
//               />
//             </Grid>
//             <Grid item xs={12} md={8}>
//               <CardContent>
//                 <Typography variant="h5" className="personal-info-name">
//                   {employee.name}
//                 </Typography>
//                 <Box className="personal-info-details">
//                   <Typography variant="body1" className="personal-info-detail">
//                     <strong>Email:</strong> {employee.email}
//                   </Typography>
//                   <Typography variant="body1" className="personal-info-detail">
//                     <strong>Phone:</strong> {employee.phone}
//                   </Typography>
//                   <Typography variant="body1" className="personal-info-detail">
//                     <strong>Address:</strong> {employee.address}
//                   </Typography>
//                   <Typography variant="body1" className="personal-info-detail">
//                     <strong>Designation:</strong> {employee.designation}
//                   </Typography>
//                 </Box>
//                 <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
//                   Edit Information
//                 </Button>
//               </CardContent>
//             </Grid>
//           </Grid>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default PersonalInfoPage;
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, LinearProgress } from '@mui/material';
import { fetchPersonalInfo } from '../services/api'; // Import the fetchPersonalInfo function
import './PersonalInfoPage.css'; // Add styles here

const PersonalInfoPage = () => {
  const [employee, setEmployee] = useState(null); // State to hold employee data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch employee data from backend
  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        const response = await fetchPersonalInfo('userId'); // Replace 'userId' with actual user ID
        setEmployee(response.data); // Set employee data from response
      } catch (err) {
        setError('Failed to load personal information');
      } finally {
        setLoading(false);
      }
    };

    getEmployeeData();
  }, []);

  if (loading) {
    return <LinearProgress />; // Show loading indicator while data is being fetched
  }

  if (error) {
    return (
      <Container maxWidth="lg" className="personal-info-container">
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="personal-info-container">
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h3" className="personal-info-title">
          Personal Information
        </Typography>
        <Typography variant="h6" color="textSecondary" className="personal-info-subtitle">
          Manage your personal details securely and professionally.
        </Typography>
      </Box>

      <Box className="personal-info-card-container">
        <Card className="personal-info-card">
          <Grid container spacing={3} sx={{ padding: '30px' }}>
            <Grid item xs={12} md={4} className="personal-info-image-container">
              <img
                src={employee.profileImage}
                alt="Profile"
                className="personal-info-profile-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent>
                <Typography variant="h5" className="personal-info-name">
                  {employee.name}
                </Typography>
                <Box className="personal-info-details">
                  <Typography variant="body1" className="personal-info-detail">
                    <strong>Email:</strong> {employee.email}
                  </Typography>
                  <Typography variant="body1" className="personal-info-detail">
                    <strong>Phone:</strong> {employee.phone}
                  </Typography>
                  <Typography variant="body1" className="personal-info-detail">
                    <strong>Address:</strong> {employee.address}
                  </Typography>
                  <Typography variant="body1" className="personal-info-detail">
                    <strong>Designation:</strong> {employee.designation}
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                  Edit Information
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default PersonalInfoPage;
