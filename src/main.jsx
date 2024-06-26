import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// paginas
import { Initial } from './pages/Home.jsx'
import {Login } from './pages/login/Login.jsx'
import React from 'react'
import { Eventss } from './pages/Eventsl/Eventss.jsx'
import { Cousers } from './pages/Cousers/cousers.jsx'
import { Admin } from './pages/adm/Admin_nav.jsx'
import { Register } from './pages/register/Registerl.jsx'
import './style.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const  router = createBrowserRouter([
    {
      path:'/',
      element: <Initial/>,
    },  
    {
      path:'/entrar',
      element: <Login/>,
    },
    {
      path: '/eventos',
      element: <Eventss/>
    },
    {
      path:'/coursers',
      element: <Cousers />
    },
    {
      path: '/adm',
      element: <Admin />
    },
    {
      path: '/register',
      element: <Register />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
