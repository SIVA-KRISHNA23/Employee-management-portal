// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Grid,
//   Paper,
//   Typography,
//   Box,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import FileSaver from "file-saver";
// import axios from "axios";

// const sampleFinancialData = {
//   profits: [20000, 25000, 30000, 15000, 22000],
//   losses: [1000, 1500, 700, 2000, 1200],
//   salaries: [5000, 6000, 5500, 6200, 5800],
//   budgets: [30000, 35000, 40000, 25000, 30000],
//   months: ["January", "February", "March", "April", "May"],
// };

// const Info = () => {
//   const [financialData, setFinancialData] = useState(sampleFinancialData);
//   const [budgetApprovals, setBudgetApprovals] = useState([]);

//   useEffect(() => {
//     axios.get("/api/financial-data")
//       .then(response => setFinancialData(response.data))
//       .catch(error => console.error("Error fetching financial data", error));

//     axios.get("/api/budget-approvals")
//       .then(response => setBudgetApprovals(response.data))
//       .catch(error => console.error("Error fetching budget approvals", error));
//   }, []);

//   const downloadReport = (format) => {
//     const data = JSON.stringify(financialData, null, 2);
//     const blob = new Blob([data], { type: "application/json" });

//     if (format === "csv") {
//       const csvData = "Month,Profit,Loss,Salary,Budget\n" +
//         financialData.months.map((month, index) => `${month},${financialData.profits[index]},${financialData.losses[index]},${financialData.salaries[index]},${financialData.budgets[index]}`).join("\n");
//       const csvBlob = new Blob([csvData], { type: "text/csv" });
//       FileSaver.saveAs(csvBlob, "financial_report.csv");
//     } else if (format === "json") {
//       FileSaver.saveAs(blob, "financial_report.json");
//     }
//   };

//   const updateApprovalStatus = (id, status) => {
//     axios.put(`/api/budget-approvals/${id}`, { status })
//       .then(() => {
//         setBudgetApprovals(budgetApprovals.map(approval => 
//           approval.id === id ? { ...approval, status } : approval
//         ));
//       })
//       .catch(error => console.error("Error updating approval status", error));
//   };

//   return (
//     <Box sx={{ flexGrow: 1, padding: "20px" }}>
//       <Typography variant="h4" gutterBottom>Company Financial Overview</Typography>
//       <Grid container spacing={3}>
//         {/* Financial Charts */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Profits & Losses</Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={financialData.months.map((month, index) => ({
//                 month,
//                 profit: financialData.profits[index],
//                 loss: financialData.losses[index],
//               }))}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="profit" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="loss" stroke="#ff0000" />
//               </LineChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Salaries & Budgets</Typography>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={financialData.months.map((month, index) => ({
//                 month,
//                 salary: financialData.salaries[index],
//                 budget: financialData.budgets[index],
//               }))}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="salary" fill="#82ca9d" />
//                 <Bar dataKey="budget" fill="#ffc658" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         {/* Budget Approvals */}
//         <Grid item xs={12}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Budget Approvals</Typography>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Title</TableCell>
//                     <TableCell>Amount</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Actions</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {budgetApprovals.map((approval) => (
//                     <TableRow key={approval.id}>
//                       <TableCell>{approval.title}</TableCell>
//                       <TableCell>${approval.amount}</TableCell>
//                       <TableCell>{approval.status}</TableCell>
//                       <TableCell>
//                         <Button onClick={() => updateApprovalStatus(approval.id, "Approved")} color="success">Approve</Button>
//                         <Button onClick={() => updateApprovalStatus(approval.id, "Rejected")} color="error">Reject</Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Info;
import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import FileSaver from "file-saver";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Updated API Base URL

const Info = () => {
  const [financialData, setFinancialData] = useState({
    profits: [],
    losses: [],
    salaries: [],
    budgets: [],
    months: [],
  });
  const [budgetApprovals, setBudgetApprovals] = useState([]);

  useEffect(() => {
    // Fetch Financial Data
    axios.get(`${API_BASE_URL}/financial-data`)
      .then(response => setFinancialData(response.data))
      .catch(error => console.error("Error fetching financial data", error));

    // Fetch Budget Approvals
    axios.get(`${API_BASE_URL}/budget-approvals`)
      .then(response => setBudgetApprovals(response.data))
      .catch(error => console.error("Error fetching budget approvals", error));
  }, []);

  const downloadReport = (format) => {
    const data = JSON.stringify(financialData, null, 2);
    const blob = new Blob([data], { type: "application/json" });

    if (format === "csv") {
      const csvData = "Month,Profit,Loss,Salary,Budget\n" +
        financialData.months.map((month, index) => `${month},${financialData.profits[index]},${financialData.losses[index]},${financialData.salaries[index]},${financialData.budgets[index]}`).join("\n");
      const csvBlob = new Blob([csvData], { type: "text/csv" });
      FileSaver.saveAs(csvBlob, "financial_report.csv");
    } else if (format === "json") {
      FileSaver.saveAs(blob, "financial_report.json");
    }
  };

  const updateApprovalStatus = (id, status) => {
    axios.put(`${API_BASE_URL}/budget-approvals/${id}`, { status })
      .then(() => {
        setBudgetApprovals(budgetApprovals.map(approval => 
          approval.id === id ? { ...approval, status } : approval
        ));
      })
      .catch(error => console.error("Error updating approval status", error));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Typography variant="h4" gutterBottom>Company Financial Overview</Typography>
      <Grid container spacing={3}>
        {/* Financial Charts */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6">Profits & Losses</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={financialData.months.map((month, index) => ({
                month,
                profit: financialData.profits[index],
                loss: financialData.losses[index],
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#8884d8" />
                <Line type="monotone" dataKey="loss" stroke="#ff0000" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6">Salaries & Budgets</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={financialData.months.map((month, index) => ({
                month,
                salary: financialData.salaries[index],
                budget: financialData.budgets[index],
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" fill="#82ca9d" />
                <Bar dataKey="budget" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Budget Approvals */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h6">Budget Approvals</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {budgetApprovals.map((approval) => (
                    <TableRow key={approval.id}>
                      <TableCell>{approval.title}</TableCell>
                      <TableCell>${approval.amount}</TableCell>
                      <TableCell>{approval.status}</TableCell>
                      <TableCell>
                        <Button onClick={() => updateApprovalStatus(approval.id, "Approved")} color="success">Approve</Button>
                        <Button onClick={() => updateApprovalStatus(approval.id, "Rejected")} color="error">Reject</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
