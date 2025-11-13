// components/program-cards.js
"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function ProgramCard({
  title,
  icon,
  color = "blue",
  features = [],
  link,
}) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const cardClasses = `programa-card ${isVisible ? "fade-in-up" : ""}`
  const iconClasses = `card-icon ${color}`
  const buttonClasses = `btn-saiba-mais ${color}`

  return (
    <article ref={cardRef} className={cardClasses}>
      <header className="card-header">
        <div className={iconClasses}>{icon}</div>
        <h3>{title}</h3>
      </header>

      {features.length > 0 && (
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {link && (
        <footer className="card-footer">
          <Link href={link} className={buttonClasses}>
            Saiba mais
          </Link>
        </footer>
      )}
    </article>
  )
}
