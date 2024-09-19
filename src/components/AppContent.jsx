// import React, { Suspense } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import { CContainer, CSpinner } from '@coreui/react'

// // routes config
//  import routes from '../Routes'
// import PatientMain from '../views/base/PatientBill/Main/PatientMain'

// const AppContent = () => {
//   return (
//     <CContainer className="px-4" lg>
//       <Suspense fallback={<CSpinner color="primary" />}>
//         <Routes>
//           {routes.map((route, idx) => {
//             return (
//               route.element && (
//                 <Route
//                   key={idx}
//                   path={route.path}
//                   exact={route.exact}
//                   name={route.name}
//                   element={<route.element />}
//                 />
//               )
//             )
//           })}
//           <Route path="/" element={<Navigate to="dashboard" replace />} />
//           <Route path="/proceedtobill" element={< PatientMain/>} />
//         </Routes>
//       </Suspense>
//     </CContainer>
//   )
// }

// export default React.memo(AppContent)
import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import './AppContent.css' // Add this import for your custom CSS

// routes config
import routes from '../Routes'
import PatientMain from '../views/base/PatientBill/Main/PatientMain'

const AppContent = () => {
  return (
    <CContainer className="app-content px-4" lg> {/* Add custom class */}
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="/proceedtobill" element={<PatientMain />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
