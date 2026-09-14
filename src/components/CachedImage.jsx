import { useEffect, useState } from 'react'

/**
 * Renders images with browser/service-worker cache awareness.
 * Once loaded, marks as ready to avoid flash on revisit.
 */
export default function CachedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  ...props
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true
    setReady(false)

    const img = new Image()
    img.decoding = 'async'
    img.src = src

    const markReady = () => {
      if (active) setReady(true)
    }

    if (img.complete) {
      markReady()
    } else {
      img.onload = markReady
      img.onerror = markReady
    }

    return () => {
      active = false
    }
  }, [src])

  return (
    <img
      src={src}
      alt={alt}
      className={`cached-image ${ready ? 'is-ready' : ''} ${className}`}
      loading={loading}
      decoding="async"
      {...props}
    />
  )
}
