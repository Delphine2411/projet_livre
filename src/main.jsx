import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Example from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from 'react-bootstrap-icons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
