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
          <span className={`${styles.pill} ${styles.pillAccent}`}>Experimento de ferramenta</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pill}>Workshop de 2 horas</span>
        </div>
        <h1 className={styles.heroTitle}>Co-Founders<br />Match</h1>
        <p className={styles.heroSub}>
          No dia a dia eu trabalho inteiramente no Claude Code — desenho e implemento no mesmo
          lugar. Então eu não sabia responder uma pergunta simples: e as ferramentas de IA do
          Figma, fazem o quê? Usei um workshop de duas horas para descobrir, com um brief de
          produto como desculpa. O protótipo é o subproduto; o que eu estava medindo era a
          ferramenta.
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
            <span className={styles.sidebarLabel}>O que é</span>
            <span className={styles.sidebarValue}>Experimento pessoal de ferramenta</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Duração</span>
            <span className={styles.sidebarValue}>Uma sessão de 2 horas</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Pergunta</span>
            <span className={styles.sidebarValue}>IA do Figma x Claude Code</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Figma · Chat do Figma · Figma Make</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Saída</span>
            <span className={styles.sidebarValue}>Protótipo navegável — não é produto</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ano</span>
            <span className={styles.sidebarValue}>2026</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Testando a ferramenta,<br />não entregando produto.</h2>
            <p className={styles.prose}>
              Hoje todo o meu processo passa pelo Claude Code: desenho, escrevo e implemento no
              mesmo ambiente. É uma escolha que funciona, mas é também uma bolha — eu estava
              opinando sobre IA no design sem ter usado o que o Figma lançou.
              <br /><br />
              Um workshop de <strong>duas horas</strong> virou o laboratório. Peguei um brief de
              produto qualquer, usei o <strong>chat do Figma</strong> para gerar e iterar os frames e
              o <strong>Figma Make</strong> para as interações, e fui observando onde cada um ajuda e
              onde atrapalha. Nada aqui foi para produção, não teve usuário, não teve validação —
              <strong> é um experimento de ferramenta, e o protótipo é só o resíduo dele</strong>.
            </p>
            <img loading="lazy" decoding="async" src="/work/cofounders/screen-figma.webp" alt="Telas criadas no Figma com o chat do Figma" className={styles.caseImg} />
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
                    <img loading="lazy" decoding="async" src="/work/cofounders/discover-swipe.webp" alt="Tela de swipe" className={styles.iphoneScreen} />
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
                    <img loading="lazy" decoding="async" src="/work/cofounders/swipe-right-state.webp" alt="Stamp CURTIR" className={styles.iphoneScreen} />
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
                    <img loading="lazy" decoding="async" src="/work/cofounders/its-a-match.webp" alt="É um Match!" className={styles.iphoneScreen} />
                  </div>
                </div>
                <p className={styles.phoneCaption}>Celebração com fotos sobrepostas e CTA de mensagem</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>O que eu queria<br />descobrir.</h2>
            <p className={styles.prose}>
              A comparação não é “qual é melhor”, e sim onde cada ferramenta se encaixa no meu
              processo. Claude Code me dá o produto rodando; a IA do Figma me dá a conversa visual
              antes de existir produto. São momentos diferentes.
            </p>
            <div className={styles.twoCol} style={{ marginTop: 24 }}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Chat do Figma — onde ganha</p>
                <p className={styles.infoCardText}>
                  Sair do zero. Gerar frames, aplicar componentes e manter consistência entre telas
                  sem layout manual é muito mais rápido do que eu faria na mão — e o resultado já
                  nasce editável no arquivo, não como imagem.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Chat do Figma — onde perde</p>
                <p className={styles.infoCardText}>
                  Ele compõe bem e decide mal. Hierarquia, o que merece destaque e o que deveria sair
                  da tela continuaram sendo escolha minha — e corrigir a decisão dele custou mais do
                  que teria custado decidir antes.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Figma Make — onde ganha</p>
                <p className={styles.infoCardText}>
                  Interação sem código. Swipe, transições e o overlay de match ficaram navegáveis
                  dentro do ambiente de design, o que encurta muito a distância entre ideia e algo
                  que dá para colocar na frente de alguém.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Comparando com o Claude Code</p>
                <p className={styles.infoCardText}>
                  O Figma me deu a conversa visual em duas horas, mas o que sai dali não vira
                  produto. No Claude Code eu demoro mais para a primeira tela e termino com código
                  que roda. Para explorar, Figma; para construir, Claude Code.
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
                  <strong>Não dá para ter opinião sobre ferramenta que você não usou.</strong> Eu
                  defendo o Claude Code no meu processo, e defender fica mais honesto depois de ter
                  testado a alternativa. Duas horas foram suficientes para trocar achismo por
                  critério.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>IA comprime execução, não decisão.</strong> Em qualquer uma das duas
                  ferramentas, o que acelerou foi produzir. Escolher o fluxo, cortar tela e definir
                  hierarquia continuou custando o mesmo tempo — e é onde o trabalho está.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Ferramenta diferente, momento diferente.</strong> Saí com uma regra que uso
                  hoje: exploração e conversa com quem não lê código, Figma; qualquer coisa que
                  precise virar produto, Claude Code. Antes eu teria dito “tanto faz”.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
