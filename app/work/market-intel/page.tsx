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
          <span className={styles.pill}>Abr 2026</span>
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
          <div className={styles.coverShot}>
            <div className={styles.coverBar}>
              <span className={styles.coverDot} />
              <span className={styles.coverDot} />
              <span className={styles.coverDot} />
            </div>
            <img
              src="/work/market-intel/home.webp"
              alt="Tela inicial do Inteligência de Mercado: indicadores de share, movimentos do período e acessos rápidos"
              className={styles.coverImg}
            />
          </div>
        </div>
        <p className={styles.coverNote}>
          Instância de demonstração — todos os números e nomes de produto na tela são fictícios.
        </p>

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
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>clientes fechados a partir do beta</span>
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
            <span className={styles.sidebarLabel}>Data</span>
            <span className={styles.sidebarValue}>Abril de 2026</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.disclosure}>
            <svg className={styles.disclosureIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.5L15 4v5c0 3.6-2.5 6.5-6 7.5-3.5-1-6-3.9-6-7.5V4l6-2.5z" stroke="#534AB7" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M6.5 9l1.8 1.8L11.8 7" stroke="#534AB7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className={styles.disclosureTitle}>Sobre o que está publicado aqui</p>
              <p className={styles.disclosureText}>
                Este case usa apenas informação que a Plannera já divulgou publicamente sobre o
                produto. As telas vêm de uma instância de demonstração: os números, os nomes de
                produto e os percentuais são fictícios. Não há dado de cliente, nome de pessoa,
                número de operação, credencial ou estrutura interna de banco — em linha com a LGPD
                e com os acordos de confidencialidade dos clientes.
              </p>
            </div>
          </div>

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
            <p className={styles.sectionLabel}>Resultado</p>
            <h2 className={styles.sectionTitle}>O beta virou<br />argumento comercial.</h2>
            <p className={styles.prose}>
              O produto não foi construído para existir — foi construído para ser mostrado. E foi
              isso que aconteceu: <strong>dois clientes fecharam a partir do beta</strong>, num
              ciclo bem mais curto que o normal da empresa. Em B2B de supply chain o funil é longo,
              porque a decisão passa por várias áreas e quase sempre começa com uma apresentação.
              Aqui a conversa começou com o produto rodando.
              <br /><br />
              O aprendizado de produto é esse: quinze dias de construção compraram meses de
              discussão comercial. Não porque o beta era completo, mas porque ele era real.
            </p>
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

      <footer className={styles.footer}>
        <p>
          As telas deste case são de uma instância de demonstração. Todos os dados exibidos —
          share, volumes, nomes de produto e variações — são fictícios e não representam nenhum
          cliente real da Plannera.
        </p>
      </footer>

    </div>
  )
}
