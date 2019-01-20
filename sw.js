self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('rooster-v1').then(function(cache) {
     return cache.addAll([
       '/rooster/',
       '/rooster/index.html',
       '/rooster/index.js',
       '/rooster/style.css'
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
