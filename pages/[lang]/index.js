
import Homes from '../../components/home'
import { useRouter } from "next/router" 

export default function Home() {
    const { query } = useRouter()
    const lang = query.lang

    if (query != undefined) {
        return (
            <Homes lang={lang} />
        )
    }
}
