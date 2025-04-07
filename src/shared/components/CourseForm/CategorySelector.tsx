import {
  Box,
  Grid as MuiGrid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { SubCategory, TopCategory } from "@/shared/utils/categoryUtils";

interface CategorySelectorProps {
  topCategories: TopCategory[];
  subcategories: SubCategory[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubcategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Grid = MuiGrid as any;

const CategorySelector = ({
  topCategories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategorySelectorProps) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" component="div" align="center" mb={2}>
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
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#6200ee",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            1
          </Box>
          <Typography variant="h6" component="span" fontWeight="medium">
            What is the category of your course?
          </Typography>
        </Box>
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} md={6}>
            <TextField
              name="category"
              select
              label="Category"
              value={selectedCategory}
              onChange={onCategoryChange}
              fullWidth
              required
              variant="outlined"
              size="small"
            >
              {topCategories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="subcategory"
              select
              label="Subcategory"
              value={selectedSubcategory}
              onChange={onSubcategoryChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              disabled={subcategories.length === 0}
            >
              {subcategories.map((subcategory) => (
                <MenuItem key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CategorySelector;
