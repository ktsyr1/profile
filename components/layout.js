
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
            <>{children}</>
        </>
    )
}