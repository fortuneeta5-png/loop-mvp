// Service worker minimal — juste assez pour rendre la PWA installable.
// Pas de cache agressif : on laisse le réseau gérer le contenu pour éviter les versions périmées,
// comme pour EtaChop.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
