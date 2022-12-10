
import { useRouter } from "next/router"
import Link from 'next/link'

export default function LinkButton({ href, locale, className, children }) {
    let route = useRouter()
    if (route.pathname != href) {
        return (
            <Link href={href} locale={route.locale} className={className}>
                {children}
            </Link >
        )
    } else {
        return <button > {children} </button >
    }
}