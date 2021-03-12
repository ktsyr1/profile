// importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon.svg',
                '/res/css/style.min.css', 
                '/res/css/rest.css',
                '/res/js/min.js',

            ]);
        })
    );
}); self.addEventListener('fetch', function (event) {
    // console.log(event.request.url);
}); self.addEventListener('fetch', function (event) {
    // console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});