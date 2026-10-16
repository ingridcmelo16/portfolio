import styles from "./page.module.css"
import Link from "next/link"


export default function GaiaCase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>Produto · IA</span>
          <span className={styles.pill}>Ago 2026</span>
          <span className={styles.pill}>Produto end-to-end</span>
        </div>
        <h1 className={styles.heroTitle}>Gaia</h1>
        <p className={styles.heroSub}>
          Uma plataforma de agentes de IA que trabalham dentro da operação do cliente —
          pela web, pelo Teams, pelo WhatsApp ou por e-mail.
          Cada cliente tem a sua Gaia — com nome, identidade e domínio próprios —
          rodando sobre a mesma arquitetura de habilidades. Aqui eu não sou só a designer:
          sou a dona do produto. Toco o roadmap, desenho e codo no Claude Code,
          em squad com o Head de Produto e o CTO da companhia.
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
              src="/work/gaia/home.webp"
              alt="Tela inicial da Gaia: a agente, o campo de pergunta e as conversas recentes"
              className={styles.coverImg}
            />
          </div>
        </div>
        <p className={styles.coverNote}>
          Ambiente de demonstração — “Nortex Alimentos” é um cliente fictício.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>12</span>
            <span className={styles.statLabel}>POCs que encabecei</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>telas da plataforma</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>cliente em operação plena</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>canais de atendimento</span>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Dona do produto — roadmap, design e código</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Squad</span>
            <span className={styles.sidebarValue}>Head de Produto · CTO · eu</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Escopo</span>
            <span className={styles.sidebarValue}>Roadmap · Plataforma · Design · Implementação</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Claude Code · Figma · HTML/CSS</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Canais</span>
            <span className={styles.sidebarValue}>Web · Teams · WhatsApp · Outlook</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Status</span>
            <span className={styles.sidebarValue}>Em clientes</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Data</span>
            <span className={styles.sidebarValue}>Agosto de 2026</span>
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
                Este case usa apenas informação que a Plannera já divulgou publicamente sobre a Gaia —
                nas publicações da empresa no LinkedIn —{" "}
                <a
                  className={styles.disclosureLink}
                  href="https://www.linkedin.com/posts/plannera_plannera-gaia-planejamentointegrado-activity-7493094345584140289-Nfgy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  o anúncio da Gaia
                </a>{" "}
                e{" "}
                <a
                  className={styles.disclosureLink}
                  href="https://lnkd.in/p/dhwVRhpp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  esta publicação
                </a>.
                Não há dado de cliente, nome de pessoa, número de operação, credencial ou estrutura
                interna de banco. Os exemplos de resposta foram reescritos com dados fictícios para
                ilustrar a decisão de design, em linha com a LGPD e com os acordos de confidencialidade
                dos clientes.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Uma analista que<br />conhece o negócio<br />do cliente.</h2>
            <p className={styles.prose}>
              Nos produtos B2B da Plannera, boa parte do trabalho do cliente não é olhar
              dashboard: é pedir um número, cruzar uma base, montar uma planilha, preparar
              um material para a reunião de ciclo. Trabalho que depende de contexto —
              o vocabulário da empresa, as políticas de estoque, os ciclos de planejamento.
              <br /><br />
              A Gaia nasceu para absorver esse trabalho. Não como um chatbot genérico
              acoplado ao produto, mas como <strong>uma agente por cliente</strong>, com nome
              próprio, domínio definido e acesso aos dados daquela operação.
            </p>

          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Meu papel</p>
            <h2 className={styles.sectionTitle}>Dona do produto,<br />não só das telas.</h2>
            <p className={styles.prose}>
              A Gaia é o produto que eu carrego de ponta a ponta. Não recebo escopo pronto
              para desenhar: eu defino o que entra no roadmap, desenho e implemento no Claude Code.
              A squad é de três — <strong>Head de Produto, CTO e eu</strong> — e a discussão de produto
              acontece entre nós, sem camada de tradução no meio. O conteúdo das habilidades é
              escrito por outra área; o que é meu é a estrutura em que ele entra.
            </p>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Roadmap</p>
                <p className={styles.infoCardText}>
                  Decido o que a Gaia passa a fazer e em que ordem — o que é comportamento
                  padrão do produto, o que fica na camada do cliente, o que entra na plataforma.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Design</p>
                <p className={styles.infoCardText}>
                  As telas e a arquitetura de habilidades: onde cada coisa vive, o que é padrão
                  e o que é do cliente. Neste produto, isso é tão interface quanto qualquer componente.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Código</p>
                <p className={styles.infoCardText}>
                  Implemento no Claude Code. Sem handoff: o que eu desenho é o que eu entrego,
                  e o ciclo de ajuste acontece no mesmo dia.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Squad</p>
                <p className={styles.infoCardText}>
                  Head de Produto e CTO como pares diretos. Decisão de produto, arquitetura
                  e implantação em cliente são conversas da mesma mesa.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Roadmap</p>
            <h2 className={styles.sectionTitle}>O que entrou<br />no MVP — e por quê.</h2>
            <p className={styles.prose}>
              A pergunta que definiu o recorte não foi “o que uma IA consegue fazer”, e sim
              <strong> o que precisa existir antes para qualquer resposta valer alguma coisa</strong>.
              Um agente que responde rápido e errado é pior que nenhum agente: queima a confiança
              na primeira semana e não volta.
            </p>

            <div className={styles.mvp}>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>01</span>
                <div>
                  <p className={styles.mvpTitle}>Conhecimento antes de conversa</p>
                  <p className={styles.mvpText}>
                    A primeira coisa a existir foi a interface que recebe conhecimento — o da
                    Plannera e o do cliente. Sem isso a Gaia responderia como qualquer assistente
                    genérico, e o diferencial inteiro do produto é falar a língua daquela operação.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>02</span>
                <div>
                  <p className={styles.mvpTitle}>Conectada ao banco do cliente</p>
                  <p className={styles.mvpText}>
                    Conhecimento sem dado vira opinião bem escrita. Com a conexão ao banco, a sessão
                    deixa de ser conversa sobre o negócio e passa a ser trabalho sobre o número real
                    daquele dia.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>03</span>
                <div>
                  <p className={styles.mvpTitle}>Artefato, não resposta</p>
                  <p className={styles.mvpText}>
                    O que o usuário precisa levar para a reunião não é um texto no chat: é a
                    apresentação e o dashboard. Entregar o artefato pronto foi o que transformou a
                    Gaia de “ferramenta que eu consulto” em “trabalho que já está feito”.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>04</span>
                <div>
                  <p className={styles.mvpTitle}>Tudo pode virar rotina</p>
                  <p className={styles.mvpText}>
                    Qualquer coisa que a Gaia constrói pode ser agendada. O gerente de supply recebe
                    o relatório dele às 8h, todo dia, sem pedir. É aqui que o produto para de depender
                    de alguém lembrar de usar — e foi por isso que rotinas entraram no MVP, não depois.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.prose} style={{ marginTop: 28 }}>
              Existe um roadmap depois desse ponto, e ele não cabe num portfólio: é estratégia de
              produto de uma empresa que ainda não anunciou. O que dá para dizer é a direção —
              quanto mais contexto da operação a Gaia acumula, menos ela depende de alguém formular
              a pergunta certa.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Desafio</p>
            <h2 className={styles.sectionTitle}>Personalizar sem<br />fragmentar.</h2>
            <p className={styles.prose}>
              Se cada cliente ganha a própria Gaia, o risco óbvio é ter oito produtos
              diferentes mantidos em paralelo — e nenhuma melhoria chegando a todos.
              Se tudo é padrão, nenhuma Gaia fala a língua do cliente.
              <br /><br />
              A resposta foi separar o que é <strong>produto</strong> do que é
              <strong> instância</strong> e do que é <strong>cliente</strong>, em três camadas
              com regra explícita de edição: arquivo padrão não se edita para atender cliente.
              Se o cliente precisa de algo diferente, isso vive na camada dele.
            </p>

            <div className={styles.layers}>
              <div className={styles.layer}>
                <span className={styles.layerName}>Padrão</span>
                <span className={styles.layerText}>
                  Igual em toda Gaia: princípios, limites, escopo, forma de trabalho,
                  como falar de dado, regras por canal. Copia e usa, sem editar.
                </span>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerName}>Da instância</span>
                <span className={styles.layerText}>
                  Nome, papel e especialidade daquela Gaia. Configurado na identidade,
                  não é arquivo — por isso não entra em conflito na atualização.
                </span>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerName}>Do cliente</span>
                <span className={styles.layerText}>
                  Skills acopladas àquela instância: a metodologia, o vocabulário,
                  os ciclos e a marca do cliente. Entram e saem sem tocar na camada padrão —
                  é o que faz cada Gaia falar a língua da empresa onde ela trabalha.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Produto</p>
            <h2 className={styles.sectionTitle}>Quatro telas para<br />acompanhar uma agente.</h2>
            <p className={styles.prose}>
              A plataforma existe para responder três perguntas que todo usuário faz sobre
              um agente: o que ela está fazendo agora, o que ela já me entregou,
              e o que ela faz sozinha sem eu pedir.
            </p>

            <div className={styles.screens}>
              <div className={styles.screen}>
                <p className={styles.screenName}>Visão geral</p>
                <p className={styles.screenText}>
                  O estado da Gaia num olhar: o que rodou, o que está pendente,
                  o que precisa de atenção.
                </p>
              </div>
              <div className={styles.screen}>
                <p className={styles.screenName}>Sessões</p>
                <p className={styles.screenText}>
                  O histórico de conversas, com o rastro do que foi pedido e do que
                  foi respondido — venha de qualquer um dos quatro canais.
                </p>
              </div>
              <div className={styles.screen}>
                <p className={styles.screenName}>Artefatos</p>
                <p className={styles.screenText}>
                  As entregas em si: planilhas, apresentações e dashboards gerados,
                  com a marca certa para cada cliente.
                </p>
              </div>
              <div className={styles.screen}>
                <p className={styles.screenName}>Rotinas</p>
                <p className={styles.screenText}>
                  O trabalho recorrente que a Gaia executa sozinha, no horário combinado,
                  sem ninguém pedir.
                </p>
              </div>
            </div>

            <div className={styles.embedWrap}>
              <iframe
                className={styles.embed}
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7500666302483730433"
                title="Vídeo da Gaia publicado no LinkedIn"
                frameBorder="0"
                allowFullScreen
              />
              <p className={styles.embedCaption}>
                A interface em uso, no vídeo publicado no LinkedIn —{" "}
                <a
                  href="https://www.linkedin.com/posts/diego-de-souza_planejamentointegrado-inteligenciaartificial-activity-7500666302483730433-ruDN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ver o post original
                </a>.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Resultado</p>
            <h2 className={styles.sectionTitle}>Onde a Gaia<br />está hoje.</h2>
            <p className={styles.prose}>
              <strong>Um cliente roda a Gaia em operação plena</strong> — ela faz parte do dia a dia
              do time de planejamento, não é piloto. Em paralelo, <strong>encabecei 12 POCs</strong>,
              e esse número é, para mim, o dado mais útil do projeto: cada POC é uma implantação em
              um negócio diferente, com vocabulário, ciclo e bases próprias.
              <br /><br />
              Foi essa repetição que provou a arquitetura de três camadas. Doze contextos distintos
              rodando sobre a mesma base padrão, sem virar doze produtos — era exatamente a aposta
              que o desenho precisava sustentar.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que esse projeto<br />me ensinou.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>Em produto com IA, o formato da resposta é interface.</strong> A
                  diferença entre uma resposta usável e uma que o usuário não consegue conferir
                  não estava na tela. Passei a tratar formato de resposta como requisito de
                  produto, levado para a squad como qualquer outro.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Personalização precisa de uma fronteira desenhada.</strong> As três
                  camadas não são arquitetura técnica: são uma decisão de produto sobre o que
                  pode ser customizado por cliente. Sem ela, cada implantação vira um fork.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Carregar o produto inteiro muda o design.</strong> Quando eu mesma
                  implemento e respondo pelo roadmap, a decisão de o que não fazer passa a ser
                  minha também — e isso aparece no produto como escopo mais curto e mais afiado.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>04</span>
                <p className={styles.learningText}>
                  <strong>Confiança se constrói mostrando o trabalho.</strong> Sessões, artefatos
                  e rotinas existem para o usuário ver o que a agente fez. Um agente que
                  entrega sem deixar rastro não é adotado — é auditado manualmente,
                  o que anula o ganho.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

      <footer className={styles.footer}>
        <p>
          As telas deste case são de um ambiente de demonstração. “Nortex Alimentos” é um
          cliente fictício, criado para demo — não representa nenhuma empresa real, e nenhum
          dado de cliente da Plannera aparece aqui.
        </p>
      </footer>

    </div>
  )
}
