import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface NavButtonsProps {
  activeStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
}

const NavButtons = ({
  activeStep,
  totalSteps,
  onNext,
  onBack,
  isLastStep = false,
}: NavButtonsProps) => {
  return (
    <>
      {activeStep > 0 && (
        <IconButton
          onClick={onBack}
          sx={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#f5f5f5",
            color: "#555",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}

      {activeStep < totalSteps - 1 && (
        <IconButton
          onClick={onNext}
          sx={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#4da3ff",
            color: "white",
            boxShadow: "0 4px 8px rgba(77, 163, 255, 0.3)",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: "#3d93ff",
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      )}

      {isLastStep && (
        <IconButton
          onClick={onNext}
          sx={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#4da3ff",
            color: "white",
            boxShadow: "0 4px 8px rgba(77, 163, 255, 0.3)",
            width: 50,
            height: 50,
            "&:hover": {
              bgcolor: "#3d93ff",
            },
          }}
        >
          <CheckCircleIcon />
        </IconButton>
      )}
    </>
  );
};

export default NavButtons;
