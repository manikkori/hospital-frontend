/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        hospital: {
          blue: '#1E3A8A', 
          light: '#EFF6FF', 
          teal: '#0D9488', 
          dark: '#0f172a',
          darker: '#020617'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}