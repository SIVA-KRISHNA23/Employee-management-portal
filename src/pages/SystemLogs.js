// import React, { useState, } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
//   Pagination,
// } from '@mui/material';
// import { Search as SearchIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
// import './SystemLogs.css';

// // Mock Data
// const logsData = [
//   { id: 1, timestamp: '2024-12-09 12:30:00', user: 'John Doe', action: 'Logged in', status: 'Success' },
//   { id: 2, timestamp: '2024-12-09 12:35:00', user: 'Jane Smith', action: 'Failed login attempt', status: 'Failure' },
//   { id: 3, timestamp: '2024-12-09 12:40:00', user: 'Sam Wilson', action: 'Logged out', status: 'Success' },
//   { id: 4, timestamp: '2024-12-09 12:45:00', user: 'Emily Johnson', action: 'Changed password', status: 'Success' },
//   // Add more logs as needed
// ];

// const SystemLogs = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedLog, setSelectedLog] = useState(null);
//   const [open, setOpen] = useState(false);

//   const logsPerPage = 5;
//   const displayedLogs = logsData
//     .filter((log) => log.user.toLowerCase().includes(searchQuery.toLowerCase()))
//     .slice((currentPage - 1) * logsPerPage, currentPage * logsPerPage);

//   const handleOpen = (log) => {
//     setSelectedLog(log);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedLog(null);
//   };

//   return (
//     <Box className="system-logs-container">
//       {/* Hero Section */}
//       <Box className="system-logs-hero">
//         <Typography variant="h3" className="system-logs-title">
//           System Logs
//         </Typography>
//         <Typography variant="subtitle1" className="system-logs-subtitle">
//           Track user actions, events, and system activity for monitoring and auditing.
//         </Typography>
//       </Box>

//       {/* Search Section */}
//       <Container className="system-logs-search-container">
//         <Box className="system-logs-search-box">
//           <input
//             type="text"
//             placeholder="Search by user..."
//             className="system-logs-search-input"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <IconButton className="system-logs-search-button">
//             <SearchIcon />
//           </IconButton>
//         </Box>
//       </Container>

//       {/* Logs Table */}
//       <Container className="system-logs-table-container">
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Timestamp</TableCell>
//                 <TableCell>User</TableCell>
//                 <TableCell>Action</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Details</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {displayedLogs.map((log) => (
//                 <TableRow key={log.id}>
//                   <TableCell>{log.timestamp}</TableCell>
//                   <TableCell>{log.user}</TableCell>
//                   <TableCell>{log.action}</TableCell>
//                   <TableCell>{log.status}</TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => handleOpen(log)}>
//                       <VisibilityIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Pagination */}
//         <Box display="flex" justifyContent="center" marginTop={2}>
//           <Pagination
//             count={Math.ceil(logsData.length / logsPerPage)}
//             page={currentPage}
//             onChange={(event, page) => setCurrentPage(page)}
//           />
//         </Box>
//       </Container>

//       {/* Log Details Dialog */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Log Details</DialogTitle>
//         <DialogContent>
//           {selectedLog && (
//             <Box>
//               <Typography><strong>Timestamp:</strong> {selectedLog.timestamp}</Typography>
//               <Typography><strong>User:</strong> {selectedLog.user}</Typography>
//               <Typography><strong>Action:</strong> {selectedLog.action}</Typography>
//               <Typography><strong>Status:</strong> {selectedLog.status}</Typography>
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

// export default SystemLogs;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Pagination,
  CircularProgress,
  Alert,
} from '@mui/material';
import { Search as SearchIcon, Visibility as VisibilityIcon, Download as DownloadIcon } from '@mui/icons-material';
import axios from 'axios';
import './SystemLogs.css';

const SystemLogs = () => {
  const [logsData, setLogsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLog, setSelectedLog] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logsPerPage = 5;

  useEffect(() => {
    // Fetch logs from an API
    axios
      .get('/api/logs') // Update this endpoint as per your backend
      .then((response) => {
        setLogsData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch logs.');
        setLoading(false);
      });
  }, []);

  const displayedLogs = logsData
    .filter((log) =>
      log.user.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice((currentPage - 1) * logsPerPage, currentPage * logsPerPage);

  const handleOpen = (log) => {
    setSelectedLog(log);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLog(null);
  };

  const handleExportLogs = () => {
    const csvContent = logsData
      .map(
        (log) =>
          `${log.timestamp},${log.user},${log.action},${log.status}`
      )
      .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'system_logs.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box className="system-logs-container">
      {/* Hero Section */}
      <Box className="system-logs-hero">
        <Typography variant="h3" className="system-logs-title">
          System Logs
        </Typography>
        <Typography variant="subtitle1" className="system-logs-subtitle">
          Track user actions, events, and system activity for monitoring and auditing.
        </Typography>
      </Box>

      {/* Search and Export Section */}
      <Container className="system-logs-search-container">
        <Box className="system-logs-search-box">
          <input
            type="text"
            placeholder="Search by user..."
            className="system-logs-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton className="system-logs-search-button">
            <SearchIcon />
          </IconButton>
        </Box>
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          onClick={handleExportLogs}
        >
          Export Logs
        </Button>
      </Container>

      {/* Logs Table */}
      <Container className="system-logs-table-container">
        {displayedLogs.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell style={{ color: log.status === 'Success' ? 'green' : 'red' }}>
                      {log.status}
                    </TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => handleOpen(log)}>
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography align="center" marginTop={2}>
            No logs found for the search query.
          </Typography>
        )}

        {/* Pagination */}
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Pagination
            count={Math.ceil(logsData.length / logsPerPage)}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
          />
        </Box>
      </Container>

      {/* Log Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log Details</DialogTitle>
        <DialogContent>
          {selectedLog && (
            <Box>
              <Typography><strong>Timestamp:</strong> {selectedLog.timestamp}</Typography>
              <Typography><strong>User:</strong> {selectedLog.user}</Typography>
              <Typography><strong>Action:</strong> {selectedLog.action}</Typography>
              <Typography><strong>Status:</strong> {selectedLog.status}</Typography>
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

export default SystemLogs;
