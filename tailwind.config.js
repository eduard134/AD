/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bisque': "#ffe4c4",
        "white": "#ffffff",
        'azure': "#f0ffff",
        'burlywood': '#deb887',
        'burlywood2': '#ffe4c4',
        'desc': '#f0ffff',
        'lime': '#33B679',
      },
      fontFamily: {
        public: ['Public Sans', 'sans-serif'],
      },
      textShadow: {
        'custom': '1.5px 1px 1px rgb(249, 241, 241)',
      },
      boxShadow: {
        'shadow1': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        'shadow2': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
