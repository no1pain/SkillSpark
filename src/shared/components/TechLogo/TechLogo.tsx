import { Box } from '@mui/material';

interface TechLogoProps {
  color?: string;
  secondaryColor?: string;
  size?: number;
  outerRingCount?: number;
}

export const TechLogo = ({
  color = '#61DAFB', 
  secondaryColor = '#61DAFB33',
  size = 120,
  outerRingCount = 3,
}: TechLogoProps) => {
  const outerRingSize = size * 0.9;
  const innerCircleSize = size * 0.3;
  
  const generateOrbitStyles = (index: number, total: number) => {
    const rotationDeg = index * (360 / total);
    return {
      position: 'absolute',
      width: outerRingSize,
      height: outerRingSize * 0.4,
      borderRadius: '50%',
      border: `2px solid ${color}`,
      transform: `rotate(${rotationDeg}deg)`,
      animation: 'spin 8s linear infinite',
    };
  };
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        '@keyframes pulse': {
          '0%': {
            boxShadow: `0 0 0 0 ${secondaryColor}`,
          },
          '70%': {
            boxShadow: `0 0 0 10px rgba(97, 218, 251, 0)`,
          },
          '100%': {
            boxShadow: `0 0 0 0 rgba(97, 218, 251, 0)`,
          },
        },
      }}
    >
      {/* Outer Rings/Orbits */}
      {Array.from({ length: outerRingCount }).map((_, index) => (
        <Box
          key={`ring-${index}`}
          sx={{
            ...generateOrbitStyles(index, outerRingCount),
            animationDuration: `${8 + index * 2}s`,
            animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
          }}
        />
      ))}
      
      {/* Center circle */}
      <Box
        sx={{
          width: innerCircleSize,
          height: innerCircleSize,
          borderRadius: '50%',
          backgroundColor: color,
          animation: 'pulse 2s infinite',
          zIndex: 1,
        }}
      />
    </Box>
  );
}; 