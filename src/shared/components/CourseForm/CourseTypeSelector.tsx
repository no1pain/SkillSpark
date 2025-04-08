import {
  Box,
  Grid as MuiGrid,
  Typography,
  styled,
  useTheme,
  Fade,
} from "@mui/material";
import { COLORS } from "@/shared/constants/colors";

export type CourseType = "course" | "book";

interface CourseTypeSelectorProps {
  selectedType: CourseType;
  onTypeSelect: (type: CourseType) => void;
}

const TypeSelectionCircle = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    width: 90,
    height: 90,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: selected ? COLORS.primary : "rgba(245, 240, 255, 0.7)",
    color: selected ? COLORS.card.title : COLORS.text.primary,
    fontSize: 32,
    margin: "0 auto 16px auto",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: selected ? "none" : "1px solid rgba(224, 224, 224, 0.5)",
    boxShadow: selected
      ? `0 10px 25px rgba(98, 0, 238, 0.3)`
      : `0 6px 15px rgba(0, 0, 0, 0.06)`,
    "&:hover": {
      transform: selected ? "scale(1.05)" : "scale(1.03)",
      boxShadow: selected
        ? `0 12px 30px rgba(98, 0, 238, 0.35)`
        : `0 8px 20px rgba(0, 0, 0, 0.08)`,
    },
  })
);

const TypeSelectionOption = styled(Box)<{ selected?: boolean }>(
  ({ selected }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
    borderRadius: 20,
    backgroundColor: selected
      ? `rgba(98, 0, 238, 0.08)`
      : COLORS.background.main,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: selected
      ? `1px solid ${COLORS.primary}`
      : "1px solid rgba(234, 234, 234, 0.8)",
    width: "100%",
    maxWidth: 200,
    boxShadow: selected
      ? `0 8px 20px rgba(98, 0, 238, 0.15)`
      : `0 6px 16px rgba(0, 0, 0, 0.04)`,
    "&:hover": {
      backgroundColor: selected
        ? `rgba(98, 0, 238, 0.12)`
        : "rgba(245, 240, 255, 0.7)",
      transform: "translateY(-5px)",
    },
  })
);

const Grid = MuiGrid as any;

const CourseTypeSelector = ({
  selectedType,
  onTypeSelect,
}: CourseTypeSelectorProps) => {
  const theme = useTheme();

  return (
    <Box
      mb={6}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        align="center"
        mb={4}
        sx={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        <Box
          component="span"
          sx={{ display: "inline-flex", alignItems: "center" }}
        >
          <Box
            component="span"
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: COLORS.primary,
              color: COLORS.card.title,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 16,
              fontWeight: "bold",
              boxShadow: `0 6px 12px rgba(98, 0, 238, 0.25)`,
            }}
          >
            3
          </Box>
          Select a Content Type
        </Box>
      </Typography>

      <Box sx={{ maxWidth: 500, width: "100%", mt: 2 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={6}>
            <Fade in={true} timeout={500}>
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
                    fontWeight={selectedType === "course" ? 700 : 500}
                    sx={{
                      fontSize: 20,
                      color:
                        selectedType === "course"
                          ? COLORS.primary
                          : theme.palette.text.primary,
                    }}
                  >
                    Course
                  </Typography>
                </TypeSelectionOption>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={6}>
            <Fade in={true} timeout={700}>
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
                    fontWeight={selectedType === "book" ? 700 : 500}
                    sx={{
                      fontSize: 20,
                      color:
                        selectedType === "book"
                          ? COLORS.primary
                          : theme.palette.text.primary,
                    }}
                  >
                    Book
                  </Typography>
                </TypeSelectionOption>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseTypeSelector;
