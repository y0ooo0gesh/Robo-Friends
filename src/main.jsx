import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import cards from './cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cards />
  </StrictMode>,
)
