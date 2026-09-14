import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageCacheProvider from './components/ImageCacheProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageCacheProvider>
      <App />
    </ImageCacheProvider>
  </StrictMode>,
)
