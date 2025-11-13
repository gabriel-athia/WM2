"use client"

import { useParams } from "next/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"
import { useEffect, useState } from "react"

const cursosData = {
  engenharia: {
    title: "Curso de Engenharia",
    subtitle: "Formando engenheiros preparados para os desafios do futuro",
    description: "5 anos de formação com projetos reais e laboratórios modernos",
    icon: "⚙️",
    areas: [
      {
        id: "civil",
        title: "Engenharia Civil",
        icon: "🏗️",
        color: "blue",
        features: [
          "Construção e infraestrutura",
          "Projetos estruturais",
          "Gestão de obras",
          "Sustentabilidade na construção",
        ],
      },
      {
        id: "eletrica",
        title: "Engenharia Elétrica",
        icon: "⚡",
        color: "red",
        features: ["Sistemas de energia", "Automação industrial", "Eletrônica de potência", "Energias renováveis"],
      },
      {
        id: "computacao",
        title: "Engenharia de Computação",
        icon: "💻",
        color: "green",
        features: [
          "Desenvolvimento de software",
          "Sistemas embarcados",
          "Inteligência artificial",
          "Redes e segurança",
        ],
      },
    ],
    labs: [
      {
        id: "materiais",
        title: "Laboratório de Materiais",
        features: ["Ensaios de resistência", "Análise de materiais", "Controle de qualidade", "Pesquisa aplicada"],
      },
      {
        id: "eletronica",
        title: "Lab. de Eletrônica",
        features: ["Circuitos analógicos", "Sistemas digitais", "Microcontroladores", "Prototipagem rápida"],
      },
      {
        id: "computacao-lab",
        title: "Lab. de Computação",
        features: ["Programação avançada", "Simulação computacional", "Desenvolvimento mobile", "Projetos integrados"],
      },
    ],
    sidebarInfo: {
      title: "Coordenação",
      icon: "⚙️",
      items: [
        "engenharia@instituto.edu.br",
        "(11) 3456-7890 - Ramal 456",
        "Coordenador: Prof. Dr. João Silva",
        "Atendimento: Seg-Sex 8h-18h",
      ],
      mercado: [
        { icon: "🏢", text: "Construtoras e empreiteiras" },
        { icon: "⚡", text: "Concessionárias de energia" },
        { icon: "💻", text: "Empresas de tecnologia" },
        { icon: "🏭", text: "Indústrias diversas" },
      ],
    },
  },
  medicina: {
    title: "Curso de Medicina",
    subtitle: "Formando médicos humanizados e tecnicamente preparados",
    description: "6 anos de formação com hospital-escola próprio",
    icon: "⚕️",
    areas: [
      {
        id: "clinica",
        title: "Clínica Médica",
        icon: "🩺",
        color: "blue",
        features: [
          "Diagnóstico e tratamento",
          "Medicina preventiva",
          "Atendimento ambulatorial",
          "Gestão de casos complexos",
        ],
      },
      {
        id: "cirurgia",
        title: "Cirurgia",
        icon: "🔬",
        color: "red",
        features: [
          "Técnicas cirúrgicas avançadas",
          "Cirurgia minimamente invasiva",
          "Centro cirúrgico moderno",
          "Simulação realística",
        ],
      },
      {
        id: "pediatria",
        title: "Pediatria",
        icon: "👶",
        color: "green",
        features: ["Saúde infantil", "Desenvolvimento pediátrico", "Vacinação e prevenção", "Atendimento neonatal"],
      },
    ],
    labs: [
      {
        id: "anatomia",
        title: "Laboratório de Anatomia",
        features: [
          "Peças anatômicas reais",
          "Modelos 3D interativos",
          "Dissecação supervisionada",
          "Estudo comparativo",
        ],
      },
      {
        id: "simulacao",
        title: "Centro de Simulação",
        features: [
          "Manequins de alta fidelidade",
          "Cenários clínicos realistas",
          "Treinamento de emergências",
          "Feedback em tempo real",
        ],
      },
      {
        id: "hospital",
        title: "Hospital-Escola",
        features: [
          "Atendimento supervisionado",
          "Internato médico",
          "Ambulatórios especializados",
          "Pronto-socorro 24h",
        ],
      },
    ],
    sidebarInfo: {
      title: "Coordenação",
      icon: "⚕️",
      items: [
        "medicina@instituto.edu.br",
        "(11) 3456-7890 - Ramal 123",
        "Coordenadora: Profa. Dra. Maria Santos",
        "Atendimento: Seg-Sex 8h-18h",
      ],
      mercado: [
        { icon: "🏥", text: "Hospitais públicos e privados" },
        { icon: "🩺", text: "Clínicas especializadas" },
        { icon: "🔬", text: "Pesquisa médica" },
        { icon: "👨‍⚕️", text: "Consultório próprio" },
      ],
    },
  },
  administracao: {
    title: "Curso de Administração",
    subtitle: "Preparando líderes para o mercado global",
    description: "4 anos de formação com foco em gestão, dados e empreendedorismo",
    icon: "💼",
    areas: [
      {
        id: "gestao",
        title: "Gestão Empresarial",
        icon: "📊",
        color: "green",
        features: ["Planejamento estratégico", "Gestão de pessoas", "Liderança e motivação", "Tomada de decisão"],
      },
      {
        id: "marketing",
        title: "Marketing Estratégico",
        icon: "📈",
        color: "blue",
        features: ["Marketing digital", "Pesquisa de mercado", "Branding e comunicação", "Análise de consumidor"],
      },
      {
        id: "financas",
        title: "Finanças Corporativas",
        icon: "💰",
        color: "red",
        features: ["Análise de investimentos", "Gestão de riscos", "Controladoria", "Mercado de capitais"],
      },
    ],
    labs: [
      {
        id: "networking",
        title: "Networking Empresarial",
        features: [
          "Parcerias com empresas",
          "Eventos de networking",
          "Mentoria profissional",
          "Oportunidades de estágio",
        ],
      },
      {
        id: "projetos",
        title: "Projetos Reais",
        features: ["Consultoria empresarial", "Estudos de caso", "Simulações de negócios", "Empresa júnior"],
      },
      {
        id: "empreendedorismo",
        title: "Empreendedorismo",
        features: ["Incubadora de startups", "Planos de negócio", "Inovação e criatividade", "Pitch e apresentação"],
      },
    ],
    sidebarInfo: {
      title: "Coordenação",
      icon: "💼",
      items: [
        "administracao@instituto.edu.br",
        "(11) 3456-7890 - Ramal 789",
        "Coordenador: Prof. Carlos Lima",
        "Atendimento: Seg-Sex 8h-18h",
      ],
      mercado: [
        { icon: "🏢", text: "Grandes corporações" },
        { icon: "🏦", text: "Bancos e financeiras" },
        { icon: "🚀", text: "Startups e scale-ups" },
        { icon: "👔", text: "Consultoria empresarial" },
      ],
    },
  },
}

export default function CursoDetailPage() {
  const params = useParams()
  const id = params.id
  const [curso, setCurso] = useState(null)

  useEffect(() => {
    if (id && cursosData[id]) {
      setCurso(cursosData[id])
    }
  }, [id])

  if (!curso) {
    return (
      <div className="page-container">
        <main className="main-content">
          <section className="programas-section">
            <header className="section-header">
              <h2>Curso não encontrado</h2>
            </header>
            <p>O curso que você está procurando não existe.</p>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-container">
      <main className="main-content">
        <HeroSection
          title={curso.title}
          subtitle={curso.subtitle}
          description={curso.description}
          actions={[
            { label: "Ver Áreas", icon: curso.icon, href: "#areas", primary: true },
            { label: "Fale Conosco", icon: "📞", href: "/contato", primary: false },
          ]}
        />

        <section className="programas-section" id="areas">
          <header className="section-header">
            <h2>
              <span className="bullet">{curso.icon}</span> Áreas de Especialização
            </h2>
          </header>
          <section className="programas-grid">
            {curso.areas.map((area) => (
              <ProgramCard key={area.id} {...area} />
            ))}
          </section>
        </section>

        <section className="programas-section">
          <header className="section-header">
            <h2>
              <span className="bullet">🔬</span>{" "}
              {id === "administracao" ? "Diferenciais do Curso" : "Laboratórios e Infraestrutura"}
            </h2>
          </header>
          <section className="programas-grid">
            {curso.labs.map((lab) => (
              <article key={lab.id} className="programa-card fade-in-up">
                <header className="card-header">
                  <h3>{lab.title}</h3>
                </header>
                <ul className="card-features">
                  {lab.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </section>
      </main>

      <aside className="sidebar">
        <section className="sidebar-section">
          <header>
            <h2>
              <span>{curso.sidebarInfo.icon}</span> {curso.sidebarInfo.title}
            </h2>
          </header>
          <ul className="info-list">
            <li className="highlight">📧 CONTATO DIRETO</li>
            {curso.sidebarInfo.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="sidebar-section">
          <header>
            <h2>
              <span>🎯</span> Mercado de Trabalho
            </h2>
          </header>
          <ul className="contact-list">
            {curso.sidebarInfo.mercado.map((item, idx) => (
              <li key={idx}>
                <span>{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="sidebar-section portal">
          <header>
            <h2>
              <span>📞</span> Fale Conosco
            </h2>
          </header>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit" className="btn-portal">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </aside>
    </div>
  )
}
