import { marked } from 'marked'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/'

loadLanguages([
  'javascript',
  'typescript',
  'jsx',
  'tsx',
  'css',
  'markup',
  'bash',
  'json',
])

export const md2html = (md: string) => {
  const renderer = new marked.Renderer()

  renderer.heading = function (text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

    return `<h${level} id="${escapedText}">
                ${text}
                <a class="header-anchor" href="#${escapedText}" aria-hidden="true">#</a>
            </h${level}>`
  }

  renderer.link = function (href: string, title: string, text: string) {
    return `<a target="_blank" href="${href}" title="${title}">${text}</a>`
  }

  marked.setOptions({
    renderer,
    highlight: (code: string, lang: string) => {
      return Prism.languages[lang]
        ? Prism.highlight(code, Prism.languages[lang], lang)
        : code
    },
  })

  return marked.parse(md)
}
