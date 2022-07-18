
import Project from 'components/page/project'
import { useRouter } from "next/router"
import { useState } from 'react'

export default function Home({ data, info }) {
    let [des, setDes] = useState('')
    const { query } = useRouter()
    const lang = query.lang
    console.log(data);
    return (
        <div className='box col m-a '>
            <div className='box col ui m'>
                <h3>{info[lang].Specialties}</h3>
                <div className={`box grid  center-text space `} style={{ alignItems: 'flex-start' }} >

                    {data?.all?.map((project, i) => {
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
            {/* map ones */}
            <div className='box grid ui m'>
                <h3>{info[lang].lang_lib}</h3>

                <div className='box grid'>
                    {data?.ones.map((One, i) => (<i key={i} className='task'>{One}</i>))}
                </div>
            </div>
        </div>

    )
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/skills.json`)
    // info
    let info = await import(`data/info.json`)
    return { data: res.default, info }
}