/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1F4E79',
          secondary: '#F2BE22',
          background: '#F9FAFB',
          muted: '#6B7280',
        },
      },
    },
    plugins: [],
  };  