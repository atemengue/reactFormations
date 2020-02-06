/*service worker code */
const filesTocache = [
  "/",
  "styles/main.css",
  "assets/images/xd1.png",
  "assets/images/xd2.png",
  "assets/images/xd3.png",
  "assets/images/wireframes1.jpg",
  "assets/images/wireframes2.jpg",
  "assets/images/logo.png",
  "assets/images/iphone.png",
  "assets/images/iphone1.png",
  "assets/images/code.png",
  "pages/404.html",
  "pages/offiline.html"
];

const staticCacheName = "cacheV2";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesTocache);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service worker activating...");

  const cacheWhiteList = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log(cacheWhiteList, "cache list");
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  console.log("Service worker Fetching...", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          if (response.status === 404) {
            return caches.match("pages/404.html");
          }
          return caches.open(staticCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
      .catch(error => {
        return caches.match("pages/offline.html");
      })
  );
});
