// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import Navbar from './Components/Navbar.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  // <StrictMode>  isko comment kiya kyunki iski wajah se useEffect baar 2 baar call hota hai
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>

  // </StrictMode>
)
