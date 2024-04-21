import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// paginas
import { Initial } from './pages/Initial.jsx'
import { Login } from './pages/login/Login.jsx'
import React from 'react'
import {Eventos} from './pages/events/Eventos.jsx';
import {Cousers} from './pages/Cousers/Cousers.jsx'
const  router = createBrowserRouter([
    {
      path:'/',
      element: <Initial/>,
    },  
    {
      path:'login',
      element: <Login/>,
    },
    {
      path: 'eventos',
      element: <Eventos/>
    },
    {
      path:'cousers',
      element:<Cousers/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
