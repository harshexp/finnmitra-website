import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// imports starts
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/vendor.css";
import "./assets/css/style.css";
// imports ends
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
