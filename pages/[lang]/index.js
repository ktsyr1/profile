
import Homes from '../../components/page/home'
import { useRouter } from "next/router"

export default function Home(props) {
    const { query } = useRouter()
    const lang = query.lang
    if (query != undefined) {
        return (
            <>
                <Homes data={props.data} />
            </>
        )
    }
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`../../data/lang/${query.lang}.json`)
    return { data: res }
}