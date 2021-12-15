import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <p className='prose prose-lg'>So glad to see you.</p>
      <Head>
        <title>Not Found</title>
      </Head>
    </>
  )
}

export default Custom404
