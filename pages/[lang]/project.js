
import { useRouter } from "next/router"
import data from '../../data/data.json'

export default function Project() {
    const { query } = useRouter()
    const lang = query.lang
    if (query != undefined) {
        let datas = data[lang]

        let dir = lang == "ar" ? { direction: 'rtl' } : { direction: 'ltr' }
        return (
            <div className='experience'>
                {datas && datas.jobs.map((job, i) => {
                    return (
                        <div className='card'>
                            <h3>
                                <img src={job.url + '/favicon.ico'} />
                                {job.title}</h3>
                            <p>{job.description}</p>
                            <a href={job.url}>{datas && datas.text && datas.text.oglink}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}