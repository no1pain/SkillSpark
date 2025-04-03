import { Box, Button } from '@mui/material';

interface CategoryTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CategoryTab = ({ label, active, onClick }: CategoryTabProps) => (
  <Button
    onClick={onClick}
    sx={{
      py: 1.5,
      px: 3,
      color: active ? 'white' : 'rgba(255, 255, 255, 0.6)',
      fontWeight: active ? '600' : '400',
      borderBottom: active ? '2px solid #4da3ff' : 'none',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'white'
      }
    }}
  >
    {label}
  </Button>
);

interface CategoryTabsProps {
  categories: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const CategoryTabs = ({ categories, activeTab, onTabChange }: CategoryTabsProps) => {
  return (
    <Box sx={{ display: 'flex', overflow: 'auto', mb: 3, pb: 1, justifyContent: 'center' }}>
      {categories.map((category, index) => (
        <CategoryTab 
          key={`${category}-${index}`} 
          label={category} 
          active={index === activeTab} 
          onClick={() => onTabChange(index)}
        />
      ))}
    </Box>
  );
};

export default CategoryTabs; 