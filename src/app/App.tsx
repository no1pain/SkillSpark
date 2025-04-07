import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Overview from "../pages/Overview";
import AddCourse from "../pages/AddCourse";
import ProtectedRoute from "./navigation/ProtectedRoute";

import "../shared/styles/global.css";
import SvgSprite from "../shared/components/SvgSprite";
import { AuthProvider } from "./context/AuthContext";
import BackgroundProvider from "./providers/BackgroundProvider";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BackgroundProvider>
      <SvgSprite />
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={
                <MainLayout>
                  <Login />
                </MainLayout>
              }
            />
            <Route
              path="/register"
              element={
                <MainLayout>
                  <Register />
                </MainLayout>
              }
            />
            <Route
              path="/overview"
              element={
                <MainLayout>
                  <Overview />
                </MainLayout>
              }
            />
            <Route
              path="/add-course"
              element={
                <ProtectedRoute requiredRole="creator">
                  <MainLayout>
                    <AddCourse />
                  </MainLayout>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </BackgroundProvider>
  );
}

export default App;
