
import Contact from 'components/page/contact';
import Home from 'components/page/home';
import Project from 'components/page/project';
import Skills from 'components/page/skill';
export default function Page(props) {
    let { query, data } = props
    if (query.page === 'project') {
        return (
            <section>
                <Home data={data} />
                <Project data={data.text} project={data.project} />
            </section>
        )
    } if (query.page === 'skill') {
        return (
            <section>
                <Home data={data} />
                <Skills data={data} skills={data.skills} />
            </section>
        )
    } if (query.page === 'contact') {
        return (
            <section>
                <Home data={data} />
                <Contact data={data} />
            </section>
        )
    }
}


Page.getInitialProps = async ({ query }) => {
    let res = await import(`data/lang/${query.lang}.json`)
    return { data: res, query }
}