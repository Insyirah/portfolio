/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html', 
  './src/**/*.{vue,js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors:{
        primary:'#00ADB5',
        secondary:'#007A7F'
      }
    },
  },
  darkMode:'class',
  mode:'jit',
  plugins: [],
}

