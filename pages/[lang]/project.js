import Head from '../../components/head'
import Footer from '../../components/footer'
import Nav from '../../components/nav'
import { useRouter } from "next/router"
import data from '../../data/data.json'

export default function Project() {
    const { query } = useRouter() 
    const lang = query.lang 
    if (query != undefined) {
        let datas = data[lang] 

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        return (
            < >
                <Head />
                <Nav lang={lang}/>
                <section style={dir}>
                </section>
                <Footer />
            </>
        )
    }
}
