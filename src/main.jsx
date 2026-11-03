import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./assets/css/style.css"
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';
import ApplicationProvider from "./context/ApplicationProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ApplicationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApplicationProvider>
    </AuthProvider>
  </StrictMode>,
)