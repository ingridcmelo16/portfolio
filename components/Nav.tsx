"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "./Nav.module.css"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.logo}>IM</span>
      <div className={styles.links}>
        <a href="#projects">Trabalhos</a>
        <a href="#about">Sobre</a>
        <a href="#contact" className={styles.cta}>Contato</a>
      </div>
    </motion.nav>
  )
}
