import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../context/AuthContext";
import { Box, CircularProgress } from "@mui/material";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { currentUser, userData, loading } = useAuth();

  // Show loading indicator while authentication state is being determined
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#4da3ff" }} />
      </Box>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userData?.role !== requiredRole) {
    return <Navigate to="/overview" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
