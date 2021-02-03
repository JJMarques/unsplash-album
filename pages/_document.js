import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="Unsplash photographic portfolio of José Marques." />
            <meta property="og:title" content="José Marques - Photographic portfolio" />
            <meta property="og:description" content="Unsplash photographic portfolio of José Marques." />
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="/ogimage.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument