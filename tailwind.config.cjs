/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      White: 'hsl(0, 0%, 100%)',
      Verylightgrayishblue: 'hsl(210, 60%, 98%)',
      Lightgrayishblue1: 'hsl(211, 68%, 94%)',
      Lightgrayishblue2: 'hsl(205, 33%, 90%)',
      Grayishblue: 'hsl(219, 14%, 63%)',
      Darkgrayishblue: 'hsl(219, 12%, 42%)',
      darkBlue: 'hsl(224, 21%, 14%)',
      primaryRed: 'hsl(1, 90%, 64%)',
      primaryBlue: 'hsl(219, 85%, 26%)',
    },
    extend: {
      fontFamily: {
        'plusJakatarSans' : ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}