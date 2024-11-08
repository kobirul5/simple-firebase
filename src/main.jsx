import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './componets/Home'
import Login from './componets/Login'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
