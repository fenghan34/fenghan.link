import { getAllPosts } from '@/utils/api'
import { GetStaticProps } from 'next'

const BlogListPage = () => {
  return <div>blog</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'lang'])

  return { props: { posts } }
}

export default BlogListPage
