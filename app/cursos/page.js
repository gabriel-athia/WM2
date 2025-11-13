// app/cursos/page.js
"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-cards"

export default function CursosPage() {
  const [graduacao, setGraduacao] = useState([])
  const [tecnico, setTecnico] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const [resGrad, resTec] = await Promise.all([
          fetch("/api/programas?categoria=graduacao"),
          fetch("/api/programas?categoria=tecnico"),
        ])

        const [gradData, tecData] = await Promise.all([
          resGrad.json(),
          resTec.json(),
        ])

        setGraduacao(gradData)
        setTecnico(tecData)
      } catch (err) {
        console.error("Erro ao buscar programas:", err)
      }
    }

    load()
  }, [])

  return (
    <>
      <HeroSection
        title="Nossos Cursos"
        subtitle="Escolha a trilha ideal para o seu momento."
        description="Do ensino técnico à graduação, oferecemos formações completas para você atuar com excelência no mercado."
        actions={[
          { label: "Voltar para a Home", href: "/", variant: "secondary" },
          { label: "Fazer inscrição", href: "/inscricao", icon: "📝" },
        ]}
      />

      <section className="section-header">
        <h2>
          <span className="bullet">🎓</span> Ensino Superior - Graduação
        </h2>
      </section>

      <section className="programas-grid">
        {graduacao.map((program) => (
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

      <section className="section-header" style={{ marginTop: "2.5rem" }}>
        <h2>
          <span className="bullet">📘</span> Ensino Técnico
        </h2>
      </section>

      <section className="programas-grid">
        {tecnico.map((program) => (
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
