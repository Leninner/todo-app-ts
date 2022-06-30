export const FilterList = ({ clickedState, handleSetClickedState, mobile, commonStyles }: any) => {
  return (
    <ul
      className={`flex items-center flex-1 justify-between font-bold ${mobile && commonStyles}`}
      onClick={handleSetClickedState}
    >
      <li
        className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
    ${clickedState === 'all' && 'text-primary_brigthBlue'}
    `}
        data-filter="all"
      >
        All
      </li>
      <li
        className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
    ${clickedState === 'active' && 'text-primary_brigthBlue'}
    `}
        data-filter="active"
      >
        Active
      </li>
      <li
        className={`cursor-pointer hover:text-dark_veryDarkDesaturatedBlue dark:hover:text-light_veryLightGray 
    ${clickedState === 'completed' && 'text-primary_brigthBlue'}
    `}
        data-filter="completed"
      >
        Completed
      </li>
    </ul>
  )
}
