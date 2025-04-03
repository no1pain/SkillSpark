import { Box } from '@mui/material';
import CourseCard from '../CourseCard/CourseCard';

interface Course {
  title: string;
  learners: number;
}

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
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