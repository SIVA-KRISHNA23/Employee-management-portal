// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your actual backend base URL

// // Auth APIs
// export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
// export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);

// // User Management APIs
// export const fetchUsers = () => axios.get(`${API_BASE_URL}/users`);
// export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user);
// export const updateUser = (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user);
// export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);

// // Personal Information APIs
// export const fetchPersonalInfo = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/personal-info`);
// export const updatePersonalInfo = (userId, info) => axios.put(`${API_BASE_URL}/users/${userId}/personal-info`, info);

// // Salary Details APIs
// export const fetchSalaryDetails = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/salary-details`);
// export const updateSalaryDetails = (userId, details) => axios.put(`${API_BASE_URL}/users/${userId}/salary-details`, details);

// // Leave Requests APIs
// export const fetchLeaveRequests = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/leave-requests`);
// export const createLeaveRequest = (userId, leaveData) => axios.post(`${API_BASE_URL}/users/${userId}/leave-requests`, leaveData);
// export const updateLeaveRequest = (userId, requestId, leaveData) =>
//   axios.put(`${API_BASE_URL}/users/${userId}/leave-requests/${requestId}`, leaveData);
// export const deleteLeaveRequest = (userId, requestId) =>
//   axios.delete(`${API_BASE_URL}/users/${userId}/leave-requests/${requestId}`);

// // Performance Reviews APIs
// export const fetchPerformanceReviews = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/performance-reviews`);
// export const createPerformanceReview = (userId, reviewData) =>
//   axios.post(`${API_BASE_URL}/users/${userId}/performance-reviews`, reviewData);

// // Training Programs APIs
// export const fetchTrainingPrograms = () => axios.get(`${API_BASE_URL}/training-programs`);
// export const enrollInTraining = (userId, programId) =>
//   axios.post(`${API_BASE_URL}/users/${userId}/training-programs/${programId}`);

// // Company Announcements APIs
// export const fetchAnnouncements = () => axios.get(`${API_BASE_URL}/announcements`);
// export const createAnnouncement = (announcementData) => axios.post(`${API_BASE_URL}/announcements`, announcementData);

// // System Logs APIs (Admin Only)
// export const fetchSystemLogs = () => axios.get(`${API_BASE_URL}/system-logs`);

// // Analytics Dashboard APIs (Admin Only)
// export const fetchAnalyticsData = () => axios.get(`${API_BASE_URL}/analytics`);

// // Reports APIs (Admin Only)
// export const fetchReports = () => axios.get(`${API_BASE_URL}/reports`);

// // Notifications APIs
// export const fetchNotifications = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/notifications`);
// export const markNotificationAsRead = (userId, notificationId) =>
//   axios.put(`${API_BASE_URL}/users/${userId}/notifications/${notificationId}`);

// // Settings APIs
// export const fetchSettings = () => axios.get(`${API_BASE_URL}/settings`);
// export const updateSettings = (settingsData) => axios.put(`${API_BASE_URL}/settings`, settingsData);
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your actual backend base URL

// Utility to include JWT token in headers
const authHeader = () => {
  const token = localStorage.getItem('token');
  return { headers: { Authorization: `Bearer ${token}` } };
};

// Auth APIs
export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);

// User Management APIs
export const fetchUsers = () => axios.get(`${API_BASE_URL}/users`, authHeader());
export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user, authHeader());
export const updateUser = (empId, user) => axios.put(`${API_BASE_URL}/users/${empId}`, user, authHeader());
export const deleteUser = (empId) => axios.delete(`${API_BASE_URL}/users/${empId}`, authHeader());

// Personal Information APIs
export const fetchPersonalInfo = (empId) => axios.get(`${API_BASE_URL}/users/${empId}/personal-info`, authHeader());
export const updatePersonalInfo = (empId, info) => axios.put(`${API_BASE_URL}/users/${empId}/personal-info`, info, authHeader());

// Salary Details APIs
export const fetchSalaryDetails = (empId) => axios.get(`${API_BASE_URL}/users/${empId}/salary-details`, authHeader());
export const updateSalaryDetails = (empId, details) => axios.put(`${API_BASE_URL}/users/${empId}/salary-details`, details, authHeader());

// Leave Requests APIs
export const fetchLeaveRequests = (empId) => axios.get(`${API_BASE_URL}/users/${empId}/leave-requests`, authHeader());
export const createLeaveRequest = (empId, leaveData) => axios.post(`${API_BASE_URL}/users/${empId}/leave-requests`, leaveData, authHeader());
export const updateLeaveRequest = (empId, requestId, leaveData) =>
  axios.put(`${API_BASE_URL}/users/${empId}/leave-requests/${requestId}`, leaveData, authHeader());
export const deleteLeaveRequest = (empId, requestId) =>
  axios.delete(`${API_BASE_URL}/users/${empId}/leave-requests/${requestId}`, authHeader());

// Performance Reviews APIs
export const fetchPerformanceReviews = (empId) => axios.get(`${API_BASE_URL}/users/${empId}/performance-reviews`, authHeader());
export const createPerformanceReview = (empId, reviewData) =>
  axios.post(`${API_BASE_URL}/users/${empId}/performance-reviews`, reviewData, authHeader());

// Training Programs APIs
export const fetchTrainingPrograms = () => axios.get(`${API_BASE_URL}/training-programs`, authHeader());
export const enrollInTraining = (empId, programId) =>
  axios.post(`${API_BASE_URL}/users/${empId}/training-programs/${programId}`, {}, authHeader());

// Company Announcements APIs
export const fetchAnnouncements = () => axios.get(`${API_BASE_URL}/announcements`, authHeader());
export const createAnnouncement = (announcementData) => axios.post(`${API_BASE_URL}/announcements`, announcementData, authHeader());

// System Logs APIs (Admin Only)
export const fetchSystemLogs = () => axios.get(`${API_BASE_URL}/system-logs`, authHeader());

// Analytics Dashboard APIs (Admin Only)
export const fetchAnalyticsData = () => axios.get(`${API_BASE_URL}/analytics`, authHeader());

// Reports APIs (Admin Only)
export const fetchReports = () => axios.get(`${API_BASE_URL}/reports`, authHeader());

// Notifications APIs
export const fetchNotifications = (empId) => axios.get(`${API_BASE_URL}/users/${empId}/notifications`, authHeader());
export const markNotificationAsRead = (empId, notificationId) =>
  axios.put(`${API_BASE_URL}/users/${empId}/notifications/${notificationId}`, {}, authHeader());

// Settings APIs
export const fetchSettings = () => axios.get(`${API_BASE_URL}/settings`, authHeader());
export const updateSettings = (settingsData) => axios.put(`${API_BASE_URL}/settings`, settingsData, authHeader());

// Admin Dashboard Features API
export const fetchAdminFeatures = () => axios.get(`${API_BASE_URL}/admin/features`, authHeader());

// Financial Data APIs
export const fetchFinancialData = () => axios.get(`${API_BASE_URL}/financial-data`, authHeader());

// Budget Approvals APIs
export const fetchBudgetApprovals = () => axios.get(`${API_BASE_URL}/budget-approvals`, authHeader());
export const updateBudgetApproval = (id, status) => axios.put(`${API_BASE_URL}/budget-approvals/${id}`, { status }, authHeader());
