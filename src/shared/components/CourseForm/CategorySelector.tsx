import {
  Box,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
  styled,
} from "@mui/material";
import { SubCategory, TopCategory } from "@/shared/utils/categoryUtils";
import CategoryIcon from "@mui/icons-material/Category";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CategorySelectorProps {
  topCategories: TopCategory[];
  subcategories: SubCategory[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubcategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModernTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(246, 246, 246, 0.8)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    "&:hover": {
      backgroundColor: "rgba(248, 248, 248, 0.95)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.07)",
    },
    "&.Mui-focused": {
      boxShadow: "0 4px 14px rgba(98, 0, 238, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiSelect-icon": {
    color: "#6200ee",
  },
  "& .MuiInputLabel-root": {
    fontWeight: 500,
    fontSize: "0.9rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#6200ee",
  },
  "& .MuiMenuItem-root.Mui-selected": {
    backgroundColor: "rgba(98, 0, 238, 0.1)",
    color: "#6200ee",
  },
}));

const CategorySelector = ({
  topCategories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategorySelectorProps) => {
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
              backgroundColor: "#6200ee",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 15,
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(98, 0, 238, 0.25)",
            }}
          >
            1
          </Box>
          <Typography variant="h6" component="span" fontWeight="medium">
            What is the category of your course?
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
          label="Category"
          value={selectedCategory}
          onChange={onCategoryChange}
          fullWidth
          required
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          SelectProps={{
            IconComponent: ExpandMoreIcon,
            MenuProps: {
              sx: {
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiMenuItem-root": {
                  paddingTop: "8px",
                  paddingBottom: "8px",
                },
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CategoryIcon sx={{ color: "#6200ee" }} />
              </InputAdornment>
            ),
          }}
        >
          {topCategories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </ModernTextField>

        <ModernTextField
          name="subcategory"
          select
          label="Subcategory"
          value={selectedSubcategory}
          onChange={onSubcategoryChange}
          fullWidth
          required
          variant="outlined"
          sx={{ width: "100%", maxWidth: "400px" }}
          disabled={subcategories.length === 0}
          SelectProps={{
            IconComponent: ExpandMoreIcon,
            MenuProps: {
              sx: {
                "& .MuiPaper-root": {
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiMenuItem-root": {
                  paddingTop: "8px",
                  paddingBottom: "8px",
                },
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: subcategories.length === 0 ? "#aaa" : "#6200ee",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4H14M6 8H14M9 12H14"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke="currentColor"
                    />
                  </svg>
                </Box>
              </InputAdornment>
            ),
          }}
        >
          {subcategories.map((subcategory) => (
            <MenuItem key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </MenuItem>
          ))}
        </ModernTextField>
      </Box>
    </Box>
  );
};

export default CategorySelector;
