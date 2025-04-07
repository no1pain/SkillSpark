import React from "react";
import { Box, Typography } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "transparent",
        position: "relative",
      }}
    >
      {children}

      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: 0,
          width: "100%",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "rgba(0, 0, 0, 0.7)", fontSize: "13px" }}
        >
          Join our community on{" "}
          <Box
            component="span"
            sx={{
              color: "#4da3ff",
              cursor: "pointer",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Twitter
          </Box>{" "}
          and{" "}
          <Box
            component="span"
            sx={{
              color: "#5865F2",
              cursor: "pointer",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Discord
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default MainLayout;
