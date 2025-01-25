import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    
    <AuthProvider>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={routes}></RouterProvider>
    </div>
    <Toaster position="top-right"/>
    </AuthProvider>
     
    </QueryClientProvider>
    </HelmetProvider>
    
  </StrictMode>,
)
