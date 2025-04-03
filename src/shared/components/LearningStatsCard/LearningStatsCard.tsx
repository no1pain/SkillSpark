import { Box, Typography, Badge } from '@mui/material';
import { GoalProgress } from '../GoalProgress';
import { TechLogo } from '../TechLogo';

interface LearningStatsCardProps {
  value: number | string;
  label: string;
  color?: string;
  bgColor?: string;
  showBadge?: boolean;
  badgeContent?: string;
  showProgress?: boolean;
  progressMax?: number;
  isTime?: boolean;
  showLogo?: boolean;
}

export const LearningStatsCard = ({
  value,
  label,
  color = '#4da3ff',
  bgColor = 'rgba(77, 163, 255, 0.15)',
  showBadge = false,
  badgeContent = '+1',
  showProgress = false,
  progressMax = 100,
  isTime = false,
  showLogo = false
}: LearningStatsCardProps) => {
  const numericValue = typeof value === 'number' ? value : 0;
  
  // Convert the bgColor to a gradient
  const getGradient = () => {
    if (bgColor.includes('77, 163, 255')) { // Blue
      return 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)';
    } else if (bgColor.includes('54, 209, 161')) { // Green
      return 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)';
    } else if (bgColor.includes('255, 180, 0')) { // Yellow/Gold
      return 'linear-gradient(135deg, #FF8008 0%, #FFC837 100%)';
    } else if (bgColor.includes('132, 94, 247')) { // Purple
      return 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)';
    } else {
      return 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)';
    }
  };
  
  return (
    <Box sx={{ 
      background: getGradient(),
      borderRadius: 2,
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      overflow: 'hidden',
      position: 'relative',
      backdropFilter: 'blur(10px)',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      }
    }}>
      {showLogo && (
        <Box sx={{ position: 'absolute', opacity: 0.1, right: -20, bottom: -20, transform: 'rotate(20deg)' }}>
          <TechLogo 
            color="#ffffff" 
            size={150} 
            outerRingCount={2}
          />
        </Box>
      )}
      
      {showProgress ? (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, zIndex: 1 }}>
          <GoalProgress 
            current={numericValue} 
            max={progressMax}
            size={70}
            color={color}
            backgroundColor="rgba(255, 255, 255, 0.15)"
            showText={isTime}
            label={isTime ? "hours" : undefined}
          />
        </Box>
      ) : (
        <Badge 
          badgeContent={showBadge ? badgeContent : undefined} 
          color="primary"
          sx={{ 
            '& .MuiBadge-badge': {
              backgroundColor: '#ffffff',
              color: '#333333',
              fontWeight: 'bold',
            },
            mb: 1,
            zIndex: 1
          }}
        >
          <Typography variant="h3" color="white" fontWeight="600">{value}</Typography>
        </Badge>
      )}
      <Typography color="rgba(255, 255, 255, 0.9)" fontWeight="medium" textAlign="center" sx={{ mt: 1, zIndex: 1 }}>
        {label}
      </Typography>
    </Box>
  );
}; 