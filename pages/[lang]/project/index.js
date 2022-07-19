
import { useRouter } from "next/router"

export default function Home({ data, info }) {
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box grid center-col' dir={info[lang]?.direction}>
            {data?.map((project, i) => {
                let { url, title, description, year, icon, tasks, archive } = project
                return (
                    <div className={' box col w-300 ui m space '} dir={info[lang]?.direction} key={i}>
                        <div className=' box row center' >
                            <img width={100} height={100} src={icon} alt={title[lang] + ' logo'} />
                            <div className='box col start space  w-full'>
                                <div className='box col R'>
                                    <b>{title[lang]}</b>
                                    <span>{year}</span>
                                </div>

                            </div>
                        </div>
                        <div className='box grid center  '>
                            {tasks.map((task, i) => (<p className={'task'} key={i}> {task}</p>))}
                        </div>
                        <div className='box row space center w-full'>
                            {archive
                                ? <p className='archive' > {info[lang]?.archive}</p>
                                : <div />}
                            <a href={url} className='btn '> {info[lang].view} </a>

                        </div>
                    </div >
                )
            })}
        </div >
    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/projects.json`)
    let info = await import(`data/info.json`)
    return { data: res.default, info }
}