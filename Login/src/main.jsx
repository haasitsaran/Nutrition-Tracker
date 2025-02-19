import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Center from './Center.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Center />
  </StrictMode>,
)
