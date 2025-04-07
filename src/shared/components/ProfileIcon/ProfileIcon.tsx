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

export const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();

  console.log("ProfileIcon userData:", userData);

  console.log("userData:", userData);
  console.log("userRole:", userData?.role);

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
            color: "#333333",
            textTransform: "capitalize",
            backgroundColor: "rgba(77, 163, 255, 0.1)",
            padding: "4px 12px",
            borderRadius: "16px",
            fontWeight: 500,
          }}
        >
          {userData?.role}
        </Typography>
        <IconButton size="small" onClick={handleMenuOpen}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "#e0e0e0",
              color: "#666",
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
