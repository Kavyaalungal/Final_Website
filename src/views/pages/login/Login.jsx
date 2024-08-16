// src/views/pages/login/Login.js
import { CButton, CCard } from '@coreui/react';
import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../actions/authActions';
import iconLogo from '../../../assets/images/icon-logo.png';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    // Perform your login logic here (e.g., API call)
    dispatch(login());
    navigate('/');
  };

  return (
    <>
      <style>{`
        .content-wrapper {
          border: 2px solid #523885; 
          border-radius: 8px; /* Optional: for rounded corners */
          padding: 20px;
          background-color: #fff; 
        }
      `}</style>
      <CCard className="mb-4">
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-0">
          <div className="row g-0 justify-content-center align-items-center w-100">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="content-wrapper w-100 p-4">
                <div className="text-center">
                  <a href="index.html" className="authentication-logo">
                    <img
                       src={iconLogo}
                      alt="Logo"
                      height={50}
                      className="auth-logo logo-dark mx-auto"
                    />
                  </a>
                  {/* <h4 className="font-size-18 mt-4">Welcome Back!</h4>
                  <p className="text-muted">Sign in to continue to Nazox.</p> */}
                </div>
                <div className="p-2 mt-5">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3 auth-form-group-custom">
                      <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '18px' } }}
                        style={{ marginTop: '10px' }}
                      />
                    </div>
                    <div className="mb-3 auth-form-group-custom">
                      <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        size="small"
                        type="password" 
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '18px' } }}
                        style={{ marginTop: '10px' }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <CButton type="submit" color="primary">Login</CButton>
                    </div>
                    <div className="mt-4 text-center">
                      {/* <a href="auth-recoverpw.html" className="text-muted"> */}
                        {/* <i className="mdi mdi-lock me-1"></i> Forgot your password? */}
                      {/* </a> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CCard>
    </>
  );
};

export default Login;

// src/views/pages/login/Login.js
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
//     // Basic validation (you might want to add more comprehensive checks)
//     if (!username || !password) {
//       // alert('Please enter username and password');
//       toast.warn('please enter username and password')
//       return;
//     }
//     // Dispatch login action
//     dispatch(login({ username, password }));
//     navigate('/');
//   };

//   return (
//     <>
//       <style>{`
//         .content-wrapper {
//           border: 2px solid #523885; 
//           border-radius: 8px;
//           padding: 20px;
//           background-color: #fff;
//         }
//       `}</style>
//       <CCard className="mb-4">
//         <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-0">
//           <div className="row g-0 justify-content-center align-items-center w-100">
//             <div className="col-lg-4 d-flex justify-content-center align-items-center">
//               <div className="content-wrapper w-100 p-4">
//                 <div className="text-center">
//                   <a href="index.html" className="authentication-logo">
//                     <img
//                        src={iconLogo}
//                       alt="Logo"
//                       height={50}
//                       className="auth-logo logo-dark mx-auto"
//                     />
//                   </a>
//                 </div>
//                 <div className="p-2 mt-5">
//                   <form onSubmit={handleLogin}>
//                     <div className="mb-3 auth-form-group-custom">
//                       <TextField
//                         id="username"
//                         label="Username"
//                         variant="outlined"
//                         size="small"
//                         fullWidth
//                         InputLabelProps={{ style: { fontSize: '18px' } }}
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         style={{ marginTop: '10px' }}
//                       />
//                     </div>
//                     <div className="mb-3 auth-form-group-custom">
//                       <TextField
//                         id="password"
//                         label="Password"
//                         variant="outlined"
//                         size="small"
//                         type="password"
//                         fullWidth
//                         InputLabelProps={{ style: { fontSize: '18px' } }}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={{ marginTop: '10px' }}
//                       />
//                     </div>
//                     <div className="mt-4 text-center">
//                       <CButton type="submit" color="primary">Login</CButton>
//                     </div>
//                     <div className="mt-4 text-center">
//                       {/* Add additional links or functionality here */}
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//       </CCard>
//     </>
//   );
// };

// export default Login;
