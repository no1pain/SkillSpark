import {
  Box,
  MenuItem,
  TextField,
  Typography,
  styled,
  alpha,
} from "@mui/material";
import { SubCategory, TopCategory } from "@/shared/utils/categoryUtils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "@/shared/constants/colors";
import { CourseType } from "@/shared/types/course";

interface CategorySelectorProps {
  topCategories: TopCategory[];
  subcategories: SubCategory[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubcategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contentType: CourseType;
}

const ModernTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(246, 246, 246, 0.8)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    "&:hover": {
      backgroundColor: "rgba(248, 248, 248, 0.95)",
      boxShadow: `0 4px 10px ${COLORS.card.shadow}`,
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(246, 246, 246, 0.8)",
      boxShadow: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: "1px",
  },
  "& .MuiSelect-icon": {
    color: COLORS.primary,
    fontSize: "1.4rem",
    right: "12px",
    transition: "transform 0.2s ease",
  },
  "& .MuiSelect-iconOpen": {
    transform: "rotate(180deg)",
  },
  "& .MuiInputLabel-root": {
    fontWeight: 500,
    fontSize: "0.9rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: COLORS.text.secondary,
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  margin: "2px",
  borderRadius: "12px",
  transition: "all 0.2s ease",
  fontWeight: 500,
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 0,
    backgroundColor: COLORS.primary,
    transition: "all 0.2s ease",
    opacity: 0,
    borderRadius: "4px",
  },
  "&.Mui-selected": {
    backgroundColor: alpha(COLORS.primary, 0.08),
    color: COLORS.primary,
    fontWeight: 600,
    "&:before": {
      width: 4,
      opacity: 1,
    },
    "&:hover": {
      backgroundColor: alpha(COLORS.primary, 0.12),
    },
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const CategorySelectedDisplay = ({ name }: { name: string }) => {
  const getEmoji = () => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("technology")) return "📱";
    if (lowerName.includes("creative arts")) return "🎨";
    if (lowerName.includes("business")) return "💼";
    if (lowerName.includes("personal development")) return "✨";
    if (lowerName.includes("health")) return "💪";
    if (lowerName.includes("languages")) return "🗣️";
    return "📚"; // Default emoji
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha(COLORS.primary, 0.1),
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: "18px",
            color: COLORS.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {getEmoji()}
        </Box>
      </Box>
      <Typography sx={{ fontWeight: 500 }}>{name}</Typography>
    </Box>
  );
};

const CategorySelector = ({
  topCategories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
  contentType = "course", // Default to "course" if not provided
}: CategorySelectorProps) => {
  // Find the selected category name
  const selectedCategoryName =
    topCategories.find((cat) => cat.id === selectedCategory)?.name || "";
  const selectedSubcategoryName =
    subcategories.find((subcat) => subcat.id === selectedSubcategory)?.name ||
    "";

  const contentTypeDisplay = contentType === "book" ? "book" : "course";

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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: COLORS.primary,
              color: COLORS.card.title,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 15,
              fontWeight: "bold",
              boxShadow: `0 4px 8px rgba(98, 0, 238, 0.25)`,
            }}
          >
            1
          </Box>
          <Typography variant="h6" component="span" fontWeight="medium">
            What is the category of your {contentTypeDisplay}?
          </Typography>
        </Box>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "800px",
          mt: 3,
          gap: 2.5,
        }}
      >
        <ModernTextField
          name="category"
          select
          value={selectedCategory}
          onChange={onCategoryChange}
          fullWidth
          required
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          SelectProps={{
            IconComponent: ExpandMoreIcon,
            displayEmpty: true,
            renderValue: () => {
              if (!selectedCategory)
                return (
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.42)" }}>
                    Select a category
                  </Typography>
                );
              return <CategorySelectedDisplay name={selectedCategoryName} />;
            },
            MenuProps: {
              elevation: 2,
              sx: {
                mt: 1,
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                  overflow: "hidden",
                  background: "#fff",
                  backgroundImage:
                    "radial-gradient(at 100% 100%, rgba(98, 0, 238, 0.03), transparent 400px)",
                },
                "& .MuiList-root": {
                  padding: "8px",
                },
                "& .MuiMenuItem-root": {
                  margin: "2px 0",
                },
              },
            },
          }}
          InputLabelProps={{
            shrink: Boolean(selectedCategory),
          }}
        >
          {topCategories.map((category) => (
            <StyledMenuItem key={category.id} value={category.id}>
              <CategorySelectedDisplay name={category.name} />
            </StyledMenuItem>
          ))}
        </ModernTextField>

        <ModernTextField
          name="subcategory"
          select
          value={selectedSubcategory}
          onChange={onSubcategoryChange}
          fullWidth
          required
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          disabled={subcategories.length === 0}
          SelectProps={{
            IconComponent: ExpandMoreIcon,
            displayEmpty: true,
            renderValue: () => {
              if (!selectedSubcategory)
                return (
                  <Typography sx={{ color: "rgba(0, 0, 0, 0.42)" }}>
                    Select a subcategory
                  </Typography>
                );
              return (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: alpha(COLORS.primary, 0.1),
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "16px",
                        color: COLORS.primary,
                      }}
                    >
                      📑
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {selectedSubcategoryName}
                  </Typography>
                </Box>
              );
            },
            MenuProps: {
              elevation: 2,
              sx: {
                mt: 1,
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                  overflow: "hidden",
                  background: "#fff",
                  backgroundImage:
                    "radial-gradient(at 100% 100%, rgba(98, 0, 238, 0.03), transparent 400px)",
                },
                "& .MuiList-root": {
                  padding: "8px",
                },
                "& .MuiMenuItem-root": {
                  margin: "2px 0",
                },
              },
            },
          }}
          InputLabelProps={{
            shrink: Boolean(selectedSubcategory),
          }}
        >
          {subcategories.map((subcategory) => (
            <StyledMenuItem key={subcategory.id} value={subcategory.id}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: alpha(COLORS.primary, 0.1),
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontSize: "16px",
                      color: COLORS.primary,
                    }}
                  >
                    📑
                  </Box>
                </Box>
                <Typography>{subcategory.name}</Typography>
              </Box>
            </StyledMenuItem>
          ))}
        </ModernTextField>
      </Box>
    </Box>
  );
};

export default CategorySelector;
