import { Link } from 'react-router-dom'
import CachedImage from '../components/CachedImage'
import { works } from '../data/business'

export default function Gallery() {
  return (
    <>
      <section
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="container">
          <h1>Gallery & Work</h1>
          <p>Harvest, markets, and supply moments from our network</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="sec-title">
              <h2>Selected Work</h2>
              <h3>Where Twiga Harvest supports food & farm partners</h3>
            </div>
            <p>
              A look at the kinds of supply work we do — from cereal wholesale to community food
              access across Arusha.
            </p>
            <Link className="btn btn-ghost" to="/contact">
              Partner With Us
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
    </>
  )
}
