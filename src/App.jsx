import { useState } from 'react'
import "./style.css"
import { Register } from './pages/register/Register';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {

  return (
    <>
     <Register />
    </>
  )
}

export default App
