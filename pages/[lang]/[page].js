
import Contact from 'components/page/contact';
import Home from 'components/page/home';
import Project from 'components/page/project';
import Skills from 'components/page/skill';
export default function Page(props) {
    let { query, data } = props
    if (query.page === 'contact') {
        return (
            <section>
                <Contact data={data} />
            </section>
        )
    }
}


Page.getInitialProps = async ({ query }) => {
    let res = await import(`data/lang/${query.lang}.json`)
    return { data: res, query }
}