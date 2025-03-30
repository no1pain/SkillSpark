import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Box, 
  Typography, 
  Container, 
  Paper, 
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <Container maxWidth="xs" sx={{ p: 0 }}>
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
            maxWidth: '360px',
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
            <svg width="20" height="24" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99671 0L9.78516 0.711V21.8121L9.99671 22.0178L19.9934 16.0467L9.99671 0Z" fill="#C0C0C0"/>
              <path d="M9.99687 0L0 16.0467L9.99687 22.0178V11.7878V0Z" fill="#FFFFFF"/>
              <path d="M9.99671 23.8787L9.87891 24.021V31.5445L9.99671 31.8829L20 17.9106L9.99671 23.8787Z" fill="#C0C0C0"/>
              <path d="M9.99687 31.8829V23.8787L0 17.9106L9.99687 31.8829Z" fill="#FFFFFF"/>
              <path d="M9.99707 22.0178L19.9937 16.0467L9.99707 11.7878V22.0178Z" fill="#8D8D8D"/>
              <path d="M0 16.0467L9.99687 22.0178V11.7878L0 16.0467Z" fill="#C0C0C0"/>
            </svg>
          </Box>
          
          <Typography component="h1" variant="h5" color="white" sx={{ mb: 2, fontWeight: 500, fontSize: '22px' }}>
            Hi There!
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Box 
              sx={{
                mb: 1.5,
                bgcolor: '#2A2A2A',
                borderRadius: 2,
                height: '48px',
                overflow: 'hidden'
              }}
            >
              <Box component="label" sx={{ position: 'relative', display: 'block', height: '100%' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'white',
                    fontSize: '15px',
                    padding: '0 16px',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </Box>
            </Box>

            <Box 
              sx={{
                mb: 1.5,
                bgcolor: '#2A2A2A',
                borderRadius: 2,
                height: '48px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box component="label" sx={{ position: 'relative', display: 'block', height: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'white',
                    fontSize: '15px',
                    padding: '0 16px',
                    paddingRight: '44px',
                    boxSizing: 'border-box'
                  }}
                  required
                />
                <IconButton
                  size="small"
                  onClick={handleTogglePasswordVisibility}
                  sx={{ 
                    position: 'absolute', 
                    right: 8, 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: '#888888',
                    padding: '4px' 
                  }}
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                height: '48px',
                my: 1.5, 
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
              Sign In
            </Button>
            
            <Button
              fullWidth
              variant="outlined"
              sx={{ 
                height: '48px',
                borderColor: '#333333',
                color: 'white',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { borderColor: '#444444', bgcolor: 'rgba(63, 63, 70, 0.1)' },
                boxShadow: 'none',
                fontSize: '15px',
                fontWeight: 400
              }}
            >
              <Box component="span" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                  <path d="M16.1277 8.47226C16.1277 7.94453 16.0777 7.4168 15.9779 6.93997H8.45454V10.0943H12.8143C12.6168 11.1332 12.0404 12.0334 11.1812 12.631V14.7103H13.8096C15.3409 13.2859 16.1277 11.0695 16.1277 8.47226Z" fill="white"/>
                  <path d="M8.4546 16.9009C10.6732 16.9009 12.5425 16.1398 13.8096 14.7103L11.1813 12.631C10.4448 13.1078 9.51585 13.3762 8.4546 13.3762C6.32619 13.3762 4.53094 11.9376 3.88585 10.0085H1.17676V12.1585C2.4323 14.9834 5.2573 16.9009 8.4546 16.9009Z" fill="white"/>
                  <path d="M3.88566 10.0086C3.53387 8.97862 3.53387 7.83837 3.88566 6.80842V4.65844H1.17657C0.00425428 7.03859 0.00425428 9.7784 1.17657 12.1586L3.88566 10.0086Z" fill="white"/>
                  <path d="M8.4546 3.51724C9.63657 3.49864 10.7789 3.9427 11.6381 4.7493L14.0039 2.38345C12.5223 0.990862 10.5271 0.231628 8.4546 0.25452C5.2573 0.25452 2.4323 2.17196 1.17676 4.99686L3.88585 7.14684C4.53094 5.21777 6.32619 3.77915 8.4546 3.51724Z" fill="white"/>
                </svg>
                Sign in with Apple
              </Box>
            </Button>
          </Box>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="#888888" sx={{ fontSize: '13px' }}>
              Don't have an account? <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Sign up, it's free!</Link>
            </Typography>
          </Box>

          <Box sx={{ mt: 4, width: '40%', height: '4px', bgcolor: '#333333', borderRadius: 2 }} />
        </Paper>
      </Container>
    </Box>
  );
};

export default Login; 