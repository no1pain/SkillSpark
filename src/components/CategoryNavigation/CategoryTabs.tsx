import { Box, Tabs, Tab, styled } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getTopCategories,
  TopCategory,
} from "../../shared/utils/categoryUtils";
import SubCategoryPills from "./SubCategoryPills";

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#4da3ff",
    height: "3px",
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
}));

const StyledTab = styled(Tab)(() => ({
  textTransform: "uppercase",
  fontWeight: "500",
  fontSize: "14px",
  color: "#777777",
  padding: "12px 24px",
  "&.Mui-selected": {
    color: "#4da3ff",
    fontWeight: "600",
  },
}));

const CategoryTabs = () => {
  const [categories, setCategories] = useState<TopCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const topCategories = getTopCategories();
    setCategories(topCategories);
    if (topCategories.length > 0) {
      setSelectedCategory(topCategories[0].id);
    }
  }, []);

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newCategoryId: string
  ) => {
    setSelectedCategory(newCategoryId);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="category tabs"
        >
          {categories.map((category) => (
            <StyledTab
              key={category.id}
              label={category.name}
              value={category.id}
              disableRipple
            />
          ))}
        </StyledTabs>
      </Box>

      {selectedCategory && (
        <Box sx={{ pt: 3, pb: 2 }}>
          <SubCategoryPills categoryId={selectedCategory} />
        </Box>
      )}
    </Box>
  );
};

export default CategoryTabs;
