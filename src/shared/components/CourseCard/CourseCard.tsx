import { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Chip, Rating, SxProps, Theme } from '@mui/material';
import { Course } from '../../constants/coursesData';
import { TechLogo } from '../TechLogo';

interface CourseCardProps {
  course: Course;
  variant?: 'enrolled' | 'recommended' | 'featured';
  onEnroll?: () => void;
  onContinue?: () => void;
}

export const CourseCard = ({ 
  course, 
  variant = 'recommended',
  onEnroll,
  onContinue
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const isEnrolled = variant === 'enrolled';
  const isFeatured = variant === 'featured' || course.isFeatured;
  
  let buttonText = 'Explore Course';
  let buttonVariant: 'outlined' | 'contained' = 'outlined';
  let buttonAction = onEnroll;
  
  if (isEnrolled) {
    buttonText = 'Continue Learning';
    buttonVariant = 'contained';
    buttonAction = onContinue;
  } else if (isFeatured) {
    buttonText = 'View Course';
  }
  
  const getButtonStyles = (): SxProps<Theme> => {
    if (isEnrolled) {
      return {
        mt: 2,
        backgroundColor: 'rgba(77, 163, 255, 0.8)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(77, 163, 255, 1)',
        },
        textTransform: 'none',
        borderRadius: '6px',
        boxShadow: '0 4px 10px rgba(77, 163, 255, 0.25)',
      };
    } else if (isFeatured) {
      return {
        mt: 2,
        borderColor: 'rgba(255, 180, 0, 0.5)',
        color: 'rgba(255, 180, 0, 0.9)',
        '&:hover': {
          borderColor: 'rgba(255, 180, 0, 0.8)',
          backgroundColor: 'rgba(255, 180, 0, 0.1)',
        },
        textTransform: 'none',
        borderRadius: '6px',
      };
    } else {
      return {
        mt: 2,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white',
        '&:hover': {
          borderColor: 'rgba(255, 255, 255, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
        textTransform: 'none',
        borderRadius: '6px',
      };
    }
  };
  
  // Generate a gradient based on the course category
  const getGradientByCategory = (category: string): string => {
    switch(category) {
      case 'Technology':
        return 'linear-gradient(135deg, #E23838 0%, #FF9933 100%)'; // Red to orange
      case 'Creative Arts':
        return 'linear-gradient(135deg, #FF416C 0%, #FFA500 100%)'; // Pink to yellow
      case 'Business':
        return 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'; // Purple shades
      case 'Personal Development':
        return 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)'; // Blue shades
      case 'Finance':
        return 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'; // Green shades
      default:
        return 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)'; // Blue to purple
    }
  };
  
  // Get a color for the logo based on category
  const getLogoColor = (category: string): string => {
    switch(category) {
      case 'Technology':
        return '#61DAFB'; // React blue
      case 'Creative Arts':
        return '#FF9A8B'; // Pink
      case 'Business':
        return '#A78BFA'; // Purple
      case 'Personal Development':
        return '#38B2AC'; // Teal
      case 'Finance':
        return '#84CC16'; // Green
      default:
        return '#60A5FA'; // Blue
    }
  };
  
  return (
    <Card 
      sx={{ 
        backgroundColor: 'rgba(40, 40, 40, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 2,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: getGradientByCategory(course.category),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.6s ease',
            ...(isHovered && {
              transform: 'scale(1.05)',
            }),
          }}
        >
          {/* Course Logo */}
          <TechLogo 
            color={getLogoColor(course.category)}
            size={100}
            outerRingCount={3}
          />
        </Box>
        <Chip
          label={course.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '4px',
            fontSize: '0.7rem',
          }}
        />
        {(isFeatured && !isEnrolled) && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: 'rgba(255, 180, 0, 0.9)',
              color: 'black',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 'bold'
            }}
          />
        )}
        {course.progress && (
          <Box 
            sx={{ 
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <Box 
              sx={{ 
                height: '100%', 
                width: `${course.progress}%`,
                backgroundColor: '#4da3ff',
                borderRadius: '0 2px 2px 0'
              }} 
            />
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
        <Box>
          <Typography variant="subtitle1" color="white" fontWeight="medium" gutterBottom>
            {course.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem" sx={{ mr: 1 }}>
              {course.instructor}
            </Typography>
            <Chip 
              label={course.level} 
              size="small" 
              sx={{ 
                height: 18, 
                fontSize: '0.6rem',
                backgroundColor: course.level === 'Beginner' 
                  ? 'rgba(77, 163, 255, 0.2)' 
                  : course.level === 'Intermediate' 
                    ? 'rgba(132, 94, 247, 0.2)' 
                    : 'rgba(255, 76, 96, 0.2)',
                color: course.level === 'Beginner' 
                  ? '#4da3ff' 
                  : course.level === 'Intermediate' 
                    ? '#845ef7' 
                    : '#ff4c60',
              }} 
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating 
              value={course.rating} 
              precision={0.5} 
              readOnly 
              size="small" 
              sx={{ 
                color: '#FFD700',
                mr: 1
              }}
            />
            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.75rem">
              {course.rating.toFixed(1)}
            </Typography>
          </Box>
          
          {variant === 'featured' && (
            <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 1 }}>
              {course.description.length > 100 
                ? `${course.description.substring(0, 100)}...` 
                : course.description}
            </Typography>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem">
              {course.duration}
            </Typography>
            {course.progress ? (
              <Typography variant="body2" color="#4da3ff" fontWeight="medium" fontSize="0.8rem">
                {course.progress}% Complete
              </Typography>
            ) : (
              <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem">
                {course.studentsEnrolled.toLocaleString()} students
              </Typography>
            )}
          </Box>
          
          {variant === 'featured' && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
              {course.tags.slice(0, 3).map((tag) => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  size="small" 
                  sx={{ 
                    height: 20, 
                    fontSize: '0.6rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }} 
                />
              ))}
            </Box>
          )}
        </Box>
        <Button 
          variant={buttonVariant} 
          size="medium" 
          onClick={buttonAction}
          sx={getButtonStyles()}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}; 