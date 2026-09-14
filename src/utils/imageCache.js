import { products, works, heroSlides } from '../data/business'

export const siteImages = [
  '/images/logo.png',
  '/favicon.png',
  ...heroSlides.map((item) => item.image),
  ...products.map((item) => item.image),
  ...works.map((item) => item.image),
  'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
]

const CACHE_NAME = 'twiga-harvest-images-v1'
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
