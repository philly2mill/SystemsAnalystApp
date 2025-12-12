self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    event.waitUntil(
      caches.open("app-cache").then((cache) => cache.addAll(["/", "/index.html"]))
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  });
  