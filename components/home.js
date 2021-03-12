import Head from './head'
import Footer from './footer'
import Nav from './nav'
import { useRouter } from "next/router"
import translate from '../data/data.json'
import Link from 'next/link'
export default function Home(props) {
    const { query } = useRouter()
    const lang = query.lang ? props && props.lang : 'ar'
    if (query != undefined) {
        let datas = translate[lang]
        let data = datas && datas.text

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        return (
            < >
                <Head />
                <Nav lang={lang} />
                <section style={dir} className='profile'>
                    <article id='me'>
                        <p>{data && data.hi}</p>
                        <h1> {datas && datas.name}</h1>
                        <b>{data && data.job}</b>
                    </article>
                    <article className='links'>
                        <Link href={lang + '/project'} >
                            <a id='go'>
                                {data && data.project}
                            </a>
                        </Link>
                        <Link href={lang + '/skill'} >
                            <a id='go'> {data && data.skill}  </a>
                        </Link>
                        <Link href={lang + '/contact'} >
                            <a id='go'> {data && data.contact}  </a>
                        </Link>
                    </article>

                    {/* <img src='/images/icon.png' /> */}
                </section>
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
                </section>
                <Footer />
            </>
        )
    }
}
