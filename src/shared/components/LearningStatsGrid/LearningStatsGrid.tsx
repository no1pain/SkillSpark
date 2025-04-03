import { Box } from '@mui/material';
import { LearningStatsCard } from '../LearningStatsCard';

interface LearningStatsGridProps {
  coursesInProgress: number;
  totalHoursLearned: number;
  weeklyGoal: number;
  hoursThisWeek: number;
  badgeContent?: string;
}

export const LearningStatsGrid = ({
  coursesInProgress,
  totalHoursLearned,
  weeklyGoal,
  hoursThisWeek,
  badgeContent = '+2'
}: LearningStatsGridProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(33.33% - 16px)' } }}>
        <LearningStatsCard 
          value={coursesInProgress}
          label="Courses in Progress"
          color="#4da3ff"
          bgColor="rgba(77, 163, 255, 0.15)"
          showBadge={true}
          badgeContent={badgeContent}
        />
      </Box>

      <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(33.33% - 16px)' } }}>
        <LearningStatsCard 
          value={totalHoursLearned}
          label="Total Hours Learned"
          color="#36d1a1"
          bgColor="rgba(54, 209, 161, 0.15)"
        />
      </Box>

      <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(33.33% - 16px)' } }}>
        <LearningStatsCard 
          value={hoursThisWeek}
          label="Weekly Goal Progress"
          color="#ffb400"
          bgColor="rgba(255, 180, 0, 0.15)"
          showProgress={true}
          progressMax={weeklyGoal}
          isTime={true}
        />
      </Box>
    </Box>
  );
}; 