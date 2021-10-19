import Layout from '../components/layout'
import '../styles/style.sass'
import Head from 'next/head'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {

  return (
    <Layout >
      <Head>
        <title>Qotayba Mohammad - قتيبة محمد </title>
        <meta charset="UTF-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="twitter:image:src" content="/images/logo.png" />
        <meta property="fb:image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:title" content="Qotayba Mohammad" />
        <meta property="fb:title" content=" Qotayba Mohammad" />
        <meta property="twitter:title" content="Qotayba Mohammad" />
        <meta name="Description" content="الموقع الشخصي لقتيبة محمد" />
        <meta name="Keywords" content="قتيبة محمد, موقع قتيبة محمد , Qotayba Mohammad , Qotayba Mohammad website" />
        <meta name="google-site-verification" content="nmG596id8_ITnyFhT6XRJY0gE-nKdWY2WRLk3-ulGwA" />
        <link rel="canonical" href="https://ktsyr1.netlify.app" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="#" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
