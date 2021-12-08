import Link from 'next/link'

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className='space-y-16'>
      {posts.map(({ title, slug, date, duration, spoiler }) => (
        <article key={slug}>
          <header>
            <h3 className='mb-4 text-2xl font-bold'>
              <Link href={`/blog/${slug}`} passHref>
                <a>{title}</a>
              </Link>
            </h3>
            <small>
              {date}
              {duration}
            </small>
          </header>
          <p className='mt-1'>{spoiler}</p>
        </article>
      ))}
    </div>
  )
}

export default BlogList
