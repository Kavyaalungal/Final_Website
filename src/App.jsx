import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes,Navigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import Cancel from './views/base/Cancelinvoice/MainModel/Mainmode'
import InvoiceView from './views/base/LabInvoice/LabInvoiceView'



// axios.defaults.baseURL='http://172.16.16.10:8060'
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))


const App = () => {
  // useEffect(() => {
  //   document.body.style.zoom = "80%";
  // }, []);
  // const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  // const storedTheme = useSelector((state) => state.theme)
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    // const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    // if (theme) {
      // setColorMode(theme)
    // }

    // if (isColorModeSet()) {
      // return
    // }

    // setColorMode(storedTheme)
  }, [])

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          {/* <Route path="/invoice" element={<InvoiceView />} /> */}
          {/* <Route exact path="/" name="Dashboard" element={<DefaultLayout />} /> */}
          <Route path="*" name="Home" element={isAuthenticated ? <DefaultLayout /> : <Navigate to="/login" />} />
          {/* <Route path="/proceedtobill" element={< PatientMain/>} /> */}
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
