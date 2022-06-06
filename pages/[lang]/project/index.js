
import Project from 'components/page/project'
import { useRouter } from "next/router"

export default function Home({ data, info }) {
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box grid '>
            {data?.map((project, i) => {
                let { url, title, description, year, icon } = project
                return (
                    <div className=' box row w-300 ui m  ' key={i}>
                        <img width={100} height={100} src={icon} alt={title[lang] + ' logo'} />
                        <div className='box col start space  w-full'>
                            <b>{title[lang]}</b>
                            <div className='box row space center w-full'>

                                <span>{year}</span>
                                <a href={url} className='btn '>
                        {/* <img width={100} height={100} src={'/images/link.svg'} alt={title[lang] + ' logo'} /> */}
                                
                                    {info[lang].view}
                                </a>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/projects.json`)
    let info = await import(`data/info.json`)
    return { data: res.default, info }
}