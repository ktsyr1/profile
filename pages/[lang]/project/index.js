
import Project from 'components/page/project'
import { useRouter } from "next/router"

export default function Home({ data }) {
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box grid '>
            {data?.map((project, i) => {
                let { url, title, description, year, icon } = project
                return (
                    <div className=' box row w-300 ui m  ' key={i}>
                        <img width={100} height={100} src={icon} alt={title[lang] + ' logo'} />
                        <div className='box col start'>
                            <b>{title[lang]}</b>

                            <span>{year}</span>
                            {/* <p>{description[lang]}</p> */}
                            {/* <a href={url} className='btn ui'>{data.oglink}</a> */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/projects.json`)
    return { data: res.default }
}