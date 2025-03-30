import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './navigation/ProtectedRoute';

import '../shared/styles/global.css';
import SvgSprite from '../shared/components/SvgSprite';
import { AuthProvider } from './context/AuthContext';
import BackgroundProvider from './providers/BackgroundProvider';

function App() {
  return (
    <BackgroundProvider>
      <SvgSprite />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </BackgroundProvider>
  );
}

export default App;
