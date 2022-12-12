import info from 'data/info.json'
import { useRouter } from 'next/router'
import { FaFacebook } from 'react-icons/fa';
import { BsTelegram, BsMessenger, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
export default function Contact({ lang }) {
    let data = info[lang]
    let dir = data?.direction
    return (
        <div className="box grid center-col" dir={dir}>
            <div className="links ">
                <h1 >{data.contact}</h1>
                <div style={{
                    height: '110px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <a href="https://wa.me/96170723177" dir={dir}>
                        <BsWhatsapp />
                        <p>00961-70723177</p>
                    </a>
                    <a href="mailto:ktsyr1@gmail.com" dir={dir}>
                        <SiGmail />
                        <p>ktsyr1@gmail.com</p>
                    </a>
                </div>
                <div className="box row p m list">
                    <a href="https://t.me/ktsyr1" ><BsTelegram /></a>
                    <a href="https://www.facebook.com/ktsyr1"><FaFacebook /></a>
                    <a href="https://m.me/ktsyr1"><BsMessenger /></a>
                    <a href="https://github.com/ktsyr1">
                        <BsGithub />
                    </a>
                </div>
            </div>
            <form className='box col space ui w-300' >
                <b>{data.sendMsg}</b>
                <input type="text" name="subject" />
                <input type='mail' name="mail" placeholder="" />
                <textarea name="message"></textarea>
                <button className="ui btn" onClick={e => {
                    e.preventDefault()
                    e.target.innerText = "هذا الفورم غير مفعل "
                }} >{data.send}</button>
            </form>

        </div>
    )
}
export async function getStaticProps(ctx) {

    return { props: { lang: ctx.locale }, revalidate: 60 * 60 * 24 * 30, }
}