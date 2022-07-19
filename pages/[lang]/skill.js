
import { useRouter } from "next/router"
import { useState } from 'react'

export default function Skills({ data, info }) {
    let [des, setDes] = useState('')
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box col m-a ' dir={info[lang]?.direction}>
            <div className='box col ui '>
                {data?.map((skill, i) => (
                    <div className="box col" key={i}>
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

Skills.getInitialProps = async ({ query }) => {
    let res = await import(`data/skills.json`)
    // info
    let info = await import(`data/info.json`)
    return { data: res.default, info }
}