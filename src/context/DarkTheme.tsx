import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark]: any = useState(() => {
    const storedTheme = localStorage.getItem('isDark')

    return storedTheme === 'true'
  })

  const toggleTheme = () => {
    localStorage.setItem('isDark', `${!isDark}`)
    setIsDark(!isDark)
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
