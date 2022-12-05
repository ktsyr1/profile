
import Link from "next/link"
import { useRouter } from "next/router"
import info from 'data/info.json'
import LinkButton from "./linkButton"
import { useState } from "react"
export default function Lang(props) {
    let route = useRouter()
    let { query } = route

    let Default = route.locale

    let To
    if (Default) To = Default === 'en' ? "ar" : "en"
    else To = 'en'
    let path = route.asPath.slice(4)

    let data = info[Default]
    return (
        <nav className="box col center" >

            <div className="box space row w-full">

                <Link href={'/'} locale={Default}>
                    <a className=" box center" >
                        <img id='logo' src='/images/logo.png' alt={`logo ${data?.fullname}`} />
                    </a>
                </Link >
                <h1 style={{ textAlign: 'center' }} > {data?.fullname}</h1>

                <Link href={'/'} locale={To}>
                    <a className="lang box center-full" > <img src={`/images/${To}.png`} alt={` ${To} lang`} /></a>
                </Link >

            </div>
            <div className='box '>
                <LinkButton type={path === "project" ? 'button' : 'link'} href={`/project`} locale={Default} class='btn m' >
                    {data?.project}
                </LinkButton>
                <LinkButton type={path === "skill" ? 'button' : 'link'} href={`/skill`} locale={Default} class='btn m' >
                    {data?.skill}
                </LinkButton>
                <LinkButton type={path === "contact" ? 'button' : 'link'} href={`/contact`} locale={Default} class='btn m' >
                    {data?.contact}
                </LinkButton>
            </div>
        </nav>
    )
}
