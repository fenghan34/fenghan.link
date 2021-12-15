import { getPostBySlug, getPostSlugs } from '@/utils/api'
import { md2html } from '@/utils/md2html'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

const Blog = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, date, duration, content, spoiler } = post

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={spoiler} />
      </Head>
      <article className='prose'>
        <header>
          <h1>{title}</h1>
          <p>
            {date}
            {duration}
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const { content, ...rest } = getPostBySlug(params!.slug as string)
  return { props: { post: { content: md2html(content), ...rest } } }
}

export default Blog
