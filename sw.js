const cacheName = 'pwa v1.0';
const filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/images/pwa.png',
    '/images/pwa-engaging.png',
    '/images/pwa-fast.png',

    '/images/pwa-reliable.png'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
