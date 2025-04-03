import { Box, Typography, Paper, Divider } from '@mui/material';
import { GoalProgress } from '../GoalProgress';

interface Milestone {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

interface LearningJourneyProps {
  milestones: Milestone[];
  currentMilestone: number;
}

export const LearningJourney = ({ milestones, currentMilestone }: LearningJourneyProps) => {
  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(40, 40, 40, 0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        p: 3,
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Typography variant="h6" color="white" gutterBottom>
        Your Learning Journey
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
        {milestones.map((milestone, index) => (
          <Box key={milestone.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ position: 'relative' }}>
              <GoalProgress
                current={milestone.completed ? 1 : 0}
                max={1}
                size={50}
                color={milestone.completed ? '#4da3ff' : index === currentMilestone ? 'rgba(255, 180, 0, 0.8)' : 'rgba(255, 255, 255, 0.2)'}
                backgroundColor={index === currentMilestone ? 'rgba(255, 180, 0, 0.1)' : 'rgba(40, 40, 40, 0.5)'}
                showValue={false}
                label={milestone.completed ? "✓" : (index + 1).toString()}
                tooltip={milestone.title}
              />
              {index < milestones.length - 1 && (
                <Divider 
                  sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '100%', 
                    width: 40, 
                    borderColor: milestone.completed ? '#4da3ff' : 'rgba(255, 255, 255, 0.2)',
                    borderStyle: milestone.completed ? 'solid' : 'dashed'
                  }} 
                />
              )}
            </Box>
            {index < milestones.length - 1 && <Box sx={{ width: 40 }} />}
          </Box>
        ))}
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" color="white" fontWeight="medium" gutterBottom>
          {milestones[currentMilestone]?.title || "Your Journey"}
        </Typography>
        <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
          {milestones[currentMilestone]?.description || "Continue your learning journey"}
        </Typography>
      </Box>
    </Paper>
  );
}; 