import { Grid as MuiGrid, TextField, Box, styled, alpha } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import { COLORS } from "@/shared/constants/colors";

interface CourseBasicInfoProps {
  title: string;
  description: string;
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
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
        </Grid>

        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseBasicInfo;
