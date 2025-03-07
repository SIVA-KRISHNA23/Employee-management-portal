// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   IconButton,
//   Badge,
//   Snackbar,
//   Button,
//   Paper,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from '@mui/material';
// import { Notifications as NotificationsIcon, Close as CloseIcon } from '@mui/icons-material';
// import './Notifications.css';

// // Mock Notifications Data
// const notificationsData = [
//   { id: 1, message: 'Your account was successfully updated.', time: '2024-12-09 12:30:00', type: 'success' },
//   { id: 2, message: 'Failed to connect to the server. Please try again later.', time: '2024-12-09 12:35:00', type: 'error' },
//   { id: 3, message: 'A new update is available. Please update your application.', time: '2024-12-09 12:40:00', type: 'info' },
//   { id: 4, message: 'Your password has been changed successfully.', time: '2024-12-09 12:45:00', type: 'success' },
// ];

// const Notifications = () => {
//   const [notifications, setNotifications] = useState(notificationsData);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarType, setSnackbarType] = useState('info');
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedNotification, setSelectedNotification] = useState(null);

//   // Handle Snackbar open and close
//   const handleSnackbarOpen = (message, type) => {
//     setSnackbarMessage(message);
//     setSnackbarType(type);
//     setOpenSnackbar(true);
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   // Handle Dialog open and close
//   const handleDialogOpen = (notification) => {
//     setSelectedNotification(notification);
//     setOpenDialog(true);
//   };

//   const handleDialogClose = () => {
//     setOpenDialog(false);
//     setSelectedNotification(null);
//   };

//   return (
//     <Box className="notifications-container">
//       {/* Hero Section */}
//       <Box className="notifications-hero">
//         <Typography variant="h3" className="notifications-title">
//           Notifications
//         </Typography>
//         <Typography variant="subtitle1" className="notifications-subtitle">
//           Stay updated with important system notifications and alerts.
//         </Typography>
//       </Box>

//       {/* Notifications List */}
//       <Container className="notifications-list-container">
//         <Grid container spacing={3}>
//           {notifications.map((notification) => (
//             <Grid item xs={12} md={6} lg={4} key={notification.id}>
//               <Card className={`notification-card ${notification.type}`}>
//                 <CardContent>
//                   <Typography variant="body1" className="notification-message">
//                     {notification.message}
//                   </Typography>
//                   <Box display="flex" justifyContent="space-between" alignItems="center">
//                     <Typography variant="caption" className="notification-time">
//                       {notification.time}
//                     </Typography>
//                     <IconButton
//                       className="notification-details-button"
//                       onClick={() => handleDialogOpen(notification)}
//                     >
//                       <NotificationsIcon />
//                     </IconButton>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Snackbar for Notifications */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         message={snackbarMessage}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         className={`snackbar-${snackbarType}`}
//         action={
//           <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
//             <CloseIcon />
//           </IconButton>
//         }
//       />

//       {/* Notification Details Dialog */}
//       <Dialog open={openDialog} onClose={handleDialogClose}>
//         <DialogTitle>Notification Details</DialogTitle>
//         <DialogContent>
//           {selectedNotification && (
//             <Box>
//               <Typography variant="body1" className="notification-detail-message">
//                 {selectedNotification.message}
//               </Typography>
//               <Typography variant="caption" className="notification-detail-time">
//                 <strong>Time:</strong> {selectedNotification.time}
//               </Typography>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDialogClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Notifications;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Badge,
  Snackbar,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Notifications as NotificationsIcon, Close as CloseIcon } from '@mui/icons-material';
import './Notifications.css';
import { fetchNotifications } from '../services/api'; // API call to fetch notifications

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('info');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Fetch notifications from backend
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await fetchNotifications();
        setNotifications(response.data); // Assuming API returns a list of notifications
      } catch (error) {
        setSnackbarMessage('Failed to load notifications.');
        setSnackbarType('error');
        setOpenSnackbar(true);
      }
    };

    getNotifications();
  }, []);

  // Handle Snackbar open and close
  const handleSnackbarOpen = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  // Handle Dialog open and close
  const handleDialogOpen = (notification) => {
    setSelectedNotification(notification);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedNotification(null);
  };

  return (
    <Box className="notifications-container">
      {/* Hero Section */}
      <Box className="notifications-hero">
        <Typography variant="h3" className="notifications-title">
          Notifications
        </Typography>
        <Typography variant="subtitle1" className="notifications-subtitle">
          Stay updated with important system notifications and alerts.
        </Typography>
      </Box>

      {/* Notifications List */}
      <Container className="notifications-list-container">
        <Grid container spacing={3}>
          {notifications.map((notification) => (
            <Grid item xs={12} md={6} lg={4} key={notification.id}>
              <Card className={`notification-card ${notification.type}`}>
                <CardContent>
                  <Typography variant="body1" className="notification-message">
                    {notification.message}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption" className="notification-time">
                      {notification.time}
                    </Typography>
                    <IconButton
                      className="notification-details-button"
                      onClick={() => handleDialogOpen(notification)}
                    >
                      <NotificationsIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        className={`snackbar-${snackbarType}`}
        action={
          <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon />
          </IconButton>
        }
      />

      {/* Notification Details Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Notification Details</DialogTitle>
        <DialogContent>
          {selectedNotification && (
            <Box>
              <Typography variant="body1" className="notification-detail-message">
                {selectedNotification.message}
              </Typography>
              <Typography variant="caption" className="notification-detail-time">
                <strong>Time:</strong> {selectedNotification.time}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Notifications;
