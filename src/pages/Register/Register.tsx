import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Paper, 
  Link,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Firebase authentication will be implemented here
      console.log('Register with:', displayName, email, password);
      
      // Placeholder for registration
      // Upon successful registration, redirect to login page
      // navigate('/login');
    } catch (err) {
      setError('Failed to create an account.');
      console.error(err);
    }
  };
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper 
        elevation={6} 
        sx={{ 
          padding: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          maxWidth: '400px',
          width: '90%',
          borderRadius: 4,
          backgroundColor: 'rgba(25, 25, 25, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
        }}
      >
        <Box 
          sx={{ 
            width: 50, 
            height: 50, 
            borderRadius: '50%', 
            bgcolor: 'rgba(80, 80, 80, 0.2)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 3
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="#9E9E9E" />
            <path d="M4 12L12 17L20 12" fill="#9E9E9E" />
          </svg>
        </Box>
        
        <Typography component="h1" variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
          Create Account
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            required
            fullWidth
            id="displayName"
            placeholder="Full Name"
            name="displayName"
            autoComplete="name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              mb: 2,
              '& .MuiFilledInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(70, 70, 70, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                }
              },
              '& .MuiFilledInput-input': {
                padding: '16px 14px',
                display: 'flex',
                alignItems: 'center',
              }
            }}
          />
          <TextField
            required
            fullWidth
            id="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              mb: 2,
              '& .MuiFilledInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(70, 70, 70, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                }
              },
              '& .MuiFilledInput-input': {
                padding: '16px 14px',
                display: 'flex',
                alignItems: 'center',
              }
            }}
          />
          <TextField
            required
            fullWidth
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              '& .MuiFilledInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(70, 70, 70, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                }
              },
              '& .MuiFilledInput-input': {
                padding: '16px 14px',
                display: 'flex',
                alignItems: 'center',
              }
            }}
          />
          <TextField
            required
            fullWidth
            name="confirmPassword"
            placeholder="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              '& .MuiFilledInput-root': {
                borderRadius: 2,
                backgroundColor: 'rgba(70, 70, 70, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(80, 80, 80, 0.5)',
                }
              },
              '& .MuiFilledInput-input': {
                padding: '16px 14px',
                display: 'flex',
                alignItems: 'center',
              }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mb: 2,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: 'rgba(90, 90, 90, 0.8)',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(110, 110, 110, 0.8)',
              }
            }}
          >
            Create Account
          </Button>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" color="text.secondary" component="span">
              Already have an account? 
            </Typography>
            <Link 
              component={RouterLink} 
              to="/login" 
              variant="body2" 
              sx={{ ml: 1, color: 'text.secondary', fontWeight: 'bold' }}
            >
              Sign in
            </Link>
          </Box>
          <Divider sx={{ mt: 4, mb: 1 }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Register; 