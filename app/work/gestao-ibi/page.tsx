"use client"
import styles from "./page.module.css"
import Link from "next/link"

export default function GestaoIbiCase() {
  return (
    <div className={styles.page}>

      {/* Top nav */}
      <nav className={styles.topNav}>
        <Link href="/#projects" className={styles.back}>← Voltar</Link>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillBlue}`}>Product Design + Dev</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pill}>React · Supabase · Vercel</span>
          <span className={styles.pill}>Educação</span>
        </div>

        <h1 className={styles.heroTitle}>Gestão IBI</h1>
        <p className={styles.heroSub}>
          Plataforma de gestão de projetos educacionais para o Instituto Brasil-Israel —
          do portfólio de projetos ao relatório final, com orçamento, tarefas, calendário e avaliações.
        </p>

        {/* Browser mockup placeholder */}
        <div className={styles.browserMock}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span /><span /><span />
            </div>
            <div className={styles.browserUrl}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="0.75"/><path d="M5 1C5 1 3.5 2.8 3.5 5s1.5 4 1.5 4M5 1s1.5 1.8 1.5 4S5 9 5 9M1 5h8" stroke="currentColor" strokeWidth="0.75"/></svg>
              gestao-ibi.vercel.app
            </div>
            <div className={styles.browserActions}>
              <span />
            </div>
          </div>
          <div className={styles.browserScreen}>
            <div className={styles.browserPlaceholder}>
              <div className={styles.placeholderApp}>
                <div className={styles.placeholderSidebar}>
                  <div className={styles.plLogoBlock} />
                  <div className={styles.plNavItem} style={{ width: '70%', opacity: 0.6 }} />
                  <div className={styles.plNavItem} style={{ width: '55%', opacity: 0.4 }} />
                  <div className={styles.plNavItem} style={{ width: '65%', opacity: 0.3 }} />
                  <div className={styles.plNavItem} style={{ width: '50%', opacity: 0.25 }} />
                  <div className={styles.plNavItem} style={{ width: '60%', opacity: 0.2 }} />
                </div>
                <div className={styles.placeholderMain}>
                  <div className={styles.plHeader} />
                  <div className={styles.plCards}>
                    <div className={styles.plCard} />
                    <div className={styles.plCard} />
                    <div className={styles.plCard} />
                  </div>
                  <div className={styles.plTable}>
                    <div className={styles.plRow} style={{ width: '100%' }} />
                    <div className={styles.plRow} style={{ width: '90%' }} />
                    <div className={styles.plRow} style={{ width: '95%' }} />
                    <div className={styles.plRow} style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.coverNote}>
          Representação da interface — as telas reais não podem ser publicadas.
        </p>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>módulos integrados</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>0</span>
            <span className={styles.statLabel}>ferramenta de gestão antes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>~2</span>
            <span className={styles.statLabel}>semanas do spec ao deploy</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>em português (código e UI)</span>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Product Designer + Dev</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Stack</span>
            <span className={styles.sidebarValue}>React · TypeScript · Supabase · Vite</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Cliente</span>
            <span className={styles.sidebarValue}>Instituto Brasil-Israel</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Domínio</span>
            <span className={styles.sidebarValue}>Educação · Gestão de Projetos</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Deploy</span>
            <span className={styles.sidebarValue}>Vercel</span>
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.content}>

          <div className={styles.disclosure}>
            <svg className={styles.disclosureIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="7.8" width="11" height="7.7" rx="1.6" stroke="#534AB7" strokeWidth="1.3"/>
              <path d="M6 7.8V5.6a3 3 0 016 0v2.2" stroke="#534AB7" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <div>
              <p className={styles.disclosureTitle}>Por que não há telas reais neste case</p>
              <p className={styles.disclosureText}>
                A plataforma do Instituto Brasil-Israel trabalha com dados sensíveis de projetos
                educacionais — pessoas envolvidas, orçamentos, avaliações e documentos internos.
                Nada disso pode ser publicado, nem desfocado: imagem borrada ainda carrega estrutura,
                nomes parciais e valores legíveis sob zoom.
                <br /><br />
                Por isso este case usa representações esquemáticas da interface e descreve as decisões
                de produto em texto. A única exceção é a tela da Ibira com a lista de conversas vazia,
                mais abaixo — ela não exibe nenhum dado. Se quiser ver o sistema funcionando, posso
                apresentar em uma conversa, com autorização do instituto.
              </p>
            </div>
          </div>

          {/* Contexto */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Projetos educacionais<br />geridos no improviso.</h2>
            <p className={styles.prose}>
              O Instituto Brasil-Israel coordena projetos educacionais com múltiplas frentes
              simultâneas — cada um com orçamento, cronograma, equipe e avaliações próprias.
              Antes da plataforma, tudo era gerido com planilhas, e-mails e documentos soltos.
              Informação fragmentada, sem visão consolidada e sem forma de acompanhar progresso
              em tempo real.
            </p>
          </div>

          {/* Problema */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>Sem visibilidade,<br />sem controle.</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Informação fragmentada</p>
                <p className={styles.problemText}>Dados de projetos espalhados entre planilhas, pastas e e-mails. Ninguém tinha uma visão unificada do portfólio.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.25"/><path d="M5 5h6M5 8h4M5 11h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <p className={styles.problemTitle}>Sem acompanhamento de tarefas</p>
                <p className={styles.problemText}>Não havia forma estruturada de atribuir, priorizar ou acompanhar tarefas por projeto — tudo dependia de follow-ups manuais.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v4l3 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.25"/></svg>
                </div>
                <p className={styles.problemTitle}>Orçamento opaco</p>
                <p className={styles.problemText}>Gastos por projeto não eram rastreados de forma centralizada — decisões financeiras dependiam de consolidações manuais demoradas.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.25"/></svg>
                </div>
                <p className={styles.problemTitle}>Avaliações desconectadas</p>
                <p className={styles.problemText}>Stakeholders precisavam avaliar projetos, mas o processo era por formulário externo — sem vínculo com o projeto, sem histórico.</p>
              </div>
            </div>
          </div>

          {/* Solução */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Solução</p>
            <h2 className={styles.sectionTitle}>Plataforma completa,<br />feita sob medida.</h2>
            <p className={styles.prose}>
              Desenhei e desenvolvi uma plataforma web que centraliza toda a gestão de projetos
              educacionais do IBI — cada módulo resolve um problema específico que existia antes.
            </p>

            <div className={styles.solutionList}>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>01</span>
                <div>
                  <p className={styles.solutionTitle}>Portfólio de projetos</p>
                  <p className={styles.solutionText}>Visão consolidada de todos os projetos com status, progresso e ficha detalhada — substitui a navegação entre múltiplas planilhas.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>02</span>
                <div>
                  <p className={styles.solutionTitle}>Gestão de tarefas</p>
                  <p className={styles.solutionText}>Tarefas vinculadas a projetos com atribuição, prioridade e status. Cada tarefa tem ficha própria com descrição, comentários e histórico.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>03</span>
                <div>
                  <p className={styles.solutionTitle}>Controle de orçamento</p>
                  <p className={styles.solutionText}>Módulo financeiro por projeto com registro de despesas, acompanhamento de saldo e visibilidade em tempo real do consumo do orçamento.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>04</span>
                <div>
                  <p className={styles.solutionTitle}>Calendário integrado</p>
                  <p className={styles.solutionText}>Visualização temporal de marcos e entregas — datas importantes visíveis para toda a equipe, sem depender de agenda pessoal.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>05</span>
                <div>
                  <p className={styles.solutionTitle}>Avaliações com link público</p>
                  <p className={styles.solutionText}>Sistema de avaliações onde stakeholders recebem um link único para avaliar o projeto — sem login, com dados vinculados automaticamente ao projeto correto.</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <span className={styles.solutionNum}>06</span>
                <div>
                  <p className={styles.solutionTitle}>Relatórios com export</p>
                  <p className={styles.solutionText}>Geração de relatórios consolidados com exportação para PDF e Excel — pronto para prestação de contas e apresentações.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Processo */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>Do documento de spec<br />ao produto funcional.</h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Especificação funcional</p>
                  <p className={styles.timelineText}>Partiu de um documento detalhado com requisitos de cada módulo — portfólio, tarefas, orçamento, calendário, avaliações e relatórios. Isso definiu o escopo e a arquitetura.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Arquitetura e modelagem</p>
                  <p className={styles.timelineText}>Definição do schema no Supabase (auth com roles, RLS, tabelas de projetos, tarefas, orçamento, avaliações), rotas e componentes.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Build com Claude Code</p>
                  <p className={styles.timelineText}>Implementação completa em React + TypeScript com múltiplas sessões no Claude Code — módulo por módulo, com testes e ajustes no fluxo.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineBody}>
                  <p className={styles.timelineTitle}>Deploy e entrega</p>
                  <p className={styles.timelineText}>Deploy na Vercel com Supabase em produção. Plataforma entregue funcional, com gestão de usuários e permissões por papel (admin / usuário).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ibira */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Ibira</p>
            <h2 className={styles.sectionTitle}>Uma agente de IA<br />dentro da plataforma.</h2>
            <p className={styles.prose}>
              Além dos módulos de gestão, a plataforma tem a <strong>Ibira</strong> — uma agente de IA
              especialista no contexto do instituto. Ela lê os dados que já estão no produto,
              consolida o que está espalhado entre projetos, tarefas e avaliações, interpreta
              resultados e produz material pronto para a coordenação e a diretoria.
              <br /><br />
              O ganho não é responder pergunta: é tirar da equipe o trabalho de juntar número de
              seis módulos diferentes toda vez que alguém precisa de um panorama. A Ibira conversa
              em linguagem natural, trabalha por conversas e grupos, e entrega o resultado no formato
              que a reunião pede.
            </p>

            <div className={styles.shotWrap}>
              <div className={styles.shotBar}>
                <span className={styles.shotDot} />
                <span className={styles.shotDot} />
                <span className={styles.shotDot} />
              </div>
              <img
                src="/work/gestao-ibi/ibira.webp"
                alt="Tela de conversas da Ibira, a agente de IA da plataforma do IBI, sem nenhuma conversa iniciada"
                className={styles.shotImg}
              />
            </div>
            <p className={styles.coverNote}>
              Esta é a única tela real publicada no case: a lista de conversas vazia, sem nenhum
              dado do instituto. Serve só para mostrar como a agente aparece dentro da plataforma.
            </p>
          </div>

          {/* Aprendizados */}
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>Produto completo,<br />entregue com IA.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>A spec define o produto.</strong> Ter um documento funcional detalhado antes
                  de codar fez toda a diferença — cada módulo tinha escopo claro, o que acelerou
                  a implementação e evitou retrabalho.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Claude Code para produtos complexos.</strong> Não foi um site estático —
                  foi uma plataforma com auth, roles, banco relacional, CRUD completo e múltiplos módulos.
                  O Claude Code funcionou como parceiro de engenharia, não só de prototipação.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Supabase como backend completo.</strong> Auth nativo, RLS, real-time e
                  storage num único serviço — permitiu focar no produto sem montar infraestrutura.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

      <footer className={styles.footer}>
        <p>
          A única imagem real da plataforma neste case é a tela de conversas vazia da Ibira, que não
          exibe nenhum dado. Todo o resto são representações esquemáticas criadas para o portfólio:
          os dados do Instituto Brasil-Israel — projetos, pessoas, orçamentos e avaliações —
          permanecem confidenciais.
        </p>
      </footer>

    </div>
  )
}
