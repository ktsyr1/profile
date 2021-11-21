const withPWA = require("next-pwa")

const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        scope: '/',
        runtimeCaching,
        sw: 'sw.js'
    },
    reactStrictMode: true,
})