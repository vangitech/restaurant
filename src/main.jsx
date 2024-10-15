import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/index.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home />
    <Footer/>
    
  </StrictMode>,
)
