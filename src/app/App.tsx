import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

import '../shared/icons/sprite.svg';
import '../shared/styles/global.css';

function App() {
  return (
    <div style={{ 
      backgroundColor: "#000000", 
      minHeight: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Redirect to login as default */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
