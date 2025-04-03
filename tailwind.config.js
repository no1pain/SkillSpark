/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#121212',
          card: 'rgba(25, 25, 25, 0.9)',
          input: 'rgba(70, 70, 70, 0.5)',
          inputHover: 'rgba(80, 80, 80, 0.5)',
          iconCircle: 'rgba(80, 80, 80, 0.2)',
          button: 'rgba(90, 90, 90, 0.8)',
          buttonHover: 'rgba(110, 110, 110, 0.8)',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
        },
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} 