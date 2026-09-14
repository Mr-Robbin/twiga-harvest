import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import AnimatedStats from '../components/AnimatedStats'
import CachedImage from '../components/CachedImage'
import Icon from '../components/Icon'
import {
  business,
  stats,
  products,
  services,
  works,
  testimonials,
} from '../data/business'

export default function Home() {
  return (
    <>
      <Hero />

      <AnimatedStats stats={stats} />

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>What We Supply</h2>
              <h3>Rice, beans & everyday harvest staples</h3>
            </div>
            <p>
              Stock your shop or home with quality rice, beans, maize, flour, cooking oil, and
              more — available for retail and wholesale.
            </p>
            <Link className="btn btn-ghost" to="/contact">
              Order Now
            </Link>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-media">
                  <CachedImage src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-body">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ paddingTop: 0 }}>
        <div className="container about-grid">
          <div className="about-media">
            <div className="tall">
              <CachedImage
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                alt="Quality rice supply"
                loading="eager"
              />
            </div>
            <div className="stack">
              <CachedImage
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
                alt="Fresh beans and produce"
                loading="eager"
              />
              <div className="experience-card">
                <strong>Rice</strong>
                <span>Beans · Maize · More</span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <div className="sec-title">
              <h2>Welcome to Twiga Harvest</h2>
              <h3>Your source for rice, beans & quality food stock</h3>
            </div>
            <p>{business.description}</p>
            <ul className="about-list">
              <li>Rice, beans, maize and other staples</li>
              <li>Food products for shops and households</li>
              <li>Wholesale mixed cereals</li>
              <li>Agricultural materials and animal feed</li>
              <li>Trusted local supply partnerships</li>
            </ul>
            <div className="about-call">
              Call with any question:{' '}
              <a href={`tel:${business.phoneTel}`}>{business.phone}</a> or{' '}
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>Services We Offer</h2>
              <h3>High quality supply for food & agri partners</h3>
            </div>
            <p>
              From retail food products to cereal wholesale and farm materials, Twiga Harvest
              supports traders, shops, and growers across Arusha.
            </p>
            <Link className="btn btn-ghost" to="/services">
              All Services
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
                <Link className="more" to="/services">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="provide">
        <div className="provide-text">
          <div className="sec-title">
            <h3>Twiga Harvest provides dependable food & agri supply for sustainable progress</h3>
            <p>
              We combine local knowledge in Arusha with careful sourcing so customers get
              consistent quality, fair prices, and responsive service.
            </p>
          </div>
          <div className="provide-points">
            <ul>
              <li>Reliable stock</li>
              <li>Local network</li>
              <li>Fair pricing</li>
              <li>Fast response</li>
              <li>Quality focus</li>
            </ul>
            <div className="provide-badge">
              <strong>Staples in stock</strong>
              <p>
                Rice, beans, maize, flour, cooking oil, and agri materials — ready for shops,
                homes, and wholesale partners.
              </p>
            </div>
          </div>
        </div>
        <div className="provide-media">
          <div className="label">Fresh harvest. Trusted trade.</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>Our Work</h2>
              <h3>Supply stories from the Twiga Harvest network</h3>
            </div>
            <p>
              Real partnerships around cereals, food retail, and agricultural materials that keep
              shelves and farms moving.
            </p>
            <Link className="btn btn-ghost" to="/gallery">
              All Works
            </Link>
          </div>

          <div className="works-grid">
            {works.map((work) => (
              <article className="work-card" key={work.title}>
                <CachedImage src={work.image} alt={work.title} />
                <div className="overlay">
                  <div className="tags">{work.tags.join(' · ')}</div>
                  <h4>{work.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h3>Looking for a trusted food & agri supplier?</h3>
          <p>Stop worrying about stock gaps. Let Twiga Harvest support your next order.</p>
          <Link className="btn" to="/contact">
            Request A Quote
          </Link>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>Testimonials</h2>
              <h3>What partners say about Twiga Harvest</h3>
            </div>
            <p>
              Traders, farmers, and shop owners choose Twiga Harvest for quality supply and clear
              communication.
            </p>
            <span />
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
