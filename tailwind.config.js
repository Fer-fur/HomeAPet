/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto_flex)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/Hero-bg.jpg')"
      },
      colors: {
        'primary-green': {
          DEFAULT: '#3EB650'
        },
        'primary-blue': {
          DEFAULT: '#3778C2'
        },
        'primary-orange': {
          DEFAULT: '#FE6601'
        },
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '0 45px 65px rgba(0, 0, 0, 0.15)'
        
      }
    },
  },
  plugins: [],
}
