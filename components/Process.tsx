"use client"
import { motion } from "framer-motion"
import styles from "./Process.module.css"

const steps = [
  {
    num: "01",
    title: "Descoberta",
    desc: "Entrevistas, análise de dados e imersão no contexto. Uso IA para sintetizar achados, identificar padrões e gerar hipóteses com mais velocidade.",
    tools: ["Entrevistas", "Jobs to be Done", "IA para síntese"],
  },
  {
    num: "02",
    title: "Definição",
    desc: "Jornadas, oportunidades e alinhamento com produto e negócio. Crio o PRD junto com o PO e uso IA para estruturar frameworks e antecipar pontos cegos antes de ir para tela.",
    tools: ["Journey Map", "PRD", "Claude"],
  },
  {
    num: "03",
    title: "Design",
    desc: "Do exploratório ao refinado. Uso Claude Design e Claude Code para gerar e iterar telas — mais tempo para as decisões que realmente importam.",
    tools: ["Claude Design", "Claude Code", "Prototipação"],
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Handoff, implementação e métricas. Atuo junto ao código e entrego para o squad — design não para no protótipo.",
    tools: ["Design System", "Front End", "Maze"],
  },
]

export function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Como trabalho</p>
          <h2 className={styles.title}>Processo</h2>
        </div>
        <p className={styles.subtitle}>
          Não sigo um framework de forma religiosa — adapto o processo ao que o problema pede.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className={styles.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.stepNum}>{step.num}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
            <div className={styles.stepTools}>
              {step.tools.map((t) => (
                <span key={t} className={styles.stepTool}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
