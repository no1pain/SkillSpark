import { TextField, styled, alpha } from "@mui/material";

const ModernTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    border: "1px solid #e0e0e0",
    padding: "0",
    "&.Mui-focused": {
      boxShadow: "0 0 0 2px rgba(98, 0, 238, 0.1)",
      border: "1px solid #e0e0e0",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "16px 14px",
    fontSize: "16px",
    "&::placeholder": {
      color: alpha(theme.palette.text.primary, 0.5),
      opacity: 0.7,
    },
  },
  "& .MuiFormLabel-root": {
    color: alpha(theme.palette.text.primary, 0.6),
    fontWeight: 500,
    fontSize: "14px",
    transform: "translate(14px, 16px) scale(1)",
    "&.Mui-focused": {
      color: theme.palette.text.primary,
    },
    "&.MuiFormLabel-filled": {
      transform: "translate(14px, -9px) scale(0.75)",
      backgroundColor: "#f5f5f5",
      padding: "0 8px",
    },
  },
  "& .MuiFormLabel-root.Mui-focused": {
    transform: "translate(14px, -9px) scale(0.75)",
    backgroundColor: "#f5f5f5",
    padding: "0 8px",
  },
  "& .MuiInputAdornment-root": {
    marginRight: 8,
  },
}));

export default ModernTextField;
