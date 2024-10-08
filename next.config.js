
const runtimeCaching = require('next-pwa/cache')
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});
module.exports = withPWA({
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'ar'
    }
})
