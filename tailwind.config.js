/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': 'rgb(13, 17, 23)',
        'white': 'rgb(246, 248, 250)',
        'dark-grey': 'rgba(177, 186, 196, 0.60)',
        'light-grey': 'rgba(208, 215, 222, 0.60)'
      }
    },
    
  },
  darkMode: 'class',
  plugins: [],
}

