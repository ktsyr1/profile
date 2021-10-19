
import { useRouter } from "next/router"
import data from '../../data/data.json'

export default function Skills() {
    const { query } = useRouter()
    const lang = query.lang
    if (query != undefined) {
        let datas = data[lang]

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        return ( 
                <div className='experience'>
                    {datas && datas.experience.map((ex, i) => {
                        return (
                            <div className='card'>
                                <h3>{ex.title}</h3>
                                <p>{ex.description}</p>
                            </div>
                        )
                    })}
                </div> 
        )
    }
}
