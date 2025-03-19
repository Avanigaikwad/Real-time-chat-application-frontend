import React from 'react'
import { Routes, Route } from 'react-router'
import App from '../App'
import ChatPage from '../components/chatPage'
const ApppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/chat" element={<ChatPage/>}/>
        <Route path="/about" element={<h1>About Page</h1>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
  )
}

export default ApppRoutes
