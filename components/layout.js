
import Home from 'components/page/home'
import { useRouter } from "next/router"
import Nav from 'components/nav'

export default function LayoutHome({ children }, { props }) {
    const { query } = useRouter()
    const lang = query.lang
    let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }

    return (
        <>
            <Nav />
            {/* <Home lang={lang} /> */}
            <section>{children}</section>
            <footer>
                <a href="https://github.com/ktsyr1/profile" className="box ui center center-col m-a">
                    open source projects
                    <img src='/icon/github.svg' alt='icon github' width={30} />
                </a>
            </footer>
        </>
    )
}