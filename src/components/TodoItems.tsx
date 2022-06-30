import { useState, memo } from 'react'

export const InputComponent = memo(
  ({ text, completed, onChange, onComplete, onDelete, optionsStyles, disabled }: any) => {
    const [isHover, setIsHover] = useState(false)

    const optionsInput = {
      disabled,
      text,
      completed,
      onChange,
    }

    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)

    return (
      <section
        className={`w-full py-5 px-2 rounded-md dark:bg-dark_veryDarkDesaturatedBlue bg-light_veryLightGray flex items-center justify-between relative ${optionsStyles?.className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {disabled ? (
          <>
            {isHover && (
              <span
                className={`absolute text-4xl dark:text-dark_veryDarkGrayishBlue z-20 right-5 text-light_darkGrayishBlue cursor-pointer`}
                onClick={onDelete}
              >
                x
              </span>
            )}

            {onComplete()}
          </>
        ) : (
          <div
            className={`w-6 h-6 rounded-full mr-5 ml-3 border border-dark_lightGrayishBlue dark:border-light_veryDarkGrayishBlue `}
          />
        )}

        <Input {...optionsInput} />
      </section>
    )
  }
)

const Input = ({ disabled, text, completed, onChange }: any) => {
  return (
    <input
      type="text"
      placeholder="Add a todo"
      className={`outline-none flex-1 px-2 bg-transparent dark:text-dark_lightGrayishBlue placeholder:dark:text-dark_darkGrayishBlue caret-primary_brigthBlue
      ${completed && 'line-through text-light_darkGrayishBlue dark:text-dark_darkGrayishBlue'}`}
      value={text}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
