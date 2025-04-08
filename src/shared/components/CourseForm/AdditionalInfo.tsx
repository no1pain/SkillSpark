import { Box, Grid as MuiGrid, MenuItem, Typography } from "@mui/material";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";

interface AdditionalInfoProps {
  level: "Beginner" | "Intermediate" | "Advanced";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Grid = MuiGrid as any;

const AdditionalInfo = ({ level, onChange }: AdditionalInfoProps) => {
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 4,
        p: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
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
        <NumberedBadge number={6} />
        Additional Information
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ModernTextField
            name="level"
            select
            label="Difficulty Level *"
            value={level}
            onChange={onChange}
            fullWidth
            required
            variant="outlined"
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </ModernTextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdditionalInfo;
