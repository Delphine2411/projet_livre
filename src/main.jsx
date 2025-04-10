import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import App from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <NavBar />
    <App />
    
  </StrictMode>,
)
