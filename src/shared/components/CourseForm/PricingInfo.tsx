import {
  Box,
  Grid as MuiGrid,
  TextField,
  Typography,
  styled,
  alpha,
} from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";

interface PricingInfoProps {
  price: string;
  duration: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModernTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 12,
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    "&.Mui-focused": {
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
    borderBottomColor: COLORS.primary,
    borderWidth: "0 0 2px 0",
    borderRadius: 0,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
    borderBottomColor: COLORS.primary,
    borderWidth: "0 0 2px 0",
  },
  "& .MuiInputBase-input": {
    padding: "12px 4px",
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
    transform: "translate(4px, 12px) scale(1)",
    "&.Mui-focused": {
      color: COLORS.primary,
    },
    "&.MuiFormLabel-filled": {
      transform: "translate(4px, -9px) scale(0.75)",
    },
  },
  "& .MuiFormLabel-root.Mui-focused": {
    transform: "translate(4px, -9px) scale(0.75)",
  },
  "& .MuiInputAdornment-root": {
    marginRight: 8,
  },
}));

const Grid = MuiGrid as any;

const PricingInfo = ({ price, duration, type, onChange }: PricingInfoProps) => {
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 4,
        p: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        mt: 3,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: COLORS.text.primary,
          mb: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <NumberedBadge number={5} />
        Pricing Information
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ModernTextField
            name="price"
            label="Price (USD) *"
            value={price}
            onChange={onChange}
            fullWidth
            required
            type="number"
            variant="outlined"
            placeholder="e.g., 49.99"
            InputProps={{ inputProps: { min: 0, step: 0.01 } }}
          />
        </Grid>

        <Grid item xs={12}>
          <ModernTextField
            name="duration"
            label={`${type === "course" ? "Duration (in hours)" : "Pages"} *`}
            value={duration}
            onChange={onChange}
            fullWidth
            required
            type="number"
            variant="outlined"
            placeholder={type === "course" ? "e.g., 8" : "e.g., 350"}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingInfo;
