"use client"
import styles from "./page.module.css"
import Link from "next/link"

export default function CV() {
  return (
    <div className={styles.page}>

      <div className={styles.topBar}>
        <Link href="/" className={styles.back}>← Portfólio</Link>
        <button className={styles.printBtn} onClick={() => typeof window !== "undefined" && window.print()}>
          Baixar / Imprimir
        </button>
      </div>

      <div className={styles.layout}>

        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>

          <div className={styles.identity}>
            <h1 className={styles.name}>Ingrid Melo</h1>
            <p className={styles.role}>Product Designer</p>
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Contato</p>
            <a href="mailto:ingridcmelo16@gmail.com" className={styles.sideLink}>ingridcmelo16@gmail.com</a>
            <a href="https://linkedin.com/in/ingridmeloc" target="_blank" rel="noopener noreferrer" className={styles.sideLink}>linkedin.com/in/ingridmeloc</a>
            <span className={styles.sideText}>Rio de Janeiro, Brasil</span>
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Skills</p>
            {[
              "Product Design",
              "UX Research",
              "Design System",
              "DesignOps",
              "IA Aplicada ao Design",
              "Agentes de IA",
              "Prototipação",
              "Figma",
              "Frontend (HTML/CSS)",
              "Blazor",
              "Supply Chain B2B",
              "Discovery & Delivery",
            ].map(s => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Idiomas</p>
            <div className={styles.lang}><span>Português</span><span className={styles.langLevel}>Nativo</span></div>
            <div className={styles.lang}><span>Inglês</span><span className={styles.langLevel}>Intermediário</span></div>
          </div>

          <div className={styles.sideSection}>
            <p className={styles.sideLabel}>Certificações</p>
            {[
              { name: "Google UX Design", issuer: "Google", year: "2025" },
              { name: "Product Design: métricas e ciclo de vida", issuer: "Alura", year: "2025" },
              { name: "UX, UI e Product Design", issuer: "UX Unicórnio", year: "2024" },
              { name: "UI Design e Figma", issuer: "UX Unicórnio", year: "2024" },
              { name: "Design Systems", issuer: "cfPRO", year: "2024" },
              { name: "Design Dashboard", issuer: "DesignBoost", year: "2024" },
            ].map(c => (
              <div key={c.name} className={styles.cert}>
                <span className={styles.certName}>{c.name}</span>
                <span className={styles.certMeta}>{c.issuer} · {c.year}</span>
              </div>
            ))}
          </div>

        </aside>

        {/* ── Main ── */}
        <main className={styles.main}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Sobre</p>
            <p className={styles.prose}>
              Designer de produto especializada em B2B e Supply Chain, com 3+ anos construindo as experiências
              S&OP e S&OE da Plannera — do zero. Conduzo o processo de UX de ponta a ponta: discovery com
              usuários reais, síntese, prototipação e entrega próxima ao time de engenharia.
              <br /><br />
              Aplico inteligência artificial de forma prática no fluxo de design — criação de agentes,
              automação de tarefas e aceleração de discovery. Atuo em 3 squads simultaneamente e estruturei
              o processo de UX na empresa.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Experiência</p>

            <div className={styles.expItem}>
              <div className={styles.expHeader}>
                <div>
                  <p className={styles.expRole}>Product Designer Pleno</p>
                  <p className={styles.expCompany}>Plannera</p>
                </div>
                <span className={styles.expPeriod}>jan 2026 – presente</span>
              </div>
              <ul className={styles.expList}>
                <li>Estruturação da Central de UX como iniciativa de DesignOps — centralizando processos, governança e documentação para todos os squads</li>
                <li>Criação do Design System da Plannera com desenvolvimento frontend dos componentes em Blazor</li>
                <li>Desenvolvimento do produto IntMercado (Inteligência de Mercado) em menos de 1 mês, com dev virtual assistido por IA</li>
                <li>Implementação de fábrica de protótipos com IA: HTMLs interativos entregues em até 2 dias via Claude Code, consolidando discovery, PRD e protótipo em um único ciclo</li>
                <li>IA aplicada de ponta a ponta: discovery, síntese de pesquisas, geração de variações e documentação assistida</li>
                <li>Mentoria da estagiária de UX Design</li>
              </ul>
            </div>

            <div className={styles.expItem}>
              <div className={styles.expHeader}>
                <div>
                  <p className={styles.expRole}>Analista de UX/UI Júnior</p>
                  <p className={styles.expCompany}>Plannera</p>
                </div>
                <span className={styles.expPeriod}>fev 2024 – jan 2026</span>
              </div>
              <ul className={styles.expList}>
                <li>Responsável pela estruturação do processo de UX na Plannera</li>
                <li>UX/UI dos três squads: S&OP, S&OE e Plataforma Plannera</li>
                <li>Pesquisas com usuários: entrevistas e testes de usabilidade</li>
                <li>Participação no processo de produto de ponta a ponta — discovery e delivery</li>
                <li>Wireframes, protótipos de baixa e alta fidelidade e fluxos de navegação</li>
                <li>Benchmarks visuais e conceituais; colaboração com times de engenharia e stakeholders</li>
              </ul>
            </div>

            <div className={styles.expItem}>
              <div className={styles.expHeader}>
                <div>
                  <p className={styles.expRole}>Estagiária de Design</p>
                  <p className={styles.expCompany}>Plannera</p>
                </div>
                <span className={styles.expPeriod}>mar 2022 – fev 2024</span>
              </div>
              <ul className={styles.expList}>
                <li>Gestão e desenvolvimento da identidade visual da empresa</li>
                <li>Criação de style guides, UI kits e materiais de comunicação digital</li>
                <li>Desenvolvimento de wireframes e protótipos de alta fidelidade</li>
                <li>Produção de conteúdo visual para redes sociais e campanhas</li>
              </ul>
            </div>

          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Formação</p>

            <div className={styles.eduItem}>
              <div className={styles.expHeader}>
                <div>
                  <p className={styles.expRole}>MBA em Inovação Orientada à IA e Experiência do Usuário</p>
                  <p className={styles.expCompany}>UniFast</p>
                </div>
                <span className={styles.expPeriod}>fev 2026 – fev 2027</span>
              </div>
              <p className={styles.eduDesc}>UX Research avançado · ResearchOps · DesignOps · IA aplicada a produtos digitais · Liderança</p>
            </div>

            <div className={styles.eduItem}>
              <div className={styles.expHeader}>
                <div>
                  <p className={styles.expRole}>Bacharelado em Comunicação e Estudos de Mídia</p>
                  <p className={styles.expCompany}>Universidade Federal Fluminense — UFF</p>
                </div>
                <span className={styles.expPeriod}>2020 – 2024</span>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  )
}
