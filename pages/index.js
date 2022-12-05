
import Homes from 'components/page/home'
import { useRouter } from "next/router"

export default function Home(props) {
    return <Homes data={props?.data} />
}

export async function getStaticProps(ctx) {
    let res = await import(`data/info.json`)
    let data = res[ctx.locale || 'ar']
    return { props: { data }, revalidate: 60 * 60 * 24 * 30, }
}