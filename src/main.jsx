import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={routes}></RouterProvider>
    </div>
    <Toaster position="top-right"/>
    
    </AuthProvider>
    </HelmetProvider>
    
  </StrictMode>,
)
