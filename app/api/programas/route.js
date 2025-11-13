// app/api/programas/route.js
import { NextResponse } from "next/server"

const programas = [
  // GRADUAÇÃO
  {
    id: "engenharia",
    categoria: "graduacao",
    title: "Engenharia",
    icon: "⚙️",
    color: "blue",
    features: [
      "Bacharelado • 5 anos",
      "Projetos reais e laboratórios modernos",
      "Trilhas Civil, Computação e Elétrica",
      "Parcerias com a indústria",
    ],
    link: "/cursos/engenharia",
  },
  {
    id: "medicina",
    categoria: "graduacao",
    title: "Medicina",
    icon: "⚕️",
    color: "red",
    features: [
      "Bacharelado • 6 anos",
      "Hospital-escola próprio",
      "Simulação realística",
      "Residência completa",
    ],
    link: "/cursos/medicina",
  },
  {
    id: "administracao",
    categoria: "graduacao",
    title: "Administração",
    icon: "💼",
    color: "green",
    features: [
      "Bacharelado • 4 anos",
      "Gestão, dados e empreendedorismo",
      "Networking empresarial",
      "Projetos com empresas",
    ],
    link: "/cursos/administracao",
  },

  // TÉCNICO
  {
    id: "enfermagem",
    categoria: "tecnico",
    title: "Técnico em Enfermagem",
    icon: "🩺",
    color: "red",
    features: [
      "Duração: 24 meses",
      "Práticas em laboratório",
      "Unidades de saúde conveniadas",
      "Estágio supervisionado",
    ],
    link: "#",
  },
  {
    id: "informatica",
    categoria: "tecnico",
    title: "Técnico em Informática",
    icon: "💻",
    color: "blue",
    features: [
      "Duração: 18 meses",
      "Web, redes e suporte",
      "Projetos para portfólio",
      "Certificações preparatórias",
    ],
    link: "#",
  },
  {
    id: "adm-tecnico",
    categoria: "tecnico",
    title: "Técnico em Administração",
    icon: "📊",
    color: "green",
    features: [
      "Duração: 12 meses",
      "Rotinas administrativas",
      "Finanças e logística",
      "Projeto integrador",
    ],
    link: "#",
  },
]

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get("categoria")

  const filtrados = categoria
    ? programas.filter((p) => p.categoria === categoria)
    : programas

  return NextResponse.json(filtrados)
}
