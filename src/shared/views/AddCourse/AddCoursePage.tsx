import {
  Box,
  Container,
  Typography,
  Paper,
  styled,
  Grid as MuiGrid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
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

// Define the Grid component to fix type errors
const Grid = MuiGrid as any;

// Simple Course Preview Card component
const CourseCardPreview = ({
  title,
  category,
  level,
  price,
  type,
}: {
  title: string;
  category: string;
  level: string;
  price: number;
  type: string;
}) => {
  // Generate a gradient based on the course category
  const getGradientByCategory = (category: string): string => {
    switch (category) {
      case "Technology":
        return "linear-gradient(135deg, #E23838 0%, #FF9933 100%)";
      case "Creative Arts":
        return "linear-gradient(135deg, #FF416C 0%, #FFA500 100%)";
      case "Business":
        return "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)";
      case "Personal Development":
        return "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)";
      case "Finance":
        return "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)";
      default:
        return "linear-gradient(135deg, #6200ee 0%, #9c40ff 100%)"; // Violet gradient as default
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: getGradientByCategory(category),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            color="white"
            fontWeight="bold"
            align="center"
          >
            {type === "course" ? "📹" : "📚"}
          </Typography>
        </Box>
        <Chip
          label={category || "Category"}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            borderRadius: "4px",
            fontSize: "0.7rem",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
            {title || "Your Course Title"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize="0.8rem"
            >
              Your Name
            </Typography>
            <Chip
              label={level}
              size="small"
              sx={{
                height: 18,
                fontSize: "0.6rem",
                backgroundColor:
                  level === "Beginner"
                    ? "rgba(98, 0, 238, 0.1)"
                    : level === "Intermediate"
                    ? "rgba(98, 0, 238, 0.2)"
                    : "rgba(98, 0, 238, 0.3)",
                color: "#6200ee",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#6200ee">
              ${price.toFixed(2)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {type === "course" ? "Course" : "Book"}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

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

  // Get the category name from the category ID
  const categoryName = formData.category
    ? topCategories.find((cat) => cat.id === formData.category)?.name ||
      "Category"
    : "Category";

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

          <Grid container spacing={2}>
            {/* Preview Card Column */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  position: "sticky",
                  top: 20,
                  p: 2,
                  backgroundColor: "rgba(245, 245, 245, 0.7)",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  mb={2}
                  color="#666"
                >
                  Course Preview
                </Typography>
                <Box sx={{ width: "100%", mx: "auto" }}>
                  <CourseCardPreview
                    title={formData.title}
                    category={categoryName}
                    level={formData.level}
                    price={formData.price ? parseFloat(formData.price) : 49.99}
                    type={formData.type}
                  />
                </Box>
                <Typography
                  variant="caption"
                  component="div"
                  align="center"
                  mt={2}
                  color="#888"
                >
                  This is how your course will appear to learners
                </Typography>
              </Box>
            </Grid>

            {/* Form Column */}
            <Grid item xs={12} md={9}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
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
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <CancelButton onClick={handleCancel} />
          </Box>
        </Container>
      </FormContainer>
    </PageWrapper>
  );
};

export default AddCoursePage;
