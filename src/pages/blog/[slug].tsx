import { getPostBySlug, getPostSlugs } from '@/utils/api'
import { md2html } from '@/utils/md2html'
import { GetStaticPaths, GetStaticProps } from 'next'

const Blog = ({ post }: { post: Post }) => {
  const { title, date, duration, content } = post

  return (
    <article className='prose'>
      <header>
        <h1>{title}</h1>
        <small>
          {date}
          {duration}
        </small>
      </header>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, ...rest } = getPostBySlug(params!.slug as string)
  return { props: { post: { content: md2html(content), ...rest } } }
}

export default Blog
