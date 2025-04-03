import { Box, Typography, Tooltip } from '@mui/material';

interface GoalProgressProps {
  current: number;
  max: number;
  size?: number;
  label?: string;
  tooltip?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  showValue?: boolean;
  showText?: boolean;
}

export const GoalProgress = ({
  current,
  max,
  size = 60,
  label,
  tooltip,
  color = '#4da3ff',
  backgroundColor = 'rgba(255,255,255,0.1)',
  fontSize = 16,
  showValue = true,
  showText = false
}: GoalProgressProps) => {
  const percentage = Math.min(100, Math.round((current / max) * 100));
  const innerSize = Math.round(size * 0.8);
  
  const progressCircle = (
    <Box sx={{ 
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: `conic-gradient(${color} ${percentage * 3.6}deg, ${backgroundColor} 0)`,
        transform: 'rotate(-90deg)'
      }} />
      <Box sx={{
        position: 'absolute',
        width: innerSize,
        height: innerSize,
        borderRadius: '50%',
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}>
        {showValue && (
          <Typography 
            variant="h6" 
            sx={{ 
              color: color, 
              fontWeight: 'bold',
              fontSize: fontSize
            }}
          >
            {percentage}%
          </Typography>
        )}
        {!showValue && label && (
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'white', 
              fontWeight: 'medium',
              fontSize: fontSize * 0.7
            }}
          >
            {label}
          </Typography>
        )}
      </Box>
    </Box>
  );

  if (showText) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        background: 'rgba(32, 32, 35, 0.8)',
        borderRadius: '8px',
        p: 1.5,
        minWidth: size * 2
      }}>
        {progressCircle}
        <Typography variant="body2" color="white" fontWeight="medium" sx={{ mt: 1 }}>
          {current}/{max} {label || 'hours'}
        </Typography>
      </Box>
    );
  }
  
  return tooltip ? (
    <Tooltip title={tooltip} arrow>
      {progressCircle}
    </Tooltip>
  ) : progressCircle;
}; 