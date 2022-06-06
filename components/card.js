
import Link from "next/link"
import { useRouter } from "next/router"
/**
 * 
 * @param {title[lang] , image , des , year ,url[] , list[lang]}
 * @returns 
 */
export default function Card(props) {
    let route = useRouter()
    let { query } = route
    let lang = query.lang
    let { icon, title, year, url } = props
    return (

        <div className="box col ui w-300" >
            {/* title */}
            <div className='box col start space  w-full'>

            </div>
            {/* des */}
            {/* footer */}
        </div>
    )
}
