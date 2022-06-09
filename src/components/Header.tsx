import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../context/DarkTheme'

export const Header = () => {
  const { isDark, toggleTheme }: any = useContext(ThemeContext)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [currentTop, setCurrentTop] = useState(20)
  const [currentLeft, setCurrentLeft] = useState(150)

  return (
    <div className="w-full h-screen dark:bg-slate-800 bg-gray-100 relative">
      <button
        className={`outline-none absolute top-[${currentTop}px] left-[${currentLeft}px]`}
        ref={buttonRef}
      >
        <div
          className="w-auto h-auto  text-white dark:text-slate-800 font-bold py-10 px-20 rounded-lg bg-slate-800 dark:bg-white shadow-lg shadow-gray-500"
          onClick={toggleTheme}
        >
          {isDark ? (
            <p>Sin derecho? :,c</p>
          ) : (
            <p>
              Con Derecho? <br /> UwU <br /> 7u7
            </p>
          )}
        </div>
      </button>
    </div>
  )
}
