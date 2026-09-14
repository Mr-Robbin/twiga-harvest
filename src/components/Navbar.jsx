import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business } from '../data/business'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const close = () => setOpen(false)

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src="/images/logo.png" alt="Twiga Harvest logo" />
          <div className="logo-text">
            <strong>Twiga Harvest</strong>
            <span>Arusha · Tanzania</span>
          </div>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/services" onClick={close}>
            Services
          </NavLink>
          <NavLink to="/gallery" onClick={close}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${business.phoneTel}`}>
            <small>Call Us</small>
            <strong>{business.phone}</strong>
          </a>
          <Link className="btn" to="/contact" onClick={close}>
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
