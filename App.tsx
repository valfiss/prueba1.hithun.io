
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Login from './pages/Login';
import Roles from './pages/Roles';
import Teachers from './pages/Teachers';
import AcademicData from './pages/AcademicData';
import Attendance from './pages/Attendance';
import Kardex from './pages/Kardex';
import Courses from './pages/Courses';
import TeacherLeave from './pages/TeacherLeave';
import Grades from './pages/Grades';
import PedagogicalRegistry from './pages/PedagogicalRegistry';
import Statistics from './pages/Statistics';
import Planning from './pages/Planning';
import ProgressTracking from './pages/ProgressTracking';
import Advisors from './pages/Advisors';
import { dbService } from './services/dbService';
import { UserRole, AppUser } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentRole, setCurrentRole] = useState<UserRole>(() => (localStorage.getItem('userRole') as UserRole) || 'Administrador');

  useEffect(() => {
    dbService.init();
  }, []);

  const handleLogin = (role: UserRole, user: AppUser) => {
    setIsAuthenticated(true);
    setCurrentRole(role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
  };

  if (!isAuthenticated) return <Login onLogin={handleLogin} />;

  return (
    <HashRouter>
      <Layout onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {(currentRole === 'Administrador' || currentRole === 'Profesor') && (
            <>
              <Route path="/progress-tracking" element={<ProgressTracking />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/kardex" element={<Kardex />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/leave-requests" element={<TeacherLeave />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/pedagogical-registry" element={<PedagogicalRegistry />} />
            </>
          )}
          {currentRole === 'Administrador' && (
            <>
              <Route path="/students" element={<Students />} />
              <Route path="/advisors" element={<Advisors />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/academic-data" element={<AcademicData />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
