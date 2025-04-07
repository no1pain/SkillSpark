import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../app/context/AuthContext";
import { ProfileIcon } from "../../shared/components/ProfileIcon/ProfileIcon";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        py: 0.5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, sm: 2 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#333333",
              fontSize: "1.5rem",
              letterSpacing: "0.5px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            SkillSpark
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            {currentUser && (
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 2,
                  color: "#333333",
                }}
                onClick={() => navigate("/my-courses")}
              >
                My Courses
              </Button>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {!currentUser ? (
              <>
                <Button
                  variant="text"
                  sx={{
                    color: "#333333",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    fontWeight: "normal",
                    borderRadius: "20px",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => navigate("/login")}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#4da3ff",
                    "&:hover": {
                      bgcolor: "#3d93ff",
                    },
                    textTransform: "none",
                    borderRadius: "20px",
                    px: 3,
                    py: 0.7,
                    fontSize: "0.9rem",
                    fontWeight: "normal",
                    boxShadow: "none",
                    color: "white",
                  }}
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <ProfileIcon />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
