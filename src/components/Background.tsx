import { useContext } from 'react'
import { ThemeContext } from '../context/DarkTheme'

export const Background = () => {
  const { isDark, toggleTheme }: any = useContext(ThemeContext)

  return (
    <div className="w-full h-screen dark:bg-slate-800 bg-gray-100 relative flex items-center justify-center"></div>
  )
}
