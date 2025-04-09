import {
  Box,
  Container,
  Typography,
  styled,
  Snackbar,
  Alert,
  Paper,
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
import { COLORS } from "@/shared/constants/colors";
import { addBook, BookData } from "@/shared/api/bookService";
import { CourseFormData } from "@/shared/types/course";
import { CourseCardPreview } from "@/shared/components/CourseCardPreview/CourseCardPreview";

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
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [formData, setFormData] = useState<CourseFormData>({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    type: "book",
    price: "",
    duration: "",
    level: "Beginner",
    isPublic: true,
    bookContent: null,
    coverImage: null,
    author: "User",
    imageUrl: null,
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

  useEffect(() => {
    if (formData.category) {
      const subs = getSubCategories(formData.category);
      setSubcategories(subs);
      if (!subs.some((sub) => sub.name === formData.subcategory)) {
        setFormData((prev) => ({ ...prev, subcategory: "" }));
      }
    } else {
      setSubcategories([]);
    }
  }, [formData.category]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitBook();
      setAlertState({
        open: true,
        message: "Your book has been successfully published!",
        severity: "success",
      });
      setTimeout(() => {
        navigate("/overview");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertState({
        open: true,
        message: "Failed to publish your book. Please try again.",
        severity: "error",
      });
    }
  };

  const submitBook = async () => {
    const categoryName =
      topCategories.find((cat) => cat.id === formData.category)?.name || "";

    const bookData: BookData = {
      title: formData.title,
      description: formData.description,
      category: categoryName,
      subcategory: formData.subcategory || undefined,
      isPublic: formData.isPublic,
      contentType: "Book",
      price: parseFloat(formData.price) || 0,
      pages: parseInt(formData.duration, 10) || 0,
      author: formData.author,
      difficulty: formData.level,
      fileFormat: "PDF",
      imageUrl: "",
    };

    await addBook(bookData, formData.bookContent, formData.coverImage);
  };

  const validateForm = () => {
    if (!formData.title || !formData.description || !formData.category) {
      setAlertState({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return false;
    }

    if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) < 0) {
      setAlertState({
        open: true,
        message: "Please enter a valid price",
        severity: "error",
      });
      return false;
    }

    if (
      isNaN(parseInt(formData.duration, 10)) ||
      parseInt(formData.duration, 10) <= 0
    ) {
      setAlertState({
        open: true,
        message: "Please enter a valid page count",
        severity: "error",
      });
      return false;
    }

    if (!formData.author) {
      setAlertState({
        open: true,
        message: "Please enter an author name",
        severity: "error",
      });
      return false;
    }

    if (!formData.bookContent) {
      setAlertState({
        open: true,
        message: "Please upload your book content",
        severity: "error",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  const handlePublicPrivateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      isPublic: e.target.value === "public",
    });
  };

  const handleFileChange = (file: File | null, type: "book" | "cover") => {
    if (type === "book") {
      setFormData((prev) => ({ ...prev, bookContent: file }));
    } else {
      setFormData((prev) => ({ ...prev, coverImage: file }));
    }
  };

  const handleAlertClose = () => {
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  const isLastStep = activeStep === steps.length - 1;

  const categoryName = formData.category
    ? topCategories.find((cat) => cat.id === formData.category)?.name ||
      "Category"
    : "Category";

  return (
    <PageWrapper>
      <Header />

      <FormContainer>
        <Container
          sx={{
            pt: 0,
            mt: 0,
            px: { xs: 2, md: 4 },
            maxWidth: "100%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            fontWeight="bold"
            color={COLORS.text.primary}
            mb={4}
            mt={2}
          >
            Create New Book
          </Typography>

          <CourseFormStepper
            activeStep={activeStep}
            steps={steps}
            onNext={isLastStep ? handleSubmit : handleNext}
            onBack={handleBack}
            isLastStep={isLastStep}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              gap: 3,
            }}
          >
            {/* Preview Card Column */}
            <Box
              sx={{
                width: { xs: "100%", md: "35%", lg: "30%" },
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  position: "sticky",
                  top: 20,
                  p: 2,
                  backgroundColor: COLORS.background.light,
                  borderRadius: 2,
                  boxShadow: `0 4px 20px ${COLORS.paper.shadow}`,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  mb={2}
                  color={COLORS.text.secondary}
                >
                  Book Preview
                </Typography>
                <Box sx={{ width: "100%", mx: "auto" }}>
                  <CourseCardPreview
                    title={formData.title}
                    category={categoryName}
                    level={formData.level}
                    price={formData.price ? parseFloat(formData.price) : 49.99}
                    type="book"
                    author={formData.author}
                    imageUrl={formData.imageUrl}
                    description={formData.description}
                  />
                </Box>
                <Typography
                  variant="caption"
                  component="div"
                  align="center"
                  mt={2}
                  color={COLORS.text.tertiary}
                >
                  This is how your book will appear to learners
                </Typography>
              </Box>
            </Box>

            {/* Form Column */}
            <Box
              sx={{
                width: { xs: "100%", md: "75%", lg: "80%" },
                flexGrow: 1,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  bgcolor: COLORS.background.main,
                  borderRadius: 2,
                  boxShadow: `0 4px 20px ${COLORS.paper.shadow}`,
                  mb: 3,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <form
                  style={{ width: "100%" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (isLastStep) handleSubmit(e);
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
                    onFileChange={(file) => handleFileChange(file, "book")}
                    onImageChange={(file) => handleFileChange(file, "cover")}
                  />
                </form>
              </Paper>
            </Box>
          </Box>
        </Container>
      </FormContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertState.severity}
          sx={{ width: "100%" }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </PageWrapper>
  );
};

export default AddCoursePage;
