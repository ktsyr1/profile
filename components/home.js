
import { useRouter } from "next/router"
import translate from '../data/data.json'
import Link from 'next/link'
import LinkButton from "./linkButton"
export default function Home(props) {
    const { query } = useRouter()
    const lang = query.lang ? props && props.lang : 'ar'

    const router = useRouter()
    if (query != undefined) {

        let datas = translate[lang]
        let data = datas && datas.text

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        let path = router.asPath.slice(4) 
        return (
            < >
                <section style={dir} className='profile'>
                    <div className='card'>
                        <img id='logo' src='/images/logo.png' alt={`logo ${data[lang] && data[lang].name}`} />
                        <div className='content'>
                            <h1> {datas && datas.name}</h1>
                            <b>{data && data.job}</b>
                        </div>
                    </div>
                    <div className='cards'>
                        <LinkButton type={path === "project" ? 'button' : 'link'} href={`/${lang}/project`} class='card' >
                            {data && data.project}
                        </LinkButton>
                        <LinkButton type={path === "skill" ? 'button' : 'link'} href={`/${lang}/skill`} class='card' >
                            {data && data.skill}
                        </LinkButton>
                        <LinkButton type={path === "contact" ? 'button' : 'link'} href={`/${lang}/contact`} class='card' >
                            {data && data.contact}
                        </LinkButton> 
                    </div>
                </section>
            </>
        )
    }
}
