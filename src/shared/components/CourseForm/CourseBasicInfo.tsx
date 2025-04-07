import { Grid as MuiGrid, TextField } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";

interface CourseBasicInfoProps {
  title: string;
  description: string;
  type: CourseType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Grid = MuiGrid as any;

const CourseBasicInfo = ({
  title,
  description,
  type,
  onChange,
}: CourseBasicInfoProps) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          name="title"
          label="Title"
          value={title}
          onChange={onChange}
          fullWidth
          required
          variant="outlined"
          placeholder={`Enter ${type} title`}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="description"
          label="Description"
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
  );
};

export default CourseBasicInfo;
