import { Box, Chip, styled } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getSubCategories,
  SubCategory,
} from "../../shared/utils/categoryUtils";

interface SubCategoryPillsProps {
  categoryId: string;
}

const StyledChip = styled(Chip)<{ isactive?: string }>(({ isactive }) => ({
  margin: "0 8px 8px 0",
  borderRadius: "50px",
  padding: "4px 8px",
  height: "auto",
  fontSize: "14px",
  fontWeight: "500",
  backgroundColor: isactive === "true" ? "#4da3ff" : "#f0f0f0",
  color: isactive === "true" ? "white" : "#555555",
  "& .MuiChip-label": {
    padding: "6px 12px",
  },
  "&:hover": {
    backgroundColor: isactive === "true" ? "#4da3ff" : "#e0e0e0",
  },
}));

const SubCategoryPills = ({ categoryId }: SubCategoryPillsProps) => {
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  useEffect(() => {
    const subs = getSubCategories(categoryId);
    setSubCategories(subs);

    if (subs.length > 0) {
      setSelectedSubCategory(subs[0].id);
    } else {
      setSelectedSubCategory("");
    }
  }, [categoryId]);

  const handleSubCategoryClick = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {subCategories.map((subCategory) => (
        <StyledChip
          key={subCategory.id}
          label={subCategory.name}
          onClick={() => handleSubCategoryClick(subCategory.id)}
          isactive={(selectedSubCategory === subCategory.id).toString()}
          clickable
        />
      ))}
    </Box>
  );
};

export default SubCategoryPills;
