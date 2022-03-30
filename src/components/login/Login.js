import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Container, Avatar, CssBaseline, Box, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './login.css';
import { adminLogin } from '../../redux/actions/auth';
const theme = createTheme();
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = { email: '', password: '' };
  const [login, setForm] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setToken(localStorage.getItem('token'))
    if (token) {
      navigate('/dashboard');
    }
  },[navigate,token])
  const handleChange = (e) => setForm({ ...login, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    error.email = '';
    error.password = '';
    if (login.email === '') {
      setError({ ...error, email: 'Invalid Email' });
      return;
    }
    if (login.password === '') {
      setError({ ...error, password: 'Invalid Password' });
      return;
    }
    if (error.email || error.password) return;
    dispatch(adminLogin(login, navigate));
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={login.email}
              onChange={handleChange}
            />
            {(error && error.email) ? <span className='error'> {error.email} </span> : ''}
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={login.password}
              onChange={handleChange}
            />
            {(error && error.password) ? <span className='error'>  {error.password} </span> : ''}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
