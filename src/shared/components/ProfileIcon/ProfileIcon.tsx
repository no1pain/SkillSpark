import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material";
import { auth } from "../../../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/context/AuthContext";
import { getRoleStyles, getRoleColor } from "../../utils/roleStyles";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddCourse = () => {
    handleMenuClose();
    navigate("/add-course");
  };

  const handleSettings = () => {
    handleMenuClose();
    navigate("/settings");
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      handleMenuClose();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!currentUser) return null;

  const isCreator = userData?.role === "creator";

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isCreator && (
          <Typography
            variant="body2"
            sx={{
              textTransform: "capitalize",
              ...getRoleStyles(userData?.role),
            }}
          >
            Creator
          </Typography>
        )}
        <IconButton size="small" onClick={handleMenuOpen}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: getRoleColor(userData?.role),
              color: "white",
            }}
          >
            {currentUser.email?.[0].toUpperCase()}
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: "200px",
            borderRadius: "8px",
            mt: 1,
            backgroundColor: "#2a2a2a",
            color: "white",
            "& .MuiMenuItem-root": {
              px: 2,
              py: 1.5,
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              "&:last-child": {
                borderBottom: "none",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            },
            "& .MuiListItemIcon-root": {
              minWidth: "40px",
              color: "white",
            },
            "& .MuiDivider-root": {
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        }}
      >
        {isCreator && (
          <MenuItem onClick={handleAddCourse}>
            <ListItemIcon>
              <AddIcon fontSize="small" sx={{ color: "white" }} />
            </ListItemIcon>
            <Typography sx={{ color: "white" }}>Add Course</Typography>
          </MenuItem>
        )}

        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" sx={{ color: "white" }} />
          </ListItemIcon>
          <Typography sx={{ color: "white" }}>Settings</Typography>
        </MenuItem>

        <MenuItem onClick={handleSignOut} sx={{ color: "#ff5252" }}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" sx={{ color: "#ff5252" }} />
          </ListItemIcon>
          <Typography sx={{ color: "#ff5252" }}>Sign out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
