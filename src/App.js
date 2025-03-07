import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import Dashboard1 from "./components/Dashboard/Dashboard1";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import PersonalInfoPage from './pages/PersonalInfoPage';
import SalaryDetailsPage from './pages/SalaryDetailsPage';
import LeaveRequestsPage from './pages/LeaveRequestsPage';
import PerformanceReviewsPage from './pages/PerformanceReviewsPage';
import TrainingProgramsPage from './pages/TrainingProgramsPage';
import CompanyAnnouncementsPage from './pages/CompanyAnnouncementsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import SystemLogs from './pages/SystemLogs';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Master1 from './pages/Master1';
import CompanyInfo from './pages/Info';
import GlobalDashboard from './pages/GlobalDashboard';
import EmployeeManagement from './pages/EmployeeManagement';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Registration" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard1" element={<Dashboard1 />} />
            <Route path="/UserManagement" element={<UserManagement />} />
            <Route path="/SystemLogs" element={<SystemLogs />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Master1" element={<Master1 />} />
            <Route path="/CompanyInfo" element={<CompanyInfo />} />
            <Route path="/GlobalDashboard" element={<GlobalDashboard />} />
            <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
            <Route path="/AnalyticsDashboard" element={<AnalyticsDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/personalinfo" element={<PersonalInfoPage />} />
            <Route path="/Salarydetails" element={<SalaryDetailsPage />} />
            <Route path="/LeaveRequest" element={<LeaveRequestsPage />} />
            <Route path="/Performace" element={<PerformanceReviewsPage />} />
            <Route path="/Training" element={<TrainingProgramsPage />} />
            <Route path="/CompanyAnnouncement" element={<CompanyAnnouncementsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
