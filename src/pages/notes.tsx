import { getNotes } from '@/utils/api'
import { md2html } from '@/utils/md2html'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

const Notes = ({ notes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <div className='space-y-16 prose'>
        {notes.map(({ date, title, content }) => (
          <article key={date}>
            <header>
              <h2 id={title} className='!text-2xl !mb-1 !mt-0'>
                {title}
                <a
                  className='header-anchor !mt-0'
                  href={`#${title}`}
                  aria-hidden='true'
                >
                  #
                </a>
              </h2>
              <p className='!mb-4'>{date}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ notes: Note[] }> = async () => {
  const notes = getNotes().map(({ content, ...rest }) => ({
    content: md2html(content),
    ...rest,
  }))

  return {
    props: { notes },
  }
}

export default Notes
