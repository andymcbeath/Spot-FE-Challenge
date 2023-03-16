import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:8001/api" : "production-url/api"

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );