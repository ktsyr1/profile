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
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'ar'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'ar',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        domains: [
            {
                domain: '/',
                defaultLocale: 'ar',
            }
        ],
    }
})