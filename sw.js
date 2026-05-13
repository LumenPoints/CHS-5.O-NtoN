// Service worker — network-first so deploys always show up.
// Falls back to cache only when offline.
const CACHE = "n2n-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./Nature to Neon.html",
  "./photos/bryce-hike.jpg",
  "./photos/zion-sign.jpg",
  "./photos/zion-ebike.jpg",
  "./photos/zion-petroglyph.jpg",
  "./photos/vegas-paris.jpg",
  "./photos/vegas-sphere.jpg",
  "./photos/vegas-helicopter.jpg",
  "./photos/vegas-strip.jpg",
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
  // Nuke old caches so a deploy actually replaces stale files.
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Network-first: always try fresh, fall back to cache on failure.
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
  );
});
