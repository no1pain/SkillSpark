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
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ maxWidth: "100%", width: "100%" }}>
            <CategorySelector
              topCategories={topCategories}
              subcategories={subcategories}
              selectedCategory={formData.category}
              selectedSubcategory={formData.subcategory}
              onCategoryChange={onCategoryChange}
              onSubcategoryChange={onChange}
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
          <Box sx={{ maxWidth: "100%", width: "100%" }}>
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
                    4
                  </Box>
                  Basic Information
                </Box>
              </Typography>

              <CourseBasicInfo
                title={formData.title}
                description={formData.description}
                type={formData.type}
                onChange={onChange}
              />
            </Box>

            <PricingInfo
              price={formData.price}
              duration={formData.duration}
              type={formData.type}
              onChange={onChange}
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ maxWidth: "100%", width: "100%" }}>
            <AdditionalInfo level={formData.level} onChange={onChange} />
          </Box>
        );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default CourseFormStepContent;
