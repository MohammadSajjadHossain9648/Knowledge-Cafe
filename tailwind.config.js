/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: 'rgb(255, 255, 255)',

        black_color: 'rgb(17, 17, 17)',
        shade_black_color: 'rgba(17, 17, 17, 0.6)',
        shade_black_border_color: 'rgba(17, 17, 17, 0.15)',
        shade_black_bg_color: 'rgba(17, 17, 17, 0.05)',

        blue_violet_color: 'rgb(96, 71, 236)',
        shade_blue_violet_color: 'rgba(96, 71, 236, 0.1)',
      },
      gridTemplateColumns: {
        custom: '1.3fr 0.7fr',
      }
    },
  },
  plugins: [],
}

