
import Link from 'next/link';
export default function Skills(props) {
    return (

        <div className='box col'>
            <div className='box grid'>
                {props.skills.all.map((Skill, i) => {
                    return (
                        <div className={`box col w-300 ui m center-text space ${Skill.pro}`} key={i}>
                            <b>{Skill.title}</b>
                            <p>{Skill.description}</p>
                            <ul >
                                {Skill?.feature?.map(f => {
                                    return <li key={f}>{f}</li>
                                })}
                            </ul>
                            {/* <Link href={`/${props.data.lang}/contact`}>
                            <a className='btn ui'>{props.data.text.ConnectUs}</a>
                        </Link> */}
                        </div>
                    )
                })}
            </div>
            {/* map ones */}
            <div className='box grid'>
                {props.skills.ones.map((One, i) => (<i key={i} className='task'>{One}</i>))}
            </div>
        </div>
    )
}
