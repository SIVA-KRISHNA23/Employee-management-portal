// import React, { useState } from 'react';
// import { Container, Typography, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import './TrainingProgramsPage.css';

// const TrainingProgramsPage = () => {
//   const [enrolledProgram, setEnrolledProgram] = useState(null);

//   const programs = [
//     { title: 'JavaScript for Beginners', description: 'A comprehensive beginner’s guide to JavaScript.' },
//     { title: 'React Advanced', description: 'Master React and build complex web applications.' },
//     { title: 'Node.js Essentials', description: 'Learn backend development with Node.js and Express.' },
//     { title: 'Full-Stack Development', description: 'Become a full-stack developer with hands-on projects.' },
//   ];

//   const handleEnroll = (program) => {
//     setEnrolledProgram(program);
//   };

//   const handleCloseDialog = () => {
//     setEnrolledProgram(null);
//   };

//   return (
//     <Container maxWidth="md" className="training-programs-container">
//       <Typography variant="h3" className="training-programs-title" align="center">
//         Training Programs
//       </Typography>

//       <Grid container spacing={4} sx={{ marginTop: '20px' }}>
//         {programs.map((program, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Paper className="training-program-card" elevation={3}>
//               <Typography variant="h5" className="training-program-title">
//                 {program.title}
//               </Typography>
//               <Typography variant="body1" className="training-program-description">
//                 {program.description}
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{ marginTop: '20px' }}
//                 onClick={() => handleEnroll(program)}
//               >
//                 Enroll Now
//               </Button>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Enrollment Confirmation Dialog */}
//       {enrolledProgram && (
//         <Dialog open={true} onClose={handleCloseDialog}>
//           <DialogTitle>Enrollment Confirmation</DialogTitle>
//           <DialogContent>
//             <Typography>
//               You have successfully enrolled in <strong>{enrolledProgram.title}</strong>.
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </Container>
//   );
// };

// export default TrainingProgramsPage;
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import './TrainingProgramsPage.css';

const TrainingProgramsPage = ({ userId }) => {
  const [programs, setPrograms] = useState([]);
  const [enrolledProgram, setEnrolledProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch training programs for the user
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/users/${userId}/training-programs`);
        setPrograms(response.data); // Assuming the response has an array of programs
      } catch (err) {
        console.error('Failed to fetch programs:', err);
        setError('Unable to fetch training programs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [userId]);

  const handleEnroll = async (program) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/${userId}/training-programs/${program.id}`);
      setEnrolledProgram(response.data); // Assuming the API returns the enrolled program
    } catch (err) {
      console.error('Enrollment failed:', err);
      alert('Failed to enroll. Please try again later.');
    }
  };

  const handleCloseDialog = () => {
    setEnrolledProgram(null);
  };

  return (
    <Container maxWidth="md" className="training-programs-container">
      <Typography variant="h3" className="training-programs-title" align="center">
        Training Programs
      </Typography>

      {loading && <Typography>Loading training programs...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && programs.length === 0 && (
        <Typography>No training programs available at the moment.</Typography>
      )}

      <Grid container spacing={4} sx={{ marginTop: '20px' }}>
        {programs.map((program) => (
          <Grid item xs={12} sm={6} key={program.id}>
            <Paper className="training-program-card" elevation={3}>
              <Typography variant="h5" className="training-program-title">
                {program.title}
              </Typography>
              <Typography variant="body1" className="training-program-description">
                {program.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '20px' }}
                onClick={() => handleEnroll(program)}
              >
                Enroll Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Enrollment Confirmation Dialog */}
      {enrolledProgram && (
        <Dialog open={true} onClose={handleCloseDialog}>
          <DialogTitle>Enrollment Confirmation</DialogTitle>
          <DialogContent>
            <Typography>
              You have successfully enrolled in <strong>{enrolledProgram.title}</strong>.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default TrainingProgramsPage;
