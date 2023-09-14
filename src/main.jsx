import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './components/routes'
import ChatBot from './components/chat-bot/chatbot';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChatBot/>
      <Routes/>
  </React.StrictMode>,
)
