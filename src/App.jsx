import { ThemeProvider } from './contexts/themeProvider'
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
