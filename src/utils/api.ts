import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { formatPostDate } from '.'

const postsDirectory = join(process.cwd(), 'posts')
const notesDirectory = join(process.cwd(), 'notes')

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string) => {
  const fullPath = join(postsDirectory, slug, `index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { date, duration, ...rest } = data

  return {
    slug,
    date: formatPostDate(date, 'en'),
    duration: ` • ${parseInt(duration)} min read`,
    ...rest,
    content,
  } as Post
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export const getNotes = () => {
  const notes = fs
    .readdirSync(notesDirectory)
    .map((slug) => {
      const {
        data: { date, ...rest },
        content,
      } = matter(fs.readFileSync(join(notesDirectory, slug), 'utf8'))
      return { date: formatPostDate(date, 'en'), ...rest, content } as Note
    })
    .sort((note1, note2) => (note1.date > note2.date ? -1 : 1))

  return notes
}
