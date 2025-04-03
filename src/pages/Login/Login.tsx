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
} from "@mui/material";
import { Icon } from "../../shared/components/Icon";
import { useAuth } from "../../app/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("testpassword");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate("/overview");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            Hi There!
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
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
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                height: "48px",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                borderRadius: 8,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  bgcolor: "rgba(63, 63, 70, 0.1)",
                },
                boxShadow: "none",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Icon name="apple" size={18} color="#FFFFFF" sx={{ mr: 1 }} />
                Sign in with Apple
              </Box>
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography
              variant="body2"
              color="#888888"
              sx={{ fontSize: "13px" }}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sign up, it's free!
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
            }}
          />
        </Paper>
      </Container>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%", bgcolor: "#2A2A2A", color: "white" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
