
import Homes from '../../components/page/home'
import { useRouter } from "next/router"

export default function Home(props) {
    const { query } = useRouter()
    if (query != undefined) return <Homes data={props.data} />
}

Home.getInitialProps = async ({ query }) => {
    let res = await import(`data/info.json`)
    let data = res[query.lang]
    return { data }
}