
import Project from 'components/page/project'
import { useRouter } from "next/router"
import { useState } from 'react'

export default function Home({ data }) {
    let [des, setDes] = useState('')
    const { query } = useRouter()
    const lang = query.lang
    return (
        <div className='box row     m-a'>
            <div className={`box grid  center-text space `} >

                {data?.map((project, i) => {
                    let { url, title, description, feature, pro } = project
                    function set(e) {
                        Array.from(document.querySelectorAll(`.code-12 span`)).map(a => a?.classList.add('none'))
                        document.querySelector(`span.code-${i}.none`)?.classList.remove('none')
                    }
                    return (
                        <div key={i} className={`box col ui w-300 m code-12 code-${i}`} onClick={set}>
                            <b>{title}</b>
                            <span className={` code-${i} none`}> {description[lang]}</span>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/skills.json`)
    return { data: res.default }
}