import CourseGrid from "@/components/CourseGrid/CourseGrid";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CategoryTabs from "@/components/Navigation/CategoryTabs";
import CourseTabs from "@/components/Navigation/CourseTabs";
import {
  CATEGORIES,
  COURSE_DATA,
  COURSE_TABS,
} from "@/shared/constants/courseData";
import { Box, Container, Divider } from "@mui/material";
import { useState } from "react";

const OverviewPage = () => {
  const [categoryTab, setCategoryTab] = useState(0);
  const [courseTab, setCourseTab] = useState(0);

  const handleCategoryChange = (index: number) => {
    setCategoryTab(index);
  };

  const handleCourseTabChange = (index: number) => {
    setCourseTab(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "transparent",
      }}
    >
      <Header />

      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Hero />

          <CategoryTabs
            categories={CATEGORIES}
            activeTab={categoryTab}
            onTabChange={handleCategoryChange}
          />

          <Divider
            sx={{
              borderColor: "rgba(0, 0, 0, 0.12)",
              width: "100%",
            }}
          />

          <CourseTabs
            tabs={COURSE_TABS}
            activeTab={courseTab}
            onTabChange={handleCourseTabChange}
          />

          <CourseGrid courses={COURSE_DATA} />
        </Container>
      </Box>
    </Box>
  );
};

export default OverviewPage;
