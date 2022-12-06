
import Nav from 'components/nav'

export default function LayoutHome({ children }, { props }) {

    return (
        <>
            <Nav />
            <section>{children}</section>
            <footer>
                <a href="https://github.com/ktsyr1/profile" className="box ui center center-col m-a">
                    open source projects
                    <img src='/icon/github.svg' alt='icon github' width={30} />
                </a>
            </footer>
        </>
    )
}