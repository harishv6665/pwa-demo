const cacheName = 'shell-content';
const filesToCache = [
    '/images/pwa.png',
    '/images/pwa-engaging.png',
    '/images/pwa-fast.png',
    '/images/pwa-reliable.png',
    '/images/icons/pwa-192.192.png',
    '/images/icons/pwa-512.512.png',

    '/css/styles.css',

    '/index.html',
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
