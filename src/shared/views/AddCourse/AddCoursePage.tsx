import { Box, Container, Typography, Paper, styled } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import { useNavigate } from "react-router-dom";
import {
  TopCategory,
  getTopCategories,
  getSubCategories,
  SubCategory,
} from "@/shared/utils/categoryUtils";
import {
  CourseFormStepper,
  CourseType,
  CourseFormStepContent,
} from "@/shared/components/CourseForm";
import CancelButton from "@/shared/components/CourseForm/CancelButton";

const PageWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
});

const FormContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingBottom: "40px",
});

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

const steps = [
  "Category & Type",
  "Information & Pricing",
  "Additional Details",
];

const AddCoursePage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [topCategories] = useState<TopCategory[]>(getTopCategories());
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [formData, setFormData] = useState<CourseFormData>({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    type: "course",
    price: "",
    duration: "",
    level: "Beginner",
    isPublic: true,
  });

  useEffect(() => {
    const originalBodyStyle = document.body.style.cssText;
    const originalHtmlStyle = document.documentElement.style.cssText;

    document.body.style.cssText = `
      height: auto !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
    `;
    document.documentElement.style.cssText = `
      height: auto !important;
      overflow-y: auto !important;
      overflow-x: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
    `;

    return () => {
      document.body.style.cssText = originalBodyStyle;
      document.documentElement.style.cssText = originalHtmlStyle;
    };
  }, []);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = e.target.value;
    const subs = getSubCategories(categoryId);
    setSubcategories(subs);
    setFormData({
      ...formData,
      category: categoryId,
      subcategory: subs.length > 0 ? subs[0].id : "",
    });
  };

  const handleTypeSelect = (type: CourseType) => {
    setFormData({
      ...formData,
      type,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePublicPrivateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      isPublic: e.target.value === "public",
    });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log("Course data to submit:", formData);
    navigate("/overview");
  };

  const handleCancel = () => {
    navigate("/overview");
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <PageWrapper>
      <Header />

      <FormContainer>
        <Container
          maxWidth="lg"
          sx={{
            pt: 0,
            mt: 0,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            fontWeight="bold"
            color="#333"
            mb={4}
            mt={2}
          >
            Create New {formData.type === "course" ? "Course" : "Book"}
          </Typography>

          <CourseFormStepper
            activeStep={activeStep}
            steps={steps}
            onNext={isLastStep ? handleSubmit : handleNext}
            onBack={handleBack}
            isLastStep={isLastStep}
          />

          <Paper
            elevation={3}
            sx={{
              p: 4,
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              mb: 3,
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (isLastStep) handleSubmit();
                else handleNext();
              }}
            >
              <CourseFormStepContent
                step={activeStep}
                formData={formData}
                topCategories={topCategories}
                subcategories={subcategories}
                onCategoryChange={handleCategoryChange}
                onTypeSelect={handleTypeSelect}
                onChange={handleChange}
                onPublicPrivateChange={handlePublicPrivateChange}
              />
            </form>
          </Paper>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <CancelButton onClick={handleCancel} />
          </Box>
        </Container>
      </FormContainer>
    </PageWrapper>
  );
};

export default AddCoursePage;
