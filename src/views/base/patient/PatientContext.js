// // PatientContext.js
// import React, { createContext, useState, useContext } from 'react';

// const PatientContext = createContext();

// export const usePatient = () => useContext(PatientContext);

// export const PatientProvider = ({ children }) => {
//   const [patientDetails, setPatientDetails] = useState();

//   return (
//     <PatientContext.Provider value={{ patientDetails, setPatientDetails }}>
//       {children}
//     </PatientContext.Provider>
//   );
// };
import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patientDetails, setPatientDetails] = useState(null); // Or use an empty object: {} if preferred

  return (
    <PatientContext.Provider value={{ patientDetails, setPatientDetails }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error('usePatient must be used within a PatientProvider');
  }
  return context;
};
