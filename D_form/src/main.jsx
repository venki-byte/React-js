import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './RegFrm.css'
import { RegFrm } from './RegFrm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegFrm />
  </StrictMode>,
)
