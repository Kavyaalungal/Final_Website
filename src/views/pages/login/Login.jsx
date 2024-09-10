// import { CButton, CCard } from '@coreui/react';
// import { TextField } from '@mui/material';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../../actions/authActions';
// import iconLogo from '../../../assets/images/icon-logo.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       toast.warn('Please enter username and password');
//       return;
//     }
//     dispatch(login({ username, password }));
//     navigate('/');
//   };

//   return (
//     <>
//       <style>{`
//         body, html {
//           // margin: 0;
//           // padding: 0;
//           // height: 100%;
//            display: flex;
//            justify-content: center;
//            align-items: center;
//           background-color: #f8f9fa;
//         }
//         .card-container {
//           display: flex;
//           justify-content: center;
//            align-items: center;
//           height: 100%;
//           width: 100%;
//         }
//         .content-wrapper {
//           padding: 40px; /* Increase padding to make the card larger */
//           background-color: #fff;
//           width: 100%;
//           max-width: 500px; /* Optional: limit the max-width */
//           box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow for depth */
//         }
//       `}</style>

//       <div className="card-container">
//         <CCard className="content-wrapper">
//           <div>
//             <div className="text-center">
//               <a href="index.html" className="authentication-logo">
//                 <img
//                   src={iconLogo}
//                   alt="Logo"
//                   height={50}
//                   className="auth-logo logo-dark mx-auto"
//                 />
//               </a>
//             </div>
//             <div className="p-2 mt-5">
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3 auth-form-group-custom">
//                   <TextField
//                     id="username"
//                     label="Username"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{ style: { fontSize: '18px' } }}
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     style={{ marginTop: '10px' }}
//                   />
//                 </div>
//                 <div className="mb-3 auth-form-group-custom">
//                   <TextField
//                     id="password"
//                     label="Password"
//                     variant="outlined"
//                     size="small"
//                     type="password"
//                     fullWidth
//                     InputLabelProps={{ style: { fontSize: '18px' } }}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     style={{ marginTop: '10px' }}
//                   />
//                 </div>
//                 <div className="mt-4 text-center">
//                   <CButton type="submit" color="primary">Login</CButton>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </CCard>
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </>
//   );
// };

// export default Login;


// import { useState } from 'react';
// import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
//  import { login } from '../../../actions/authActions';
// import './Login.css';
// import logo from '../../../assets/images/icon infoware logo new.png'
// import bg from '../../../assets/images/liscare-website-login-page.jpg'
// function Login() {


//   const dispatch = useDispatch();
//  const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [empKey, setEmpKey] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [empKeyError, setEmpKeyError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleClickShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleEmpKeyChange = (event) => {
//     const value = event.target.value;
//     const numericRegex = /^[0-9]*$/;

//     if (numericRegex.test(value)) {
//       setEmpKey(value);
//       setEmpKeyError('');
//     } else {
//       setEmpKeyError('Invalid Emp Key');
//     }
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     setUsernameError('');
//   };

//   const handleLogin = () => {
//     if (empKey) {
//       console.log("Login using EmpKey:", empKey);
//       alert('Success');
//       navigate('/'); // Navigate to root path after successful login
//     } else if (username && password) {
//       console.log('Login Using Username:', username, 'and', 'Password:', password);
//       navigate('/'); // Navigate to root path after successful login
//     } else {
//       if (!empKey && (!username || !password)) {
//         if (!username) setUsernameError('Username is required');
//         if (!password) setPasswordError('Password is required');
//         if (!empKey) setEmpKeyError('EmpKey is required');
//       }
//     }
//   };
  
//   const handleUsernameSubmit = () => {
//     if (username) {
//       setUsernameError('');
//       document.getElementById('password-input').focus(); // Focus on the password field
//     } else {
//       setUsernameError('Username is required');
//     }
//   };

//   const handleKeyPress = (event, field) => {
//     if (event.key === 'Enter') {
//       if (field === 'empKey' && empKey) {
//         handleLogin();
//       } else if (field === 'username') {
//         handleUsernameSubmit();
//       } else if (field === 'password' && password) {
//         handleLogin();
//       } else {
//         setPasswordError('Password is required');
//       }
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         width: "100vw",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         backgroundColor: "#f0f4f8",
//         backgroundSize: '100%',
//         backgroundRepeat: "no-repeat",
//         display: 'flex',
//         alignItems: 'flex-end', // Align content to the right
//         justifyContent: 'center', // Move content to the right
//         flexDirection: 'column',
//         padding: '20px',
//         backgroundImage: `url(${bg})`
//       }}
//     >

//       {/* Login Form Box */}
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "80%", md: "300px" }, // Responsive width
//           padding: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
//           backgroundColor: "rgba(255, 255, 255, 1)",
//           boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
//           borderRadius: '15px',
//           transform: "translateY(-10%) scale(0.8)",
//           marginRight: { xs: 1, sm: 2 },
//           marginTop: { xs: 3, sm: 5 }
//         }}
//       >
//         <Box display={'flex'} gap={2}>
//           <Typography mb={1.5} variant="h5" gutterBottom className="ColorCommon">
//             Welcome
//           </Typography>
//         </Box>

//         <Box
//           component="form"
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px",
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField label="FinYear" size="small" variant="outlined" value="2024-2025" InputProps={{ readOnly: true }} />
//           <TextField label="Branch" size="small" variant="outlined" value="Main Branch" InputProps={{ readOnly: true }} />
//           <TextField
//             label="Emp Key"
//             size="small"
//             variant="outlined"
//             value={empKey}
//             onChange={handleEmpKeyChange}
//             error={!!empKeyError}
//             helperText={empKeyError}
//             onKeyPress={(e) => handleKeyPress(e, 'empKey')}
//           />
//           <TextField
//             id="username-input"
//             label="Username"
//             size="small"
//             variant="outlined"
//             value={username}
//             onChange={handleUsernameChange}
//             onKeyPress={(e) => handleKeyPress(e, 'username')}
//             error={!!usernameError}
//             helperText={usernameError}
//           />
//           <TextField
//             id="password-input"
//             label="Password"
//             size="small"
//             type={showPassword ? "text" : "password"}
//             variant="outlined"
//             value={password}
//             error={!!passwordError}
//             helperText={passwordError}
//             onChange={(e) => setPassword(e.target.value)}
//             onKeyPress={(e) => handleKeyPress(e, 'password')}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Box sx={{ display: "flex", justifyContent: 'flex-end', gap: 1 }}>
//             <Button
//               size="small"
//               variant="contained"
//               sx={{ backgroundColor: '#bd2937', color: 'white' }}
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* Logo Box */}
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "80%", md: "250px" },
//           height: '0px',
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           mb: 0,
//           transform: 'scale(0.8)',
//           marginRight: 3,
//           marginTop: 6 // Margin bottom to space out from the form
//         }}
//       >
//         <img src={logo} alt="Logo" style={{ maxWidth: '90%', height: 'auto', marginLeft: -10 ,marginTop:'23px' }} />
//       </Box>
//     </Box>
//   );
// }

// export default Login;


import { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../actions/authActions';
import './Login.css';
import logo from '../../../assets/images/icon infoware logo new.png';
import bg from '../../../assets/images/liscare website login page.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

   // Handle empKey change with validation
   const handleEmpKeyChange = (event) => {
    const value = event.target.value;
    const numericRegex = /^[0-9]*$/;

    if (numericRegex.test(value)) {
      setEmpKey(value);
    } else {
      toast.error('Invalid Emp Key. Please enter numeric values only.', {
        position: 'top-center',
      });
    }
  };

  // Handle username change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle login submission
  const handleLogin = () => {
    if (empKey) {
      dispatch({ type: 'login' });
      console.log('Login using EmpKey:', empKey);
      toast.success('Login successful using Emp Key!');
      // Navigate to the dashboard after successful login
      navigate('/'); // Replace with your dashboard route
    } else if (username && password) {
      console.log('Login using Username:', username, 'and Password:', password);
      // Dispatch login action (if needed)
      dispatch(login({ username, password }));
      toast.success('Login successful using Username and Password!');
      // Navigate to the dashboard after successful login
      navigate('/'); // Replace with your dashboard route
    } else {
      // Error handling for missing fields
      if (!empKey && (!username || !password)) {
        toast.error('EmpKey or Username and Password are required.');
      }
    }
  };

  // Handle form submit with "Enter" key
  // const handleKeyPress = (event, field) => {
  //   if (event.key === 'Enter') {
  //     if (field === 'empKey' && empKey) {
  //       handleLogin();
  //     } else if (field === 'username' && username) {
  //       handleLogin();
  //     } else if (field === 'password' && password) {
  //       handleLogin();
  //     } else {
  //       toast.error('Password is required');
  //     }
  //   }
  // };
  return (
    <Box
      sx={{
        height: "132vh",
        width: "125vw",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#f0f4f8",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
        margin:0,
        padding:0,
        // padding: '20px',
        backgroundImage: `url(${bg})`
      }}
    >
      {/* Login Form Box */}
      <Box
        sx={{
          width: { xs: "350px", sm: "350px", md: "380px" },
           height:'380px',
          padding: { xs: "15px", sm: "15px", md: "20px" },
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
          borderRadius: '15px',
          transform: "translateY(-10%) scale(0.7)",
          marginRight: { xs: 5, sm: 5,md:5 },
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
              variant="contained"
              // className="button"
              sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58',
                fontSize:'1rem', // Default background color
                '&:hover': {
                  backgroundColor: '#bd2937', // Background color on hover
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
                },  }}
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
         marginRight: {xs:4,sm:4,md:4},
          marginTop: 6
        }}
      >
        <img src={logo} alt="Logo" style={{ maxWidth: '90%', height: 'auto', marginLeft: -10 ,marginTop:200 }} />
      </Box>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Box>
  );
}

export default Login;



// import { useEffect, useState } from 'react';
// import { TextField,MenuItem, Button, Box,InputLabel,Select, Typography, IconButton, InputAdornment,FormControl } from "@mui/material";
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../../actions/authActions';
// import './Login.css';
// import logo from '../../../assets/images/icon infoware logo new.png';
// import bg from '../../../assets/images/liscare website login page.svg';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [empKey, setEmpKey] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [empKeyError, setEmpKeyError] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [year, setYear] = useState('');  // selected year
//   const [years, setYears] = useState([]); // fetched years
//   const [Branch,setBranch] = useState('');  // selected
//   const [Branches,setBranches] = useState([]) // fetched 

//   useEffect(() => {
//     fetch('http://172.16.16.10:8060/api/YearDataget')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);  // Inspect the API response
//         if (Array.isArray(data.yearDetails
//         )) {
//           setYears(data.yearDetails);
//           setYear(data.yearDetails[data.yearDetails.length-1]);
//         } else {
//           console.error('Expected an array but got:', data);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   useEffect(()=>{
//     fetch('http://172.16.16.10:8060/api/Branchname_Get')
//     .then ((response)=>response.json())
//     .then ((data)=>{
//       setBranches(data)
//       if (Array.isArray(data.BranchNames)){
//         setBranches(data.BranchNames)
//         console.log(data.BranchNames)
//       }
//       else{
//         console.log('error fetching data', data)
//       }
//     })

//   },[]);

//   const handleClickShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//    // Handle empKey change with validation
//    const handleEmpKeyChange = (event) => {
//     const value = event.target.value;
//     const numericRegex = /^[0-9]*$/;  // Accept only numeric input
  
//     if (numericRegex.test(value)) {
//       setEmpKey(value);  // Set empKey if valid input
//       if (empKeyError) {
//         setEmpKeyError('');  // Clear error if previously set
//       }
//     } else {
//       setEmpKey(value);  // Set empKey with current invalid input
//       setEmpKeyError('Invalid Emp Key. Please enter numeric values only.');  // Show error if invalid
//       toast.error('Invalid Emp Key. Please enter numeric values only.');
//     }
//   };
  

//   // Handle username change
//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//     setUsernameError('');
//   };

//   // Handle password change
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setPasswordError('');
//   };

//   const handleUsernameSubmit = () => {
//     if (username) {
//       setUsernameError('');
//       document.getElementById('password-input').focus(); // Focus on the password field
//     } else {
//       setUsernameError('Username is required');
//     }
//   };
//   // const handleLogin = () => {
//   //   let url = '';
//   //   if (empKey) {
//   //     url = `http://172.16.16.10:8060/api/LoginUsrPwdEmpGet?Empkey=${empKey}`;
//   //   } else if (username && password) {
//   //     url = `http://172.16.16.10:8060/api/LoginUsrPwdEmpGet?username=${username}&password=${password}`;
//   //   }
  
//   //   if (url) {
//   //     fetch(url)
//   //       .then(response => {
//   //         if (!response.ok) {
//   //           throw new Error(`HTTP error! status: ${response.status}`);
//   //         }
//   //         return response.json();
//   //       })
//   //       .then(data => {
//   //         if (data.Success) {
//   //           const apiUsername = data.username || username; // Use the username from API response if available
//   //           console.log("API Username:", apiUsername); // Log to check the value
  
//   //           // Save the username to localStorage
//   //           localStorage.setItem('loggedInUsername', apiUsername); // Store the username from the API
  
//   //           // Success actions
//   //           toast.success('Login successful');
//   //           dispatch({ type: 'login' });
//   //           navigate('/');
//   //         } else {
//   //           toast.error('Invalid credentials, please try again.');
//   //         }
//   //       })
//   //       .catch(error => {
//   //         toast.error('Error during login. Please try again later.');
//   //       });
//   //   } else {
//   //     if (!empKey) setEmpKeyError('EmpKey is required');
//   //     if (!username) setUsernameError('Username is required');
//   //     if (!password) setPasswordError('Password is required');
//   //   }
//   // };
  
  
//   const handleLogin = () => {
//     if (empKey) {
//       const url = `http://172.16.16.10:8060/api/LoginUsrPwdEmpGet?Empkey=${empKey}`;
//       console.log('Request URL:', url);

//       fetch(url)
//         .then(response => {
//           console.log('Response Status:', response.status); // Log status code
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           console.log('API Response:', data); // Log the API response
//           if (data.Success) {
//             const apiUsername = data.username || username; // Use the username from API response if available
//           console.log("API Username:", apiUsername); // Log to check the value

//           // Save the username to localStorage
//           localStorage.setItem('loggedInUsername', apiUsername);
//             console.log('Login successful with EmpKey:', empKey, data.username);
//             toast.success('Login successful')
//             dispatch({ type: 'login' });
//             // setTimeout(() => {
//             //   navigate('/');
//             // }, 1000); //
//           navigate('/')
//           } else {
//             toast.error('invalid emp key')
//             setEmpKeyError('Invalid EmpKey. Please try again.');
//           }
//         })
//         .catch(error => {
//           console.error('Error during login:', error);
//           setEmpKeyError('Failed to login. Please try again later.');
//         });
//     } else if (username && password) {
//       const url = `http://172.16.16.10:8060/api/LoginUsrPwdEmpGet?username=${username}&password=${password}`;
//       console.log('Request URL:', url);

//       fetch(url)
//         .then(response => {
//           console.log('Response Status:', response.status); // Log status code
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           console.log('API Response:', data); // Log the API response
//           if (data.Success) {
//             const apiUsername = data.username || username; // Use the username from API response if available
//           console.log("API Username:", apiUsername); // Log to check the value

//           // Save the username to localStorage
//           localStorage.setItem('loggedInUsername', apiUsername);
//             console.log('Login successful with Username and Password:', username, data);
//             toast.success('Login successful');
//             dispatch({ type: 'login' });
//             // setTimeout(() => {
//             //   navigate('/');
//             // }, 1000);
//              navigate('/')
//             } else {
//             toast.error('Invalid Username or password');
//           }
//         })
//         .catch(error => {
//           console.error('Error during login:', error);
//           toast.error('Invalid Username and Password');
//         });
//     } else {
//       if (!empKey && (!username || !password)) {
//         if (!username) setUsernameError('Username is required');
//         if (!password) setPasswordError('Password is required');
//         if (!empKey) setEmpKeyError('EmpKey is required');
//       }
//     }
//   };

//   const handleKeyPress = (event, field) => {
//     if (event.key === 'Enter') {
//       if (field === 'empKey' && empKey) {
//         handleLogin();
//       } else if (field === 'username') {
//         handleUsernameSubmit();
//       } else if (field === 'password' && password) {
//         handleLogin();
//       } else {
//         setPasswordError('Password is required');
//       }
//     }
//   };


//   return (
//     <Box
//       sx={{
//         height: "132vh",
//         width: "125vw",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         backgroundColor: "#f0f4f8",
//         backgroundSize: '106%',
//         backgroundRepeat: "no-repeat",
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         padding: '20px',
//         backgroundImage: `url(${bg})`
//       }}
//     >
//       {/* Login Form Box */}
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "80%", md: "350px" },
//           height:'410px',
//           padding: { xs: "10px", sm: "15px", md: "25px" },
//           backgroundColor: "rgba(255, 255, 255, 1)",
//           boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
//           borderRadius: '15px',
//           transform: "translateY(-15%) scale(1)",
//           marginRight: { xs: 1, sm: 1 },
//           marginTop: { xs: 3, sm: 5 }
//         }}
//       >
//         <Box display={'flex'} gap={2}>
//           <Typography mb={1.5} variant="h5" gutterBottom className="ColorCommon">
//             Welcome
//           </Typography>
//         </Box>

//         <Box
//           component="form"
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px",
//           }}
//           noValidate
//           autoComplete="off"
//         >
//            <FormControl fullWidth size="small">
//             <InputLabel id="year-label">Year</InputLabel>
//             <Select
//               labelId="year-label"
//               id="year"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//               label="Year"
//               sx={{fontSize:'1rem'}}
//             >
//               {years.map((yr) => (
//                 <MenuItem key={yr} value={yr} sx={{fontSize:'0.95rem'}}>
//                   {yr}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <FormControl fullWidth size="small">
//             <InputLabel id="Branch-label">Branch</InputLabel>
//             <Select
//               labelId="Branch-label"
//               id="Branch"
//               value={Branch}
//               onChange={(e) => setBranch(e.target.value)}
//               label="Branch"
//               sx={{
//                 '&.input':{
//                   fontSize:'0.75rem'
//                 },

//               }}
              
//             >
//               {Branches.map((br) => (
//                 <MenuItem key={br} value={br} sx={{fontSize:'0.75rem'}}>
//                   {br}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <TextField
//             label="Emp Key"
//             size="small"
//             variant="outlined"
//             value={empKey}
//             onChange={handleEmpKeyChange}
//             error={!!empKeyError}
//              helperText={empKeyError}
//             onKeyDown={(e) => handleKeyPress(e, 'empKey')}
//           />
//           <TextField
//             id="username-input"
//             label="Username"
//             size="small"
//             variant="outlined"
//             value={username}
//             onChange={handleUsernameChange}
//             onKeyPress={(e) => handleKeyPress(e, 'username')}
//             error={!!usernameError}
//             helperText={usernameError}
//           />
//          <TextField
//             id="password-input"
//             label="Password"
//             type={showPassword ? 'text' : 'password'}
//             size="small"
//             variant="outlined"
//             value={password}
//             onChange={handlePasswordChange}
//             error={!!passwordError}
//             helperText={passwordError}
//             onKeyDown={(e) => handleKeyPress(e, 'password')}
//             autoComplete='current-password'
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <Visibility /> : <VisibilityOff />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Box sx={{ display: "flex", justifyContent: 'flex-end', gap: 1 }}>
           
//              <Button
//               variant="contained"
//               // className="button"
//               sx={{ textTransform: 'none', marginRight: 1,backgroundColor: '#bb4d58',
//                 fontSize:'1rem', // Default background color
//                 '&:hover': {
//                   backgroundColor: '#bd2937', // Background color on hover
//                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow effect on hover
//                 },  }}
//                 onClick={handleLogin}
//             >
//               Login
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* Logo Box */}
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "80%", md: "250px" },
//           height: '0px',
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           mb: 0,
//           transform: 'scale(0.8)',
//           marginRight: 3,
//           marginTop: 6
//         }}
//       >
//         <img src={logo} alt="Logo" style={{ maxWidth: '90%', height: 'auto', marginLeft: -10 ,marginTop:200 }} />
//       </Box>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Box>
//   );
// }

// export default Login;

