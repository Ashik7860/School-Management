/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#F5F5F5',
        secondary:'#1D1F2A',

        mainBackground:'#dbdcd8',
        signinBackground:'#f3f8f3',
        navbarBackground:'#656871',
        cardBackground:'#e3c2e7',

        
        loginButton :"#444b48",
      }
    },
  },
  plugins: [],
}
