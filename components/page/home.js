
import { useRouter } from "next/router" 
import LinkButton from "components/linkButton"
export default function Home(props) {
    const router = useRouter()
    const { query } = router 
    if (query != undefined) {
        let { fullname, text, lang, direction } = props.data
        let { description, project, skill, contact } = text

        let path = router.asPath.slice(4)

        return (
            <>
                <section style={{ direction: direction }} className='m-a box col page ui center'>
                    <div className='box col center'>
                        <img id='logo' src='/images/logo.png' alt={`logo ${fullname}`} />
                        <div className='content'>
                            <h1> {fullname}</h1>
                            <b>{description}</b>
                        </div>
                    </div> 
                </section>
            </>
        )
    }
}