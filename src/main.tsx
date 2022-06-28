import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/DarkThemeContext.js'
import { TodosContextProvider } from './context/TodosContext.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </ThemeContextProvider>
)
