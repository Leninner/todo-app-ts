import { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../context/DarkTheme'

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [currentBoxPosition, setCurrentBoxPosition] = useState({
    top: buttonRef.current?.offsetTop,
    left: buttonRef.current?.offsetLeft,
    widthBox: buttonRef.current?.offsetWidth,
    heightBox: buttonRef.current?.offsetHeight,
  })

  const { isDark, toggleTheme }: any = useContext(ThemeContext)

  const widthScreen = window.innerWidth
  const heightScreen = window.innerHeight

  const handleChangePosition = (e: any) => {
    const button = buttonRef.current

    if (button) {
      const top = Math.random() * (heightScreen - 200)
      const left = Math.random() * (widthScreen - 250)

      setCurrentBoxPosition({
        ...currentBoxPosition,
        top: top,
        left: left,
      })
    }
  }

  return (
    <div className="w-full h-screen dark:bg-slate-800 bg-gray-100 relative flex items-center justify-center">
      <button
        className={`outline-none absolute`}
        style={{ top: currentBoxPosition.top, left: currentBoxPosition.left }}
        ref={buttonRef}
        onMouseEnter={handleChangePosition}
      >
        <div
          className="w-auto h-auto  text-white dark:text-slate-800 font-bold py-10 px-20 rounded-lg bg-slate-800 dark:bg-white shadow-lg shadow-gray-500"
          onClick={toggleTheme}
        >
          {isDark ? <p>Sin derecho? :,c</p> : <p>No</p>}
        </div>
      </button>
    </div>
  )
}
