import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Paper, Link } from '@mui/material';
import { loginUser } from '../services/api'; // Import the API function
import './LoginPage.css';

const LoginPage = () => {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ empId: '', password: '' });
  const [serverError, setServerError] = useState(null); // For API errors
  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = { empId: '', password: '' };

    if (!empId) {
      newErrors.empId = 'Employee ID is required';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await loginUser({ empId, password });
        const { token, role } = response.data; // Adjust based on your API response
  
        localStorage.setItem('authToken', token); // Save token in local storage
        localStorage.setItem('userRole', role); // Save role in local storage
  
        // Adjust navigation based on the role
        if (role === 'ADMIN') {
          navigate('/GlobalDashboard');
        } else if (role === 'EMPLOYEE_GROUP_A') {
          navigate('/Master1');
        } else if (role === 'EMPLOYEE_GROUP_B') {
          navigate('/dashboard');
        } else {
          navigate('/dashboard');
        }
      } catch (error) {
        setServerError(error.response?.data?.message || 'Invalid Employee ID or password. Please try again.');
      }
    }
  };
  

  return (
    <Container maxWidth="xs" className="login-container">
      <Paper className="login-form-paper">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" className="login-title">
            Login
          </Typography>
          <Typography variant="body2" className="login-subtitle">
            Please enter your credentials to login.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          {serverError && (
            <Typography variant="body2" className="error-message">
              {serverError}
            </Typography>
          )}

          <TextField
            fullWidth
            label="Employee ID"
            variant="outlined"
            margin="normal"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            error={Boolean(errors.empId)}
            helperText={errors.empId}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <Button variant="contained" color="primary" type="submit" fullWidth className="login-button">
            Login
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', marginTop: '15px' }}>
          <Typography variant="body2">
            Forgot your password?{' '}
            <Link href="#" variant="body2" className="forgot-password-link">
              Reset here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
