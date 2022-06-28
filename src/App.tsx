import { Background } from './components/Background'
import { useContext } from 'react'
import { ThemeContext } from './context/DarkTheme'
import { TodoContainer } from './TodoContainer'

function App() {
  const { isDark, toggleTheme }: any = useContext(ThemeContext)

  return (
    <main
      className={`${isDark ? 'dark' : ''} font-sansSerif h-screen flex items-center justify-center`}
    >
      <Background isDark={isDark} />
      <TodoContainer changeTheme={toggleTheme} isDark={isDark} />
    </main>
  )
}

export default App
