
export default function Project({ data }) {
    console.log(data);
    return (
        <div className='box grid  '>
            {/* {data?.map((project, i) => {
                let { url, title, description, year } = project
                return (
                    <div className=' box col w-300 ui m center-text space' key={i}>
                        <h3>
                            <img src={url + '/favicon.ico'} />
                            {title}</h3>

                        <span>{year}</span>
                        <p>{description}</p>
                        <a href={url} className='btn ui'>{props.data.oglink}</a>
                    </div>
                )
            })} */}
        </div>
    )
}