import styles from "./page.module.css"
import Link from "next/link"

export default function ProcessoIACase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>Processo · IA</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pill}>Agentes internos</span>
        </div>
        <h1 className={styles.heroTitle}>Uma designer,<br />cinco frentes.</h1>
        <p className={styles.heroSub}>
          Sou a designer responsável por S&OP, S&OE/Abast, Inteligência de Mercado, Plataforma
          e Gaia, com uma estagiária de UX no time. Nessa conta, nenhum processo de design
          tradicional fecha. O que me permitiu sustentar cinco produtos não foi trabalhar mais
          rápido — foi parar de operar o processo na mão e começar a construir as ferramentas
          que o operam.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>frentes de produto</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>agentes em operação</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>dias do brief ao protótipo</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>plataforma onde todos rodam</span>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Desenho o processo e construo as ferramentas</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Frentes</span>
            <span className={styles.sidebarValue}>S&OP · S&OE/Abast · Inteligência de Mercado · Plataforma · Gaia</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Onde os agentes rodam</span>
            <span className={styles.sidebarValue}>Teresa Trilha — a Gaia interna de produto</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ferramentas</span>
            <span className={styles.sidebarValue}>Claude Code · Azure DevOps · Teams · Figma</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Status</span>
            <span className={styles.sidebarValue}>Em operação, evoluindo</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Ano</span>
            <span className={styles.sidebarValue}>2026</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>A conta que<br />não fecha.</h2>
            <p className={styles.prose}>
              Cinco frentes de produto, um time de design de duas pessoas — eu, responsável pelas
              cinco, e uma estagiária de UX. Na forma tradicional de trabalhar, isso significa
              escolher qual produto recebe pesquisa e qual recebe só tela, qual tem documentação e
              qual fica no conhecimento de quem implementou. E significa que a pessoa responsável
              vira gargalo: tudo precisa passar por ela, até para começar.
              <br /><br />
              A saída não foi dividir melhor o tempo. Foi mudar o que eu faço com ele: parei de
              executar cada etapa do processo manualmente em cinco lugares e passei a
              <strong> construir as ferramentas que executam</strong>, para que o processo exista
              nos cinco mesmo quando eu não estou olhando.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>O que ficou barato</p>
            <h2 className={styles.sectionTitle}>Execução deixou<br />de ser o gargalo.</h2>
            <p className={styles.prose}>
              Trabalho inteiramente no Claude Code: desenho e implemento no mesmo ambiente, sem
              handoff no meio. A consequência prática não é fazer a mesma coisa mais rápido —
              é que etapas que antes ocupavam semanas pararam de ocupar.
            </p>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Discovery que se preenche</p>
                <p className={styles.infoCardText}>
                  Os artefatos de pesquisa são preenchidos a partir da transcrição das entrevistas
                  e consolidados ao final. A síntese deixou de ser uma tarefa que eu adio para a
                  semana seguinte.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Protótipo em 2 dias</p>
                <p className={styles.infoCardText}>
                  Discovery, PRD e protótipo HTML interativo num único ciclo. O cliente discute
                  uma coisa navegável, não um slide.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Produto em 15 dias</p>
                <p className={styles.infoCardText}>
                  No Inteligência de Mercado, um Dev Virtual autônomo levou o produto do brief ao
                  beta com um time de três pessoas.{" "}
                  <Link href="/work/market-intel" className={styles.disclosureLink}>ver o case</Link>.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Tracking escrito no código</p>
                <p className={styles.infoCardText}>
                  Mapeei e implementei os eventos de todos os produtos direto no código, com
                  Claude Code — em vez de especificar para alguém implementar depois.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>O que ficou caro</p>
            <h2 className={styles.sectionTitle}>Errar também<br />ficou barato de produzir.</h2>
            <p className={styles.prose}>
              É aqui que a conversa sobre IA costuma parar cedo demais. Quando qualquer tela pode
              existir em um dia, <strong>produzir a tela errada também custa um dia</strong> — e
              descobrir que era a errada continua custando semanas. O gargalo não desapareceu,
              mudou de lugar: saiu da execução e foi para a decisão.
              <br /><br />
              Decisão, em cinco produtos, não se resolve com mais horas minhas. Se resolve com
              instrumento: alguma coisa que me diga onde está divergente, onde está inconsistente
              e onde o padrão não pegou — sem que eu precise abrir cinco repositórios para descobrir.
              Foi por isso que comecei a construir agentes.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>DesignOps</p>
            <h2 className={styles.sectionTitle}>Operação de design,<br />não caixa de ferramentas.</h2>
            <p className={styles.prose}>
              DesignOps é fazer o processo acontecer sem depender de uma pessoa estar presente.
              É exatamente o problema de cinco frentes: não adianta eu ter um bom critério se ele
              só se aplica quando eu abro o arquivo. Os quatro agentes são a camada que opera esse
              critério — eles cobrem a cadeia entre produzir uma tela e saber se ela seguiu o padrão.
              <br /><br />
              Repare em quem eles servem, porque é isso que os torna operação e não produtividade:
              <strong> dois existem para a estagiária de UX que eu mentoro trabalhar sem depender
              de mim</strong>, e dois existem para o sistema não se degradar sozinho. Nenhum foi
              feito para eu render mais.
              <br /><br />
              Todos moram na <strong>Teresa Trilha</strong>, a nossa Gaia interna de produto — a
              mesma plataforma de agentes que eu desenho para o cliente é onde eu opero. E o que
              eles produzem converge para a <strong>Central de UX</strong>, a iniciativa de
              DesignOps onde processo, governança e documentação dos squads ficam consolidados.
            </p>

            <div className={styles.mvp}>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>01</span>
                <div>
                  <p className={styles.mvpTitle}>Generalista de protótipos — reaproveita</p>
                  <p className={styles.mvpText}>
                    Protótipo construído para um cliente específico costuma morrer depois da
                    reunião. Este agente pega um HTML já feito no Claude Code e o torna genérico
                    para um setor — farma, alimentos e bebidas —, transformando material de
                    reunião em demo reutilizável. Quem usa é a estagiária.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>02</span>
                <div>
                  <p className={styles.mvpTitle}>Analista de UX — revisa</p>
                  <p className={styles.mvpText}>
                    Revisa o que a estagiária constrói <strong>antes de chegar em mim</strong>,
                    olhando premissas de design e heurísticas: o que está sendo seguido e o que
                    não está. É o agente que mais muda a dinâmica do time — ela recebe a primeira
                    crítica na hora, sem esperar a minha agenda, e o que chega para mim já passou
                    por uma camada. Mentoria deixou de depender de eu estar disponível.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>03</span>
                <div>
                  <p className={styles.mvpTitle}>Curador de padrões — define</p>
                  <p className={styles.mvpText}>
                    Varre o código dos produtos atrás de divergência semântica: a mesma ação
                    chamada de “exportar” num produto e “baixar” no outro, coisas que deveriam ser
                    iguais aparecendo de formas distintas. O foco é UX writing, e isso é incomum —
                    design system quase sempre governa pixel. Este governa vocabulário, que é
                    justamente o que faz o usuário sentir que trocou de sistema ao mudar de módulo.
                  </p>
                </div>
              </div>
              <div className={styles.mvpItem}>
                <span className={styles.mvpNum}>04</span>
                <div>
                  <p className={styles.mvpTitle}>Auditor de Design System — mede</p>
                  <p className={styles.mvpText}>
                    Lê o repositório pelo Azure DevOps, em modo somente leitura, e faz duas coisas:
                    sinaliza divergências — token que não existe, classe que não corresponde a
                    componente real, ícone fora do padrão, cor hardcoded — e gera o relatório de
                    adoção do sistema naquele produto. A fonte de verdade é o código-fonte real,
                    lido a cada execução, não um retrato da documentação. Ao final manda o resumo
                    no Teams e devolve o relatório completo em JSON.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Prova</p>
            <h2 className={styles.sectionTitle}>O dado do outro case<br />saiu daqui.</h2>
            <p className={styles.prose}>
              Governança de design system costuma ser opinião: “acho que o time está adotando”.
              No case do Plann Design System existem três números — 96,4% da interface do S&OP
              vinda do sistema, 86,2% do catálogo em uso, 78,9% dos componentes distintos.
              <strong> Nenhum deles veio de planilha: todos saíram do Auditor.</strong>
              <br /><br />
              Esse é o ponto que me interessa mais do que a existência dos agentes. A ferramenta
              não só economizou tempo — ela produziu a informação que mudou a minha leitura do
              produto. Foi medindo separado que ficou claro que o S&OE não estava atrasado, estava
              em outra curva de adoção, por não ter passado por migração de front.{" "}
              <Link href="/work/design-system" className={styles.disclosureLink}>ver os números</Link>.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Critério</p>
            <h2 className={styles.sectionTitle}>Por que Claude Code,<br />e não outra coisa.</h2>
            <p className={styles.prose}>
              Defender uma ferramenta sem ter usado a alternativa é preferência, não critério.
              Separei um workshop de duas horas para testar as ferramentas de IA do Figma contra
              o meu processo, e saí com uma regra que uso até hoje: para explorar e conversar com
              quem não lê código, Figma; para qualquer coisa que precise virar produto, Claude Code.{" "}
              <Link href="/work/cofounders" className={styles.disclosureLink}>ver o experimento</Link>.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Em aberto</p>
            <h2 className={styles.sectionTitle}>O problema que<br />ainda não resolvi.</h2>
            <p className={styles.prose}>
              Estou construindo o agente que reporta as métricas de produto para a empresa, e ele
              travou — não por limitação técnica. O dado existe e o tracking está implementado.
              O que eu ainda não resolvi é <strong>o que cada público precisa saber</strong>.
              <br /><br />
              Liderança, C-level e o time de CS olham o mesmo produto com perguntas diferentes, em
              profundidades diferentes, e um relatório que serve aos três não serve a nenhum. É um
              problema de design de informação e de audiência, não de automação — e por isso ele
              continua sendo meu, não do agente. É um bom resumo de onde o trabalho foi parar:
              a parte difícil voltou a ser decidir o que importa.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que isso<br />me ensinou.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>Ferramenta é produtividade; operação é escala.</strong> Usar IA acelera
                  o meu dia e para quando eu paro. Um agente que revisa, cura ou mede continua
                  rodando enquanto estou em outro squad — e é isso que faz DesignOps em cinco
                  frentes deixar de ser uma intenção.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Especificar para máquina é mais exigente, não menos.</strong> Um dev
                  humano cobre ambiguidade com bom senso; um agente a transforma em bug. Escrever
                  para agente me tornou mais precisa ao escrever para gente também.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Nem tudo deve ser delegado.</strong> O conteúdo das habilidades da Gaia é
                  escrito por outra área. Decisão de produto não sai da squad. E o relatório de
                  métricas travou exatamente no ponto em que a pergunta deixou de ser técnica.
                  Saber onde parar é parte do critério.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>04</span>
                <p className={styles.learningText}>
                  <strong>Ferramenta boa é a que outra pessoa usa.</strong> Metade dos agentes
                  foi construída para a estagiária, não para mim — e foram justamente esses que me
                  obrigaram a pensar em entrada, saída e erro, porque eu não estaria lá para
                  consertar no meio. O Analista de UX me ensinou o mais difícil: para um agente
                  revisar design, eu precisei escrever o que antes era só critério na minha cabeça.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
