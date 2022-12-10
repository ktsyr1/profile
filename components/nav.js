
import Link from "next/link"
import { useRouter } from "next/router"
import info from 'data/info.json'
import LinkButton from "./linkButton"
import { useState } from "react"
export default function Lang(props) {
    let route = useRouter()
    let { query } = route

    let lang = route.locale

    let To = lang === 'en' ? "ar" : "en"

    let data = info[lang]
    let dir = info[lang]?.direction
    return (
        <nav className="box col center" >

            <div className="box space row w-full">

                <Link href={'/'} locale={lang} className=" box center" >
                    <img id='logo' src='/images/logo.png' alt={`logo ${data?.fullname}`} />
                </Link >
                <h1 style={{ textAlign: 'center' }} > {data?.fullname}</h1>

                <Link href={'/'} locale={To} className="lang box center-full" >
                    <img src={`/images/${To}.png`} alt={` ${To} lang`} />
                </Link >

            </div>
            <div className='box '
                dir={dir}
            >
                <LinkButton href={`/project`} className='btn m' >
                    {data?.project}
                </LinkButton>
                <LinkButton href={`/skill`} className='btn m' >
                    {data?.skill}
                </LinkButton>
                <LinkButton href={`/contact`} className='btn m' >
                    {data?.contact}
                </LinkButton>
            </div>
        </nav>
    )
}
