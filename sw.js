self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('rooster-v1').then(function(cache) {
     return cache.addAll([
       '/pwa-examples/a2hs/',
       '/pwa-examples/a2hs/index.html',
       '/pwa-examples/a2hs/index.js',
       '/pwa-examples/a2hs/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
