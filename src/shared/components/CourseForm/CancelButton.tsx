import { Box, Typography } from "@mui/material";

interface CancelButtonProps {
  onClick: () => void;
  text?: string;
}

const CancelButton = ({
  onClick,
  text = "Cancel and return to overview",
}: CancelButtonProps) => {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography
        variant="body2"
        component="button"
        onClick={onClick}
        sx={{
          color: "#999",
          cursor: "pointer",
          border: "none",
          background: "none",
          textDecoration: "underline",
          "&:hover": {
            color: "#666",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CancelButton;
