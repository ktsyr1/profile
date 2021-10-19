 
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
                <section style={dir}>
                </section> 
            </>
        )
    }
}
