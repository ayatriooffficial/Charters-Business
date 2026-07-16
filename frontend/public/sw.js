// Self-decommissioning service worker.
// If a browser still has an old service worker registered, it will fetch this
// file on its next update check. This script immediately takes over, clears
// all caches, unregisters itself, and reloads every open tab so users see
// the latest content without any manual intervention.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then((clients) => {
        clients.forEach((client) => {
          if (client.url && 'navigate' in client) {
            client.navigate(client.url);
          }
        });
      })
  );
});
