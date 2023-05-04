import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Đám cưới Văn Quyết ❤️ Tuyết Hoa."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Đám cưới Văn Quyết ❤️ Tuyết Hoa."
          />
          <meta property="og:title" content="Đám cưới Văn Quyết ❤️ Tuyết Hoa." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Đám cưới Văn Quyết ❤️ Tuyết Hoa." />
          <meta
            name="twitter:description"
            content="Đám cưới Văn Quyết ❤️ Tuyết Hoa."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
