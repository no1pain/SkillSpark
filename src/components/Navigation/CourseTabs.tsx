import { Box, Button } from "@mui/material";

interface CourseTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CourseTab = ({ label, active, onClick }: CourseTabProps) => (
  <Button
    onClick={onClick}
    sx={{
      py: 1.5,
      px: 3,
      color: active ? "white" : "rgba(255, 255, 255, 0.6)",
      fontWeight: active ? "600" : "400",
      position: "relative",
      borderRadius: "20px",
      minWidth: "unset",
      textTransform: "none",
      backgroundColor: active ? "#0e78e6" : "transparent",
      "&:hover": {
        backgroundColor: active ? "#0e78e6" : "rgba(255, 255, 255, 0.03)",
        color: "white",
      },
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
    <Box
      sx={{
        display: "flex",
        overflow: "auto",
        height: "40px",
        gap: 1,
        "&::-webkit-scrollbar": {
          display: "none",
        },
        mt: 6,
        justifyContent: "center",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
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
