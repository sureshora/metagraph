/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm-mono)'], // font-mono
        display: ['var(--font-helveticaDisplay)'], // font-display
        label: ['var(--font-helveticaMicro)'], // font-label
      },
      colors: {
        dark: '#151517', // dark mode background
        light: '#FFFFFF', // light mode background
      },
      textColor: {
        light: '#000',
        dark: '#FFF',
      },
    },
  },
  plugins: [],
}
