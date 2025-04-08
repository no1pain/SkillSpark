import React from "react";
import { Box, Typography } from "@mui/material";
import { CourseType } from "./CourseTypeSelector";
import CategorySelector from "./CategorySelector";
import VisibilitySelector from "./VisibilitySelector";
import CourseTypeSelector from "./CourseTypeSelector";
import CourseBasicInfo from "./CourseBasicInfo";
import PricingInfo from "./PricingInfo";
import AdditionalInfo from "./AdditionalInfo";
import { TopCategory, SubCategory } from "@/shared/utils/categoryUtils";

interface CourseFormData {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  type: CourseType;
  price: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isPublic: boolean;
}

interface CourseFormStepContentProps {
  step: number;
  formData: CourseFormData;
  topCategories: TopCategory[];
  subcategories: SubCategory[];
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTypeSelect: (type: CourseType) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPublicPrivateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CourseFormStepContent = ({
  step,
  formData,
  topCategories,
  subcategories,
  onCategoryChange,
  onTypeSelect,
  onChange,
  onPublicPrivateChange,
}: CourseFormStepContentProps) => {
  const containerStyles = {
    maxWidth: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "stretch" as const,
    flexGrow: 1,
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <Box sx={containerStyles}>
            <CategorySelector
              topCategories={topCategories}
              subcategories={subcategories}
              selectedCategory={formData.category}
              selectedSubcategory={formData.subcategory}
              onCategoryChange={onCategoryChange}
              onSubcategoryChange={onChange}
              contentType={formData.type}
            />

            <VisibilitySelector
              isPublic={formData.isPublic}
              onChange={onPublicPrivateChange}
            />

            <CourseTypeSelector
              selectedType={formData.type}
              onTypeSelect={onTypeSelect}
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={containerStyles}>
            <Box mb={4}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                mb={4}
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                <Box
                  component="span"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "10px",
                      backgroundColor: "#6200ee",
                      color: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      fontSize: 18,
                      fontWeight: "bold",
                      boxShadow: `0 8px 16px rgba(98, 0, 238, 0.25)`,
                    }}
                  >
                    4
                  </Box>
                  Basic Information
                </Box>
              </Typography>

              <Box
                sx={{
                  backgroundColor: "rgba(245, 245, 245, 0.5)",
                  borderRadius: "20px",
                  p: 2,
                  pt: 3,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                }}
              >
                <CourseBasicInfo
                  title={formData.title}
                  description={formData.description}
                  type={formData.type}
                  onChange={onChange}
                />

                <PricingInfo
                  price={formData.price}
                  duration={formData.duration}
                  type={formData.type}
                  onChange={onChange}
                />
              </Box>
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box sx={containerStyles}>
            <AdditionalInfo level={formData.level} onChange={onChange} />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexGrow: 1,
      }}
    >
      {renderContent()}
    </Box>
  );
};

export default CourseFormStepContent;
