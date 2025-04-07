import { Box, Grid as MuiGrid, Typography, styled } from "@mui/material";

export type CourseType = "course" | "book";

interface CourseTypeSelectorProps {
  selectedType: CourseType;
  onTypeSelect: (type: CourseType) => void;
}

const TypeSelectionCircle = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    width: 70,
    height: 70,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: selected ? "#6200ee" : "#f5f0ff",
    color: selected ? "white" : "#333",
    fontSize: 24,
    margin: "0 auto 12px auto",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: selected ? "none" : "1px solid #e0e0e0",
    "&:hover": {
      transform: selected ? "scale(1.05)" : "scale(1.02)",
      boxShadow: selected
        ? "0 6px 15px rgba(98, 0, 238, 0.2)"
        : "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  })
);

const TypeSelectionOption = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: selected ? "rgba(98, 0, 238, 0.1)" : "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: selected ? "1px solid #6200ee" : "1px solid transparent",
    "&:hover": {
      backgroundColor: selected
        ? "rgba(98, 0, 238, 0.15)"
        : "rgba(0, 0, 0, 0.02)",
    },
  })
);

const Grid = MuiGrid as any;

const CourseTypeSelector = ({
  selectedType,
  onTypeSelect,
}: CourseTypeSelectorProps) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" component="div" align="center" mb={2}>
        <Box
          component="span"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#6200ee",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            3
          </Box>
          Select a Content Type
        </Box>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TypeSelectionOption
            selected={selectedType === "course"}
            onClick={() => onTypeSelect("course")}
          >
            <TypeSelectionCircle selected={selectedType === "course"}>
              📹
            </TypeSelectionCircle>
            <Typography
              variant="subtitle1"
              fontWeight={selectedType === "course" ? 600 : 400}
            >
              Course
            </Typography>
          </TypeSelectionOption>
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <TypeSelectionOption
            selected={selectedType === "book"}
            onClick={() => onTypeSelect("book")}
          >
            <TypeSelectionCircle selected={selectedType === "book"}>
              📚
            </TypeSelectionCircle>
            <Typography
              variant="subtitle1"
              fontWeight={selectedType === "book" ? 600 : 400}
            >
              Book
            </Typography>
          </TypeSelectionOption>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseTypeSelector;
