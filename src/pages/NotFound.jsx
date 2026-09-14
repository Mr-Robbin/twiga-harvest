import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 80px)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
        <div className="sec-title" style={{ marginBottom: '1.5rem' }}>
          <h2>Page not found</h2>
          <h3 style={{ maxWidth: 'none', marginInline: 'auto' }}>This page does not exist</h3>
        </div>
        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
          The link may be broken or the page may have moved. Go back to the homepage or contact us
          for help.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn" to="/">
            Back Home
          </Link>
          <Link className="btn btn-ghost" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
