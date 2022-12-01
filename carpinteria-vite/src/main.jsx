import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/navBar/NavBar'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('BodyId')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
