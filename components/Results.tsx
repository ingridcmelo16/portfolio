"use client"
import { motion } from "framer-motion"
import styles from "./Results.module.css"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const vizBars = [14, 30, 21, 42, 27, 48, 34]

function TrackingViz() {
  return (
    <div className={styles.viz} aria-hidden="true">
      <div className={styles.vizBars}>
        {vizBars.map((h, i) => (
          <motion.span
            key={i}
            className={styles.vizBar}
            animate={{ height: [h * 0.4, h, h * 0.6, h * 0.85, h * 0.4] }}
            transition={{
              duration: 4.5,
              delay: i * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <svg className={styles.vizArrow} width="42" height="12" viewBox="0 0 34 12" fill="none">
        <motion.path
          d="M1 6h36"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 4"
          animate={{ strokeDashoffset: [0, -14] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />
        <path d="M35 2.5 40 6l-5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className={styles.vizSingle}>
        <motion.span
          className={styles.vizPulse}
          animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0.15, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className={styles.vizSingleDot} />
      </div>
    </div>
  )
}

export function Results() {
  return (
    <section className={styles.section}>
      <motion.p
        className={styles.label}
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        Resultados que colaborei
      </motion.p>

      <div className={styles.bento}>

        <motion.div
          className={`${styles.card} ${styles.cardFeatured}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className={`${styles.tag}`}>Reconhecimento</span>
          <p className={styles.bigText}>
            Melhor Tecnologia<br />S&OP do Brasil
          </p>
          <p className={styles.eyebrow}>Prêmio recebido pela Plannera · Pesquisa realizada pelo Instituto Mission</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardMid}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          <span className={`${styles.tag} ${styles.tagDark}`}>Usabilidade</span>
          <p className={styles.num} style={{ color: "#534AB7" }}>84<span style={{ fontSize: "0.45em", letterSpacing: "-1px", color: "#8C85C0" }}>/100</span></p>
          <div>
            <p className={`${styles.bigText} ${styles.bigTextDark}`} style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
              SUS Score — excelente
            </p>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`} style={{ marginTop: 6 }}>
              Avaliado por usuários reais em 40+ clientes
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardStat}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          <span className={`${styles.tag} ${styles.tagDark}`}>Clientes</span>
          <p className={styles.num}>40+</p>
          <p className={styles.numLabel}>empresas usando os produtos que desenhei</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardStat}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <span className={`${styles.tag} ${styles.tagDark}`}>Produtos</span>
          <p className={styles.num}>5</p>
          <p className={styles.numLabel}>produtos com design system e interfaces padronizadas</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardStat}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
        >
          <span className={`${styles.tag} ${styles.tagDark}`}>Atuação</span>
          <p className={styles.num}>3+</p>
          <p className={styles.numLabel}>anos liderando design em produto B2B complexo</p>
        </motion.div>

        <motion.div
          className={`${styles.card} ${styles.cardWide}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
        >
          <span className={`${styles.tag} ${styles.tagDark}`}>Dados</span>
          <TrackingViz />
          <div className={styles.cardWideBody}>
            <p className={`${styles.bigText} ${styles.bigTextDark}`} style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
              Encabecei o projeto de métricas<br />e tracking dos produtos
            </p>
            <p className={styles.cardWideDesc} style={{ marginTop: 10 }}>
              Defini os eventos principais, organizei o tracking e levei a empresa a um número
              único de acompanhamento — priorização passou a ser decidida por dado, não por opinião.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
