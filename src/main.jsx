import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:8001/api" : "production-url/api"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
