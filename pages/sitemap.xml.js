import React from 'react'
class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        res.setHeader('Content-Type', 'text/xml')
        res.write(`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://ktsyr1.netlify.app</loc>
            </url>  
            <url>
                <loc>https://ktsyr1.netlify.app/project</loc>
            </url>
            <url>
                <loc>https://ktsyr1.netlify.app/contact</loc>
            </url>
            <url>
                <loc>https://ktsyr1.netlify.app/skill</loc>
            </url>  
            <url>
                <loc>https://ktsyr1.netlify.app/en</loc>
            </url>  
            <url>
                <loc>https://ktsyr1.netlify.app/en/project</loc>
            </url>
            <url>
                <loc>https://ktsyr1.netlify.app/en/contact</loc>
            </url>
            <url>
                <loc>https://ktsyr1.netlify.app/en/skill</loc>
            </url>  
        </urlset>`)
        res.end()
    }
}
export default Sitemap