"use client"
import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import styles from "./Projects.module.css"

const projects = [
  {
    id: "01",
    title: "Inteligência de Mercado",
    category: "Produto · Beta",
    year: "2026",
    context: "plannera",
    description:
      "Novo produto Farma criado em 15 dias com um Dev Virtual autônomo no Claude Code — do zero ao beta, com gestão pelo Azure DevOps.",
    tags: ["IA", "Farma", "Beta", "Claude Code"],
    color: "#EEEDFE",
    href: "/work/market-intel",
  },
  {
    id: "02",
    title: "Plann Design System",
    category: "Design System",
    year: "2026",
    context: "plannera",
    description:
      "Sistema de tokens 3-tier e biblioteca de componentes para produto SaaS — base visual e interativa de toda a plataforma.",
    tags: ["Tokens", "Componentes", "Documentação"],
    color: "#E4E2F8",
    cover: "/work/ds/home.png",
    mockup: "browser",
    href: "/work/design-system",
  },
  {
    id: "05",
    title: "Co-Founders Match",
    category: "Product Design",
    year: "2026",
    context: "externo",
    description: "Plataforma Tinder para co-founders — conectando fundadores, devs e designers. Do brief ao protótipo em uma sessão de workshop com IA.",
    tags: ["Mobile", "Workshop", "IA"],
    color: "#E0E7FF",
    cover: "/work/cofounders/discover-swipe.png",
    cover2: "/work/cofounders/its-a-match.png",
    mockup: "mobile",
    href: "/work/cofounders",
  },
  {
    id: "06",
    title: "Gestão IBI",
    category: "Product Design + Dev",
    year: "2026",
    context: "externo",
    description: "Plataforma de gestão de projetos educacionais para o Instituto Brasil-Israel — portfólio, tarefas, orçamento, calendário, avaliações e relatórios.",
    tags: ["React", "Supabase", "Claude Code", "Educação"],
    color: "#E0E7FF",
    href: "/work/gestao-ibi",
  },
  {
    id: "07",
    title: "Ohana Pets",
    category: "UX + Dev",
    year: "2025",
    context: "externo",
    description: "Site para pet care em início de operação — só com Instagram, sem presença web. Do brief ao deploy com boas práticas de UX e Claude Code.",
    tags: ["Small Business", "UX", "Claude Code"],
    color: "#E8F4E8",
    cover: "/work/ohana/home.png",
    mockup: "browser",
    href: "/work/ohana",
  },
  {
    id: "04",
    title: "Testes de Usabilidade UFF",
    category: "UX Research",
    year: "2024",
    context: "externo",
    description:
      "Avaliação do novo site institucional da UFF com 22 usuários e três metodologias — Teste Avaliativo, SUS e A/B.",
    tags: ["Usabilidade", "SUS", "Research", "TCC"],
    color: "#E8E6F8",
    cover: "/work/uff/novo-site.png",
    mockup: "browser",
    href: "/work/uff",
  },
]

type Tab = "plannera" | "externo"

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const thumbRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = thumbRef.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rotateX.set(((e.clientY - cy) / rect.height) * -12)
    rotateY.set(((e.clientX - cx) / rect.width) * 12)
  }

  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const inner = (
    <>
      <span className={styles.itemNum}>{project.id}</span>

      <div className={styles.itemContent}>
        <div className={styles.itemMeta}>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h2 className={styles.itemTitle}>{project.title}</h2>
        <p className={styles.itemDesc}>{project.description}</p>
        <div className={styles.itemTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <motion.div
        ref={thumbRef}
        className={styles.itemThumb}
        style={{
          background: project.color,
          rotateX: springRX,
          rotateY: springRY,
          transformPerspective: 800,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {"cover" in project && project.cover && (
          ("mockup" in project && project.mockup === "mobile") ? (
            <div className={styles.thumbMobileWrap}>
              <div className={styles.thumbMobile}>
                <div className={styles.thumbMobileIsland} />
                <img src={project.cover} alt={project.title} className={styles.thumbMobileScreen} />
              </div>
              {"cover2" in project && project.cover2 && (
                <div className={styles.thumbMobile}>
                  <div className={styles.thumbMobileIsland} />
                  <img src={project.cover2 as string} alt={project.title} className={styles.thumbMobileScreen} />
                </div>
              )}
            </div>
          ) : (
            <div className={styles.thumbBrowserWrap}>
              <div className={styles.thumbBrowserBar}>
                <span className={styles.thumbDot} />
                <span className={styles.thumbDot} />
                <span className={styles.thumbDot} />
              </div>
              <div className={styles.thumbBrowserBody}>
                <img src={project.cover} alt={project.title} className={styles.thumbBrowserScreen} />
              </div>
            </div>
          )
        )}
      </motion.div>
    </>
  )

  return (
    <motion.div
      className={`${styles.item} ${project.href ? styles.itemClickable : ""}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: index * 0.07 }}
    >
      {project.href ? (
        <Link href={project.href} className={styles.itemLink}>{inner}</Link>
      ) : inner}
    </motion.div>
  )
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("plannera")
  const filtered = projects.filter(p => p.context === activeTab)

  return (
    <section className={styles.section} id="projects">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.sectionLabel}>Projetos selecionados</p>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "plannera" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("plannera")}
          >
            Plannera
          </button>
          <button
            className={`${styles.tab} ${activeTab === "externo" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("externo")}
          >
            Cases externos
          </button>
        </div>
      </motion.div>

      <div className={styles.list}>
        <AnimatePresence mode="wait">
          {filtered.map((project, i) => (
            <ProjectItem key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
