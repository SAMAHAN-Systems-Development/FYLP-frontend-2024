/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
    colors: {
      darkblue: 'rgb(var(--color-dark-blue) / <alpha-value>)',
      blue: 'rgb(var(--color-blue) / <alpha-value>)',
      skyblue: 'rgb(var(--color-sky-blue) / <alpha-value>)',
      red: 'rgb(var(--color-red) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
      fadeOut: 'fadeOut 0.5s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    screens: {
      xsm: '384px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [
    function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
      addUtilities({
        '.container-xs': {
          '@apply container max-w-[24rem] mx-auto xsm:px-0': {},
        },
        '.container-sm': {
          '@apply container max-w-[36rem] mx-auto sm:px-0': {},
        },
        '.container-md': {
          '@apply container max-w-[48rem] mx-auto md:px-0': {},
        },
        '.container-lg': {
          '@apply container max-w-[62rem] mx-auto lg:px-0': {},
        },
        '.container-xl': {
          '@apply container max-w-[75rem] mx-auto xl:px-0': {},
        },
        '.container-2xl': {
          '@apply container max-w-[87.5rem] mx-auto 2xl:px-0': {},
        },
      });
    },
  ],
};
