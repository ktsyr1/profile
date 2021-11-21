
import Router, { useRouter } from 'next/router'
import Homes from 'components/page/home';
import data from 'data/lang/ar.json'
export default function Home(props) {
    let a
    if (typeof window !== 'undefined') {
        a = document.defaultView.clientInformation.languages
        a = a.filter(i => i.length === 2)
        a = a[a.length - 1]
        // Router.push({ pathname: `/${a}` })
    }
    console.log(data);
    return (
        <section>
            <Homes data={data} /> 
        </section>
    )
}

