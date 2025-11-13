// components/sidebar.js
"use client"

import { useState } from "react"

export function Sidebar() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email && email.includes("@")) {
      alert(`Redirecionando para o portal com o email: ${email}`)
      console.log("[WM2] Portal login:", email)
      setEmail("")
    } else {
      alert("Por favor, insira um email válido.")
    }
  }

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <header>
          <h2>
            <span className="bullet">📅</span> Nossa Instituição
          </h2>
        </header>
        <ul className="info-list">
          <li>
            <span className="highlight">📍 CAMPUS PRINCIPAL</span>
          </li>
          <li>Mais de 30 anos no mercado</li>
          <li>Mais de 5000 alunos formados</li>
          <li>Nota máxima no MEC</li>
          <li>Estrutura moderna e completa</li>
        </ul>
      </section>

      <section className="sidebar-section">
        <header>
          <h2>
            <span className="bullet">📞</span> Contato Rápido
          </h2>
        </header>
        <ul className="contact-list">
          <li>📞 (11) 3456-7890</li>
          <li>✉️ contato@instituto.edu.br</li>
          <li>📍 Av. Paulista - SP</li>
        </ul>
      </section>

      <section className="sidebar-section">
        <header>
          <h2>
            <span className="bullet">👩‍🎓</span> Portal do Aluno
          </h2>
        </header>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-portal">
            Acessar Portal
          </button>
        </form>
      </section>
    </aside>
  )
}
