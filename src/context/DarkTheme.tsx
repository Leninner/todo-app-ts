import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
