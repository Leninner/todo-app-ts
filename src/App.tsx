import { Background } from './components/Background'
import { useContext } from 'react'
import { ThemeContext } from './context/DarkTheme'

function App() {
  const { isDark }: any = useContext(ThemeContext)

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <Background />
    </main>
  )
}

export default App
