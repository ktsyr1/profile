import { useRouter } from "next/router"
import Link from 'next/link'
import data from '../data/data.json' 
export default function Nav(props) {
    
    const lang = props && props.lang
    const router = useRouter() 
    let langs = lang == "ar" ?
        <>  <a href='#'>العربية</a>
            <Link href='/en'>
                <a id='go'>English</a>
            </Link>
        </>
        : <>

            <Link href='/ar' >
                <a id='go'>العربية</a>
            </Link>
            <a href='#'>English</a>
        </>
    let text = data[lang] && data[lang].text 
    let menu = router.asPath != "/ar" || "/en" || '/' ?
        <div className='menu'>
            <Link href='/' >
                <a> {text && text.home} </a>
            </Link>
            <Link href={`/${lang}/project`} >
                <a>{text && text.project} </a>
            </Link>
            <Link href={`/${lang}/skill`} >
                <a > {text && text.skill}  </a>
            </Link>
            <Link href={`/${lang}/contact`} >
                <a > {text && text.contact}  </a>
            </Link>
        </div>
         :''
    let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' } 
    return (
        <nav style={dir}> 
            <img    id='logo' src='/images/logo.png' alt={`logo ${data[lang] && data[lang].name}`} />
            {menu}
            <div className='lang'>
                {langs}
            </div>
        </nav>


    )
}
