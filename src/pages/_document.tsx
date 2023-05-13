import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Environment Settings */}
        <meta charSet='utf-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />

        {/* Website Information */}
        <meta name="description" content="学生向けの学習補助サービス" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
