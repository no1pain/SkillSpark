import { Stepper, styled } from "@mui/material";

const StyledStepper = styled(Stepper)(() => ({
  marginBottom: "40px",
  "& .MuiStepLabel-label": {
    fontSize: "15px",
    fontWeight: 400,
    color: "#666",
    transition: "all 0.2s ease",
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontWeight: 600,
    color: "#6200ee",
    fontSize: "16px",
  },
  "& .MuiStepLabel-label.Mui-completed": {
    color: "#6200ee",
    opacity: 0.8,
  },
  "& .MuiStepIcon-root": {
    color: "#e0e0e0",
    width: "32px",
    height: "32px",
    transition: "all 0.3s ease",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "#6200ee",
    filter: "drop-shadow(0 2px 5px rgba(98, 0, 238, 0.3))",
    transform: "scale(1.1)",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#6200ee",
  },
  "& .MuiStepConnector-line": {
    borderColor: "#e0e0e0",
    borderWidth: "2px",
    transition: "all 0.3s ease",
  },
  "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
    borderColor: "#6200ee",
  },
  "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
    borderColor: "#6200ee",
  },
}));

export default StyledStepper;
