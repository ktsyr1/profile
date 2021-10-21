
import { useRouter } from "next/router"
import Link from 'next/link'

export default function LinkButton(app) {
    if (app.type === 'link') {
        return (
            <>
                <Link href={app.href}>
                    <a className={app.class}>{app.children}</a>
                </Link >
            </>
        )
    } else {
        return <button href={app.href}> {app.children} </button >
    }
}