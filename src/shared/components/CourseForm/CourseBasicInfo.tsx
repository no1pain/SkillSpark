import { Box, Typography } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import { COLORS } from "@/shared/constants/colors";
import NumberedBadge from "./NumberedBadge";
import ModernTextField from "./ModernTextField";

interface CourseBasicInfoProps {
  title: string;
  description: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CourseBasicInfo = ({
  title,
  description,
  type,
  onChange,
}: CourseBasicInfoProps) => {
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
        <NumberedBadge number={4} />
        Basic Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <ModernTextField
          name="title"
          label="Title *"
          value={title}
          onChange={onChange}
          fullWidth
          required
          variant="outlined"
          placeholder={`Enter ${type} title`}
        />

        <ModernTextField
          name="description"
          label="Description *"
          value={description}
          onChange={onChange}
          fullWidth
          required
          multiline
          rows={4}
          variant="outlined"
          placeholder={`Provide a detailed description of your ${type}...`}
        />
      </Box>
    </Box>
  );
};

export default CourseBasicInfo;
