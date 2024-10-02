
import { useRouter } from "next/router"
import Link from 'next/link'

export default function LinkButton({ href, locale, className, children, style }) {
    let route = useRouter()
    if (route.pathname != href) {
        return (
            <Link href={href} locale={route.locale} className={className} style={style}>
                {children}
            </Link >
        )
    } else {
        return <button className="btn" style={{ fontSize: '16px' ,fontbernt: 'bold' }}>{children}</button>
    }
}
