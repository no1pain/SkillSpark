import {
  Box,
  Container,
  Typography,
  styled,
  Card,
  CardContent,
  Chip,
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

const CourseCardPreview = ({
  title,
  category,
  level,
  price,
  type,
  author,
  imageUrl,
}: {
  title: string;
  category: string;
  level: string;
  price: number;
  type: string;
  author: string;
  imageUrl?: string | null;
}) => {
  // Generate a gradient based on the course category
  const getGradientByCategory = (category: string): string => {
    switch (category) {
      case "Technology":
        return COLORS.gradients.technology;
      case "Creative Arts":
        return COLORS.gradients.creativeArts;
      case "Business":
        return COLORS.gradients.business;
      case "Personal Development":
        return COLORS.gradients.personalDev;
      case "Finance":
        return COLORS.gradients.finance;
      default:
        return COLORS.gradients.default;
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
        boxShadow: `0 4px 10px ${COLORS.card.shadow}`,
      }}
    >
      <Box
        sx={{ position: "relative", paddingTop: "66.25%", overflow: "hidden" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: imageUrl
              ? `url(${imageUrl}) center/cover no-repeat`
              : getGradientByCategory(category),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!imageUrl && (
            <Typography
              variant="h4"
              color={COLORS.card.title}
              fontWeight="bold"
              align="center"
            >
              {type === "course" ? "📹" : "📚"}
            </Typography>
          )}
        </Box>
        <Chip
          label={category || "Category"}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: COLORS.chip.background,
            color: COLORS.chip.text,
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
          pb: 3,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            gutterBottom
            sx={{ fontSize: "1rem" }}
          >
            {title || `Your ${type === "course" ? "Course" : "Book"} Title`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1.5,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize="0.8rem"
            >
              {author || "Your Name"}
            </Typography>
            <Chip
              label={level}
              size="small"
              sx={{
                height: 18,
                fontSize: "0.6rem",
                backgroundColor:
                  level === "Beginner"
                    ? COLORS.level.beginner.bg
                    : level === "Intermediate"
                    ? COLORS.level.intermediate.bg
                    : COLORS.level.advanced.bg,
                color:
                  level === "Beginner"
                    ? COLORS.level.beginner.text
                    : level === "Intermediate"
                    ? COLORS.level.intermediate.text
                    : COLORS.level.advanced.text,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2.5,
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color={COLORS.primary}
            >
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
  type: "book" | "course";
  price: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isPublic: boolean;
  bookContent: File | null;
  coverImage: File | null;
  author: string;
  imageUrl: string | null;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true);
    try {
      await submitBook();
      setAlertState({
        open: true,
        message: "Your book has been successfully published!",
        severity: "success",
      });
      // Redirect to overview after a short delay
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
    } finally {
      setIsSubmitting(false);
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
    // Check required fields based on API requirements
    if (!formData.title || !formData.description || !formData.category) {
      setAlertState({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return false;
    }

    // Price must be a valid number
    if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) < 0) {
      setAlertState({
        open: true,
        message: "Please enter a valid price",
        severity: "error",
      });
      return false;
    }

    // Pages must be a valid number
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

    // Author is required
    if (!formData.author) {
      setAlertState({
        open: true,
        message: "Please enter an author name",
        severity: "error",
      });
      return false;
    }

    // File is required for books
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
