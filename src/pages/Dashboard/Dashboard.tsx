import { Button, Box, Typography, Container, Paper } from '@mui/material';
import { useAuth } from '../../app/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../shared/components/Icon';

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
    <Container maxWidth="sm" sx={{ p: 0 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          py: 4,
          px: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          borderRadius: 16,
          bgcolor: 'rgba(40, 40, 40, 0.8)',
          backdropFilter: 'blur(10px)',
          maxWidth: '500px',
          mx: 'auto'
        }}
      >
        <Box 
          sx={{ 
            width: 56, 
            height: 56, 
            bgcolor: 'rgba(70, 70, 70, 0.8)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 1.5
          }}
        >
          <Icon name="ethereum" size={24} color="#FFFFFF" />
        </Box>
        
        <Typography component="h1" variant="h5" color="white" sx={{ mb: 2, fontWeight: 500, fontSize: '22px' }}>
          Welcome, {currentUser?.displayName || 'User'}!
        </Typography>
        
        <Typography variant="body1" color="#CCCCCC" sx={{ mb: 4, textAlign: 'center' }}>
          You are now signed in to SkillSpark with {currentUser?.email}
        </Typography>
        
        <Button
          onClick={handleSignOut}
          variant="contained"
          sx={{ 
            height: '48px',
            width: '200px',
            bgcolor: '#333333',
            color: 'white',
            borderRadius: 8,
            '&:hover': { bgcolor: '#444444' },
            textTransform: 'none',
            boxShadow: 'none',
            fontSize: '15px',
            fontWeight: 400
          }}
        >
          Sign Out
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard; 