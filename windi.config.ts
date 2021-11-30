import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      typography: {},
    },
  },
  extract: {
    include: ['src/**/*.tsx'],
  },
  plugins: [require('windicss/plugin/typography')],
})
