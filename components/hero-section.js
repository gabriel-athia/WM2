"use client"

import Link from "next/link"
import styles from "./hero-section.module.css"

export function HeroSection({ title, subtitle, description, actions = [] }) {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>Instituto de Excelência</p>

      <h1 className={styles.title}>{title}</h1>

      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}

      {description && <p className={styles.description}>{description}</p>}

      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action, index) => {
            const variantClass =
              action.variant === "secondary"
                ? styles.secondaryButton
                : styles.primaryButton

            // Se tiver href, usa Link. Se não, botão normal.
            if (action.href) {
              return (
                <Link
                  key={index}
                  href={action.href}
                  className={`${styles.buttonBase} ${variantClass}`}
                >
                  {action.icon && (
                    <span className={styles.icon}>{action.icon}</span>
                  )}
                  <span>{action.label}</span>
                </Link>
              )
            }

            return (
              <button
                key={index}
                type="button"
                className={`${styles.buttonBase} ${variantClass}`}
                onClick={action.onClick}
              >
                {action.icon && (
                  <span className={styles.icon}>{action.icon}</span>
                )}
                <span>{action.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </section>
  )
}
