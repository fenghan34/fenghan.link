import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['src/**/*.tsx'],
  },
  plugins: [typography()],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--c-base)',
            strong: { color: 'var(--c-deep)' },
            blockquote: { color: 'inherit' },
            code: { color: 'var(--c-deep)' },
            ul: { 'padding-left': '0' },
            a: {
              'color': 'var(--c-anchor)',
              'text-decoration': 'none',
            },
            p: {
              'margin-top': '0',
              'margin-bottom': 'var(--p-gap)',
            },
            hr: {
              'border': 'none',
              'margin-top': '0',
              'margin-bottom': 'calc(var(--p-gap) - 1px)',
            },
          },
        },
      },
    },
  },
})
