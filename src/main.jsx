import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ApppRoutes from './config/xyz.jsx'
import { Toaster } from 'react-hot-toast'
import { ChatProvider } from './context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Toaster position='top-right'/>
      <ChatProvider>
        <ApppRoutes/>
       
      </ChatProvider>
    </BrowserRouter>
 
)
