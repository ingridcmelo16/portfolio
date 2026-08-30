import styles from "./page.module.css"
import Link from "next/link"

export default function CoFoundersCase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>Product Design</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pill}>Workshop · IA + Design</span>
        </div>
        <h1 className={styles.heroTitle}>Co-Founders<br />Match</h1>
        <p className={styles.heroSub}>
          Plataforma que conecta fundadores, devs, designers e especialistas —
          do brief ao protótipo navegável em uma única sessão de workshop,
          usando o chat do Figma para design e o Figma Make para as interações.
        </p>

        <div className={styles.heroCover}>
          <div className={styles.coverOrb1} />
          <div className={styles.coverOrb2} />
          <div className={styles.coverInner}>
            <img src="/work/cofounders/logo.svg" alt="Co-Founders Match logo" className={styles.coverLogo} />
            <p className={styles.coverTagline}>Matching · Co-Founders · IA</p>
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
            <span className={styles.sidebarLabel}>Contexto</span>
            <span className={styles.sidebarValue}>Workshop — IA + Design</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Figma · Chat do Figma · Figma Make</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Telas entregues</span>
            <span className={styles.sidebarValue}>Protótipo navegável</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ano</span>
            <span className={styles.sidebarValue}>2026</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Um brief, uma sessão,<br />um produto do zero.</h2>
            <p className={styles.prose}>
              Em um workshop de design com IA, recebi um brief e precisei entregar um protótipo navegável
              em uma única sessão — do conceito às telas principais. Usei o <strong>chat do Figma</strong> para
              gerar e iterar os frames diretamente no arquivo, e o <strong>Figma Make</strong> para criar as
              interações e tornar o protótipo navegável.
              <br /><br />
              O objetivo era demonstrar na prática como IA pode comprimir o ciclo de design sem sacrificar
              a qualidade — passando de brief a protótipo clicável em uma única sessão.
            </p>
            <img src="/work/cofounders/screen-figma.png" alt="Telas criadas no Figma com o chat do Figma" className={styles.caseImg} />
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>O briefing.</h2>
            <p className={styles.prose}>
              <em>"Pessoas têm ideias mas não encontram sócios. Crie uma plataforma que conecte
              fundadores, desenvolvedores, designers e especialistas."</em>
            </p>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>O gap real</p>
                <p className={styles.infoCardText}>
                  A maioria das ideias morre na fase de formação de time — não por falta de talento,
                  mas por dificuldade de encontrar co-fundadores complementares.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>O insight</p>
                <p className={styles.infoCardText}>
                  O modelo do Tinder resolve um problema de descoberta com fricção baixa.
                  O mesmo padrão funciona para conectar talentos em early-stage.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Quem usa</p>
                <p className={styles.infoCardText}>
                  Fundadores com ideia mas sem time técnico; devs e designers que querem entrar
                  cedo em um projeto com equity.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Decisão de design</p>
                <p className={styles.infoCardText}>
                  Swipe como mecânica central — mostra perfil completo, habilidades e experiência
                  antes de qualquer decisão. Match só acontece quando os dois lados querem.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Telas</p>
            <h2 className={styles.sectionTitle}>Três telas,<br />uma jornada navegável.</h2>
            <p className={styles.prose}>
              O fluxo cobre o momento de descoberta até a conexão confirmada — swipe para explorar,
              overlay quando há match mútuo, e perfil completo para aprofundar antes de iniciar o contato.
              Todas as transições foram prototipadas no Figma Make.
            </p>

            <div className={styles.phonesRow}>
              <div className={styles.phoneWrap}>
                <p className={styles.phoneLabel}>01 · Descoberta</p>
                <div className={styles.iphone}>
                  <div className={styles.iphoneSide} />
                  <div className={styles.iphoneInner}>
                    <div className={styles.iphoneIsland} />
                    <img src="/work/cofounders/discover-swipe.png" alt="Tela de swipe" className={styles.iphoneScreen} />
                  </div>
                </div>
                <p className={styles.phoneCaption}>Card stack com foto, role, habilidades e botões de ação</p>
              </div>
              <div className={styles.phoneWrap}>
                <p className={styles.phoneLabel}>02 · Swipe direita</p>
                <div className={styles.iphone}>
                  <div className={styles.iphoneSide} />
                  <div className={styles.iphoneInner}>
                    <div className={styles.iphoneIsland} />
                    <img src="/work/cofounders/swipe-right-state.png" alt="Stamp CURTIR" className={styles.iphoneScreen} />
                  </div>
                </div>
                <p className={styles.phoneCaption}>Stamp "CURTIR" ao arrastar para a direita</p>
              </div>
              <div className={styles.phoneWrap}>
                <p className={styles.phoneLabel}>03 · Match</p>
                <div className={styles.iphone}>
                  <div className={styles.iphoneSide} />
                  <div className={styles.iphoneInner}>
                    <div className={styles.iphoneIsland} />
                    <img src="/work/cofounders/its-a-match.png" alt="É um Match!" className={styles.iphoneScreen} />
                  </div>
                </div>
                <p className={styles.phoneCaption}>Celebração com fotos sobrepostas e CTA de mensagem</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>Brief → Figma → Protótipo<br />em uma sessão.</h2>
            <p className={styles.prose}>
              O processo combinou dois recursos do próprio Figma: o <strong>chat do Figma</strong> para gerar
              e iterar os frames com IA, e o <strong>Figma Make</strong> para adicionar as interações e
              transformar os frames estáticos em um protótipo navegável.
              <br /><br />
              O resultado: decisões de produto que normalmente levam dias foram tomadas
              e materializadas em tempo real — com um protótipo clicável disponível
              antes do fim do workshop.
            </p>
            <div className={styles.twoCol} style={{ marginTop: 24 }}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Chat do Figma</p>
                <p className={styles.infoCardText}>
                  Gerou os frames, aplicou componentes e manteve consistência visual
                  entre as telas — sem trabalho manual de layout.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Figma Make</p>
                <p className={styles.infoCardText}>
                  Adicionou as interações de swipe, transições entre telas e o overlay
                  de match — tornando o protótipo navegável sem escrever código.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que ficou.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>IA comprime o ciclo, não substitui a decisão.</strong> Os agentes aceleraram
                  execução — mas a curadoria de quais telas fazem sentido e qual fluxo resolve o problema
                  ainda foi totalmente meu.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Brief claro é o maior acelerador.</strong> A clareza do problema definiu a velocidade
                  de tudo que veio depois. Com um brief vago, os agentes teriam gerado ruído.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Protótipo navegável muda a conversa.</strong> Sair do workshop com algo clicável —
                  não um slide, não um print — mudou o nível de feedback que foi possível coletar na hora.
                  O Figma Make tornou isso possível sem sair do ambiente de design.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
