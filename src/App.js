import React from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './routes'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
