import { CButton, CCard } from '@coreui/react';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../actions/authActions';
import iconLogo from '../../../assets/images/icon-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.warn('Please enter username and password');
      return;
    }
    dispatch(login({ username, password }));
    navigate('/');
  };

  return (
    <>
      <style>{`
        body, html {
          // margin: 0;
          // padding: 0;
          // height: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
          background-color: #f8f9fa;
        }
        .card-container {
          display: flex;
          justify-content: center;
           align-items: center;
          height: 100%;
          width: 100%;
        }
        .content-wrapper {
          padding: 40px; /* Increase padding to make the card larger */
          background-color: #fff;
          width: 100%;
          max-width: 500px; /* Optional: limit the max-width */
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Optional: add a subtle shadow for depth */
        }
      `}</style>

      <div className="card-container">
        <CCard className="content-wrapper">
          <div>
            <div className="text-center">
              <a href="index.html" className="authentication-logo">
                <img
                  src={iconLogo}
                  alt="Logo"
                  height={50}
                  className="auth-logo logo-dark mx-auto"
                />
              </a>
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginTop: '10px' }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <CButton type="submit" color="primary">Login</CButton>
                </div>
              </form>
            </div>
          </div>
        </CCard>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Login;
