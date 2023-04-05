import React from 'react'
import ReactDOM from 'react-dom/client'
import { EmployeesProvider } from './contexts/EmployeesContext'
import App from './components/App'
import './main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </React.StrictMode>
)
