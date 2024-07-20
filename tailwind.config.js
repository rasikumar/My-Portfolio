/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow:{
      'shadow' : '16px 13px 35px -17px rgba(0,0,0,0.3)'
    },
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
      textwhite : '#fafafa'
    },
    
  },
  plugins: [],
}