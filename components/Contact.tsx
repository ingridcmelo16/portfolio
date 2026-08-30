"use client"
import { motion } from "framer-motion"
import styles from "./Contact.module.css"

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.label}>Vamos conversar</p>
        <h2 className={styles.title}>
          Tem um projeto<br />em mente?
        </h2>
        <a href="mailto:ingridcmelo16@gmail.com" className={styles.email}>
          ingridcmelo16@gmail.com →
        </a>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/ingridmeloc" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="/cv">CV ↗</a>
        </div>
      </motion.div>

      <footer className={styles.footer}>
        <p>© 2026 Ingrid Melo</p>
        <p>Product Designer</p>
      </footer>
    </section>
  )
}
