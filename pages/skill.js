
import { useRouter } from "next/router"
import { useState } from 'react'

export default function Skills({ data, info }) {
    const route = useRouter()
    const lang = route.locale || 'ar'
    return (
        <div className='box col m-a ' dir={info[lang]?.direction}>
            <div className='box grid center-col center-text'>
                {data?.map((skill, i) => (
                    <div className="box col ui w-300 m" key={i}>
                        <b>{skill.title}</b>
                        <span>{skill.description[lang]}</span>
                        <div className='box grid center-col' dir={'ltr'}>
                            {skill?.key.map((One, i) => (<i key={i} className='task'>{One}</i>))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export async function getStaticProps(ctx) {

    let { default: data } = await import(`data/skills.json`)
    // info
    let { default: info } = await import(`data/info.json`)
    return { props: { data, info }, revalidate: 60 * 60 * 24 * 30, }
}