import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element:<Contact />
      },
      {
        path:'/portfolio',
        element: <Portfolio />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
