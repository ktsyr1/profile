import Link from "next/link"


export default function Home(props) {
    let { fullname, direction, description, about } = props?.data

    let { data, info, locale } = props
    const lang = locale || 'ar'
    return (
        <div className="col center" dir={direction} style={{ margin: '10px auto' }}>
            <div dir={direction} style={{ margin: '10px auto' }} className='box col page ui center '>
                <div className='box col center'>
                    <img id='logo' src='/images/logo.png' alt={`logo ${fullname}`} />
                    <div className='content box col center'>
                        <h1> {fullname}</h1>
                        <b>{description}</b>
                        <p className="task p-4" style={{ textAlgin: 'start' , margin: '10px' ,padding: '10px' }}>{about}</p>
                    </div>
                </div>
                {/*  <iframe width="100%" height="300px" src="https://www.youtube.com/embed/WEAKF7PyypI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"  ></iframe> */}
            </div>
            <div className=" row w-full box">

                {[
                    { title: { en: "project", ar: "المشاريع" }, url: "/project" },
                    { title: { en: "skill", ar: "المهارات" }, url: "/skill" },
                ].map((item, i) => (
                    <Link href={item.url} locale={lang} key={i} className="box col ui m w-full p justify-center" style={{ margin: '10px' ,padding: '10px' }}>
                        <p>{item.title[lang]}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps(ctx) {
    let res = await import(`data/info.json`)
    let data = res[ctx.locale || 'ar']
    return { props: { data, locale: ctx.locale }, revalidate: 60 * 60 * 24 * 30, }
}
