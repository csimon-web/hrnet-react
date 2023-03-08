import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactModal from 'react-modal'
import App from './components/App'
import './index.css'

ReactModal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
