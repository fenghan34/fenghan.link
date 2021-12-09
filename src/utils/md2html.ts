import { marked, Renderer } from 'marked'
import Prism from 'prismjs'
const loadLanguages = require('prismjs/components/')

loadLanguages([
  'javascript',
  'typescript',
  'jsx',
  'css',
  'markup',
  'bash',
  'json',
])

export const md2html = (md: string) => {
  const renderer: Partial<Renderer> = {
    heading(text: string, level: number) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

      return `<h${level} id="${escapedText}">
                ${text}
                <a class="header-anchor" href="#${escapedText}" aria-hidden="true">#</a>
              </h${level}>`
    },
    link(href: string, title: string, text: string) {
      return `<a target="_blank" href="${href}" title="${title}">${text}</a>`
    },
  }

  marked.use({ renderer })

  return marked.parse(md, {
    highlight: (code: string, lang: string) => {
      return Prism.languages[lang]
        ? Prism.highlight(code, Prism.languages[lang], lang)
        : code
    },
  })
}
