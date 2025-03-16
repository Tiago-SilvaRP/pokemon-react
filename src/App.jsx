import './App.css'
import { ThemeProvider } from './contexts/themeContext'
import { AppRoutes } from './pages/routes'

function App() {

  return (
    <>
      <ThemeProvider>
          <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
