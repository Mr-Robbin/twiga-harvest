import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/business'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[index]

  return (
    <header className="hero">
      {heroSlides.map((item, i) => (
        <div
          key={item.title}
          className={`hero-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="container hero-content">
        <div className="hero-copy" key={slide.title}>
          <div className="eyebrow">{slide.eyebrow}</div>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link className="btn" to={slide.primary.to}>
              {slide.primary.label}
            </Link>
            <Link className="btn btn-outline" to={slide.secondary.to}>
              {slide.secondary.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {heroSlides.map((item, i) => (
          <button
            key={item.title}
            className={i === index ? 'active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </header>
  )
}
