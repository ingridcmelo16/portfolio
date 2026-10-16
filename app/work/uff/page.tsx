import styles from "./page.module.css"
import Link from "next/link"

export default function UFFCase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>UX Research</span>
          <span className={styles.pill}>2024</span>
          <span className={styles.pill}>TCC · Estudos de Mídia</span>
        </div>
        <h1 className={styles.heroTitle}>Testes de<br />Usabilidade UFF</h1>
        <p className={styles.heroSub}>
          Avaliação da experiência do usuário no novo site institucional da
          Universidade Federal Fluminense — aplicando três metodologias de pesquisa
          com 22 participantes de seis segmentos distintos.
        </p>

        <div className={styles.heroCover}>
          <div className={styles.coverOrb1} />
          <div className={styles.coverOrb2} />
          <div className={styles.coverInner}>
            <img src="/work/uff/logo-uff.webp" alt="Logo UFF" className={styles.coverLogo} />
            <p className={styles.coverTagline}>UX Research · Usabilidade</p>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Pesquisadora e UX Designer</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Cliente</span>
            <span className={styles.sidebarValue}>Universidade Federal Fluminense</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Participantes</span>
            <span className={styles.sidebarValue}>22 usuários, 6 segmentos</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Metodologias</span>
            <span className={styles.sidebarValue}>Teste Avaliativo · SUS · A/B</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Contexto</span>
            <span className={styles.sidebarValue}>TCC — Estudos de Mídia UFF</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Uma das melhores universidades<br />da América Latina com um site problemático.</h2>
            <p className={styles.prose}>
              A UFF figura entre as <strong>100 melhores universidades da América Latina</strong> (QS World University Rankings 2025),
              mas enfrentava um desafio crítico na comunicação digital. Em 2022, uma pesquisa interna da
              Superintendência de Comunicação Social apontou o site institucional como um dos
              principais pontos de insatisfação dos usuários.
              <br /><br />
              As críticas vinham de todos os lados — dificuldade de navegação, desorganização das informações
              e barreiras na comunicação com o público. Esse cenário motivou o redesign do site
              e, junto com ele, a necessidade de validar se as mudanças realmente resolviam os problemas.
            </p>
            <div className={styles.imgWrap}>
              <img loading="lazy" decoding="async" src="/work/uff/tweets-insatisfacao.webp" alt="Tweets de usuários insatisfeitos com o site da UFF" className={styles.caseImg} />
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>O que precisava ser investigado.</h2>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Navegação confusa</p>
                <p className={styles.infoCardText}>
                  Usuários relatavam dificuldade para encontrar informações básicas — calendário acadêmico, contatos, serviços.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Informação desorganizada</p>
                <p className={styles.infoCardText}>
                  Estrutura de conteúdo sem hierarquia clara, gerando sobrecarga cognitiva e abandono de tarefas.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Públicos diversos</p>
                <p className={styles.infoCardText}>
                  O site serve alunos, professores, técnicos, jornalistas e candidatos — com necessidades muito diferentes.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Novo site sem validação</p>
                <p className={styles.infoCardText}>
                  O redesign foi lançado sem testes sistemáticos com usuários reais — era necessário validar as melhorias.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Metodologia</p>
            <h2 className={styles.sectionTitle}>Três métodos, 22 pessoas,<br />seis segmentos de público.</h2>
            <p className={styles.prose}>
              Para garantir representatividade, os testes foram realizados de forma <strong>moderada e remota</strong>,
              com participantes de seis perfis: alunos de graduação e pós-graduação, professores,
              técnicos administrativos, potenciais estudantes e jornalistas.
            </p>

            <div className={styles.twoCol} style={{ marginTop: 24 }}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Teste Avaliativo</p>
                <p className={styles.infoCardText}>
                  Observação direta da interação com o protótipo. Identificação de pontos de atrito,
                  dificuldades de navegação e falhas na completude de tarefas.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>SUS — System Usability Scale</p>
                <p className={styles.infoCardText}>
                  10 afirmativas em escala Likert (1–5) para mensurar a usabilidade percebida.
                  Metodologia de John Brooke (1986), amplamente validada na indústria.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Teste de Preferência A/B</p>
                <p className={styles.infoCardText}>
                  Usuários avaliaram o site antigo (A) e o novo (B) em estética,
                  clareza visual, hierarquia da informação e organização geral — notas de 1 a 5.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Abordagem centrada no usuário</p>
                <p className={styles.infoCardText}>
                  Todas as decisões de design foram fundamentadas nos dados coletados,
                  seguindo os princípios de Nielsen (1993) para validação por usuários reais.
                </p>
              </div>
            </div>

            <div className={styles.imgWrap}>
              <img loading="lazy" decoding="async" src="/work/uff/novo-site.webp" alt="Novo site da UFF — versão testada" className={styles.caseImg} />
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Resultados</p>
            <h2 className={styles.sectionTitle}>SUS 82,95 — e o novo site<br />venceu em todos os critérios.</h2>
            <p className={styles.prose}>
              A pontuação média SUS de <strong>82,95</strong> coloca o novo site na faixa "excelente" da escala
              (acima de 80,3). Os scores variaram por segmento — de 80,00 (graduação) a 89,17 (técnicos) —
              confirmando que o redesign atendeu bem a públicos com perfis muito diferentes.
              <br /><br />
              O teste A/B foi ainda mais contundente: <strong>95% dos participantes acharam o novo site mais fácil de navegar</strong>,
              100% o consideraram mais organizado visualmente, e 100% o escolheriam para apresentar
              a universidade a novos visitantes.
            </p>
            <div className={styles.imgWrap}>
              <img loading="lazy" decoding="async" src="/work/uff/resultado-sus.webp" alt="Resultados SUS por segmento — média 82,95" className={styles.caseImg} />
            </div>
            <div className={styles.imgWrap} style={{ marginTop: 20 }}>
              <img loading="lazy" decoding="async" src="/work/uff/resultado-ab.webp" alt="Resultados do teste A/B de preferência" className={styles.caseImg} />
            </div>
            <p className={styles.imgNote}>
              Versão A é o site antigo da UFF; Versão B é o novo site institucional, que estava
              sendo avaliado.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que ficou.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>Diversidade de público muda tudo.</strong> Testar com apenas um perfil de usuário
                  daria uma visão parcial. A heterogeneidade dos participantes revelou conflitos de necessidade
                  que uma abordagem homogênea teria ignorado.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Quantitativo sem qualitativo é incompleto.</strong> O SUS dá o número,
                  mas os comentários das sessões mostram o porquê — e é no porquê que mora a solução.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  <strong>Research é argumento.</strong> Ter dados reais de usabilidade transforma
                  opiniões subjetivas em evidências — e torna as decisões de design difíceis de contestar.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

      <footer className={styles.footer}>
        <p>
          Nos gráficos deste case, <strong>Versão A</strong> é o site institucional antigo da UFF e
          <strong> Versão B</strong> é o novo site, que estava sendo avaliado. A comparação foi feita
          com 22 participantes, em teste A/B de preferência, junto com o Teste Avaliativo e o SUS.
        </p>
      </footer>

    </div>
  )
}
