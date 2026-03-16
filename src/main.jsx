import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Foot />
  </StrictMode>,
)
