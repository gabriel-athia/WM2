"use client"

import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"

export default function SobrePage() {
  return (
    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title="Sobre o Instituto"
          subtitle="Mais de 30 anos de excelência em educação"
          description="Conheça nossa história, missão e valores"
          actions={[
            { label: "Conheça Nossos Cursos", icon: "🎓", href: "/cursos", primary: true },
            { label: "Entre em Contato", icon: "📞", href: "/contato", primary: false },
          ]}
        />

        <section className="programas-section">
          <header className="section-header">
            <h2>
              <span className="bullet">🏢</span> Nossa História
            </h2>
          </header>
          <article className="programa-card fade-in-up">
            <p style={{ color: "var(--gray-600)", lineHeight: "1.8" }}>
              Fundado em 1994, o Instituto de Excelência nasceu com o propósito de transformar vidas através da educação
              de qualidade. Ao longo de mais de 30 anos, formamos mais de 5.000 profissionais que hoje atuam em diversas
              áreas do mercado, contribuindo para o desenvolvimento da sociedade.
            </p>
          </article>
        </section>

        <section className="programas-section">
          <header className="section-header">
            <h2>
              <span className="bullet">🎯</span> Missão, Visão e Valores
            </h2>
          </header>
          <section className="programas-grid">
            <article className="programa-card fade-in-up">
              <header className="card-header">
                <figure className="card-icon blue">
                  <span>🎯</span>
                </figure>
                <h3>Missão</h3>
              </header>
              <p style={{ color: "var(--gray-600)" }}>
                Formar profissionais competentes, éticos e comprometidos com o desenvolvimento social, oferecendo
                educação de excelência com metodologia inovadora.
              </p>
            </article>

            <article className="programa-card fade-in-up">
              <header className="card-header">
                <figure className="card-icon green">
                  <span>👁️</span>
                </figure>
                <h3>Visão</h3>
              </header>
              <p style={{ color: "var(--gray-600)" }}>
                Ser referência nacional em educação superior, reconhecida pela qualidade de ensino, infraestrutura
                moderna e impacto positivo na comunidade.
              </p>
            </article>

            <article className="programa-card fade-in-up">
              <header className="card-header">
                <figure className="card-icon red">
                  <span>💎</span>
                </figure>
                <h3>Valores</h3>
              </header>
              <ul className="card-features">
                <li>Excelência acadêmica</li>
                <li>Ética e integridade</li>
                <li>Inovação e criatividade</li>
                <li>Responsabilidade social</li>
              </ul>
            </article>
          </section>
        </section>

        <section className="programas-section">
          <header className="section-header">
            <h2>
              <span className="bullet">📊</span> Nossos Números
            </h2>
          </header>
          <section className="programas-grid">
            <article className="programa-card fade-in-up">
              <header className="card-header">
                <h3 style={{ fontSize: "2.5rem", color: "var(--primary-blue)" }}>30+</h3>
              </header>
              <p style={{ textAlign: "center", color: "var(--gray-600)" }}>Anos de experiência em educação</p>
            </article>

            <article className="programa-card fade-in-up">
              <header className="card-header">
                <h3 style={{ fontSize: "2.5rem", color: "var(--green)" }}>5.000+</h3>
              </header>
              <p style={{ textAlign: "center", color: "var(--gray-600)" }}>Alunos formados com sucesso</p>
            </article>

            <article className="programa-card fade-in-up">
              <header className="card-header">
                <h3 style={{ fontSize: "2.5rem", color: "var(--red)" }}>100%</h3>
              </header>
              <p style={{ textAlign: "center", color: "var(--gray-600)" }}>Nota máxima no MEC</p>
            </article>
          </section>
        </section>
      </main>

      <Sidebar />
    </div>
  )
}
