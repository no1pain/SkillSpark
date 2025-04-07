import { Stepper, styled } from "@mui/material";

const StyledStepper = styled(Stepper)(() => ({
  marginBottom: "40px",
  "& .MuiStepLabel-label": {
    fontSize: "14px",
    fontWeight: 400,
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontWeight: 600,
    color: "#4da3ff",
  },
  "& .MuiStepIcon-root": {
    color: "#e0e0e0",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "#4da3ff",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#4da3ff",
  },
  "& .MuiStepConnector-line": {
    borderColor: "#e0e0e0",
  },
}));

export default StyledStepper;
