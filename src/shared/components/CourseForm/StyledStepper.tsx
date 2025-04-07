import { Stepper, styled } from "@mui/material";

const StyledStepper = styled(Stepper)(() => ({
  marginBottom: "40px",
  "& .MuiStepLabel-label": {
    fontSize: "14px",
    fontWeight: 400,
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontWeight: 600,
    color: "#6200ee",
  },
  "& .MuiStepIcon-root": {
    color: "#e0e0e0",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "#6200ee",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#6200ee",
  },
  "& .MuiStepConnector-line": {
    borderColor: "#e0e0e0",
  },
}));

export default StyledStepper;
