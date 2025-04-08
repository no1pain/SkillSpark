import { Box, Typography } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";

interface PricingInfoProps {
  price: string;
  duration: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
      </Box>
    </Box>
  );
};

export default PricingInfo;
