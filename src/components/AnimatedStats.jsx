import { useEffect, useRef, useState } from 'react'

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatItem({ value, suffix = '', label, active }) {
  const count = useCountUp(value, active)

  return (
    <div className="stat-card">
      <div className="stat-value">
        <span>{count}</span>
        {suffix && <small>{suffix}</small>}
      </div>
      <h4>{label}</h4>
    </div>
  )
}

export default function AnimatedStats({ stats }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features stats-band" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <StatItem
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
