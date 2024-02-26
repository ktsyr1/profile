
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

            <div className="box space row w-full center" dir={dir} >

                <Link href={'/'} locale={lang} className=" box center" style={{ fontSize: 'small', textAlign: 'start' }}>
                    <img id='logo' src='/images/logo.png' alt={`logo ${data?.fullname}`} />
                    <h1 style={{ textAlign: 'center' }} > {data?.fullname}</h1>
                </Link >
                <div className="box center-full grid">
                    <Link href={'/'} locale={To} className="lang box center-full" >
                        <img src={`/images/${To}.png`} alt={` ${To} lang`} />
                    </Link >

                </div>
            </div>
 
        </nav >
    )
}
