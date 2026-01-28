/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        speedecomeDark: {
          primary: '#2D5C88',
          'primary-content': '#FFFFFF',

          secondary: '#C9A227',
          'secondary-content': '#0B1020',

          accent: '#6FA8D6',
          'accent-content': '#0B1020',

          neutral: '#0B2C4D',
          'neutral-content': '#E6EDF6',

          'base-100': '#070B14',
          'base-200': '#0A1324',
          'base-300': '#0F1D34',
          'base-content': '#E6EDF6',

          info: '#6FA8D6',
          success: '#22C55E',
          warning: '#C9A227',
          error: '#EF4444',
        },
      },

      {
        speedecomeLight: {
          primary: '#2D5C88',
          'primary-content': '#FFFFFF',

          secondary: '#C9A227',
          'secondary-content': '#0B2C4D',

          accent: '#6FA8D6',
          'accent-content': '#0B2C4D',

          neutral: '#0B2C4D',
          'neutral-content': '#FFFFFF',

          'base-100': '#F7F7F4',
          'base-200': '#EFEFEA',
          'base-300': '#E6E6DF',
          'base-content': '#0B2C4D',

          info: '#6FA8D6',
          success: '#22C55E',
          warning: '#C9A227',
          error: '#EF4444',
        },
      },
    ],

    darkTheme: 'speedecomeDark',
  },
}
