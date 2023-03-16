import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:8001/api" : 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
