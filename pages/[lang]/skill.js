
import Project from 'components/page/project'
import { useRouter } from "next/router"
import { useState } from 'react'

export default function Home({ data }) {
    let [des, setDes] = useState('')
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box row ui page m-a'>
            <div className={`box col w-300 center-text space `} >

                {data?.map((project, i) => {
                    let { url, title, description, feature, pro } = project

                    return (
                        <b key={i} className='ui m' onClick={(e) => setDes(description[lang])}>
                            {title}
                        </b>
                    )
                })}
            </div>
            <div className={`box col w-300 center-text space `} >
                {des}
            </div>
        </div>

    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/skills.json`)
    return { data: res.default }
}