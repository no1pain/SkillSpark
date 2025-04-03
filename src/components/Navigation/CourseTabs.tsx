import { Box, Button } from '@mui/material';

interface CourseTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CourseTab = ({ label, active, onClick }: CourseTabProps) => (
  <Button
    size="small"
    onClick={onClick}
    sx={{
      py: 1,
      px: 2.5,
      backgroundColor: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      color: active ? 'white' : 'rgba(255, 255, 255, 0.7)',
      borderRadius: '20px',
      fontSize: '0.85rem',
      '&:hover': {
        backgroundColor: active ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
      }
    }}
  >
    {label}
  </Button>
);

interface CourseTabsProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const CourseTabs = ({ tabs, activeTab, onTabChange }: CourseTabsProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, overflow: 'auto', mb: 4, pb: 1, justifyContent: 'center' }}>
      {tabs.map((tab, index) => (
        <CourseTab 
          key={`${tab}-${index}`} 
          label={tab} 
          active={index === activeTab} 
          onClick={() => onTabChange(index)}
        />
      ))}
    </Box>
  );
};

export default CourseTabs; 