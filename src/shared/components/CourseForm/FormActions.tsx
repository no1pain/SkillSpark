import { Box, Button, Divider, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

interface FormActionsProps {
  activeStep: number;
  isLastStep: boolean;
  onBack: () => void;
  onNext: (e?: React.FormEvent) => void;
  onCancel: () => void;
}

const StepButton = styled(Button)(() => ({
  borderRadius: 30,
  padding: "10px 24px",
  textTransform: "none",
  fontWeight: 500,
  boxShadow: "none",
  minWidth: 120,
}));

const FormActions = ({
  activeStep,
  isLastStep,
  onBack,
  onNext,
  onCancel,
}: FormActionsProps) => {
  return (
    <>
      <Divider sx={{ my: 3 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <StepButton
          variant="outlined"
          color="inherit"
          disabled={activeStep === 0}
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            visibility: activeStep === 0 ? "hidden" : "visible",
          }}
        >
          Back
        </StepButton>
        <Box>
          <StepButton
            variant="outlined"
            color="error"
            onClick={onCancel}
            sx={{ mr: 2 }}
            startIcon={<CancelIcon />}
          >
            Cancel
          </StepButton>
          <StepButton
            variant="contained"
            onClick={(e) => onNext(e)}
            sx={{
              bgcolor: "#6200ee",
              "&:hover": { bgcolor: "#5000d1" },
            }}
            endIcon={isLastStep ? <CheckIcon /> : <ArrowForwardIcon />}
          >
            {isLastStep ? "Create" : "Continue"}
          </StepButton>
        </Box>
      </Box>
    </>
  );
};

export default FormActions;
