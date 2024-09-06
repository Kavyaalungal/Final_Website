
import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './Loading screen/Loading'
import Login from './Login/Login'

function App() {
  const [Loading,setLoadingScreen] = useState(true)
  useEffect(() => {
    // Simulate loading time (e.g., API calls or asset loading)
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1500); // Adjust time as needed
  }, []);


  return (
    <div>
     {Loading ? <LoadingScreen/>: <Login/>}
    </div>
  )
}

export default App
