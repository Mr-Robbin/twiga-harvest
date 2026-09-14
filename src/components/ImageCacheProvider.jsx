import { useEffect } from 'react'
import { registerImageServiceWorker, warmImageCache } from '../utils/imageCache'

export default function ImageCacheProvider({ children }) {
  useEffect(() => {
    registerImageServiceWorker()
    warmImageCache()
  }, [])

  return children
}
