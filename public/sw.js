const CACHE_NAME = 'twiga-harvest-images-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(caches.open(CACHE_NAME))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('twiga-harvest-images-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ).then(() => self.clients.claim()),
  )
})

function isImageRequest(request, url) {
  if (request.destination === 'image') return true
  if (url.origin.includes('images.unsplash.com')) return true
  if (url.pathname.startsWith('/images/') || url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.webp')) {
    return true
  }
  return false
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (!isImageRequest(request, url)) return

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request)
      if (cached) return cached

      try {
        const response = await fetch(request)
        if (response && response.ok) {
          cache.put(request, response.clone())
        }
        return response
      } catch (error) {
        const fallback = await cache.match(request)
        if (fallback) return fallback
        throw error
      }
    }),
  )
})
