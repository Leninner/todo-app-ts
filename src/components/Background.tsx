import lightImage from '../../images/bg-desktop-light.jpg'
import darkImage from '../../images/bg-desktop-dark.jpg'

export const Background = ({ isDark }: any) => {
  return (
    <section className="w-full h-screen dark:bg-dark_veryDarkBlue bg-light_veryLightGray absolute -z-10">
      <div className="w-full h-2/5">
        <img
          src={isDark ? darkImage : lightImage}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  )
}
