// PatientContext.js
import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const usePatient = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patientDetails, setPatientDetails] = useState();

  return (
    <PatientContext.Provider value={{ patientDetails, setPatientDetails }}>
      {children}
    </PatientContext.Provider>
  );
};
