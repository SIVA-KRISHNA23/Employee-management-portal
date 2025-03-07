// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Switch,
//   FormControlLabel,
//   Button,
//   Paper,
//   Divider,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import { Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
// import './Settings.css'; // Import the enhanced CSS styles

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [username, setUsername] = useState('JohnDoe');

//   const handleSaveSettings = () => {
//     // Handle the settings save logic here (e.g., API call, localStorage update)
//     alert('Settings Saved!');
//   };

//   const handleCancelSettings = () => {
//     // Revert to original settings
//     setUsername('JohnDoe');
//     setDarkMode(false);
//     setEmailNotifications(true);
//   };

//   return (
//     <Box className="settings-container">
//       <Container maxWidth="md">
//         <Typography variant="h4" className="settings-title">
//           Account Settings
//         </Typography>

//         <Paper className="settings-paper">
//           <Typography variant="h6" className="settings-subtitle">
//             General Information
//           </Typography>
//           <Divider sx={{ marginBottom: 2 }} />

//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 variant="outlined"
//                 className="settings-input"
//                 InputProps={{
//                   className: 'settings-input-field',
//                 }}
//               />
//             </Grid>
//           </Grid>

//           <Typography variant="h6" className="settings-subtitle">
//             Preferences
//           </Typography>
//           <Divider sx={{ marginBottom: 2 }} />

//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={darkMode}
//                     onChange={() => setDarkMode(!darkMode)}
//                     color="primary"
//                   />
//                 }
//                 label="Dark Mode"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={emailNotifications}
//                     onChange={() => setEmailNotifications(!emailNotifications)}
//                     color="primary"
//                   />
//                 }
//                 label="Email Notifications"
//               />
//             </Grid>
//           </Grid>

//           <Box className="settings-actions">
//             <Tooltip title="Save your settings" arrow>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<SaveIcon />}
//                 onClick={handleSaveSettings}
//                 className="settings-button"
//               >
//                 Save Changes
//               </Button>
//             </Tooltip>
//             <Tooltip title="Cancel changes" arrow>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 startIcon={<CancelIcon />}
//                 onClick={handleCancelSettings}
//                 className="settings-button"
//               >
//                 Cancel
//               </Button>
//             </Tooltip>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Settings;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Paper,
  Divider,
  IconButton,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { fetchSettings, updateSettings } from '../services/api'; // Import API functions
import './Settings.css'; // Import the enhanced CSS styles

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    username: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Fetch settings data from the backend
  useEffect(() => {
    fetchSettings()
      .then((response) => {
        setSettings(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching settings:', err);
        setError('Failed to load settings.');
        setLoading(false);
      });
  }, []);

  const handleSaveSettings = () => {
    setSaving(true);
    updateSettings(settings)
      .then(() => {
        alert('Settings Saved!');
        setSaving(false);
      })
      .catch((err) => {
        console.error('Error saving settings:', err);
        setError('Failed to save settings.');
        setSaving(false);
      });
  };

  const handleCancelSettings = () => {
    fetchSettings()
      .then((response) => setSettings(response.data))
      .catch((err) => console.error('Error reverting settings:', err));
  };

  const handleChange = (key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  if (loading) {
    return (
      <Box className="settings-container">
        <Typography variant="h6" align="center">
          <CircularProgress /> Loading settings...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="settings-container">
        <Typography variant="h6" align="center" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="settings-container">
      <Container maxWidth="md">
        <Typography variant="h4" className="settings-title">
          Account Settings
        </Typography>

        <Paper className="settings-paper">
          <Typography variant="h6" className="settings-subtitle">
            General Information
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                value={settings.username}
                onChange={(e) => handleChange('username', e.target.value)}
                variant="outlined"
                className="settings-input"
                InputProps={{
                  className: 'settings-input-field',
                }}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" className="settings-subtitle">
            Preferences
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.darkMode}
                    onChange={() => handleChange('darkMode', !settings.darkMode)}
                    color="primary"
                  />
                }
                label="Dark Mode"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={() =>
                      handleChange('emailNotifications', !settings.emailNotifications)
                    }
                    color="primary"
                  />
                }
                label="Email Notifications"
              />
            </Grid>
          </Grid>

          <Box className="settings-actions">
            <Tooltip title="Save your settings" arrow>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleSaveSettings}
                disabled={saving}
                className="settings-button"
              >
                {saving ? <CircularProgress size={24} /> : 'Save Changes'}
              </Button>
            </Tooltip>
            <Tooltip title="Cancel changes" arrow>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CancelIcon />}
                onClick={handleCancelSettings}
                className="settings-button"
              >
                Cancel
              </Button>
            </Tooltip>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Settings;
