// components/hero-section.js
"use client"

import Link from "next/link"

export function HeroSection({ title, subtitle, description, actions = [] }) {
  return (
    <section className="hero-section">
      <p className="hero-subtitle">INSTITUTO DE EXCELÊNCIA</p>

      <h1>{title}</h1>

      {subtitle && <p className="hero-description">{subtitle}</p>}

      {description && <p className="hero-description">{description}</p>}

      {actions.length > 0 && (
        <div className="hero-actions">
          {actions.map((action, index) => {
            const variantClass =
              action.variant === "secondary" ? "btn-secondary" : "btn-primary"
            const classes = `btn ${variantClass}`

            if (action.href) {
              return (
                <Link key={index} href={action.href} className={classes}>
                  {action.icon && <span>{action.icon}</span>}
                  <span>{action.label}</span>
                </Link>
              )
            }

            return (
              <button
                key={index}
                type="button"
                className={classes}
                onClick={action.onClick}
              >
                {action.icon && <span>{action.icon}</span>}
                <span>{action.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </section>
  )
}
