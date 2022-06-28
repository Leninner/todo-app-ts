export const TodoHeader = ({ changeTheme, isDark }: any) => {
  return (
    <header className="w-full flex justify-between items-center">
      <h1 className="text-light_veryLightGray text-[32px] font-bold tracking-[.5em] cursor-default">
        TODO
      </h1>

      <div onClick={changeTheme} className="cursor-pointer">
        <span className="material-symbols-outlined text-[36px] text-light_veryLightGray selection:bg-none">
          {isDark ? 'light_mode' : 'dark_mode'}
        </span>
      </div>
    </header>
  )
}
