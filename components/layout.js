
import Nav from 'components/nav'
import info from 'data/info.json'
import { useRouter } from 'next/router'
import { GoMarkGithub } from "react-icons/go";
export default function LayoutHome({ children }, { props }) {
    let route = useRouter()
    let lang = route.locale

    let data = info[lang]
    let dir = data?.direction
    return (
        <>
            <Nav />
            <section>{children}</section>
            <footer dir={dir} style={{ display: 'flex', justifyContent: 'flex-end', margin: "10px" }} >
                <a href="https://github.com/ktsyr1/profile" className="box ui center center-col ">
                    <p className='p'>{data.OSP}</p>
                    <GoMarkGithub />
                </a>
            </footer>
        </>
    )
}