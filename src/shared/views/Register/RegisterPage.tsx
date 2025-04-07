import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Icon } from "@components/Icon";
import { useAuth, UserRole } from "@context/AuthContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<UserRole>("learner");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const userData = {
        name: username,
        email,
        role,
      };
      await signUp(email, password, userData);
      navigate("/overview");
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newRole: UserRole | null
  ) => {
    if (newRole !== null) {
      setRole(newRole);
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ p: 0 }}>
        <Paper
          elevation={3}
          sx={{
            py: 4,
            px: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 16,
            bgcolor: "rgba(40, 40, 40, 0.8)",
            backdropFilter: "blur(10px)",
            maxWidth: "360px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              bgcolor: "rgba(70, 70, 70, 0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 1.5,
            }}
          >
            <Icon name="ethereum" size={24} color="#FFFFFF" />
          </Box>

          <Typography
            component="h1"
            variant="h5"
            color="white"
            sx={{ mb: 2, fontWeight: 500, fontSize: "22px" }}
          >
            Create Account
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
              <ToggleButtonGroup
                value={role}
                exclusive
                onChange={handleRoleChange}
                aria-label="user role"
                sx={{
                  bgcolor: "rgba(60, 60, 60, 0.5)",
                  borderRadius: 8,
                  "& .MuiToggleButton-root": {
                    color: "white",
                    border: "none",
                    px: 3,
                    py: 1,
                    "&.Mui-selected": {
                      bgcolor: "#4da3ff",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#3d93ff",
                      },
                    },
                    "&:hover": {
                      bgcolor: "rgba(77, 163, 255, 0.1)",
                    },
                  },
                }}
              >
                <ToggleButton value="learner">Learner</ToggleButton>
                <ToggleButton value="creator">Creator</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box
              sx={{
                mb: 1.5,
                bgcolor: "rgba(60, 60, 60, 0.5)",
                borderRadius: 8,
                height: "48px",
                overflow: "hidden",
              }}
            >
              <Box
                component="label"
                sx={{ position: "relative", display: "block", height: "100%" }}
              >
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "15px",
                    padding: "0 16px",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </Box>
            </Box>

            <Box
              sx={{
                mb: 1.5,
                bgcolor: "rgba(60, 60, 60, 0.5)",
                borderRadius: 8,
                height: "48px",
                overflow: "hidden",
              }}
            >
              <Box
                component="label"
                sx={{ position: "relative", display: "block", height: "100%" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "15px",
                    padding: "0 16px",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </Box>
            </Box>

            <Box
              sx={{
                mb: 1.5,
                bgcolor: "rgba(60, 60, 60, 0.5)",
                borderRadius: 8,
                height: "48px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component="label"
                sx={{ position: "relative", display: "block", height: "100%" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "15px",
                    padding: "0 16px",
                    paddingRight: "44px",
                    boxSizing: "border-box",
                  }}
                  required
                />
                <IconButton
                  size="small"
                  onClick={handleTogglePasswordVisibility}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#888888",
                    padding: "4px",
                  }}
                >
                  <Icon
                    name={showPassword ? "visibility-off" : "visibility"}
                    size={20}
                    color="#FFFFFF"
                  />
                </IconButton>
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                height: "48px",
                my: 1.5,
                bgcolor: "#333333",
                color: "white",
                borderRadius: 8,
                "&:hover": { bgcolor: "#444444" },
                textTransform: "none",
                boxShadow: "none",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography
                variant="body2"
                color="#888888"
                sx={{ fontSize: "13px", textAlign: "center" }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 4,
                width: "40%",
                height: "4px",
                bgcolor: "#333333",
                borderRadius: 2,
                mx: "auto",
              }}
            />
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterPage;
