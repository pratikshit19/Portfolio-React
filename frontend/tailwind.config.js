/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /*{primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
        text: '#333',*/
        background: '#06081c',
        // background:{
        //   gradient: 'linear-gradient(135deg, #06081c 0%, #007282 100%)', 
        // },
        button: '#00897B',
      },
    },
  },
  plugins: [],
}