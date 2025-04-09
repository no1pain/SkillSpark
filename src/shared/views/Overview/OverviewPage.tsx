import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchCourses } from "@/app/store/slices/coursesSlice";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { CategoryTabs } from "@/components/CategoryNavigation";
import { Box, Container } from "@mui/material";
import { CourseCard } from "@/shared/components/CourseCard";
import { CourseFormData } from "@/shared/types/course";
import { RootState } from "@/app/store/store";

interface CourseDisplay {
  title: string;
  description: string;
  category: string;
  isFeatured: boolean;
  difficulty: string;
  author: string;
  price: number;
  rating?: number;
  instructor?: string;
  level?: string;
  imageUrl: string;
}

const OverviewPage = () => {
  const dispatch = useAppDispatch();
  const {
    items: courses,
    status,
    error,
  } = useAppSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  const mapBookToCourse = (book: CourseFormData): CourseDisplay => ({
    title: book.title || "",
    description: book.description || "",
    category: book.category || "Other",
    isFeatured: book.isPublic || false,
    difficulty: book.level || "Beginner",
    author: book.author || "Unknown Author",
    price: parseFloat(book.price) || 0,
    rating: 5,
    instructor: book.author || "Unknown Author",
    level: book.level || "Beginner",
    imageUrl: book.imageUrl || "",
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Hero />
          <CategoryTabs />

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            {Array.isArray(courses) &&
              courses.map((book, index) => (
                <Box
                  key={`course-${index}-${
                    book.title?.replace(/\s+/g, "-") || "untitled"
                  }`}
                >
                  <CourseCard
                    course={{
                      ...mapBookToCourse(book),
                      price: typeof book.price === "number" ? book.price : 0,
                      rating: 5,
                      progress: 0,
                    }}
                    variant={book.isPublic ? "featured" : "recommended"}
                  />
                </Box>
              ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OverviewPage;
