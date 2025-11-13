"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import styles from "./program-card.module.css"

const colorClassMap = {
  blue: styles.blue,
  red: styles.red,
  green: styles.green,
}

export function ProgramCard({ title, icon, color = "blue", features = [], link }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const colorClass = colorClassMap[color] ?? ""

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ""} ${colorClass}`}
    >
      <header className={styles.header}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <h3 className={styles.title}>{title}</h3>
      </header>

      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {link && (
        <Link href={link} className={styles.link}>
          Saiba mais
        </Link>
      )}
    </article>
  )
}
