"use client"
import { motion } from "framer-motion"
import styles from "./Results.module.css"

const ease = [0.22, 1, 0.36, 1]

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
              Avaliado por usuários reais em 25+ clientes
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
          <p className={styles.num}>25+</p>
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
          <p className={styles.num}>4</p>
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

      </div>
    </section>
  )
}
