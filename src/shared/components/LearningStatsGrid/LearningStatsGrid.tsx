import { Grid } from '@mui/material';
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
    <Grid container spacing={3}>
      <Grid item sx={{ width: { xs: '100%', sm: '33.33%' } }}>
        <LearningStatsCard 
          value={coursesInProgress}
          label="Courses in Progress"
          color="#4da3ff"
          bgColor="rgba(77, 163, 255, 0.15)"
          showBadge={true}
          badgeContent={badgeContent}
        />
      </Grid>

      <Grid item sx={{ width: { xs: '100%', sm: '33.33%' } }}>
        <LearningStatsCard 
          value={totalHoursLearned}
          label="Total Hours Learned"
          color="#36d1a1"
          bgColor="rgba(54, 209, 161, 0.15)"
        />
      </Grid>

      <Grid item sx={{ width: { xs: '100%', sm: '33.33%' } }}>
        <LearningStatsCard 
          value={hoursThisWeek}
          label="Weekly Goal Progress"
          color="#ffb400"
          bgColor="rgba(255, 180, 0, 0.15)"
          showProgress={true}
          progressMax={weeklyGoal}
          isTime={true}
        />
      </Grid>
    </Grid>
  );
}; 