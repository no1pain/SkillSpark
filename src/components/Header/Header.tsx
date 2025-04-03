import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        py: 0.5
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          >
            SkillSpark
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="inherit" 
              sx={{ 
                textTransform: 'none',
                borderRadius: '20px',
                px: 2
              }}
            >
              My Courses
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="text" 
              sx={{ 
                color: 'white',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 'normal',
                borderRadius: '20px',
                px: 2,
                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: 0.8
                }
              }}
            >
              Log in
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'transparent', 
                border: '1px solid #4da3ff',
                '&:hover': { 
                  bgcolor: 'transparent',
                  opacity: 0.9 
                },
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                py: 0.7,
                fontSize: '0.9rem',
                fontWeight: 'normal',
                boxShadow: 'none',
                color: '#4da3ff'
              }}
            >
              Sign up
            </Button>
            <IconButton size="small" color="inherit">
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#666' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 