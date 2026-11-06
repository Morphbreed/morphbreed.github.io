// Die alte Gatsby-Seite hat unter /sw.js einen Offline-Service-Worker installiert.
// Dieser Ersatz löscht dessen Caches und meldet sich selbst ab, damit Browser,
// die die alte Seite kennen, die aktuelle Seite (und die Apps darunter) laden.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Caches gelten für die ganze Domain – nur die der alten Seite (Workbox) löschen,
    // nicht die der Apps unter /<app>/.
    const keys = await caches.keys();
    const old = keys.filter((key) => key.startsWith('workbox') || key.includes('gatsby'));
    await Promise.all(old.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
