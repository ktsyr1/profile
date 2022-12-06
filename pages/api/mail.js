const send = require('gmail-send')({  
})

export default async function Search(req, res) {
    if (req.method == 'POST') {
        let { subject, text, mail } = req.body
        let options = {
            subject,
            html: `<a href="mailto:${mail}">${mail}</a>   <p>${text}</p>`
        }
        await send(options)
            .then(({ result, full }) => res.status(200).json(result))
            .catch((error) => res.status(400).json({ msg: error.message }))


    } else {
        res.setHeader("Allow", ["GET", "POST", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
