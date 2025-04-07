import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Divider,
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
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            ...getRoleStyles(userData?.role),
          }}
        >
          {userData?.role || "User"}
        </Typography>
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
            borderRadius: "10px",
            mt: 1,
            "& .MuiMenuItem-root": {
              px: 2,
              py: 1.25,
            },
          },
        }}
      >
        {isCreator && (
          <MenuItem onClick={handleAddCourse}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            Add Course
          </MenuItem>
        )}

        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography color="error">Sign out</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
