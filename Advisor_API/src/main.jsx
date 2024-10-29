import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Advice.css'

import { AdviceApp } from './AdviceApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdviceApp/>
  </StrictMode>,
)
