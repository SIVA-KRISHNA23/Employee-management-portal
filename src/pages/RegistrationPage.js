// import React, { useState } from 'react';
// import { Container, Typography, Grid, Box, Paper, Button, TextField, InputAdornment} from '@mui/material';
// import { PhotoCamera } from '@mui/icons-material';
// import './RegistrationPage.css';

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     profilePicture: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size <= 1048576) {
//       setFormData({
//         ...formData,
//         profilePicture: file,
//       });
//       setErrors({
//         ...errors,
//         profilePicture: '',
//       });
//     } else {
//       setErrors({
//         ...errors,
//         profilePicture: 'File size should be less than 1MB.',
//       });
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.name) formErrors.name = 'Name is required.';
//     if (!formData.email) formErrors.email = 'Email is required.';
//     if (!formData.phone) formErrors.phone = 'Phone number is required.';
//     if (!formData.address) formErrors.address = 'Address is required.';
//     if (!formData.profilePicture) formErrors.profilePicture = 'Profile picture is required.';
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Submit the form data
//       console.log(formData);
//     }
//   };

//   return (
//     <Container maxWidth="sm" className="registration-container">
//       <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
//         <Typography variant="h3" className="registration-title">
//           Registration Form
//         </Typography>
//         <Typography variant="h6" color="textSecondary" className="registration-subtitle">
//           Fill in the details to create your account.
//         </Typography>
//       </Box>

//       <Paper className="registration-form-card">
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Full Name"
//                 variant="outlined"
//                 fullWidth
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={!!errors.name}
//                 helperText={errors.name}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Email Address"
//                 variant="outlined"
//                 fullWidth
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Phone Number"
//                 variant="outlined"
//                 fullWidth
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 error={!!errors.phone}
//                 helperText={errors.phone}
//                 InputProps={{
//                   startAdornment: <InputAdornment position="start">+1</InputAdornment>,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Address"
//                 variant="outlined"
//                 fullWidth
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 error={!!errors.address}
//                 helperText={errors.address}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 id="profilePicture"
//                 onChange={handleFileChange}
//                 style={{ display: 'none' }}
//               />
//               <label htmlFor="profilePicture">
//                 <Button
//                   variant="contained"
//                   component="span"
//                   startIcon={<PhotoCamera />}
//                   sx={{ width: '100%', padding: '10px', backgroundColor: '#2980b9' }}
//                 >
//                   Upload Profile Picture (150x150)
//                 </Button>
//               </label>
//               {errors.profilePicture && <Typography color="error">{errors.profilePicture}</Typography>}
//               {formData.profilePicture && (
//                 <img
//                   src={URL.createObjectURL(formData.profilePicture)}
//                   alt="Profile"
//                   className="profile-image-preview"
//                 />
//               )}
//             </Grid>

//             <Grid item xs={12}>
//               <Button variant="contained" type="submit" fullWidth sx={{ padding: '10px', backgroundColor: '#2ecc71' }}>
//                 Register
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default RegistrationPage;
import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Paper, Button, TextField, InputAdornment, CircularProgress } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { registerUser } from '../services/api'; // Import the registerUser function
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Track loading state
  const [successMessage, setSuccessMessage] = useState(''); // Success message after successful registration
  const [errorMessage, setErrorMessage] = useState(''); // Error message for failed registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1048576) {
      setFormData({
        ...formData,
        profilePicture: file,
      });
      setErrors({
        ...errors,
        profilePicture: '',
      });
    } else {
      setErrors({
        ...errors,
        profilePicture: 'File size should be less than 1MB.',
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required.';
    if (!formData.email) formErrors.email = 'Email is required.';
    if (!formData.phone) formErrors.phone = 'Phone number is required.';
    if (!formData.address) formErrors.address = 'Address is required.';
    if (!formData.profilePicture) formErrors.profilePicture = 'Profile picture is required.';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Set loading to true when form submission starts
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const data = await registerUser(formData); // Call the registerUser API
        setLoading(false); // Set loading to false after successful API call
        setSuccessMessage('Registration successful!'); // Display success message
      } catch (error) {
        setLoading(false); // Set loading to false if an error occurs
        setErrorMessage(error.message); // Display error message
      }
    }
  };

  return (
    <Container maxWidth="sm" className="registration-container">
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h3" className="registration-title">
          Registration Form
        </Typography>
        <Typography variant="h6" color="textSecondary" className="registration-subtitle">
          Fill in the details to create your account.
        </Typography>
      </Box>

      <Paper className="registration-form-card">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>

            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="profilePicture"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="profilePicture">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<PhotoCamera />}
                  sx={{ width: '100%', padding: '10px', backgroundColor: '#2980b9' }}
                >
                  Upload Profile Picture (150x150)
                </Button>
              </label>
              {errors.profilePicture && <Typography color="error">{errors.profilePicture}</Typography>}
              {formData.profilePicture && (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile"
                  className="profile-image-preview"
                />
              )}
            </Grid>

            <Grid item xs={12}>
              {loading ? (
                <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
              ) : (
                <Button variant="contained" type="submit" fullWidth sx={{ padding: '10px', backgroundColor: '#2ecc71' }}>
                  Register
                </Button>
              )}
            </Grid>

            {successMessage && (
              <Grid item xs={12}>
                <Typography variant="h6" color="success">
                  {successMessage}
                </Typography>
              </Grid>
            )}

            {errorMessage && (
              <Grid item xs={12}>
                <Typography variant="h6" color="error">
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;
