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
      position: 'relative',
      borderRadius: '20px',
      minWidth: 'unset',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -1,
        left: '10%',
        width: '80%',
        height: '2px',
        backgroundColor: '#4da3ff',
        borderRadius: '4px',
        opacity: active ? 1 : 0,
        transition: 'all 0.2s ease'
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        color: 'white',
        '&:after': {
          opacity: 0.7
        }
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
    <Box sx={{ 
      display: 'flex', 
      overflow: 'auto', 
      justifyContent: 'center',
      gap: 1,
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      msOverflowStyle: 'none',  
      scrollbarWidth: 'none' 
    }}>
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