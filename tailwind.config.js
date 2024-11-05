/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily:  {
        Abril: ["Abril Fatface", "serif"],
        spicyRice: ["Spicy Rice", "serif"],
        dancing_script: ["Dancing Script","cursive"],
        Pacifico: ["Pacifico", "cursive"],
        caveat: ["Caveat", "cursive"]
      },

      colors:{
        brown_one: '#FFFFF2',
        brown_TWO: '#FFEFD5',
        brown_THREE: '#F2D3BA',
        brown_FOUR: '#D5B79F',
        brown_FIVE: '#B99C85',
        RED_PINK: '#DC143C',
      
      },

      keyframes: {
        slowpan: {
          '0%': {backgroundPosition: 'top left'},
          '100%': {backgroundPosition: 'bottom right'},
        },
      },

      animation: {
        slowpan: 'slowpan 30s alternate ease-in-out infinite',
      }

    },
  },
  plugins: [],
}

