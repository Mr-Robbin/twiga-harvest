import { Link } from 'react-router-dom'
import { business } from '../data/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo" style={{ marginBottom: '1rem' }}>
            <img src="/images/logo.png" alt="Twiga Harvest" />
            <div className="logo-text">
              <strong>Twiga Harvest</strong>
              <span>Arusha · Tanzania</span>
            </div>
          </Link>
          <p>{business.description}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Activities</h4>
          <div className="footer-links">
            {business.activities.map((item) => (
              <span key={item.code}>{item.title}</span>
            ))}
          </div>
        </div>

        <div>
          <h4>Visit & Call</h4>
          <div className="footer-links">
            <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>{business.poBox}</span>
            <span>{business.address.full}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {year} {business.name}. All rights reserved.
        </span>
        <span>Arusha, Tanzania</span>
      </div>
    </footer>
  )
}
