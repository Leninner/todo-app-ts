import { createContext, useState } from 'react'

export const DarkThemeContext = createContext({})

export const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark]: any = useState(() => {
    const storedTheme = localStorage.getItem('isDark')

    return storedTheme === 'true'
  })

  const toggleTheme = () => {
    localStorage.setItem('isDark', `${!isDark}`)
    setIsDark(!isDark)
  }

  return (
    <DarkThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  )
}
