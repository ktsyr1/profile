
import Document, { Html, Head, Main, NextScript } from "next/document"; 
import Footer from "../components/footer";
import { useRouter } from "next/router" 
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
        <Head />
        <body> 
          <Main />  
          <NextScript />  
        </body>
      </Html>
    );
  }
}