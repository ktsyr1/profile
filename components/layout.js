
import Home from 'components/page/home'
import { useRouter } from "next/router"
import Lang from 'components/lang'

export default function LayoutHome({ children }, { props }) {
    const { query } = useRouter()
    const lang = query.lang
    let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }

    return (
        <>
            <Lang />
            {/* <Home lang={lang} /> */}
            <>{children}</>
        </>
    )
}