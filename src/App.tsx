import { Background } from './components/Background'
import { useContext } from 'react'
import { ThemeContext } from './context/DarkTheme'
import { AppContainer } from './AppContainer'

function App() {
  const { isDark }: any = useContext(ThemeContext)

  return (
    <main className={`${isDark ? 'dark' : ''} font-sansSerif h-screen grid place-content-center`}>
      <Background isDark={isDark} />
      <AppContainer />
    </main>
  )
}

export default App
