"use client"
import { useEffect, useRef, useState } from "react"
import { motion, animate, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import styles from "./About.module.css"

const stats = [
  { to: 3, suffix: "+", label: "anos de experiência em UX" },
  { to: 4, suffix: "", label: "produtos B2B end-to-end" },
  { to: 25, suffix: "+", label: "clientes impactados" },
]

const skills = [
  { label: "Claude Code", desc: "IA no centro do processo de design", highlight: true },
  { label: "Agentes de IA", desc: "Bench, product discovery e síntese de research", highlight: true },
  { label: "GitHub", desc: "Versionamento e colaboração com dev", highlight: true },
  { label: "Figma", desc: "Design e prototipação" },
  { label: "Design System", desc: "Tokens, componentes, governança" },
  { label: "UX Research", desc: "Entrevistas, testes, síntese" },
  { label: "Front End", desc: "HTML, CSS, Blazor" },
  { label: "Maze", desc: "Testes de usabilidade" },
  { label: "Produto B2B", desc: "S&OP, S&OE, IM, Abast" },
]

function SkillCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(280px circle at ${x}px ${y}px, rgba(83,74,183,0.12), transparent 70%)`
  )

  return (
    <div ref={cardRef} className={styles.skillCard} onMouseMove={onMouseMove} onMouseLeave={() => setActive(null)}>
      <motion.div className={styles.skillGlow} style={{ background: glowBg as any }} />
      <p className={styles.skillCardLabel}>Ferramentas & Disciplinas</p>
      <div className={styles.skillGrid}>
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            className={`${styles.skill} ${s.highlight ? styles.skillHighlight : ""} ${active === i ? styles.skillActive : ""}`}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <span className={`${styles.skillLabel} ${s.highlight ? styles.skillLabelHighlight : ""}`}>{s.label}</span>
            <motion.span
              className={styles.skillDesc}
              initial={{ opacity: 0, height: 0 }}
              animate={active === i ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {s.desc}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return () => controls.stop()
  }, [isInView, to, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function About() {
  return (
    <section className={styles.section} id="about">
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.label}>Sobre</p>
        <h2 className={styles.title}>Design, código<br />e IA — do research<br />à entrega.</h2>
        <p className={styles.bio}>
          Sou Product Designer com foco em produtos B2B complexos — da pesquisa com usuário
          até a entrega em código. IA faz parte de cada etapa do meu processo:
          research, síntese, prototipação e handoff.
          <br /><br />
          Formada em <strong>Estudos de Mídia pela UFF</strong> e cursando
          <strong> MBA em Inovação orientada a IA e UX</strong>. Comecei como Designer Gráfica
          e cheguei ao Product Design passando por todas as camadas —
          do visual ao sistêmico, do Figma ao código.
        </p>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>
                <Counter to={s.to} suffix={s.suffix} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <SkillCard />
      </motion.div>
    </section>
  )
}
