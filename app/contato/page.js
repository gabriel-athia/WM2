"use client"

import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"

export default function ContatoPage() {
  const contactCards = [
    {
      id: "telefone",
      icon: "📞",
      color: "blue",
      title: "Telefone",
      info: "(11) 3456-7890",
      detail: "Atendimento: Segunda a Sexta, 8h às 18h",
    },
    {
      id: "email",
      icon: "📧",
      color: "green",
      title: "E-mail",
      info: "contato@instituto.edu.br",
      detail: "Resposta em até 24 horas",
    },
    {
      id: "whatsapp",
      icon: "💬",
      color: "red",
      title: "WhatsApp",
      info: "(11) 98888-7777",
      detail: "Atendimento rápido e direto",
    },
  ]
  return (
    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title="Entre em Contato"
          subtitle="Estamos aqui para ajudar você"
          description="Tire suas dúvidas e conheça mais sobre nossos programas acadêmicos"
        />

        <section className="contact-section">
          <header className="section-header">
            <h2>
              <span className="bullet">📞</span> Informações de Contato
            </h2>
          </header>

          <section className="contact-grid">
            {contactCards.map((card) => (
              <article key={card.id} className="contact-card fade-in-up">
                <header className="card-header">
                  <figure className={`card-icon ${card.color}`}>
                    <span>{card.icon}</span>
                  </figure>
                  <h3>{card.title}</h3>
                </header>
                <p>{card.info}</p>
                <p>{card.detail}</p>
              </article>
            ))}
          </section>

          <section className="location-section">
            <header className="section-header">
              <h2>
                <span className="bullet">📍</span> Localização
              </h2>
            </header>
            <article className="location-card fade-in-up">
              <header className="card-header">
                <figure className="card-icon blue">
                  <span>🏢</span>
                </figure>
                <h3>Campus Principal</h3>
              </header>
              <address>
                <p>
                  <strong>Endereço:</strong> Av. Paulista, 1234 - São Paulo - SP
                </p>
                <p>
                  <strong>CEP:</strong> 01310-100
                </p>
                <p>
                  <strong>Referência:</strong> Próximo ao metrô Trianon-MASP
                </p>
              </address>
            </article>
          </section>
        </section>
      </main>

      <Sidebar />
    </div>
  )
}
