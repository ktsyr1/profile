

export default function Home(props) {
    let { data, info, locale } = props
    const lang = locale || 'ar'
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


export async function getStaticProps({ locale }) {
    let { default: data } = await import(`data/projects.json`)
    let { default: info } = await import(`data/info.json`)
    return { props: { data, info, locale }, revalidate: 60 * 60 * 24 * 30, }
} 