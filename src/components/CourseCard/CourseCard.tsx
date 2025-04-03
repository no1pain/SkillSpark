import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CourseCardProps {
  title: string;
  learners: number;
}

const CourseCard = ({ title, learners }: CourseCardProps) => {
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'rgba(35, 35, 35, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image="https://via.placeholder.com/300x200/1a1a1a/4da3ff?text=Course"
        alt={title}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" color="white" fontWeight="medium">
          {title}
        </Typography>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" sx={{ mt: 1 }}>
          {learners.toLocaleString()} learners
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard; 