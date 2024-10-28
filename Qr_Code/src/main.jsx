import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './QrCodes.css'
import App from './App.jsx'
import { QrCodes } from './QrCodes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCodes/>
  </StrictMode>,
)
