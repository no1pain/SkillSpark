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
import { SearchInput } from "../../shared/components/SearchInput/SearchInput";

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
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 1, sm: 0 },
            gap: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333333",
                fontSize: "1.5rem",
                letterSpacing: "0.5px",
                cursor: "pointer",
                flexShrink: 0,
                mr: 2,
              }}
              onClick={() => navigate("/")}
            >
              SkillSpark
            </Typography>

            {currentUser && (
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
                  color: "#333333",
                  display: { xs: "none", sm: "flex" },
                  mr: 2,
                }}
              >
                Explore
              </Button>
            )}

            <SearchInput
              maxWidth="600px"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {currentUser ? (
              <>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 2,
                    color: "#333333",
                    display: { xs: "none", sm: "block" },
                    mr: 2,
                  }}
                  onClick={() => navigate("/my-courses")}
                >
                  My learning
                </Button>
                <ProfileIcon />
              </>
            ) : (
              <>
                <Button
                  variant="text"
                  sx={{
                    color: "#333333",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    fontWeight: "normal",
                    borderRadius: "8px",
                    px: 2,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                      opacity: 0.8,
                    },
                    mr: 1,
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
                    borderRadius: "8px",
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
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
