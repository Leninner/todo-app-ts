import { Background } from './components/Background'
import { useContext } from 'react'
import { DarkThemeContext } from './context/DarkThemeContext'
import { TodoAppContainer } from './containers/TodoAppContainer'

function App() {
  const { isDark, toggleTheme }: any = useContext(DarkThemeContext)

  return (
    <main
      className={`${isDark ? 'dark' : ''} font-sansSerif h-screen flex items-center justify-center`}
    >
      <Background isDark={isDark} />
      <TodoAppContainer changeTheme={toggleTheme} isDark={isDark} />
    </main>
  )
}

export default App
