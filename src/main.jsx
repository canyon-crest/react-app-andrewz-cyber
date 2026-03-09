import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Foot from './Foot.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card Name="Andrew" description="Person" />
    <Card Name="Jonathan" description="In Front of Person" />
    <Card Name="Advaith" description="Diagonal of Person" />
    <App />
    <Foot />
  </StrictMode>,
)
