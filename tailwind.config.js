const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '192': '48rem',
      },
      background: {
        'grid': `linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,.25) 50%),linear-gradient(
          90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))`,
        'special': '100% 4px,5px 100%'
      }
      
    },
  },
  plugins: [plugin()],
}
