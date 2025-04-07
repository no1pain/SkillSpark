import { Step, StepLabel, Box } from "@mui/material";
import NavButtons from "./NavButtons";
import StyledStepper from "./StyledStepper";

interface CourseFormStepperProps {
  activeStep: number;
  steps: string[];
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
}

const CourseFormStepper = ({
  activeStep,
  steps,
  onNext,
  onBack,
  isLastStep = false,
}: CourseFormStepperProps) => {
  return (
    <Box sx={{ position: "relative", mb: 8 }}>
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>

      <NavButtons
        activeStep={activeStep}
        totalSteps={steps.length}
        onNext={onNext}
        onBack={onBack}
        isLastStep={isLastStep}
      />
    </Box>
  );
};

export default CourseFormStepper;
