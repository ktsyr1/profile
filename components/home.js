 
import { useRouter } from "next/router"
import translate from '../data/data.json'
import Link from 'next/link'
export default function Home(props) {
    const { query } = useRouter()
    const lang = query.lang ? props && props.lang : 'ar'

    const router = useRouter()
    if (query != undefined) {
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

        let datas = translate[lang]
        let data = datas && datas.text

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        return (
            < > 
                <nav style={dir}>
                    <div className='lang'>
                        {langs}
                    </div>
                </nav>
                <section style={dir} className='profile'>
                    <div className='card'>
                        <img id='logo' src='/images/logo.png' alt={`logo ${data[lang] && data[lang].name}`} />
                        <div className='content'>
                            <h1> {datas && datas.name}</h1>
                            <b>{data && data.job}</b>
                        </div>
                    </div>
                    <div className='cards'>

                        <Link href={`/${lang}/project`} >
                            <a className='card'>{data && data.project} </a>
                        </Link>
                        <Link href={`/${lang}/skill`} >
                            <a className='card'> {data && data.skill}  </a>
                        </Link>
                        <Link href={`/${lang}/contact`} >
                            <a className='card'> {data && data.contact}  </a>
                        </Link>
                    </div>
                </section>
                {/*  
                <section style={dir} >
                    <h2>{data && data.MyServices}</h2>
                    <article className='services'>
                        <div className='card'>
                            <img src='/icon/frontend.svg' alt='icon frontend' />
                            <h3 className="title" >{data && data.frontend}</h3>
                            <p className='description'> {data && data.t1}</p>
                        </div>

                        <div className='card'>
                            <img src='/icon/backend.svg' alt='icon backend' />
                            <h3 className="title" >{data && data.backend}</h3>
                            <p className='description'> {data && data.t4}</p>
                        </div>

                    </article>
                </section> */}
            </>
        )
    }
}
