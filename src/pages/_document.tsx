import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="디소스 - 메인 페이지" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://thesource.co.kr/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="http://younicon.or.kr/assets/thesource.jpg"
          />
          <meta
            property="og:description"
            content="콘텐츠 저작권 거래의 중심, 디소스"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
