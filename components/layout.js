
import Home from './home'
import { useRouter } from "next/router"

export default function LayoutHome({ children }, { props }) {
    const { query } = useRouter()
    const lang = query.lang
    let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }

    return (
        <>
            <Home lang={lang} />
            <>{children}</>
        </>
    )
}