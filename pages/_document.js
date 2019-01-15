import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import favicon from '../assets/favicon.ico'
import ogImage from '../assets/og-image.jpg'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Washabelle</title>
          <meta name="description" content="Washabelle Description" />

          {this.props.styleTags}

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />


          <meta property="og:url" content="https://washabelle.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="washabelle" />
          <meta property="og:image" content={ogImage} />
          <meta property="og:description" content="washabelle description" />
          <meta property="og:site_name" content="washabelle site name" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="washabelle card" />
          <meta name="twitter:site" content="@washabelle" />
          <meta name="twitter:url" content="https://washabelle.com" />
          <meta name="twitter:title" content="washabelle title" />
          <meta name="twitter:description" content="washabelle description " />
          <meta name="twitter:image" content={ogImage} />

          <script
            // dangerouslySetInnerHTML={{
            //   __html: `
            //     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r; i[r]=i[r]||function(){
            //       (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            //   })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            //   ga('create', 'UA-8921332-12', 'auto');
            //   ga('send', 'pageview');
            // `}}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
