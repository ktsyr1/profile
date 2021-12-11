
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    // if (typeof window !== "undefined") { }


    return (
      <Html  >
        <Head >
          <script async defer data-domain="ktsyr1.vercel.app" src="https://analytics.wifi4games.com/js/plausible.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}