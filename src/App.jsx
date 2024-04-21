import { useState } from 'react'
import "./style.css"
import { Login } from './pages/login/Login';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {

  return (
    <>
     
      <Login />
    </>
  )
}

export default App
