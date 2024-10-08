import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FavouritesProvider } from './Components/FavouritesContext'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouritesProvider>
      <App />
      <ToastContainer />
    </FavouritesProvider>
  </React.StrictMode>
)
