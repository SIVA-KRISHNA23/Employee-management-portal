// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Button,
//   Tabs,
//   Tab,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
// } from '@mui/material';
// import { Edit, Delete, Add, Check, Close } from '@mui/icons-material';
// import './EmployeeManagement.css';

// const EmployeeManagement = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [open, setOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     emp_id: '',
//     name: '',
//     email: '',
//     password: '',
//     phoneno: '',
//     role: '',
//     status: '',
//     type: '',
//   });

//   const [employeesA, setEmployeesA] = useState([
//     { emp_id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: '12345', phoneno: '1234567890', role: 'Developer', status: 'Active' },
//     { emp_id: 2, name: 'Bob Smith', email: 'bob@example.com', password: '12345', phoneno: '0987654321', role: 'Designer', status: 'Inactive' },
//   ]);

//   const [employeesB, setEmployeesB] = useState([
//     { emp_id: 1, name: 'Charlie Brown', email: 'charlie@example.com', password: '12345', phoneno: '1122334455', role: 'Manager', status: 'Active' },
//     { emp_id: 2, name: 'David White', email: 'david@example.com', password: '12345', phoneno: '5566778899', role: 'HR', status: 'Inactive' },
//   ]);

//   const [requests, setRequests] = useState([
//     { req_id: 1, name: 'Eve Adams', email: 'eve@example.com', password: '12345', phoneno: '9876543210', role: 'Intern', status: 'Pending', type: 'A' },
//     { req_id: 2, name: 'Frank Green', email: 'frank@example.com', password: '12345', phoneno: '8765432109', role: 'Analyst', status: 'Pending', type: 'B' },
//   ]);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   const handleOpen = (employee = null) => {
//     if (employee) {
//       setEditMode(true);
//       setFormData(employee);
//     } else {
//       setEditMode(false);
//       setFormData({ emp_id: '', name: '', email: '', password: '', phoneno: '', role: '', status: '', type: '' });
//     }
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSave = () => {
//     const updatedData = tabValue === 0 ? [...employeesA] : [...employeesB];

//     if (editMode) {
//       const index = updatedData.findIndex((emp) => emp.emp_id === formData.emp_id);
//       updatedData[index] = formData;
//     } else {
//       formData.emp_id = updatedData.length + 1;
//       updatedData.push(formData);
//     }

//     tabValue === 0 ? setEmployeesA(updatedData) : setEmployeesB(updatedData);
//     handleClose();
//   };

//   const handleDelete = (emp_id) => {
//     const updatedData = (tabValue === 0 ? employeesA : employeesB).filter(
//       (emp) => emp.emp_id !== emp_id
//     );
//     tabValue === 0 ? setEmployeesA(updatedData) : setEmployeesB(updatedData);
//   };

//   const handleApprove = (req_id) => {
//     const request = requests.find((req) => req.req_id === req_id);
//     if (request) {
//       if (request.type === 'A') {
//         setEmployeesA([...employeesA, { ...request, emp_id: employeesA.length + 1, status: 'Active' }]);
//       } else {
//         setEmployeesB([...employeesB, { ...request, emp_id: employeesB.length + 1, status: 'Active' }]);
//       }
//       setRequests(requests.filter((req) => req.req_id !== req_id));
//     }
//   };

//   const handleReject = (req_id) => {
//     setRequests(requests.filter((req) => req.req_id !== req_id));
//   };

//   const renderTable = (employees) => (
//     <TableContainer component={Paper} className="employee-table">
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Emp ID</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Password</TableCell>
//             <TableCell>Phone No</TableCell>
//             <TableCell>Role</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees.map((emp) => (
//             <TableRow key={emp.emp_id}>
//               <TableCell>{emp.emp_id}</TableCell>
//               <TableCell>{emp.name}</TableCell>
//               <TableCell>{emp.email}</TableCell>
//               <TableCell>{emp.password}</TableCell>
//               <TableCell>{emp.phoneno}</TableCell>
//               <TableCell>{emp.role}</TableCell>
//               <TableCell>{emp.status}</TableCell>
//               <TableCell>
//                 <IconButton onClick={() => handleOpen(emp)}>
//                   <Edit color="primary" />
//                 </IconButton>
//                 <IconButton onClick={() => handleDelete(emp.emp_id)}>
//                   <Delete color="error" />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );

//   return (
//     <Container maxWidth="lg" className="employee-management-container">
//       <Typography variant="h4" className="page-title">
//         Employee Management
//       </Typography>

//       <Tabs
//         value={tabValue}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//         variant="fullWidth"
//       >
//         <Tab label="Type A Employees" />
//         <Tab label="Type B Employees" />
//       </Tabs>

//       <Card className="employee-card">
//         <CardContent>
//           {tabValue === 0 ? renderTable(employeesA) : renderTable(employeesB)}
//         </CardContent>
//       </Card>

//       <Card className="request-card">
//         <CardContent>
//           <Typography variant="h6">Requests</Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Request ID</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Role</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {requests.map((req) => (
//                   <TableRow key={req.req_id}>
//                     <TableCell>{req.req_id}</TableCell>
//                     <TableCell>{req.name}</TableCell>
//                     <TableCell>{req.email}</TableCell>
//                     <TableCell>{req.role}</TableCell>
//                     <TableCell>{req.type}</TableCell>
//                     <TableCell>
//                       <IconButton onClick={() => handleApprove(req.req_id)}>
//                         <Check color="primary" />
//                       </IconButton>
//                       <IconButton onClick={() => handleReject(req.req_id)}>
//                         <Close color="error" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default EmployeeManagement;
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import { Edit, Delete, Add, Check, Close } from '@mui/icons-material';
import axios from 'axios';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const [tabValue, setTabValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    emp_id: '',
    name: '',
    email: '',
    password: '',
    phoneno: '',
    role: '',
    status: '',
    type: '',
  });

  const [employeesA, setEmployeesA] = useState([]);
  const [employeesB, setEmployeesB] = useState([]);
  const [requests, setRequests] = useState([]);

  // Fetch data from backend
  const fetchEmployees = async () => {
    const typeA = await axios.get('/api/employees/typeA');
    const typeB = await axios.get('/api/employees/typeB');
    const requestList = await axios.get('/api/requests');

    setEmployeesA(typeA.data);
    setEmployeesB(typeB.data);
    setRequests(requestList.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpen = (employee = null) => {
    if (employee) {
      setEditMode(true);
      setFormData(employee);
    } else {
      setEditMode(false);
      setFormData({ emp_id: '', name: '', email: '', password: '', phoneno: '', role: '', status: '', type: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (editMode) {
      await axios.put(`/api/employees/${formData.emp_id}`, formData);
    } else {
      await axios.post('/api/employees', formData);
    }
    fetchEmployees();
    handleClose();
  };

  const handleDelete = async (emp_id) => {
    await axios.delete(`/api/employees/${emp_id}`);
    fetchEmployees();
  };

  const handleApprove = async (req_id) => {
    const request = requests.find((req) => req.req_id === req_id);
    if (request) {
      await axios.post('/api/employees', { ...request, status: 'Active' });
      await axios.delete(`/api/requests/${req_id}`);
      fetchEmployees();
    }
  };

  const handleReject = async (req_id) => {
    await axios.delete(`/api/requests/${req_id}`);
    fetchEmployees();
  };

  const renderTable = (employees) => (
    <TableContainer component={Paper} className="employee-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emp ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp.emp_id}>
              <TableCell>{emp.emp_id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.phoneno}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.status}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpen(emp)}>
                  <Edit color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(emp.emp_id)}>
                  <Delete color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Container maxWidth="lg" className="employee-management-container">
      <Typography variant="h4" className="page-title">
        Employee Management
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Type A Employees" />
        <Tab label="Type B Employees" />
      </Tabs>

      <Card className="employee-card">
        <CardContent>
          {tabValue === 0 ? renderTable(employeesA) : renderTable(employeesB)}
        </CardContent>
      </Card>

      <Card className="request-card">
        <CardContent>
          <Typography variant="h6">Requests</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Request ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((req) => (
                  <TableRow key={req.req_id}>
                    <TableCell>{req.req_id}</TableCell>
                    <TableCell>{req.name}</TableCell>
                    <TableCell>{req.email}</TableCell>
                    <TableCell>{req.role}</TableCell>
                    <TableCell>{req.type}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleApprove(req.req_id)}>
                        <Check color="primary" />
                      </IconButton>
                      <IconButton onClick={() => handleReject(req.req_id)}>
                        <Close color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmployeeManagement;
