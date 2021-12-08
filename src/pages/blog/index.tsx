import BlogList from '@/components/BlogList'
import { getAllPosts } from '@/utils/api'
import { GetStaticProps } from 'next'

const BlogListPage = ({ posts }: { posts: Post[] }) => {
  return <BlogList posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map(({ content, ...rest }) => rest)

  return { props: { posts } }
}

export default BlogListPage
