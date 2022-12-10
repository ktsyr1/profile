

export default function Home(props) {
    let { fullname, direction, description, about } = props?.data

    return (
        <div dir={direction} style={{ margin: '10px auto' }} className='box col page ui center '>
            <div className='box col center'>
                <img id='logo' src='/images/logo.png' alt={`logo ${fullname}`} />
                <div className='content box col center'>
                    <h1> {fullname}</h1>
                    <b>{description}</b>
                    <p className="task" style={{ textAlgin: 'start' }}>{about}</p>
                </div>
            </div>
            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/WEAKF7PyypI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"  ></iframe>
        </div>
    )
}

export async function getStaticProps(ctx) {
    let res = await import(`data/info.json`)
    let data = res[ctx.locale || 'ar']
    return { props: { data }, revalidate: 60 * 60 * 24 * 30, }
}