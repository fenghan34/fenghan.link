import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { formatPostDate } from '.'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
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

export function getAllPosts() {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
