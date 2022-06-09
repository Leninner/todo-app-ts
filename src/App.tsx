import { Header } from './components/Header'
import { useContext } from 'react'
import { ThemeContext } from './context/DarkTheme'

function App() {
  const { isDark }: any = useContext(ThemeContext)

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <Header />
    </main>
  )
}

export default App
