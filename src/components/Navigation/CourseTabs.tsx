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
      color: active ? "white" : "rgba(0, 0, 0, 0.6)",
      fontWeight: active ? "600" : "400",
      position: "relative",
      borderRadius: "20px",
      minWidth: "unset",
      textTransform: "none",
      backgroundColor: active ? "#0e78e6" : "transparent",
      "&:hover": {
        backgroundColor: active ? "#0e78e6" : "rgba(0, 0, 0, 0.03)",
        color: active ? "white" : "#000000",
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
    <Box sx={{ justifyContent: "center", display: "flex", gap: 1, my: 3 }}>
      {tabs.map((tab, index) => (
        <CourseTab
          key={tab}
          label={tab}
          active={index === activeTab}
          onClick={() => onTabChange(index)}
        />
      ))}
    </Box>
  );
};

export default CourseTabs;
