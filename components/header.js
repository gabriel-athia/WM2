"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".main-header")
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("scrolled")
        } else {
          header.classList.remove("scrolled")
        }
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
          <strong>Instituto de Excelência</strong>
          <small>Educação Superior</small>
        </Link>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="btn-inscricao" onClick={handleInscricao}>
          Inscreva-se
        </button>
      </nav>
    </header>
  )
}
