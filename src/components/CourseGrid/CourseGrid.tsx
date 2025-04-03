import { Box, Typography } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';

interface Course {
  title: string;
  learners: number;
}

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  if (courses.length === 0) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <Typography 
          variant="h6" 
          color="rgba(255, 255, 255, 0.7)"
          textAlign="center"
        >
          No courses available yet
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)'
        },
        gap: 3
      }}
    >
      {courses.map((course, index) => (
        <Box key={index}>
          <CourseCard
            title={course.title}
            learners={course.learners}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CourseGrid; 