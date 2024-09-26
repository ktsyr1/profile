import { SiAdobexd } from "react-icons/si"
import { CgBot } from "react-icons/cg"
import { MdManageAccounts } from "react-icons/md"
import { RiPagesFill } from "react-icons/ri"
import { CiServer } from "react-icons/ci"
import { RiExternalLinkLine } from "react-icons/ri"

export default function Home(props) {
    let { data, info, locale } = props
    const lang = locale || 'ar'
    let crerr = [
        { name: 'UX & UI', Icon: <SiAdobexd /> },
        { name: 'frontend', Icon: <RiPagesFill /> },
        { name: 'backend', Icon: <CiServer /> },
        { name: 'Web automation', Icon: <CgBot /> },
        { name: 'Management', Icon: <MdManageAccounts /> }
    ]
    return (
        <div className='box grid center-col' dir={info[lang]?.direction}>
            {data?.map((project, i) => {
                let { url, title, description, year, icon, tasks, archive } = project
                if (!archive) {
                    return (
                        <div className={' box col w-300 ui m space '} dir={info[lang]?.direction} key={i}>
                            <div className=' box row center' >
                                <img width={70} height={70} src={icon} alt={title[lang] + ' logo'} style={{ height: 'auto', padding: '10px' }} />
                                <div className='box col start space  w-full'>
                                    <div className='box col R'>
                                        <b style={{ fontSize: 'large' }}>{title[lang]}</b>
                                        <span className="box row space">

                                            {year}
                                            {/* {archive ? <p className='archive' > {info[lang]?.archive}</p> : <div />} */}
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className='box grid space center task '>
                                <div className='box grid center  '>
                                    {tasks.map((task, i) => {
                                        if (task === 'UX & UI') return <SiAdobexd key={i} />
                                        if (task === 'frontend') return <RiPagesFill key={i} />
                                        if (task === 'backend') return <CiServer key={i} />
                                        if (task === 'Web automation') return <CgBot key={i} />
                                        if (task === 'Management') return <MdManageAccounts key={i} />
                                        else return <></>

                                    })}
                                </div>
                                {/* <a href={url} className=' box'>
                                <RiExternalLinkLine dir={info[lang]?.direction} />
                            </a> */}
                            </div>
                            <div className='box row space center w-full'>
                                {archive ? <p className='archive' > {info[lang]?.archive}</p> : <div />}

                                <a href={url} className='btn center row box m' style={{ fontSize: 'large' }}>
                                    <p style={{ marginLeft: '10px' }}>  {info[lang].view} </p>
                                    <RiExternalLinkLine dir={info[lang]?.direction} />
                                </a>

                            </div>
                        </div >
                    )
                } else return <></>
            })}
        </div >
    )
}


export async function getStaticProps({ locale }) {
    let { default: data } = await import(`data/projects.json`)
    let { default: info } = await import(`data/info.json`)
    return { props: { data, info, locale }, revalidate: 60 * 60 * 24 * 30, }
} 
