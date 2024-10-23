/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black_color: 'rgb(17, 17, 17)',
        shade_black_color: 'rgba(17, 17, 17, 0.6)',

        blue_violet_color: 'rgb(96, 71, 236)',
        shade_blue_violet_color: 'rgba(96, 71, 236, 0.1)',
      }
    },
  },
  plugins: [],
}

