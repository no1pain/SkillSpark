import { Box, Container } from '@mui/material';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import CategoryTabs from '../../components/Navigation/CategoryTabs';
import CourseTabs from '../../components/Navigation/CourseTabs';
import CourseGrid from '../../components/CourseGrid/CourseGrid';
import { CATEGORIES, COURSE_TABS, COURSE_DATA } from '../../shared/constants/courseData';

const Overview = () => {
  const [categoryTab, setCategoryTab] = useState(0);
  const [courseTab, setCourseTab] = useState(0);

  const handleCategoryChange = (index: number) => {
    setCategoryTab(index);
  };

  const handleCourseTabChange = (index: number) => {
    setCourseTab(index);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', bgcolor: '#121212' }}>
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Hero />
          
          <CategoryTabs 
            categories={CATEGORIES}
            activeTab={categoryTab}
            onTabChange={handleCategoryChange}
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

export default Overview; 