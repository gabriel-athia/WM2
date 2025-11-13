// components/header.js
"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".main-header")
      if (!header) return

      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInscricao = () => {
    router.push("/inscricao")
  }

  return (
    <header className="main-header">
      <nav className="top-nav">
        <Link href="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span>
            <strong>Instituto de Excelência</strong>
            <br />
            <small>Educação Superior</small>
          </span>
        </Link>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button type="button" className="btn-inscricao" onClick={handleInscricao}>
          Inscreva-se
        </button>
      </nav>
    </header>
  )
}
