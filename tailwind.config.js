/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#1C1C2C',
        'background-white': '#EDECFC',
      },
      textColor: {
        primary: '#000',
        secondary: '#999',
      },
    },
  },
  plugins: [],
}
