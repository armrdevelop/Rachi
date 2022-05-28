module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      bluer: '#0f9afe',
      whiter: {
        100: '#ffffff',
        200: '#eff8ff'
      },
      grayr: {
        100: '#dbdbdb',
        200: '#6e7275',
        300: '#293145'
      }
    },
    lineHeight: {
      'extra-loose': '2.5',
      60: '3.75rem',
      25: '1.5625rem',
      30: '1.875rem',
    },
    extend: {}
  },
  plugins: []
}
