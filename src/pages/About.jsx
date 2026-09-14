import { Link } from 'react-router-dom'
import CachedImage from '../components/CachedImage'
import { business } from '../data/business'

export default function About() {
  return (
    <>
      <section
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="container">
          <h1>About Twiga Harvest</h1>
          <p>Agribusiness serving Arusha with food, cereals & farm materials</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-media">
            <div className="tall">
              <CachedImage
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
                alt="Golden cereal grains"
                loading="eager"
              />
            </div>
            <div className="stack">
              <CachedImage
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80"
                alt="Farm and agricultural landscape"
                loading="eager"
              />
              <div className="experience-card">
                <strong>Trust</strong>
                <span>Built on honest trade</span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <div className="sec-title">
              <h2>Our Story</h2>
              <h3>Built on trust, harvest, and Tanzanian enterprise</h3>
            </div>
            <p>
              Twiga Harvest is an Arusha-based agribusiness focused on food retail, wholesale
              cereals, agricultural materials, and curated tour experiences. From our place of
              business in Moshono, Arusha CBD, we support traders, shops, and farm partners with
              dependable supply.
            </p>
            <p>
              “Twiga” means giraffe in Kiswahili — a symbol of vision and presence across the
              landscape. Harvest is our promise: quality food and agri supply rooted in local
              reality.
            </p>
            <ul className="about-list">
              <li>{business.poBox}, Arusha</li>
              <li>{business.address.full}</li>
              <li>Email: {business.email}</li>
              <li>Phone: {business.phone}</li>
            </ul>
            <Link className="btn" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="stats">
            <div className="stat">
              <strong>01</strong>
              <span>Main food retail activity</span>
            </div>
            <div className="stat">
              <strong>04</strong>
              <span>Core business activities</span>
            </div>
            <div className="stat">
              <strong>TZ</strong>
              <span>United Republic of Tanzania</span>
            </div>
            <div className="stat">
              <strong>Local</strong>
              <span>Serving Arusha partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>Business Activities</h2>
              <h3>What Twiga Harvest delivers</h3>
            </div>
            <p>
              Our core food and agricultural activities serving partners across Arusha.
            </p>
            <span />
          </div>

          <div className="activity-grid">
            {business.activities.map((item) => (
              <article className="activity-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
