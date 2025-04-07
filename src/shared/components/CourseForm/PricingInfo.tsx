import { Box, Grid as MuiGrid, TextField, Typography } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";

interface PricingInfoProps {
  price: string;
  duration: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Grid = MuiGrid as any;

const PricingInfo = ({ price, duration, type, onChange }: PricingInfoProps) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>
        Pricing Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name="price"
            label="Price (USD)"
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

        <Grid item xs={12} md={6}>
          <TextField
            name="duration"
            label={type === "course" ? "Duration (in hours)" : "Pages"}
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
