/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7600A8',
        'black': '#232323',
        'light-gray-100': '#D6D6D6',
        'light-gray-200': '#9C9C9C',
      },
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '1rem',
          'md': '2.5rem',
          'lg': '2.5rem',
          'xl': '2.5rem',
          '2xl': '8rem',
          '3xl': '12rem',
        },
        screens: {
          'sm': '720px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1250px',
          '2xl': '1920px',
          '3xl': '2560px',
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1250px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const typographyClasses = {
        '.text-h1': {
          'font-family': 'Lato, sans-serif',
          'font-weight': '700',
          'font-size': '28px',
          'line-height': 'normal',
          'letter-spacing': 'normal',
        },
        '.text-h2': {
          'font-family': 'Lato, sans-serif',
          'font-weight': '700',
          'font-size': '22px',
          'line-height': 'normal',
          'letter-spacing': 'normal',
        },
        '.text-main': {
          'font-family': 'Lato, sans-serif',
          'font-size': '16px',
          'line-height': 'normal',
          'letter-spacing': 'normal',
        },
        '.text-small': {
          'font-family': 'Lato, sans-serif',
          'font-weight': '400',
          'font-size': '14px',
          'line-height': 'normal',
          'letter-spacing': 'normal',
        },
        '.text-subtext': {
          'font-family': 'Lato, sans-serif',
          'font-weight': '400',
          'font-size': '12px',
          'line-height': 'normal',
          'letter-spacing': 'normal',
        },
      };

      addUtilities({ ...typographyClasses });
    },
  ],
};
