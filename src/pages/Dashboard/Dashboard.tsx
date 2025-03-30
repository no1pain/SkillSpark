import { Button, Box, Typography, Container, Paper } from '@mui/material';
import { useAuth } from '../../app/context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
    <Box 
      sx={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: '#000000'
      }}
    >
      <Container maxWidth="sm" sx={{ p: 0 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            py: 4,
            px: 3, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: 5,
            bgcolor: '#1a1a1a',
            maxWidth: '500px',
            mx: 'auto'
          }}
        >
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
              borderRadius: 2,
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
    </Box>
  );
};

export default Dashboard; 