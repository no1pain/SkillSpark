import { 
  Box, Typography, AppBar, Toolbar, Drawer, List, ListItem, 
  ListItemIcon, ListItemText, Divider, IconButton, Grid, Card, 
  CardContent, Button, Chip, Avatar, Rating, 
  Container, Badge, Tooltip, Tab, Tabs
} from '@mui/material';
import { useAuth } from '../../app/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../shared/components/Icon';
import { myCoursesData, recommendedCoursesData, featuredCoursesData, courseCategories, learningStats } from '../../shared/constants/coursesData';
import { useState } from 'react';
import { GoalProgress } from '../../shared/components/GoalProgress';
import { LearningJourney } from '../../shared/components/LearningJourney';
import { LearningStatsCard } from '../../shared/components/LearningStatsCard';

const sampleMilestones = [
  {
    id: 1,
    title: "Getting Started",
    completed: true,
    description: "Complete your first lesson and set your learning goals."
  },
  {
    id: 2,
    title: "Building Skills",
    completed: true,
    description: "Complete 5 lessons across different courses."
  },
  {
    id: 3,
    title: "Going Deeper",
    completed: false,
    description: "Finish your first course and earn a certificate."
  },
  {
    id: 4,
    title: "Mastery",
    completed: false,
    description: "Apply your skills in projects and receive feedback."
  },
  {
    id: 5,
    title: "Expert Level",
    completed: false,
    description: "Mentor others and contribute to the community."
  }
];

const DRAWER_WIDTH = 240;

const Overview = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(40, 40, 40, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              sx={{ 
                width: 36, 
                height: 36, 
                bgcolor: 'rgba(70, 70, 70, 0.8)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: 2
              }}
            >
              <Icon name="ethereum" size={18} color="#FFFFFF" />
            </Box>
            <Typography variant="h6" noWrap component="div">
              SkillSpark
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Icon name="visibility" size={20} color="#FFFFFF" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }}>
              <Avatar sx={{ width: 30, height: 30, fontSize: '14px', bgcolor: '#4da3ff' }}>
                {currentUser?.displayName?.[0] || 'U'}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: DRAWER_WIDTH, 
            boxSizing: 'border-box',
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)'
          },
        }}
      >
        <Toolbar /> 
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight="500" color="white">
              Welcome, {currentUser?.displayName || 'User'}!
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" sx={{ mb: 2 }}>
              {currentUser?.email}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              p: 1.5,
              borderRadius: 2,
              mb: 1
            }}>
              <Box>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                  Day Streak
                </Typography>
                <Typography variant="h6" color="white" fontWeight="500">
                  {learningStats.streakDays} days
                </Typography>
              </Box>
              <GoalProgress 
                current={learningStats.streakDays} 
                max={7}
                size={50}
                color="#845ef7"
                backgroundColor="rgba(132, 94, 247, 0.15)"
                tooltip="Keep your learning streak going!"
                label={`${learningStats.streakDays}`}
                showValue={false}
              />
            </Box>
          </Box>
          
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          <List>
            <ListItem 
              disablePadding 
              sx={{ 
                py: 0.5, 
                px: 1, 
                my: 0.5, 
                borderRadius: 1,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="ethereum" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="Overview" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>

            <ListItem 
              disablePadding 
              sx={{ 
                py: 0.5, 
                px: 1, 
                my: 0.5, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="apple" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="My Courses" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>

            <ListItem 
              disablePadding 
              sx={{ 
                py: 0.5, 
                px: 1, 
                my: 0.5, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="logo" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="Explore" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>

            <ListItem 
              disablePadding 
              sx={{ 
                py: 0.5, 
                px: 1, 
                my: 0.5, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="visibility" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="Community" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>

            <ListItem 
              disablePadding 
              sx={{ 
                py: 0.5, 
                px: 1, 
                my: 0.5, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="visibility" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="Settings" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>
          </List>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ p: 2 }}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
            <ListItem 
              disablePadding
              onClick={handleSignOut}
              sx={{ 
                py: 0.5, 
                px: 1, 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                cursor: 'pointer'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="visibility" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText 
                primary="Sign Out" 
                primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.9)' } }}
              />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ 
        flexGrow: 1, 
        p: 3, 
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        height: '100vh',
        overflow: 'auto',
        '::-webkit-scrollbar': {
          width: '6px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
      }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ width: '100%' }}>
          {/* Welcome Banner */}
          <Box 
            sx={{ 
              mb: 4, 
              p: 3, 
              borderRadius: 3,
              background: 'linear-gradient(to right, rgba(77, 163, 255, 0.15), rgba(132, 94, 247, 0.15))',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
                Welcome back, {currentUser?.displayName?.split(' ')[0] || 'User'}!
              </Typography>
              <Typography variant="body1" color="rgba(255, 255, 255, 0.7)">
                You have {learningStats.coursesInProgress} courses in progress and {learningStats.streakDays} day streak. Keep it up!
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mt: { xs: 2, md: 0 },
              background: 'rgba(255, 255, 255, 0.1)',
              p: 1.5,
              borderRadius: 2
            }}>
              <GoalProgress 
                current={learningStats.hoursThisWeek} 
                max={learningStats.weeklyGoal}
                size={60}
                color="#4da3ff"
                backgroundColor="rgba(77, 163, 255, 0.15)"
                showText={true}
                label="hours"
              />
            </Box>
          </Box>

          {/* Navigation Tabs */}
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{ 
              mb: 3,
              '& .MuiTabs-indicator': {
                backgroundColor: '#4da3ff',
                height: 3,
                borderRadius: '3px 3px 0 0'
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.6)',
                '&.Mui-selected': {
                  color: '#4da3ff',
                }
              }
            }}
          >
            <Tab label="Continue Learning" />
            <Tab label="Recommended" />
            <Tab label="Featured" />
          </Tabs>

          {/* Continue Learning Tab */}
          {activeTab === 0 && (
            <>
              <Grid container spacing={3}>
                {myCoursesData.map((course) => (
                  <Grid key={course.id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 1.5 }}>
                    <Card 
                      sx={{ 
                        backgroundColor: 'rgba(40, 40, 40, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        }
                      }}
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                        <Box
                          component="img"
                          src={course.thumbnail}
                          alt={course.title}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s ease',
                            ...(hoveredCourse === course.id && {
                              transform: 'scale(1.05)',
                            }),
                          }}
                        />
                        <Chip
                          label={course.category}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                          }}
                        />
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)'
                          }}
                        >
                          <Box 
                            sx={{ 
                              height: '100%', 
                              width: `${course.progress}%`,
                              backgroundColor: '#4da3ff',
                              borderRadius: '0 2px 2px 0'
                            }} 
                          />
                        </Box>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                        <Box>
                          <Typography variant="subtitle1" color="white" fontWeight="medium" gutterBottom>
                            {course.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem" sx={{ mr: 1 }}>
                              {course.instructor}
                            </Typography>
                            <Chip 
                              label={course.level} 
                              size="small" 
                              sx={{ 
                                height: 18, 
                                fontSize: '0.6rem',
                                backgroundColor: course.level === 'Beginner' 
                                  ? 'rgba(77, 163, 255, 0.2)' 
                                  : course.level === 'Intermediate' 
                                    ? 'rgba(132, 94, 247, 0.2)' 
                                    : 'rgba(255, 76, 96, 0.2)',
                                color: course.level === 'Beginner' 
                                  ? '#4da3ff' 
                                  : course.level === 'Intermediate' 
                                    ? '#845ef7' 
                                    : '#ff4c60',
                              }} 
                            />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating 
                              value={course.rating} 
                              precision={0.5} 
                              readOnly 
                              size="small" 
                              sx={{ 
                                color: '#FFD700',
                                mr: 1
                              }}
                            />
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.75rem">
                              {course.rating.toFixed(1)}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem">
                              {course.duration}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography variant="body2" color="#4da3ff" fontWeight="medium" fontSize="0.8rem" sx={{ mr: 1 }}>
                                {course.progress}% Complete
                              </Typography>
                              <GoalProgress 
                                current={course.progress || 0} 
                                max={100}
                                size={36}
                                showValue={false}
                              />
                            </Box>
                          </Box>
                        </Box>
                        <Button 
                          variant="contained" 
                          size="medium" 
                          sx={{ 
                            mt: 2,
                            backgroundColor: 'rgba(77, 163, 255, 0.8)',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'rgba(77, 163, 255, 1)',
                            },
                            textTransform: 'none',
                            borderRadius: '6px',
                            boxShadow: '0 4px 10px rgba(77, 163, 255, 0.25)',
                          }}
                        >
                          Continue Learning
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              {/* Learning Stats */}
              <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h6" color="white" gutterBottom sx={{ mb: 2, borderLeft: '3px solid #4da3ff', pl: 2 }}>
                  Your Learning Stats
                </Typography>
                <LearningStatsCard 
                  coursesInProgress={learningStats.coursesInProgress}
                  totalHoursLearned={learningStats.totalHoursLearned}
                  weeklyGoal={learningStats.weeklyGoal}
                  hoursThisWeek={learningStats.hoursThisWeek}
                />
              </Box>
            </>
          )}

          {/* Recommended Tab */}
          {activeTab === 1 && (
            <Grid container spacing={3}>
              {recommendedCoursesData.map((course) => (
                <Grid key={course.id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 1.5 }}>
                  <Card 
                    sx={{ 
                      backgroundColor: 'rgba(40, 40, 40, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                    onMouseEnter={() => setHoveredCourse(course.id)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                      <Box
                        component="img"
                        src={course.thumbnail}
                        alt={course.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          ...(hoveredCourse === course.id && {
                            transform: 'scale(1.05)',
                          }),
                        }}
                      />
                      <Chip
                        label={course.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                        }}
                      />
                      {course.isFeatured && (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            backgroundColor: 'rgba(255, 180, 0, 0.9)',
                            color: 'black',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            fontWeight: 'bold'
                          }}
                        />
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                      <Box>
                        <Typography variant="subtitle1" color="white" fontWeight="medium" gutterBottom>
                          {course.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem" sx={{ mr: 1 }}>
                            {course.instructor}
                          </Typography>
                          <Chip 
                            label={course.level} 
                            size="small" 
                            sx={{ 
                              height: 18, 
                              fontSize: '0.6rem',
                              backgroundColor: course.level === 'Beginner' 
                                ? 'rgba(77, 163, 255, 0.2)' 
                                : course.level === 'Intermediate' 
                                  ? 'rgba(132, 94, 247, 0.2)' 
                                  : 'rgba(255, 76, 96, 0.2)',
                              color: course.level === 'Beginner' 
                                ? '#4da3ff' 
                                : course.level === 'Intermediate' 
                                  ? '#845ef7' 
                                  : '#ff4c60',
                            }} 
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Rating 
                            value={course.rating} 
                            precision={0.5} 
                            readOnly 
                            size="small" 
                            sx={{ 
                              color: '#FFD700',
                              mr: 1
                            }}
                          />
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.75rem">
                            {course.rating.toFixed(1)}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem">
                            {course.duration}
                          </Typography>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem">
                            {course.studentsEnrolled.toLocaleString()} students
                          </Typography>
                        </Box>
                      </Box>
                      <Button 
                        variant="outlined" 
                        size="medium" 
                        sx={{ 
                          mt: 2,
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          '&:hover': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          },
                          textTransform: 'none',
                          borderRadius: '6px',
                        }}
                      >
                        Explore Course
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Featured Tab */}
          {activeTab === 2 && (
            <Grid container spacing={3}>
              {featuredCoursesData.map((course) => (
                <Grid key={course.id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' }, p: 1.5 }}>
                  <Card 
                    sx={{ 
                      backgroundColor: 'rgba(40, 40, 40, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                    onMouseEnter={() => setHoveredCourse(course.id)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                      <Box
                        component="img"
                        src={course.thumbnail}
                        alt={course.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          ...(hoveredCourse === course.id && {
                            transform: 'scale(1.05)',
                          }),
                        }}
                      />
                      <Chip
                        label={course.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                        }}
                      />
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          backgroundColor: 'rgba(255, 180, 0, 0.9)',
                          color: 'black',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                      <Box>
                        <Typography variant="subtitle1" color="white" fontWeight="medium" gutterBottom>
                          {course.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.8rem" sx={{ mr: 1 }}>
                            {course.instructor}
                          </Typography>
                          <Chip 
                            label={course.level} 
                            size="small" 
                            sx={{ 
                              height: 18, 
                              fontSize: '0.6rem',
                              backgroundColor: course.level === 'Beginner' 
                                ? 'rgba(77, 163, 255, 0.2)' 
                                : course.level === 'Intermediate' 
                                  ? 'rgba(132, 94, 247, 0.2)' 
                                  : 'rgba(255, 76, 96, 0.2)',
                              color: course.level === 'Beginner' 
                                ? '#4da3ff' 
                                : course.level === 'Intermediate' 
                                  ? '#845ef7' 
                                  : '#ff4c60',
                            }} 
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating 
                            value={course.rating} 
                            precision={0.5} 
                            readOnly 
                            size="small" 
                            sx={{ 
                              color: '#FFD700',
                              mr: 1
                            }}
                          />
                          <Typography variant="body2" color="rgba(255, 255, 255, 0.6)" fontSize="0.75rem">
                            {course.rating.toFixed(1)}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mb: 1 }}>
                          {course.description.length > 100 
                            ? `${course.description.substring(0, 100)}...` 
                            : course.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                          {course.tags.slice(0, 3).map((tag) => (
                            <Chip 
                              key={tag} 
                              label={tag} 
                              size="small" 
                              sx={{ 
                                height: 20, 
                                fontSize: '0.6rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: 'rgba(255, 255, 255, 0.7)',
                              }} 
                            />
                          ))}
                        </Box>
                      </Box>
                      <Button 
                        variant="outlined" 
                        size="medium" 
                        sx={{ 
                          mt: 2,
                          borderColor: 'rgba(255, 180, 0, 0.5)',
                          color: 'rgba(255, 180, 0, 0.9)',
                          '&:hover': {
                            borderColor: 'rgba(255, 180, 0, 0.8)',
                            backgroundColor: 'rgba(255, 180, 0, 0.1)',
                          },
                          textTransform: 'none',
                          borderRadius: '6px',
                        }}
                      >
                        View Course
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Learning Journey */}
          <Box sx={{ mt: 5, mb: 4 }}>
            <Typography variant="h6" color="white" gutterBottom sx={{ mb: 2, borderLeft: '3px solid #4da3ff', pl: 2 }}>
              Your Learning Journey
            </Typography>
            <LearningJourney 
              milestones={sampleMilestones} 
              currentMilestone={2} 
            />
          </Box>

          {/* Daily Goals Section */}
          <Box sx={{ mb: 3, width: '100%' }}>
            <Typography variant="h6" color="white" gutterBottom sx={{ mb: 2, borderLeft: '3px solid #845ef7', pl: 2 }}>
              Daily Learning Streak
            </Typography>
            <Box sx={{ 
              bgcolor: 'rgba(28, 28, 30, 0.4)', 
              p: 3, 
              borderRadius: 2,
              mb: 3
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body1" color="white" fontWeight="500">
                  Weekly Progress
                </Typography>
                <Chip 
                  label={`${learningStats.streakDays}/7 days completed`} 
                  size="small" 
                  sx={{ 
                    bgcolor: 'rgba(132, 94, 247, 0.15)', 
                    color: '#845ef7',
                    height: 24
                  }} 
                />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <Box key={day} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography color="rgba(255, 255, 255, 0.6)" fontSize="0.75rem" sx={{ mb: 1 }}>
                      {day}
                    </Typography>
                    <GoalProgress 
                      current={index < learningStats.streakDays ? 1 : 0} 
                      max={1}
                      size={40}
                      color={index < learningStats.streakDays ? '#845ef7' : 'rgba(255, 255, 255, 0.1)'}
                      backgroundColor="rgba(40, 40, 40, 0.5)"
                      showValue={false}
                      label={index < learningStats.streakDays ? "✓" : ""}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Footer */}
          <Box 
            sx={{ 
              mt: 5, 
              pt: 3, 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Box sx={{ 
              mt: 5, 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              width: '100%'
            }}>
              <Box>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.5)">
                  © 2023 SkillSpark Learning Platform
                </Typography>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.3)" sx={{ mt: 0.5 }}>
                  Empowering learners worldwide
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 } }}>
                <Typography variant="body2" color="rgba(255, 255, 255, 0.5)" sx={{ mr: 1 }}>
                  Join our community on
                </Typography>
                <Button 
                  size="small"
                  startIcon={<Icon name="visibility" size={16} color="rgba(255, 255, 255, 0.8)" />}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    mr: 1,
                    minWidth: 'unset',
                    p: 0.5,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  Twitter
                </Button>
                <Button 
                  size="small"
                  startIcon={<Icon name="visibility" size={16} color="rgba(255, 255, 255, 0.8)" />}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    minWidth: 'unset',
                    p: 0.5,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  Discord
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Overview; 