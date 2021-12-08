import Link from 'next/link'

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className='blog-list'>
      {posts.map(({ title, slug, date, duration, spoiler }) => (
        <article key={slug}>
          <header>
            <h3>
              <Link href={`/blog/${slug}`} passHref>
                <a>{title}</a>
              </Link>
            </h3>
            <small>
              {date}
              {duration}
            </small>
          </header>
          <p>{spoiler}</p>
        </article>
      ))}
    </div>
  )
}

export default BlogList
