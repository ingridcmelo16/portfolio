"use client"
import styles from "./page.module.css"
import Link from "next/link"

export default function OhanaCase() {
  return (
    <div className={styles.page}>

      {/* Top nav */}
      <nav className={styles.topNav}>
        <Link href="/#projects" className={styles.back}>← Voltar</Link>
        <a href="https://ohana-pets.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.siteBtn}>
          <span className={styles.siteDot} />
          ohana-pets.vercel.app
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillGreen}`}>UX + Dev</span>
          <span className={styles.pill}>2025</span>
          <span className={styles.pill}>Claude Code · Vercel</span>
          <span className={styles.pill}>Small Business</span>
        </div>

        <h1 className={styles.heroTitle}>Ohana Pets</h1>
        <p className={styles.heroSub}>
          Pet care em início de operação, só com Instagram — sem site, sem descoberta orgânica.
          Do brief ao deploy com boas práticas de UX e Claude Code.
        </p>

        {/* Browser mockup */}
        <div className={styles.browserMock}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span /><span /><span />
            </div>
            <div className={styles.browserUrl}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="0.75"/><path d="M5 1C5 1 3.5 2.8 3.5 5s1.5 4 1.5 4M5 1s1.5 1.8 1.5 4S5 9 5 9M1 5h8" stroke="currentColor" strokeWidth="0.75"/></svg>
              ohana-pets.vercel.app
            </div>
            <div className={styles.browserActions}>
              <span />
            </div>
          </div>
          <div className={styles.browserScreen}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/work/ohana/home.png" alt="Site Ohana Pets" className={styles.browserImg} />
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>canal de aquisição antes do site</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>30+</span>
            <span className={styles.statLabel}>pets atendidos</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>5★</span>
            <span className={styles.statLabel}>avaliação média</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>0</span>
            <span className={styles.statLabel}>presença web antes do projeto</span>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>UX Designer + Dev</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Claude Code · Vercel</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Negócio</span>
            <span className={styles.sidebarValue}>Passeios, hospedagem e banho</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Cidade</span>
            <span className={styles.sidebarValue}>Rio de Janeiro</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Site ao vivo</span>
            <a href="https://ohana-pets.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
              ohana-pets.vercel.app ↗
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.content}>

          {/* Contexto */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Empresa real,<br />presença zero.</h2>
            <p className={styles.prose}>
              A Ohana Pets já operava desde 2022 — mais de 30 pets atendidos, avaliação 5 estrelas
              e clientes fiéis. Mas toda captação dependia do Instagram. Sem site, a empresa não
              aparecia no Google, não passava confiança pra novos clientes e não tinha onde centralizar
              serviços e preços. O boca a boca funcionava, mas não escalava.
            </p>
          </div>

          {/* Problema */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>Invisível para<br />quem ainda não te conhece.</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.25"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Sem descoberta orgânica</p>
                <p className={styles.problemText}>Buscas por "dog walker Rio" ou "hospedagem pet" nunca retornavam a Ohana. Instagram não indexa para Google.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><path d="M5 6h6M5 8.5h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Fricção na conversão</p>
                <p className={styles.problemText}>Novos clientes precisavam vasculhar o feed para entender preços — péssimo contexto para uma decisão que envolve confiança.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zM8 5v3l3 1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Credibilidade limitada</p>
                <p className={styles.problemText}>Sem site, a ausência de presença web passava insegurança para quem não chegava por indicação.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 3.5 9 7.5M3 12.5l4-4M3 3.5l4 4M13 12.5 9 8.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Contato não estruturado</p>
                <p className={styles.problemText}>DM no Instagram: lento, informal e sem forma de captar dados do pet antes do primeiro atendimento.</p>
              </div>
            </div>
          </div>

          {/* Solução */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Solução</p>
            <h2 className={styles.sectionTitle}>UX orientada<br />a objetivo de negócio.</h2>
            <p className={styles.prose}>
              O site foi desenhado para resolver problemas específicos — não só "ter uma presença web".
              Cada decisão de UX partiu de uma pergunta: <em>isso ajuda alguém a confiar e contratar?</em>
            </p>

            <div className={styles.solutionList}>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>01</span>
                <div>
                  <p className={styles.solutionTitle}>Hierarquia de confiança</p>
                  <p className={styles.solutionText}>Proposta de valor no hero → depoimentos reais → fotos dos pets. O usuário entende o serviço e vê prova social antes de qualquer CTA.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>02</span>
                <div>
                  <p className={styles.solutionTitle}>Serviços com contexto</p>
                  <p className={styles.solutionText}>Cada serviço tem descrição, preço inicial e diferenciais inclusos — elimina a fricção de perguntar o básico antes de entrar em contato.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>03</span>
                <div>
                  <p className={styles.solutionTitle}>CTA direto para WhatsApp</p>
                  <p className={styles.solutionText}>Canal de conversão alinhado com como a empreendedora já trabalhava — sem fricção de formulário, sem mudar o processo existente.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>04</span>
                <div>
                  <p className={styles.solutionTitle}>Diferenciais visíveis</p>
                  <p className={styles.solutionText}>Rastreamento ao vivo e fotos diárias pelo WhatsApp — features que existiam mas não eram comunicadas com clareza no Instagram.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots do site */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Site</p>
            <h2 className={styles.sectionTitle}>Resultado final.</h2>
            <div className={styles.screenshotGrid}>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/ohana/home.png" alt="Home do site" className={styles.screenshotImg} />
                <p className={styles.screenshotCaption}>Homepage completa</p>
              </div>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/ohana/preços.png" alt="Preços e serviços" className={styles.screenshotImg} />
                <p className={styles.screenshotCaption}>Serviços com preços e diferenciais</p>
              </div>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/ohana/hero 2.png" alt="Hero do site" className={styles.screenshotImg} />
                <p className={styles.screenshotCaption}>Seção hero — variação</p>
              </div>
            </div>

            <a href="https://ohana-pets.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.visitCta}>
              <span>Ver site completo</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Processo */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>Do brief ao deploy<br />num único ciclo.</h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Brief com a empreendedora</p>
                  <p className={styles.timelineText}>Entender serviços, diferenciais, perfil de cliente e como o contato acontecia. Isso definiu a arquitetura da informação e a ordem das seções.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Estrutura e UX writing</p>
                  <p className={styles.timelineText}>Definição das seções e hierarquia de conteúdo. Para negócios locais, UX writing faz toda a diferença — tom próximo, direto e que passa confiança.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Build com Claude Code</p>
                  <p className={styles.timelineText}>Implementação completa com boas práticas já embutidas: semântica, acessibilidade, performance e responsividade como padrão, não ajuste posterior.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Deploy na Vercel</p>
                  <p className={styles.timelineText}>Publicação, domínio e analytics para acompanhar a aquisição orgânica a partir do lançamento.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Aprendizados */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>UX não é só<br />para grandes produtos.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>O problema de negócio define a UX.</strong> Para a Ohana, o problema não era
                  "fazer uma interface bonita" — era invisibilidade e falta de credibilidade. Cada decisão
                  partiu daí.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Claude Code como parceiro de entrega.</strong> Com brief e estrutura definidos,
                  o Claude Code acelerou a implementação sem abrir mão de qualidade — UX writing, boas
                  práticas e código limpo num único ciclo.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Pequenos negócios têm problemas reais de UX.</strong> A Ohana não precisava
                  de design system ou pesquisa com 20 usuários — precisava de clareza, confiança e
                  um CTA que funcionasse. Isso é UX também.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
