import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/globalStyle.jsx'
import { ThemeProvider } from './contexts/themeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
