
import { useRouter } from "next/router"
import LinkButton from "components/linkButton"
export default function Home(props) {
    const router = useRouter()
    const { query } = router
    if (query != undefined) {
        let { fullname, direction, description, about } = props.data

        return (
            <>
                <section style={{ direction: direction }} className='m-a box col page ui center'>
                    <div className='box col center'>
                        <img id='logo' src='/images/logo.png' alt={`logo ${fullname}`} />
                        <div className='content box col center'>
                            <h1> {fullname}</h1>
                            <b>{description}</b>
                            <p className="task" style={{ textAlgin: 'start' }}>{about}</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}