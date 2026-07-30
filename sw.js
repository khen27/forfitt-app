/* Minimal service worker so Chromium treats the app as installable.
   No offline caching yet — fetch always goes to the network. */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Network-only; presence of a SW is enough for the install prompt.
});
