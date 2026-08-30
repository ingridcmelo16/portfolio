"use client"
import { motion } from "framer-motion"
import styles from "./Experience.module.css"

const experiences = [
  {
    period: "2024 —\nAtual",
    title: "Product Designer",
    company: "Plannera",
    desc: "Responsável pelo design de S&OP, S&OE/Abast, Inteligência de Mercado e produtos internos. Conduz todo o ciclo — research, definição, prototipação, testes e handoff — com contato direto com clientes como Coca-Cola, Hortifruti e Lindt.",
    tags: ["UX Research", "UI Design", "Design System", "Testes de Usabilidade", "S&OP"],
  },
  {
    period: "2023",
    title: "UX/UI Designer Jr.",
    company: "Plannera",
    desc: "Expansão para research e experiência do usuário. Início da construção do design system da plataforma e condução de entrevistas e testes com usuários reais.",
    tags: ["UX Research", "Design System", "Jornada do Usuário"],
  },
  {
    period: "2022 — 2023",
    title: "UI Designer",
    company: "Plannera",
    desc: "Design de interfaces para os produtos da plataforma. Padronização visual e criação de componentes reutilizáveis.",
    tags: ["UI Design", "Figma", "Componentização"],
  },
  {
    period: "2022",
    title: "Designer Gráfico",
    company: "Plannera",
    desc: "Início da trajetória na Plannera com foco em identidade visual e materiais de comunicação.",
    tags: ["Design Gráfico", "Identidade Visual"],
  },
  {
    period: "Em curso",
    title: "MBA em Inovação orientada a IA e UX",
    company: "Formação acadêmica",
    desc: "Especialização na interseção entre inteligência artificial, inovação de produto e experiência do usuário. IA aplicada ao processo de design no dia a dia.",
    tags: ["IA", "UX", "Inovação", "MBA"],
  },
]

export function Experience() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.label}>Trajetória</p>
        <h2 className={styles.title}>Experiência</h2>
        <a href="/cv" className={styles.cvLink}>Baixar CV ↗</a>
      </motion.div>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.period} style={{ whiteSpace: "pre-line" }}>
              {exp.period}
            </p>
            <div className={styles.role}>
              <h3 className={styles.roleTitle}>{exp.title}</h3>
              <span className={styles.company}>{exp.company}</span>
              <p className={styles.roleDesc}>{exp.desc}</p>
              <div className={styles.tags}>
                {exp.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
