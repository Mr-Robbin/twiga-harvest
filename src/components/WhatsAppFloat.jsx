import { business } from '../data/business'

const defaultMessage = encodeURIComponent(
  'Hello Twiga Harvest, I would like to enquire about your products.',
)

export default function WhatsAppFloat() {
  const href = `https://wa.me/${business.whatsapp}?text=${defaultMessage}`

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Twiga Harvest on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-float-pulse" aria-hidden="true" />
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3C9.4 3 4 8.4 4 15c0 2.1.55 4.12 1.6 5.92L4 29l8.28-1.56A11.94 11.94 0 0 0 16.01 27C22.63 27 28 21.6 28 15S22.63 3 16.01 3zm0 21.9c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-4.91.93.95-4.78-.25-.4A9.86 9.86 0 0 1 6.1 15c0-5.46 4.45-9.9 9.91-9.9S25.92 9.54 25.92 15 21.47 24.9 16.01 24.9zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"
        />
      </svg>
      <span className="whatsapp-float-label">WhatsApp</span>
    </a>
  )
}
