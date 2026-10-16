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
          <span className={`${styles.pill} ${styles.pillGreen}`}>Projeto experimental</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pill}>UX + Dev</span>
          <span className={styles.pill}>Claude Code · Vercel</span>
        </div>

        <h1 className={styles.heroTitle}>Ohana Pets</h1>
        <p className={styles.heroSub}>
          Um amigo dono de um pet care, uma empresa real rodando só pelo Instagram e nenhum
          cliente, prazo ou stakeholder no caminho. Sem ninguém pedindo nada, dava para fazer a
          pergunta que não cabe no trabalho: quanto de produto uma designer entrega sozinha,
          do brief ao site no ar?
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
            <img src="/work/ohana/home.webp" alt="Site Ohana Pets" className={styles.browserImg} />
          </div>
        </div>

        {/* Stats */}
        <p className={styles.statsLabel}>O ponto de partida</p>
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
            <h2 className={styles.sectionTitle}>Ninguém<br />tinha pedido.</h2>
            <p className={styles.prose}>
              A Ohana Pets é de um amigo meu. Opera desde 2022 — mais de 30 pets atendidos, avaliação
              5 estrelas, clientes fiéis — e toda a captação passava pelo Instagram. Sem site, a
              empresa não aparecia no Google e não tinha onde centralizar serviços e preços. O boca a
              boca funcionava, mas não escalava.
              <br /><br />
              Não houve contratação, briefing formal nem prazo. E é justamente isso que torna o
              projeto interessante para mim: sem cliente para aprovar e sem escopo para proteger,
              o único critério que sobra é <em>isso resolve o problema dele?</em> Virou o lugar onde
              eu testei trabalhar como time de um — pesquisa, decisão, escrita, código e deploy —
              antes de levar esse modo de trabalho para dentro do produto.
              <br /><br />
              Vale dizer com todas as letras: <strong>foi um experimento, e eu não acompanhei o
              depois</strong>. Entreguei o site no ar e não sei se ele segue operando, se virou o
              canal de contato do negócio ou se o meu amigo mudou de ideia. Este case é sobre as
              decisões que tomei, não sobre resultado de negócio.
            </p>
          </div>

          {/* Problema */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>Invisível para<br />quem ainda não te conhece.</h2>
            <p className={styles.prose}>
              O boca a boca resolve o cliente que já ouviu falar da Ohana. Para todo o resto,
              a empresa simplesmente não existia — e os dois motivos eram bem concretos.
            </p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.25"/><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Quem procura não acha</p>
                <p className={styles.problemText}>
                  Instagram não é indexado pelo Google. Buscas por “dog walker Rio” ou “hospedagem
                  pet” nunca chegavam à Ohana — e é assim que procura quem ainda não conhece ninguém
                  do ramo.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><path d="M5 6h6M5 8.5h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Quem acha não decide</p>
                <p className={styles.problemText}>
                  Serviço e preço estavam espalhados pelo feed. Para saber quanto custa, a pessoa
                  tinha que mandar DM — pedir informação básica a um estranho antes de confiar
                  o próprio cachorro a ele.
                </p>
              </div>
            </div>
          </div>

          {/* Solução */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Decisões</p>
            <h2 className={styles.sectionTitle}>Duas escolhas<br />que definiram o site.</h2>
            <p className={styles.prose}>
              O site é de uma página só. Com esse tamanho, quase tudo é consequência de duas
              decisões — e as duas tinham um caminho mais confortável que eu não segui.
            </p>

            <div className={styles.solutionList}>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>01</span>
                <div>
                  <p className={styles.solutionTitle}>Preço na página, não sob consulta</p>
                  <p className={styles.solutionText}>
                    “Sob consulta” é o padrão do setor e é mais seguro para quem vende: não assusta
                    e abre conversa. Mas o problema da Ohana não era negociar melhor — era ser
                    descartada antes da conversa. Cada serviço ganhou preço inicial e o que está
                    incluso. Perde-se margem de negociação; ganha-se a pessoa que não ia mandar
                    DM só para perguntar quanto custa.
                  </p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>02</span>
                <div>
                  <p className={styles.solutionTitle}>WhatsApp como conversão, não formulário</p>
                  <p className={styles.solutionText}>
                    Formulário me daria dados estruturados do pet e um funil bonito de medir. Mas
                    ele exige que alguém abra um e-mail, responda e mantenha o hábito — e o dono
                    já atendia tudo pelo WhatsApp, bem. Desenhar um processo novo para uma operação
                    de uma pessoa é desenhar um processo que morre na segunda semana. O CTA leva
                    direto para a conversa que já existia.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.prose} style={{ marginTop: 28 }}>
              O resto seguiu dessas duas: proposta de valor e prova social antes de qualquer CTA,
              e os diferenciais que ele já oferecia — rastreamento ao vivo e foto diária do pet —
              ditos na página, em vez de aparecerem só quando o cliente já estava dentro.
            </p>
          </div>

          {/* Screenshots do site */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Site</p>
            <h2 className={styles.sectionTitle}>Resultado final.</h2>
            <div className={styles.screenshotGrid}>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src="/work/ohana/home.webp" alt="Home do site" className={styles.screenshotImg} />
                <p className={styles.screenshotCaption}>Homepage completa</p>
              </div>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src="/work/ohana/precos.webp" alt="Preços e serviços" className={styles.screenshotImg} />
                <p className={styles.screenshotCaption}>Serviços com preços e diferenciais</p>
              </div>
              <div className={styles.screenshotWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src="/work/ohana/hero-2.webp" alt="Hero do site" className={styles.screenshotImg} />
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
                  <p className={styles.timelineTitle}>Conversa com o dono</p>
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

          {/* Resultado */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Resultado</p>
            <h2 className={styles.sectionTitle}>O que dá pra afirmar<br />— e o que não dá.</h2>
            <p className={styles.prose}>
              Projeto sem cliente não tem relatório de resultado, e não vou inventar um.
              Não acompanhei o site depois da entrega: não sei quanta gente chegou por ele, se o
              negócio continua usando ou se ele ainda está no ar hoje. O que eu posso afirmar é o
              que foi entregue.
            </p>
            <div className={styles.outcomes}>
              <div className={styles.outcome}>
                <span className={styles.outcomeMark}>✓</span>
                <p className={styles.outcomeText}>
                  <strong>Saiu do Instagram.</strong> Endereço próprio, conteúdo indexável e um
                  link que cabe em cartão, bio e indicação.
                </p>
              </div>
              <div className={styles.outcome}>
                <span className={styles.outcomeMark}>✓</span>
                <p className={styles.outcomeText}>
                  <strong>Preço respondido antes da pergunta.</strong> Quem chega sabe o que custa
                  e o que está incluso sem falar com ninguém.
                </p>
              </div>
              <div className={styles.outcome}>
                <span className={styles.outcomeMark}>✓</span>
                <p className={styles.outcomeText}>
                  <strong>Entregue sem equipe.</strong> Conversa, estrutura, texto, código e deploy
                  por uma pessoa, em um ciclo — que era a pergunta do experimento.
                </p>
              </div>
              <div className={styles.outcome}>
                <span className={styles.outcomeMarkOpen}>—</span>
                <p className={styles.outcomeText}>
                  <strong>O que eu não sei.</strong> Se o site está operando hoje, quanto do
                  contato passou a vir dele e qual o volume de busca orgânica. Entreguei e não
                  acompanhei — prefiro dizer isso a chutar número.
                </p>
              </div>
            </div>
          </div>

          {/* Aprendizados */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que eu levei<br />daqui pro trabalho.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>Sem cliente, o único critério é o problema.</strong> Não havia quem
                  aprovasse, então não dava para me esconder atrás de “foi o que pediram”. Toda
                  escolha precisava se justificar sozinha — e isso é um padrão que passei a cobrar
                  de mim também onde existe cliente.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Desenhar para quem vai operar, não para quem vai ver.</strong> O
                  formulário era a decisão mais defensável num portfólio e a pior para uma operação
                  de uma pessoa. Negócio pequeno não tem folga para absorver processo novo, e isso
                  vale igual para squad pequeno.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>É no negócio pequeno que a UX aparece mais rápido.</strong> Num produto
                  grande, uma decisão ruim se dilui em métrica. Aqui, preço escondido é o cliente
                  inteiro que não volta — o efeito de cada escolha fica visível no tamanho real.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>04</span>
                <p className={styles.learningText}>
                  <strong>Projeto sem ninguém pedindo é onde se testa o modo de trabalho.</strong>
                  Fazer sozinha o ciclo inteiro — conversa, estrutura, texto, código e deploy —
                  deixou de ser teoria aqui antes de virar como eu trabalho nos produtos da Plannera.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
