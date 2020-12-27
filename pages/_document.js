import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {process.env.NODE_ENV !== 'production' && (
            <link
              rel="stylesheet"
              type="text/css"
              href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
            />
          )}
          {this.props.styleTags}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-179966128-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-179966128-1');
              `,
            }}
          />
          <meta
            name="copyright"
            content={`© ${new Date().getFullYear()} Canada Cannabyss`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
