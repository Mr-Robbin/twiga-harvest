import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { services, business } from '../data/business'

export default function Services() {
  return (
    <>
      <section
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="container">
          <h1>Our Services</h1>
          <p>Food products, cereals, agri materials & harvest experiences</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>What We Provide</h2>
              <h3>Practical supply solutions for Arusha partners</h3>
            </div>
            <p>
              Whether you need retail food stock, wholesale cereals, animal feed, or guided tour
              support, Twiga Harvest is ready to help.
            </p>
            <Link className="btn btn-ghost" to="/contact">
              Get Quote
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="icon">
                  <Icon name={service.icon} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link className="more" to="/contact">
                  Request supply →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="provide">
        <div className="provide-text">
          <div className="sec-title">
            <h3>Why partners choose Twiga Harvest</h3>
            <p>
              Clear communication, local presence in Moshono, and a registered business focused on
              food and agricultural materials.
            </p>
          </div>
          <div className="provide-points">
            <ul>
              <li>Local Arusha presence</li>
              <li>Main focus on food retail</li>
              <li>Cereal wholesale capacity</li>
              <li>Farm materials & feed</li>
              <li>Tour support available</li>
            </ul>
            <div className="provide-badge">
              <strong>Talk to us</strong>
              <p>
                Call {business.phone} or email {business.email} for pricing and availability.
              </p>
            </div>
          </div>
        </div>
        <div
          className="provide-media"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,36,25,.35), rgba(15,36,25,.45)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="label">Quality stock. Clear terms.</div>
        </div>
      </section>
    </>
  )
}
