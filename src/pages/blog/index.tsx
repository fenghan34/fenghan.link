import BlogList from '@/components/BlogList'
import { getAllPosts } from '@/utils/api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const BlogListPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BlogList posts={posts} />
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = getAllPosts().map(({ content, ...rest }) => rest) as Post[]

  return { props: { posts } }
}

export default BlogListPage
