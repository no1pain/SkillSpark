import { Box, Typography, AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { useAuth } from '../../app/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../shared/components/Icon';

const DRAWER_WIDTH = 240;

const Dashboard = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(40, 40, 40, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
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
          </Box>
          
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          <List>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="ethereum" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="apple" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="logo" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ p: 2 }}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
            <ListItem 
              disablePadding
              onClick={handleSignOut}
              sx={{ 
                borderRadius: 1,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)' }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Icon name="visibility" size={20} color="#FFFFFF" />
                </Box>
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> 
        <Typography paragraph variant="h5" sx={{ color: 'white', mb: 3 }}>
          Dashboard
        </Typography>
        <Box sx={{ 
          bgcolor: 'rgba(40, 40, 40, 0.6)', 
          p: 3, 
          borderRadius: 2,
          backdropFilter: 'blur(5px)'
        }}>
          <Typography paragraph>
            Welcome to your SkillSpark Dashboard. This is where you'll manage all your skills and projects.
          </Typography>
          <Typography paragraph>
            Your account was created on {currentUser?.metadata.creationTime}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 