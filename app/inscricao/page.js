"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HeroSection } from "@/components/hero-section"

export default function InscricaoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    nascimento: "",
    curso: "",
    periodo: "",
    mensagem: "",
    termos: false,
  })

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    return value
  }

  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2")
    }
    return value
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = e.target.checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else if (name === "cpf") {
      setFormData((prev) => ({ ...prev, [name]: formatCPF(value) }))
    } else if (name === "telefone") {
      setFormData((prev) => ({ ...prev, [name]: formatTelefone(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form data:", formData)
    alert("Inscrição enviada com sucesso! Em breve entraremos em contato.")
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  return (
    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title="Formulário de Inscrição"
          subtitle="Dê o primeiro passo para seu futuro"
          description="Preencha o formulário abaixo e nossa equipe entrará em contato"
        />

        <section className="form-section">
          <header className="section-header">
            <h2>
              <span className="bullet">📝</span> Dados Pessoais
            </h2>
          </header>

          <form className="inscription-form" onSubmit={handleSubmit}>
            <section className="form-group">
              <label htmlFor="nome">Nome Completo *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Digite seu nome completo"
              />
            </section>

            <section className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@exemplo.com"
              />
            </section>

            <section className="form-group">
              <label htmlFor="telefone">Telefone *</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(11) 98888-7777"
              />
            </section>

            <section className="form-group">
              <label htmlFor="cpf">CPF *</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
                placeholder="000.000.000-00"
              />
            </section>

            <section className="form-group">
              <label htmlFor="nascimento">Data de Nascimento *</label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleChange}
                required
              />
            </section>

            <section className="form-group">
              <label htmlFor="curso">Curso de Interesse *</label>
              <select id="curso" name="curso" value={formData.curso} onChange={handleChange} required>
                <option value="">Selecione um curso</option>
                <option value="engenharia">Engenharia</option>
                <option value="medicina">Medicina</option>
                <option value="administracao">Administração</option>
                <option value="enfermagem">Técnico em Enfermagem</option>
                <option value="informatica">Técnico em Informática</option>
                <option value="adm-tecnico">Técnico em Administração</option>
              </select>
            </section>

            <section className="form-group">
              <label htmlFor="periodo">Período Preferencial *</label>
              <select id="periodo" name="periodo" value={formData.periodo} onChange={handleChange} required>
                <option value="">Selecione um período</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
                <option value="noturno">Noturno</option>
              </select>
            </section>

            <section className="form-group">
              <label htmlFor="mensagem">Mensagem (Opcional)</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Conte-nos um pouco sobre você e seus objetivos"
              />
            </section>

            <section className="form-group checkbox-group">
              <input
                type="checkbox"
                id="termos"
                name="termos"
                checked={formData.termos}
                onChange={handleChange}
                required
              />
              <label htmlFor="termos">Aceito os termos e condições e autorizo o contato *</label>
            </section>

            <footer className="form-actions">
              <button type="submit" className="btn-submit">
                Enviar Inscrição
              </button>
              <a href="/" className="btn-cancel">
                Cancelar
              </a>
            </footer>
          </form>
        </section>
      </main>

      <aside className="sidebar">
        <section className="sidebar-section">
          <header>
            <h2>
              <span>📋</span> Processo de Inscrição
            </h2>
          </header>
          <ul className="info-list">
            <li className="highlight">1️⃣ PREENCHA O FORMULÁRIO</li>
            <li>2️⃣ Aguarde nosso contato</li>
            <li>3️⃣ Agende uma visita ao campus</li>
            <li>4️⃣ Realize o processo seletivo</li>
            <li>5️⃣ Efetue a matrícula</li>
          </ul>
        </section>

        <section className="sidebar-section">
          <header>
            <h2>
              <span>💰</span> Formas de Pagamento
            </h2>
          </header>
          <ul className="contact-list">
            <li>
              <span>💳</span> Cartão de crédito
            </li>
            <li>
              <span>🏦</span> Boleto bancário
            </li>
            <li>
              <span>📄</span> Financiamento estudantil
            </li>
            <li>
              <span>🎓</span> Bolsas de estudo
            </li>
          </ul>
        </section>

        <section className="sidebar-section">
          <header>
            <h2>
              <span>📞</span> Dúvidas?
            </h2>
          </header>
          <ul className="contact-list">
            <li>
              <span>📞</span> (11) 3456-7890
            </li>
            <li>
              <span>📧</span> inscricoes@instituto.edu.br
            </li>
            <li>
              <span>💬</span> (11) 98888-7777
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}
