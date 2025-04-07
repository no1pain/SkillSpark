import { Box, Grid as MuiGrid, Typography, styled } from "@mui/material";

export type CourseType = "course" | "book";

interface CourseTypeSelectorProps {
  selectedType: CourseType;
  onTypeSelect: (type: CourseType) => void;
}

const TypeSelectionCircle = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    width: 80,
    height: 80,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: selected ? "#6200ee" : "#f5f0ff",
    color: selected ? "white" : "#333",
    fontSize: 28,
    margin: "0 auto 16px auto",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: selected ? "none" : "1px solid #e0e0e0",
    boxShadow: selected
      ? "0 8px 20px rgba(98, 0, 238, 0.25)"
      : "0 4px 12px rgba(0, 0, 0, 0.08)",
    "&:hover": {
      transform: selected ? "scale(1.05)" : "scale(1.02)",
      boxShadow: selected
        ? "0 10px 25px rgba(98, 0, 238, 0.3)"
        : "0 6px 16px rgba(0, 0, 0, 0.12)",
    },
  })
);

const TypeSelectionOption = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    backgroundColor: selected ? "rgba(98, 0, 238, 0.08)" : "white",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: selected ? "1px solid #6200ee" : "1px solid #eaeaea",
    width: "100%",
    maxWidth: 180,
    boxShadow: selected
      ? "0 6px 16px rgba(98, 0, 238, 0.12)"
      : "0 4px 12px rgba(0, 0, 0, 0.04)",
    "&:hover": {
      backgroundColor: selected
        ? "rgba(98, 0, 238, 0.12)"
        : "rgba(245, 240, 255, 0.5)",
      transform: "translateY(-4px)",
    },
  })
);

const Grid = MuiGrid as any;

const CourseTypeSelector = ({
  selectedType,
  onTypeSelect,
}: CourseTypeSelectorProps) => {
  return (
    <Box
      mb={5}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" component="div" align="center" mb={3}>
        <Box
          component="span"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "#6200ee",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 15,
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(98, 0, 238, 0.25)",
            }}
          >
            3
          </Box>
          Select a Content Type
        </Box>
      </Typography>

      <Box sx={{ maxWidth: 450, width: "100%", mt: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  sx={{ fontSize: 18 }}
                >
                  Course
                </Typography>
              </TypeSelectionOption>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  sx={{ fontSize: 18 }}
                >
                  Book
                </Typography>
              </TypeSelectionOption>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseTypeSelector;
