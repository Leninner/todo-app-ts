export const InputComponent = ({ options, disabled, text, completed, onChange, onClick }: any) => {
  return (
    <div
      className={`w-full py-5 px-2 rounded-md dark:bg-dark_veryDarkDesaturatedBlue bg-light_veryLightGray flex items-center justify-between ${options?.className}`}
    >
      {disabled ? (
        onClick()
      ) : (
        <div
          className={`w-6 h-6 rounded-full mr-5 ml-3 border border-dark_lightGrayishBlue dark:border-light_veryDarkGrayishBlue `}
        />
      )}

      <input
        type="text"
        placeholder="Add a todo"
        className={`outline-none flex-1 px-2 bg-transparent dark:text-dark_lightGrayishBlue placeholder:dark:text-dark_darkGrayishBlue caret-primary_brigthBlue
          ${completed && 'line-through text-light_darkGrayishBlue dark:text-dark_darkGrayishBlue'}`}
        value={text}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  )
}
