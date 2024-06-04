/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#dbe3fc',
        primary: '#162860',
        secondary: '#081e68',
      },
      backgroundImage: (theme) => ({
        'custom-bg': "url('./img/bg.jpg')",
      }),
      textShadow: {
        custom: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        'custom-lg': '2px 2px 4px rgba(0, 0, 0, 0.8)',
        'custom-2xl': '2px 2px 5px rgba(0, 0, 0, 1)',
        'custom-md': '1px 1px 2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
