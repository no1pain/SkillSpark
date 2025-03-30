import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './navigation/ProtectedRoute';

import '../shared/styles/global.css';
import SvgSprite from '../shared/components/SvgSprite';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#121212", 
      backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      backgroundSize: "50px 50px",
      minHeight: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }}>
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
    </div>
  );
}

export default App;
