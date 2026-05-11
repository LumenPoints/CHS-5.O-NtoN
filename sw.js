// Minimal service worker — installs the itinerary for offline use on phones
const CACHE = "n2n-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./Nature to Neon.html",
  "./styles.css",
  "./layout.css",
  "./cover.jsx",
  "./days.jsx",
  "./sections.jsx",
  "./app.jsx",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match("./Nature to Neon.html")))
  );
});
