// import React from 'react';
// import { Container, Typography, Grid, Paper, Button } from '@mui/material';
// import './CompanyAnnouncementsPage.css';

// const CompanyAnnouncementsPage = () => {
//   const announcements = [
//     { title: 'Annual Company Retreat', date: '2024-12-15', details: 'Join us for a retreat at the mountain resort.' },
//     { title: 'New Health Benefits Plan', date: '2024-11-30', details: 'Explore the new health plan details for 2025.' },
//   ];

//   return (
//     <Container maxWidth="md" className="company-announcements-container">
//       <Typography variant="h3" className="company-announcements-title">
//         Company Announcements
//       </Typography>

//       <Grid container spacing={4} sx={{ marginTop: '20px' }}>
//         {announcements.map((announcement, index) => (
//           <Grid item xs={12} md={6} key={index}>
//             <Paper className="announcement-card">
//               <Typography variant="h5" className="announcement-title">{announcement.title}</Typography>
//               <Typography variant="body1" className="announcement-date">{announcement.date}</Typography>
//               <Typography variant="body2">{announcement.details}</Typography>
//               <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
//                 Learn More
//               </Button>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default CompanyAnnouncementsPage;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { fetchAnnouncements } from '../services/api'; // Import the API function
import './CompanyAnnouncementsPage.css';

const CompanyAnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements from the backend
  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const response = await fetchAnnouncements(); // Fetch data from the backend
        setAnnouncements(response.data); // Assuming the API returns an array in the `data` property
        setLoading(false);
      } catch (err) {
        setError('Failed to load announcements');
        setLoading(false);
      }
    };

    getAnnouncements();
  }, []);

  return (
    <Container maxWidth="md" className="company-announcements-container">
      <Typography variant="h3" className="company-announcements-title">
        Company Announcements
      </Typography>

      {loading && <Typography>Loading announcements...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        {!loading && !error && announcements.map((announcement, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper className="announcement-card">
              <Typography variant="h5" className="announcement-title">
                {announcement.title}
              </Typography>
              <Typography variant="body1" className="announcement-date">
                {announcement.date}
              </Typography>
              <Typography variant="body2">{announcement.details}</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyAnnouncementsPage;
