
import Link from "next/link"
import { useRouter } from "next/router"

export default function Lang(props) {
    let route = useRouter()
    let { query } = route
    console.log(route);
    let lang = query.lang === 'ar' ? "en" : 'ar'
    let URL = route.asPath.replace(`/${query.lang}/`, `/${lang}/`)
    if (query != undefined) {
        return (
            < >
                <nav  >
                    <div className='lang'>
                        <Link href={URL}>
                            <a > <img src={`/images/${lang}.png`} alt={` ${lang} lang`} /></a>
                        </Link > 
                    </div>
                </nav>
            </>
        )
    }
}
