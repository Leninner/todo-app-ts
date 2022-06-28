module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary_brigthBlue: 'hsl(220, 98%, 61%)',
      primary_checkBackgroundStart: 'hsl(192, 100%, 67%)',
      primary_checkBackgroundEnd: 'hsl(280, 87%, 65%)',
      light_veryLightGray: 'hsl(0, 0%, 98%)',
      light_veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
      light_lightGrayishBlue: 'hsl(233, 11%, 84%)',
      light_darkGrayishBlue: 'hsl(236, 9%, 61%)',
      light_veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      dark_veryDarkBlue: 'hsl(235, 21%, 11%)',
      dark_veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
      dark_lightGrayishBlue: 'hsl(234, 39%, 85%)',
      dark_lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
      dark_darkGrayishBlue: 'hsl(234, 11%, 52%)',
      dark_veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
      dark_veryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
      transparent: 'transparent',
    },
    fontFamily: {
      sansSerif: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        18: '18px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
