import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRoute , RouterProvider , Route } from "react-router-dom";
import './index.css'


const Route = createBrowserRoute( [
  {
    element: <App />,
    children: [
      {
        path: "/",
      },
      {
        path: "/new",
      }
    ]  
  }
  ]); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)