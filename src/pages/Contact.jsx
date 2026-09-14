import { useState } from 'react'
import { business } from '../data/business'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const phone = data.get('phone')
    const service = data.get('service')
    const message = data.get('message')

    const subject = encodeURIComponent(`Twiga Harvest enquiry — ${service}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
    )

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <>
      <section
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p>Request a quote or ask about food, cereals & agri supply</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Reach Twiga Harvest in Arusha for retail food products, cereal wholesale,
              agricultural materials, or tour arrangements.
            </p>
            <ul className="info-list">
              <li>
                <small>Phone</small>
                <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              </li>
              <li>
                <small>Email</small>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <small>Address</small>
                <strong>{business.address.full}</strong>
              </li>
              <li>
                <small>Postal</small>
                <strong>{business.poBox}</strong>
              </li>
            </ul>
          </aside>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="sec-title">
              <h2>Request a Quote</h2>
              <h3>Tell us what you need</h3>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" required placeholder="07xxxxxxxx" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" defaultValue="Food Products Retail">
                  <option>Food Products Retail</option>
                  <option>Mixed Cereals Wholesale</option>
                  <option>Agricultural Materials & Feed</option>
                  <option>Tours & Experiences</option>
                  <option>General enquiry</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Quantities, products, delivery location..."
              />
            </div>

            {sent && (
              <div className="form-success">
                Your email draft should open shortly. If it does not, write us at {business.email}.
              </div>
            )}

            <button className="btn" type="submit">
              Send Enquiry
            </button>
            <p className="form-note">
              Or call directly: <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
