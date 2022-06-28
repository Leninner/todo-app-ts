export interface ThemeContext {
  theme: string
  toggleTheme: () => void
}

export interface TodoInterface {
  id: number
  text: string
  completed: boolean
}
