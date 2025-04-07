import {
  Box,
  Grid as MuiGrid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

interface AdditionalInfoProps {
  level: "Beginner" | "Intermediate" | "Advanced";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Grid = MuiGrid as any;

const AdditionalInfo = ({ level, onChange }: AdditionalInfoProps) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>
        Additional Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="level"
            select
            label="Difficulty Level"
            value={level}
            onChange={onChange}
            fullWidth
            required
            variant="outlined"
          >
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdditionalInfo;
