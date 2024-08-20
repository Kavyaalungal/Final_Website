import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store'; // Import the store
import App from './App';
import './App.css';
import { PatientProvider } from './views/base/patient/PatientContext';
// Use createRoot to render your application
const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
   
    <Provider store={store}>
    <PatientProvider>
      <App />
      </PatientProvider>
    </Provider>
   
  </React.StrictMode>
);
