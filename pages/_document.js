import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Font from '../utils/fontLoader';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  componentDidMount() {
    Font();
  }

  render() {
    return (
      <html>
        <Head>
          {process.env.NODE_ENV !== 'production' && (
            <link
              rel='stylesheet'
              type='text/css'
              href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
            />
          )}
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
