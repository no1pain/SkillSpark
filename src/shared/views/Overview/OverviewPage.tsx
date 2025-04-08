import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { CategoryTabs } from "@/components/CategoryNavigation";
import { Box, Container, Typography } from "@mui/material";
import { CourseCard } from "@/shared/components/CourseCard";
import { getAllBooks, BookData } from "@/shared/api/bookService";

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
}

const OverviewPage = () => {
  const [courses, setCourses] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllBooks();
        // Ensure we're working with an array
        const data = Array.isArray(response) ? response : response.data || [];
        setCourses(data);
      } catch (err) {
        setError("Failed to fetch courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const mapBookToCourse = (book: BookData): CourseDisplay => ({
    title: book.title || "",
    description: book.description || "",
    category: book.category || "Other",
    isFeatured: book.isPublic || false,
    difficulty: book.difficulty || "Beginner",
    author: book.author || "Unknown Author",
    price: book.price || 0,
    rating: 5,
    instructor: book.author || "Unknown Author",
    level: book.difficulty || "Beginner",
  });

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

          {loading && (
            <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
              Loading courses...
            </Typography>
          )}

          {error && (
            <Typography
              variant="h6"
              color="error"
              sx={{ textAlign: "center", mt: 4 }}
            >
              {error}
            </Typography>
          )}

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
