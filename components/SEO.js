import Head from 'next/head'

function SEO(props) {
    let {
        title = 'قتيبة محمد',
        image = "/images/logo.png",
        description = "مصمم و مطور تطبيقات ويب",
        siteName = 'قتيبة محمد',
    } = props
    let logo = "/images/logo.png"
    return (
        <Head>
            <title>{title}</title>
            <meta name="google-site-verification" content="OR7y7vZTT8JAzL0w48XNuKtUSgT3Zvtja4M0LBt43zM" />
            <meta charset="UTF-8" />
            <meta name="theme-color" content="#1a8a7e" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="application-name" content={siteName} />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <link rel="apple-touch-icon" href={logo} />
            <meta name="mobile-web-app-capable" content="yes" />
            <link name="author" content="ktsyr1" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />

            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />

            <meta property="fb:image" content={image} />
            <meta property="fb:title" content={title} />

            <meta property="og:title" content={title} />
            -     <meta property="og:locale" content="ar_AR" />
            -     <meta property="og:site_name" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            -       <meta property="og:image:alt" content="pesktop android intro" />


            <meta name="twitter:image:src" content={image} />
            <meta property="twitter:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:site" content="@PesktopCo" /> */}
            {/* <meta name="twitter:creator" content="@PesktopCo" /> */}

            <meta name="description" content={description} />
            -      <link rel="canonical" href="https://ktsyr1.netlify.app" />
            <link rel="manifest" href="/manifest.json" />
            /////////////////////////////







        </Head>
    )
}

export default SEO
