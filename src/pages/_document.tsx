import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@200;400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
(function () {
  var theme = localStorage.getItem('theme')
  if (window.matchMedia('(prefers-color-scheme: dark)').matches || theme === 'dark') {
    document.documentElement.className = 'dark'
    localStorage.setItem('theme', 'dark')
  }
})()
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
