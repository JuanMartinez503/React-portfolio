/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
const LazyPortfolio = React.lazy(()=>import ('./pages/Portfolio.jsx'))
const LazyResume = React.lazy(()=>import('./pages/Resume.jsx'))
const LazyAbout = React.lazy(()=>import('./pages/About.jsx'))
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
        element: <LazyAbout />
      },
      {
        path:'/resume',
        element: <LazyResume/>
      },
  
      {
        path:'/portfolio',
        element: <LazyPortfolio />
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
