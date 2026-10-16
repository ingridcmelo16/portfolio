"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import styles from "./Hero.module.css"

const insights = [
  { quote: "Preciso ver as exceções antes de tomar qualquer decisão.", role: "Gerente de Supply Chain" },
  { quote: "O dado existe, mas não consigo transformar em ação.", role: "Analista de Planejamento" },
  { quote: "Cada tela que abre são 3 sistemas diferentes.", role: "Head de Operações" },
]

function LiveCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % insights.length), 3200)
    return () => clearInterval(id)
  }, [])

  const insight = insights[idx]

  return (
    <div className={styles.visualCard}>

      {/* Research insight cycling */}
      <div className={styles.researchBlock}>
        <div className={styles.researchHeader}>
          <motion.span
            className={styles.recDot}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className={styles.researchLabel}>Research · Entrevista</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <p className={styles.researchQuote}>"{insight.quote}"</p>
            <p className={styles.researchRole}>— {insight.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Divider with AI label */}
      <div className={styles.aiDivider}>
        <span className={styles.aiDividerLine} />
        <motion.span
          className={styles.aiDividerBadge}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          ✦ IA + Design
        </motion.span>
        <span className={styles.aiDividerLine} />
      </div>

      {/* Output */}
      <div className={styles.outputBlock}>
        <p className={styles.outputLabel}>Resultado</p>
        <div className={styles.outputRows}>
          {[
            "Superfície única de decisão",
            "Dados operacionais conectados",
            "Entregue em código",
          ].map((item, i) => (
            <motion.div
              key={item}
              className={styles.outputRow}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
            >
              <span className={styles.outputCheck}>✓</span>
              <span className={styles.outputText}>{item}</span>
            </motion.div>
          ))}
        </div>
        <div className={styles.contextPills}>
          {["B2B", "Supply Chain", "Produto"].map(p => (
            <span key={p} className={styles.contextPill}>{p}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

const headline = ["Do", "problema", "ao", "produto", "funcionando."]

function MagneticButton({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.a>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const orbY1 = useTransform(scrollY, [0, 600], [0, -120])
  const orbY2 = useTransform(scrollY, [0, 600], [0, 80])

  return (
    <section ref={containerRef} className={styles.hero}>
      <motion.div
        className={styles.orb}
        style={{ y: orbY1 }}
        animate={{ x: ["0px", "35px", "-20px", "0px"], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className={styles.orb2}
        style={{ y: orbY2 }}
        animate={{ x: ["0px", "-30px", "18px", "0px"], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />

      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.labelWrap}>
            <motion.p
              className={styles.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Product Designer · IA aplicada a UX · Rio de Janeiro
            </motion.p>
          </div>

          <h1 className={styles.title}>
            {headline.map((word, i) => (
              <span key={word} className={styles.wordWrap}>
                <motion.span
                  className={styles.word}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, delay: 0.55 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className={styles.subWrap}>
            <motion.p
              className={styles.sub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Na Plannera, sou a designer responsável por toda a experiência dos usuários em quatro produtos B2B e na Plataforma que os reúne — usados por empresas como Coca-Cola, Hortifruti e Lindt — com IA integrada em todo o processo.
            </motion.p>
          </div>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <MagneticButton href="#projects" className={styles.btnPrimary}>
              Ver projetos
            </MagneticButton>
            <MagneticButton href="#about" className={styles.btnGhost}>
              Sobre mim →
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <LiveCard />

          <div className={styles.visualRow}>
            <motion.div
              className={styles.visualCardSm}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={styles.visualSmLabel}>Experiência</p>
              <p className={styles.visualSmNum}>3+</p>
              <p className={styles.visualSmSub}>anos como designer</p>
            </motion.div>
            <motion.div
              className={styles.visualCardSm}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={styles.visualSmLabel}>Clientes</p>
              <p className={styles.visualSmNum}>40+</p>
              <p className={styles.visualSmSub}>empresas atendidas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </motion.div>
    </section>
  )
}
