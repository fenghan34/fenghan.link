import { marked } from 'marked'

export const md2html = (md: string) => {
  const html = marked.parse(md, {
    headerIds: true,
  })

  return html
}
