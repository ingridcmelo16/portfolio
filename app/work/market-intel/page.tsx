import styles from "./page.module.css"
import Link from "next/link"

export default function MarketIntelCase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>Produto · Beta</span>
          <span className={styles.pill}>2025</span>
          <span className={styles.pill}>15 dias · Claude Code</span>
        </div>
        <h1 className={styles.heroTitle}>Inteligência<br />de Mercado</h1>
        <p className={styles.heroSub}>
          Novo produto construído em 15 dias com um Dev Virtual autônomo no Claude Code —
          do briefing ao beta funcional, com gestão de tarefas no Azure DevOps
          e um time enxuto de três pessoas.
        </p>

        <div className={styles.heroCover}>
          <div className={styles.coverOrb1} />
          <div className={styles.coverOrb2} />
          <div className={styles.coverOrb3} />
          <div className={styles.coverInner}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="16" fill="rgba(175,169,236,0.1)"/>
              <path d="M14 40V28M21 40V22M28 40V18M35 40V25M42 40V31" stroke="#AFA9EC" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="42" cy="18" r="5" stroke="#BCC8F5" strokeWidth="1.5"/>
              <path d="M28 18L35 14L42 18" stroke="#BCC8F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className={styles.coverTagline}>Market Intel · Farma · IA</p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>15</span>
            <span className={styles.statLabel}>dias do brief ao beta</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>pessoas no time</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>Dev Virtual autônomo</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>0</span>
            <span className={styles.statLabel}>dev humano no loop</span>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Product Designer</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Time</span>
            <span className={styles.sidebarValue}>PO · Head de Produto · Dev Virtual</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Claude Code · Azure DevOps · Figma</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Setor</span>
            <span className={styles.sidebarValue}>Farma</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Status</span>
            <span className={styles.sidebarValue}>Beta</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ano</span>
            <span className={styles.sidebarValue}>2025</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Uma lacuna que<br />os clientes já pediam.</h2>
            <p className={styles.prose}>
              Clientes do setor Farma que já usavam o produto S&OP da Plannera recorrentemente pediam
              visibilidade de mercado — sell-out por SKU, share por segmento, movimentação de concorrentes.
              Era uma demanda recorrente que ficava fora do escopo do produto principal.
              <br /><br />
              A decisão foi criar um produto complementar focado em <strong>Inteligência de Mercado</strong>,
              que se integrasse ao portfólio existente sem canibalizar o S&OP — e que pudesse ser validado
              rapidamente com a base de clientes já ativa.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Desafio</p>
            <h2 className={styles.sectionTitle}>Novo produto.<br />15 dias. Time de três.</h2>
            <p className={styles.prose}>
              A janela era curta: precisávamos de um beta funcional para apresentar em reuniões de renovação
              já agendadas. Com um time de PO, Head de Produto e eu como designer, a execução técnica seria
              o gargalo — até decidirmos usar um <strong>Dev Virtual</strong>.
            </p>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>O que é o Dev Virtual</p>
                <p className={styles.infoCardText}>
                  Um agente criado no Claude Code com acesso ao repositório, ao board do Azure DevOps
                  e às especificações de design. Pegava tasks, implementava, abria PRs e atualizava o board
                  de forma autônoma.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Como funcionou</p>
                <p className={styles.infoCardText}>
                  O PO escrevia as tasks no Azure DevOps. O Dev Virtual as lia, executava e devolvia
                  o resultado. Nenhum dev humano no loop de implementação — só revisão de PR
                  e decisões de produto.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Meu papel</p>
                <p className={styles.infoCardText}>
                  Responsável pelo fluxo de telas, componentes e handoff para o Dev Virtual.
                  As specs precisavam ser muito precisas — o agente não interpreta ambiguidade
                  da mesma forma que um dev humano.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>O produto</p>
                <p className={styles.infoCardText}>
                  Dashboards de market share por SKU e segmento, tracking de concorrentes,
                  sell-out com granularidade regional e alertas automáticos para variações fora da curva.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>Do brief ao board<br />em horas.</h2>
            <p className={styles.prose}>
              O fluxo foi intencionalmente enxuto. Cada decisão de produto virava um design,
              cada design virava uma task, cada task era pega pelo Dev Virtual e implementada.
              O ciclo inteiro — da ideia ao código rodando — acontecia no mesmo dia.
            </p>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDay}>Dias 1–3</span>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineTitle}>Brief, escopo e arquitetura de informação</p>
                  <p className={styles.timelineText}>
                    Definição dos módulos principais com PO e Head de Produto. Mapeamento dos dados
                    disponíveis via integrações existentes. Primeiros wireframes de estrutura.
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDay}>Dias 4–8</span>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineTitle}>Design e handoff contínuo</p>
                  <p className={styles.timelineText}>
                    Telas no Figma com specs detalhadas para o Dev Virtual. Cada componente documentado
                    com estados, variações e comportamento esperado. Tasks abertas no Azure DevOps
                    à medida que os designs eram finalizados.
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDay}>Dias 9–13</span>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineTitle}>Implementação autônoma</p>
                  <p className={styles.timelineText}>
                    Dev Virtual executando tasks em paralelo — componentes de visualização, filtros,
                    integrações de dados e responsividade. Ciclos de revisão rápidos sem bloqueios humanos.
                  </p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineDay}>Dias 14–15</span>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineTitle}>Beta e ajustes finais</p>
                  <p className={styles.timelineText}>
                    Testes internos com dados reais de clientes Farma. Correções pontuais e preparação
                    para apresentação comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que mudou<br />na forma de trabalhar.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>Design precisa ser mais preciso, não mais rápido.</strong> Com o Dev Virtual
                  no lugar de um dev humano, a ambiguidade no design virava bug direto em produção.
                  Aprendi a especificar estados, margens e comportamentos que antes ficavam implícitos.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>O gargalo deixou de ser a implementação.</strong> Com o Dev Virtual cobrindo
                  a execução, as decisões de produto e design viraram o ritmo do projeto. Nenhum sprint
                  travou por fila de desenvolvimento.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>15 dias é suficiente para validar uma aposta de produto.</strong> O beta
                  não era perfeito — mas era real, rodando com dados reais, e suficiente para gerar
                  feedback qualificado de clientes antes de qualquer investimento maior.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
