// app/page.js
"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"

export default function HomePage() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/programas")
        const data = await res.json()
        setPrograms(data)
      } catch (err) {
        console.error("Erro ao buscar programas:", err)
      }
    }

    load()
  }, [])

  return (
    <>
      <HeroSection
        title="Transforme seu futuro na educação superior"
        subtitle="Graduação, pós, técnico e extensão em um só lugar."
        description="Conheça os programas do Instituto de Excelência e escolha o caminho ideal para o seu desenvolvimento profissional."
        actions={[
          { label: "Ver todos os cursos", href: "/cursos", icon: "🎓" },
          { label: "Fazer inscrição", href: "/inscricao", variant: "secondary" },
        ]}
      />

      <section className="section-header">
        <h2>
          <span className="bullet">📚</span> Programas Acadêmicos
        </h2>
      </section>

      <section className="programas-grid">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            icon={program.icon}
            color={program.color}
            features={program.features}
            link={program.link}
          />
        ))}
      </section>
    </>
  )
}
