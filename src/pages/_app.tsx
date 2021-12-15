import '@/styles/index.css'
import '@/styles/md.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'windi.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='author' content='Feng Han' />
        <meta name='description' content='Personal website for Feng Han' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='generator' content='Next 12.0.4' />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
