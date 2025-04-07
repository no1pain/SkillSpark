import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { auth } from "../../../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/context/AuthContext";
import { getRoleStyles, getRoleColor } from "../../utils/roleStyles";

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
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
};
