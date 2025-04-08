import { Box, MenuItem, Typography } from "@mui/material";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";

interface AdditionalInfoProps {
  level: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdditionalInfo = ({ level, author, onChange }: AdditionalInfoProps) => {
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <ModernTextField
          name="author"
          label="Author *"
          value={author}
          onChange={onChange}
          fullWidth
          required
          variant="outlined"
          placeholder="Enter author name"
        />

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
      </Box>
    </Box>
  );
};

export default AdditionalInfo;
