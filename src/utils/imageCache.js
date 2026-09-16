import { products, works, heroSlides } from '../data/business'

export const siteImages = [
  '/images/logo.png',
  '/favicon.png',
  '/assets/images/rice.webp',
  '/assets/images/beans.webp',
  '/assets/images/maize.webp',
  '/assets/images/maize2.webp',
  '/assets/images/maizesup.webp',
  '/assets/images/mchele.webp',
  '/assets/images/godown.webp',
  '/assets/images/supply1.webp',
  '/assets/images/supply2.webp',
  '/assets/images/supply3.webp',
  '/assets/images/supply4.webp',
  ...heroSlides.map((item) => item.image),
  ...products.map((item) => item.image),
  ...works.map((item) => item.image),
]

const CACHE_NAME = 'twiga-harvest-images-v2'
const memoryCache = new Map()

function uniqueUrls(urls) {
  return [...new Set(urls.filter(Boolean))]
}

function preloadViaImage(url) {
  if (memoryCache.has(url)) return memoryCache.get(url)

  const promise = new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(url)
    img.onerror = () => resolve(url)
    img.src = url
  })

  memoryCache.set(url, promise)
  return promise
}

async function storeInCache(url) {
  if (!('caches' in window)) return

  try {
    const cache = await caches.open(CACHE_NAME)
    const match = await cache.match(url)
    if (match) return

    const response = await fetch(url, { mode: 'cors', credentials: 'omit' })
    if (response.ok) {
      await cache.put(url, response.clone())
    }
  } catch {
    // Cross-origin or offline — Image preload still warms HTTP cache.
  }
}

export async function warmImageCache(urls = siteImages) {
  const list = uniqueUrls(urls)

  // Hero / logo first for faster first paint
  const priority = list.slice(0, 4)
  const rest = list.slice(4)

  await Promise.all(priority.map((url) => preloadViaImage(url).then(() => storeInCache(url))))

  const runRest = () => {
    rest.forEach((url) => {
      preloadViaImage(url).then(() => storeInCache(url))
    })
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(runRest, { timeout: 2500 })
  } else {
    setTimeout(runRest, 400)
  }
}

export function registerImageServiceWorker() {
  if (!('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Ignore registration errors in local/dev edge cases.
    })
  })
}
