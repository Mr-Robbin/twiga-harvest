const icons = {
  grain: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2c2.5 3.2 4 6.6 4 10.2 0 3.3-1.5 5.8-4 7.8-2.5-2-4-4.5-4-7.8C8 8.6 9.5 5.2 12 2Zm0 4.2c-1.1 1.6-1.8 3.4-1.8 5.5 0 1.8.7 3.2 1.8 4.4 1.1-1.2 1.8-2.6 1.8-4.4 0-2.1-.7-3.9-1.8-5.5Z" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M9.4 11.2 7 8.8 2.8 13l2.4 2.4 4.2-4.2Zm11.8.6L17 7.6l-2.5 2.5 4.2 4.2 2.5-2.5ZM8.2 15.8l2.1 2.1 1.5-1.5-2.1-2.1-1.5 1.5Zm3.5-3.5 2.1 2.1 4.5-4.5-2.1-2.1-4.5 4.5Zm-1.2 4.8 2.2 2.2c.4.4 1 .4 1.4 0l.7-.7-2.2-2.2-.7.7c-.4.4-1 .4-1.4 0Z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M5 19c6-.4 11.4-5.8 12-12-6 .6-11.6 6-12 12Zm2.1-2.1C8.4 12 12 8.4 16.9 7.1 15.6 12 12 15.6 7.1 16.9Z" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M3 7h11v8H3V7Zm12 2h3.2L21 12.2V15h-6V9ZM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.2v4.6c0 3.8-2.5 7.3-6 8.7-3.5-1.4-6-4.9-6-8.7V6.4l6-2.2Z" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  ),
  basket: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M4 8h16l-1.2 11H5.2L4 8Zm2.2-3h11.6l.7 2H5.5l.7-2ZM7 11v6h2v-6H7Zm4 0v6h2v-6h-2Zm4 0v6h2v-6h-2Z" />
    </svg>
  ),
  wheat: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2c1.8 2 2.8 4 2.8 6.2S13.8 12 12 14c-1.8-2-2.8-3.6-2.8-5.8S10.2 4 12 2Zm0 8c1.5 1.7 2.3 3.3 2.3 5.2S13.5 18.6 12 20.5c-1.5-1.9-2.3-3.4-2.3-5.3S10.5 11.7 12 10Zm-1 10h2v2h-2v-2Z" />
    </svg>
  ),
  seed: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 3c4.5 2.8 7 7 7 11.5S16 22 12 22 5 19 5 14.5 7.5 5.8 12 3Zm0 3.2C9.2 8.2 7.5 11 7.5 14.2c0 2.8 1.7 4.8 4.5 4.8s4.5-2 4.5-4.8c0-3.2-1.7-6-4.5-8Z" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm2.8 4.2-1.4 4.8-4.8 1.4 1.4-4.8 4.8-1.4Z" />
    </svg>
  ),
}

export default function Icon({ name }) {
  return icons[name] || icons.leaf
}
