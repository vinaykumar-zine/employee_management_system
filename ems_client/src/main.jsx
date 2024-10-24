import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TaskContext>
    <AuthContext>
      <App />
    </AuthContext>
  </TaskContext>
    
    
  </StrictMode>,
)
