export interface ThemeContext {
  theme: string
  toggleTheme: () => void
}

export interface TodoInterface {
  id: number
  text: string
  completed: boolean
}

export interface InputComponentProps {
  options?: any
  disabled?: boolean
  text?: string
  completed?: boolean
  onChange?: (e: any) => void
}
