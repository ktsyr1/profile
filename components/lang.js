
import { useRouter } from "next/router"
import translate from '../data/data.json'
import Link from 'next/link'
import LinkButton from "./linkButton"
export default function Lang(props) {
    const { query } = useRouter()
    const lang = query.lang  
    if (query != undefined) { 
        return (
            < >
                <nav  >
                    <div className='lang'>
                        <LinkButton type={lang === "ar" ? 'button' : 'link'} href='/ar'>
                            <img src='/images/ar.png' alt='arabic lang' />
                        </LinkButton>
                        <LinkButton type={lang === 'en' ? 'button' : 'link'} href='/en'>
                            <img src='/images/en.png' alt='en lang' />
                        </LinkButton>

                    </div>
                </nav>
            </>
        )
    }
}
