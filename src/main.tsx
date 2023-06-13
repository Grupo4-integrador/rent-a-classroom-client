import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages

import { HomePage } from "./routes/home";
import { ForgotPassword } from "./routes/forgotPassword";
import { Dashboard } from './routes/dashboard/dashboard.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
