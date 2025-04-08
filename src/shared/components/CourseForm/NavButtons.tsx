import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { COLORS } from "@/shared/constants/colors";

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
            left: { xs: "-5px" },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#f8f8f8",
            color: "#444",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.08)",
            width: 56,
            height: 56,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "#f0f0f0",
              transform: "translateY(-50%) scale(1.05)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            },
            "&:active": {
              transform: "translateY(-50%) scale(0.98)",
            },
            zIndex: 2,
          }}
        >
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
      )}

      {activeStep < totalSteps - 1 && (
        <IconButton
          onClick={onNext}
          sx={{
            position: "absolute",
            right: { xs: "0", sm: "10" },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: COLORS.primary,
            color: "white",
            boxShadow: "0 6px 16px rgba(98, 0, 238, 0.25)",
            width: 56,
            height: 56,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: COLORS.primaryDark,
              transform: "translateY(-50%) scale(1.05)",
              boxShadow: "0 8px 20px rgba(98, 0, 238, 0.35)",
            },
            "&:active": {
              transform: "translateY(-50%) scale(0.98)",
            },
            zIndex: 2,
          }}
        >
          <ArrowForwardIcon fontSize="medium" />
        </IconButton>
      )}

      {isLastStep && (
        <IconButton
          onClick={onNext}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: COLORS.primary,
            color: "white",
            boxShadow: "0 6px 16px rgba(98, 0, 238, 0.25)",
            width: 56,
            height: 56,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: COLORS.primaryDark,
              transform: "translateY(-50%) scale(1.05)",
              boxShadow: "0 8px 20px rgba(98, 0, 238, 0.35)",
            },
            "&:active": {
              transform: "translateY(-50%) scale(0.98)",
            },
            zIndex: 2,
          }}
        >
          <CheckCircleIcon fontSize="medium" />
        </IconButton>
      )}
    </>
  );
};

export default NavButtons;
