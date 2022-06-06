
import Link from "next/link"
import { useRouter } from "next/router"
import info from 'data/info.json'
import LinkButton from "./linkButton"
export default function Lang(props) {
    let route = useRouter()
    let { query } = route
    function deURL() {
        let to, URL
        let de = query.lang
        if (de) to = de === 'en' ? "ar" : "en"
        else to = 'en'
        URL = route.asPath.replace(`/${de}`, `/${to}`)
        return { to, URL, de }
    }
    let { to, URL, de } = deURL()
    let path = route.asPath.slice(4)

    let data = info[de]
    return (
        <nav className="box col center" >

            <div className="box space row w-full">

                <Link href={'/'}>
                    <a className=" box center" >
                        <img id='logo' src='/images/logo.png' alt={`logo ${data?.fullname}`} />
                    </a>
                </Link >
                <h1> {data?.fullname}</h1>

                <Link href={URL}>
                    <a className="lang box center-full" > <img src={`/images/${to}.png`} alt={` ${to} lang`} /></a>
                </Link >

            </div>
            <div className='box '>
                <LinkButton type={path === "project" ? 'button' : 'link'} href={`/${de}/project`} class='btn m' >
                    {data?.project}
                </LinkButton>
                <LinkButton type={path === "skill" ? 'button' : 'link'} href={`/${de}/skill`} class='btn m' >
                    {data?.skill}
                </LinkButton>
                <LinkButton type={path === "contact" ? 'button' : 'link'} href={`/${de}/contact`} class='btn m' >
                    {data?.contact}
                </LinkButton>
            </div>
        </nav>
    )
}
