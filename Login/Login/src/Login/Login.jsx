import { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [empKey, setEmpKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [empKeyError, setEmpKeyError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmpKeyChange = (event) => {
    const value = event.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(value)) {
      setEmpKey(value);
      setEmpKeyError('');
    } else {
      setEmpKeyError('Invalid Emp Key');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const handleLogin = () => {
    if (empKey) {
      console.log("Login using EmpKey:", empKey);
      alert('Success');
    } else if (username && password) {
      console.log('Login Using Username:', username, 'and', 'Password:', password);
    } else {
      if (!empKey && (!username || !password)) {
        if (!username) setUsernameError('Username is required');
        if (!password) setPasswordError('Password is required');
        if (!empKey) setEmpKeyError('EmpKey is required');
      }
    }
  };

  const handleUsernameSubmit = () => {
    if (username) {
      setUsernameError('');
      document.getElementById('password-input').focus(); // Focus on the password field
    } else {
      setUsernameError('Username is required');
    }
  };

  const handleKeyPress = (event, field) => {
    if (event.key === 'Enter') {
      if (field === 'empKey' && empKey) {
        handleLogin();
      } else if (field === 'username') {
        handleUsernameSubmit();
      } else if (field === 'password' && password) {
        handleLogin();
      } else {
        setPasswordError('Password is required');
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#f0f4f8",
        backgroundSize: '100%',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        alignItems: 'flex-end', // Align content to the right
        justifyContent: 'center', // Move content to the right
        flexDirection: 'column',
        padding: '40px',
        backgroundImage: "url('src/assets/liscare-website-login-page.jpg')"
      }}
    >

      {/* Login Form Box */}
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "300px" }, // Responsive width
          padding: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
          borderRadius: '15px',
          transform: "translateY(-10%) scale(0.8)",
          marginRight: { xs: 1, sm: 2 },
          marginTop: { xs: 3, sm: 5 }
        }}
      >
        <Box display={'flex'} gap={2}>
          <Typography mb={1.5} variant="h5" gutterBottom className="ColorCommon">
            Welcome
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="FinYear" size="small" variant="outlined" value="2024-2025" InputProps={{ readOnly: true }} />
          <TextField label="Branch" size="small" variant="outlined" value="Main Branch" InputProps={{ readOnly: true }} />
          <TextField
            label="Emp Key"
            size="small"
            variant="outlined"
            value={empKey}
            onChange={handleEmpKeyChange}
            error={!!empKeyError}
            helperText={empKeyError}
            onKeyPress={(e) => handleKeyPress(e, 'empKey')}
          />
          <TextField
            id="username-input"
            label="Username"
            size="small"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            onKeyPress={(e) => handleKeyPress(e, 'username')}
            error={!!usernameError}
            helperText={usernameError}
          />
          <TextField
            id="password-input"
            label="Password"
            size="small"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            error={!!passwordError}
            helperText={passwordError}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", justifyContent: 'flex-end', gap: 1 }}>
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: '#bd2937', color: 'white' }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Logo Box */}
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "250px" },
          height: '0px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 0,
          transform: 'scale(0.8)',
          marginRight: 3,
          marginTop: 6 // Margin bottom to space out from the form
        }}
      >
        <img src="src/assets/icon infoware logo new.png" alt="Logo" style={{ maxWidth: '90%', height: 'auto', marginLeft: -10 ,marginTop:'23px' }} />
      </Box>
    </Box>
  );
}

export default LoginForm;
