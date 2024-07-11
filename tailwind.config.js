/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      roboto:['Roboto Mono', 'monospace'],
      rowdies:['Rowdies', 'sans-serif']
    },
    colors:{
      primarybtncolor: '#4CAF50',
      secondarybtncolor : '#388E3C',
      primarybg : '#F5F5F5',
      secondarybg : '#C8E6C9',
      border : '#a5d6a7',
      primarytext : '#212121',
      secondarytext : '#757575',
    }
  },
  plugins: [],
}