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
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Pagination,
// } from '@mui/material';
// import {
//   AddCircleOutline as AddCircleOutlineIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Visibility as VisibilityIcon,
//   Search as SearchIcon,
// } from '@mui/icons-material';
// import './UserManagement.css';

// // Mock Data
// const userStats = [
//   { id: 1, label: 'Total Users', value: '3,245', color: '#2196f3' },
//   { id: 2, label: 'New Users Today', value: '125', color: '#4caf50' },
//   { id: 3, label: 'Removed Users', value: '30', color: '#f44336' },
// ];

// const usersData = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
//   { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Viewer', status: 'Active' },
//   { id: 4, name: 'Emily Johnson', email: 'emily@example.com', role: 'Editor', status: 'Active' },
//   // Add more mock users here
// ];

// const UserManagement = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   const handleOpen = (user) => {
//     setSelectedUser(user);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedUser(null);
//   };

//   const usersPerPage = 5;
//   const displayedUsers = usersData
//     .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
//     .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

//   return (
//     <Box className="user-management-container">
//       {/* Hero Section */}
//       <Box className="user-management-hero">
//         <Typography variant="h3" className="user-management-title">
//           User Management
//         </Typography>
//         <Typography variant="subtitle1" className="user-management-subtitle">
//           Centralized control for user onboarding, role assignment, and monitoring.
//         </Typography>
//       </Box>

//       {/* Statistics Section */}
//       <Container className="user-stats-container">
//         <Grid container spacing={4}>
//           {userStats.map((stat) => (
//             <Grid item xs={12} sm={6} md={4} key={stat.id}>
//               <Card className="user-stat-card" style={{ borderLeft: `5px solid ${stat.color}` }}>
//                 <CardContent className="user-stat-content">
//                   <Avatar style={{ backgroundColor: stat.color }} className="user-stat-icon">
//                     {stat.label.charAt(0)}
//                   </Avatar>
//                   <Typography variant="h5" className="user-stat-value">
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="subtitle1" className="user-stat-label">
//                     {stat.label}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Tabs Section */}
//       <Container className="user-tabs-container">
//         <Tabs value={tabIndex} onChange={handleTabChange} centered>
//           <Tab label="User List" />
//           <Tab label="Add User" />
//         </Tabs>

//         {tabIndex === 0 && (
//           <Box className="user-list-tab">
//             {/* Search Field */}
//             <TextField
//               variant="outlined"
//               placeholder="Search users..."
//               fullWidth
//               margin="normal"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               InputProps={{
//                 endAdornment: <SearchIcon />,
//               }}
//             />

//             {/* Table */}
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>ID</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Email</TableCell>
//                     <TableCell>Role</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {displayedUsers.map((user) => (
//                     <TableRow key={user.id}>
//                       <TableCell>{user.id}</TableCell>
//                       <TableCell>{user.name}</TableCell>
//                       <TableCell>{user.email}</TableCell>
//                       <TableCell>{user.role}</TableCell>
//                       <TableCell>{user.status}</TableCell>
//                       <TableCell>
//                         <IconButton color="primary" onClick={() => handleOpen(user)}>
//                           <VisibilityIcon />
//                         </IconButton>
//                         <IconButton color="secondary">
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton color="error">
//                           <DeleteIcon />
//                         </IconButton>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             {/* Pagination */}
//             <Box display="flex" justifyContent="center" marginTop={2}>
//               <Pagination
//                 count={Math.ceil(usersData.length / usersPerPage)}
//                 page={currentPage}
//                 onChange={(event, page) => setCurrentPage(page)}
//               />
//             </Box>
//           </Box>
//         )}

//         {tabIndex === 1 && (
//           <Box className="add-user-tab">
//             <Typography variant="h5" gutterBottom>
//               Add New User
//             </Typography>
//             <TextField label="Name" variant="outlined" fullWidth margin="normal" />
//             <TextField label="Email" variant="outlined" fullWidth margin="normal" />
//             <TextField label="Role" variant="outlined" fullWidth margin="normal" />
//             <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>
//               Add User
//             </Button>
//           </Box>
//         )}
//       </Container>

//       {/* User Details Dialog */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>User Details</DialogTitle>
//         <DialogContent>
//           {selectedUser && (
//             <Box>
//               <Typography><strong>ID:</strong> {selectedUser.id}</Typography>
//               <Typography><strong>Name:</strong> {selectedUser.name}</Typography>
//               <Typography><strong>Email:</strong> {selectedUser.email}</Typography>
//               <Typography><strong>Role:</strong> {selectedUser.role}</Typography>
//               <Typography><strong>Status:</strong> {selectedUser.status}</Typography>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default UserManagement;
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
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import {
  AddCircleOutline as AddCircleOutlineIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import axios from 'axios';
import './UserManagement.css';

const UserManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add User Form States
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '', // New Phone number field
    role: 'user',
  });
  const [formErrors, setFormErrors] = useState({});

  const usersPerPage = 5;

  // Fetch user statistics
  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/user-stats');
        setUserStats(response.data);
      } catch (err) {
        console.error('Failed to fetch user stats:', err);
        setError('Failed to load user statistics.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserStats();
  }, []);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError('Failed to load user data.');
      } finally { 
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const displayedUsers = users
    .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  // Handle Input Change for New User
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle Add User Submission
  const handleAddUser = async () => {
    // Form Validation
    const errors = {};
    if (!newUser.name) errors.name = 'Name is required';
    if (!newUser.email) errors.email = 'Email is required';
    if (!newUser.password) errors.password = 'Password is required';
    if (!newUser.phone) errors.phone = 'Phone number is required'; // Validate phone number
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users', newUser);
      setNewUser({ name: '', email: '', password: '', phone: '', role: 'user' });
      setTabIndex(0); // Switch back to user list after adding
    } catch (err) {
      setError('Failed to add user.');
      console.error('Error adding user:', err);
    }
  };

  return (
    <Box className="user-management-container">
      {/* Hero Section */}
      <Box className="user-management-hero">
        <Typography variant="h3" className="user-management-title">
          User Management
        </Typography>
        <Typography variant="subtitle1" className="user-management-subtitle">
          Centralized control for user onboarding, role assignment, and monitoring.
        </Typography>
      </Box>

      {/* Statistics Section */}
      <Container className="user-stats-container">
        <Grid container spacing={4}>
          {userStats.map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.id}>
              <Card className="user-stat-card" style={{ borderLeft: `5px solid ${stat.color}` }}>
                <CardContent className="user-stat-content">
                  <Avatar style={{ backgroundColor: stat.color }} className="user-stat-icon">
                    {stat.label.charAt(0)}
                  </Avatar>
                  <Typography variant="h5" className="user-stat-value">
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" className="user-stat-label">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Tabs Section */}
      <Container className="user-tabs-container">
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="User List" />
          <Tab label="Add User" />
        </Tabs>

        {tabIndex === 0 && (
          <Box className="user-list-tab">
            {/* Search Field */}
            <TextField
              variant="outlined"
              placeholder="Search users..."
              fullWidth
              margin="normal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />

            {/* Table */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleOpen(user)}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton color="secondary">
                          <EditIcon />
                        </IconButton>
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Pagination
                count={Math.ceil(users.length / usersPerPage)}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
              />
            </Box>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box className="add-user-tab">
            <Typography variant="h5" gutterBottom>
              Add New User
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              error={Boolean(formErrors.name)}
              helperText={formErrors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={newUser.password}
              onChange={handleInputChange}
              error={Boolean(formErrors.password)}
              helperText={formErrors.password}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={newUser.phone}
              onChange={handleInputChange}
              error={Boolean(formErrors.phone)}
              helperText={formErrors.phone}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="moderator">Moderator</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddUser}
              disabled={loading}
            >
              Add User
            </Button>
          </Box>
        )}
      </Container>

      {/* User Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Box>
              <Typography>
                <strong>ID:</strong> {selectedUser.id}
              </Typography>
              <Typography>
                <strong>Name:</strong> {selectedUser.name}
              </Typography>
              <Typography>
                <strong>Email:</strong> {selectedUser.email}
              </Typography>
              <Typography>
                <strong>Role:</strong> {selectedUser.role}
              </Typography>
              <Typography>
                <strong>Status:</strong> {selectedUser.status}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
