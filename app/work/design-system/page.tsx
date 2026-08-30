import styles from "./page.module.css"
import Link from "next/link"

export default function DesignSystemCase() {
  return (
    <div className={styles.page}>

      <Link href="/#projects" className={styles.back}>
        ← Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={`${styles.pill} ${styles.pillAccent}`}>Design System</span>
          <span className={styles.pill}>2026</span>
          <span className={styles.pillLogo}>
            <img src="/plann-logo.svg" alt="Plann Design System" className={styles.logoImg} />
          </span>
        </div>
        <h1 className={styles.heroTitle}>Plann<br />Design System</h1>
        <p className={styles.heroSub}>
          Criação do sistema de design que unificou a experiência visual e interativa
          de quatro produtos B2B — do zero à adoção em toda a plataforma.
        </p>

        <div className={styles.heroCover}>
          <div className={styles.coverOrb1} />
          <div className={styles.coverOrb2} />
          <div className={styles.coverInner}>
            <svg width="160" height="54" viewBox="0 0 83 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M73.6023 1.8293C73.9683 1.08338 75.0317 1.08338 75.3977 1.8293L81.1543 13.5594C81.4803 14.2239 80.9967 15 80.2565 15H68.7435C68.0033 15 67.5197 14.2239 67.8457 13.5594L73.6023 1.8293Z" fill="url(#coverGradient)"/>
              <path d="M3.86719 24.9258C3.78906 25.707 3.35938 26.1302 2.57812 26.1953C2.21354 26.1953 1.89453 26.0781 1.62109 25.8438C1.36068 25.5964 1.23047 25.2904 1.23047 24.9258V15.707C1.24349 15.3424 1.38021 15.043 1.64062 14.8086C1.90104 14.5612 2.21354 14.4375 2.57812 14.4375H10.7812C11.9271 14.4766 12.793 14.7305 13.3789 15.1992C13.9648 15.6549 14.388 16.1758 14.6484 16.7617C14.9089 17.3477 15.0391 17.9401 15.0391 18.5391C15.0391 19.1641 14.9089 19.7695 14.6484 20.3555C14.401 20.9414 13.9779 21.4688 13.3789 21.9375C12.793 22.3932 12.0443 22.6146 11.1328 22.6016H6.21094C5.84635 22.6016 5.54036 22.4714 5.29297 22.2109C5.03255 21.9635 4.90234 21.6576 4.90234 21.293C4.90234 20.9284 5.02604 20.6224 5.27344 20.375C5.53385 20.1146 5.84635 19.9844 6.21094 19.9844H11.25C11.4974 19.9844 11.6992 19.9062 11.8555 19.75C12.0247 19.5807 12.1484 19.3919 12.2266 19.1836C12.3047 18.9622 12.3438 18.7409 12.3438 18.5195C12.3438 18.3112 12.3047 18.1029 12.2266 17.8945C12.1484 17.6732 12.0247 17.4844 11.8555 17.3281C11.6992 17.1589 11.4974 17.0677 11.25 17.0547H4.375C4.03646 17.0677 3.86719 17.237 3.86719 17.5625V24.9258ZM18.457 14.125C18.8086 14.138 19.1081 14.2682 19.3555 14.5156C19.6029 14.75 19.7331 15.043 19.7461 15.3945V24.9648C19.668 25.7461 19.2383 26.1693 18.457 26.2344C18.0924 26.2344 17.7734 26.1172 17.5 25.8828C17.2396 25.6354 17.1094 25.3294 17.1094 24.9648V15.3945C17.1224 15.0299 17.2591 14.7305 17.5195 14.4961C17.7799 14.2487 18.0924 14.125 18.457 14.125ZM33.1445 24.9258V20.2188C33.1445 19.8932 32.9753 19.724 32.6367 19.7109H25.8008C25.5534 19.724 25.3385 19.8346 25.1562 20.043C24.974 20.2383 24.8372 20.4727 24.7461 20.7461C24.668 21.0065 24.6289 21.2734 24.6289 21.5469C24.6289 21.8073 24.668 22.0742 24.7461 22.3477C24.8372 22.6081 24.974 22.8424 25.1562 23.0508C25.3385 23.2461 25.5534 23.3438 25.8008 23.3438H30.8008C31.1654 23.3438 31.4714 23.474 31.7188 23.7344C31.9792 23.9818 32.1094 24.2878 32.1094 24.6523C32.1094 25.0169 31.9792 25.3229 31.7188 25.5703C31.4714 25.8307 31.1654 25.9609 30.8008 25.9609H25.8789C24.9674 25.9479 24.2122 25.694 23.6133 25.1992C23.0273 24.6914 22.6042 24.125 22.3438 23.5C22.0964 22.862 21.9727 22.2044 21.9727 21.5273C21.9727 20.8763 22.1029 20.2383 22.3633 19.6133C22.6237 18.9753 23.0469 18.4089 23.6328 17.9141C24.2188 17.4062 25.0846 17.1328 26.2305 17.0938H34.4336C34.7982 17.0938 35.1107 17.2174 35.3711 17.4648C35.6315 17.6992 35.7682 17.9987 35.7812 18.3633V24.9258C35.7812 25.2904 35.6445 25.5964 35.3711 25.8438C35.1107 26.0781 34.7982 26.1953 34.4336 26.1953C33.6523 26.1302 33.2227 25.707 33.1445 24.9258ZM44.5312 16.8008C45.2083 16.8008 45.8724 16.8789 46.5234 17.0352C47.1875 17.1914 47.819 17.4258 48.418 17.7383C49.0169 18.0378 49.5443 18.4414 50 18.9492C50.4688 19.457 50.7227 20.0625 50.7617 20.7656V21.5859V24.9258C50.6836 25.707 50.2539 26.1302 49.4727 26.1953C49.1081 26.1953 48.7891 26.0781 48.5156 25.8438C48.2552 25.5964 48.125 25.2904 48.125 24.9258V24.0664V21.3711C48.099 20.9674 47.9427 20.6354 47.6562 20.375C47.3828 20.1016 47.0703 19.8867 46.7188 19.7305C46.3802 19.5742 46.0221 19.457 45.6445 19.3789C45.2799 19.3008 44.9089 19.2617 44.5312 19.2617C44.1536 19.2617 43.776 19.3008 43.3984 19.3789C43.0339 19.457 42.6758 19.5742 42.3242 19.7305C41.9857 19.8867 41.6732 20.1016 41.3867 20.375C41.1133 20.6354 40.9635 20.9674 40.9375 21.3711V24.0664V24.9258C40.8724 25.707 40.4492 26.1302 39.668 26.1953C39.3034 26.1953 38.9844 26.0781 38.7109 25.8438C38.4505 25.5964 38.3203 25.2904 38.3203 24.9258V21.5859V20.7656C38.3594 20.0625 38.6068 19.457 39.0625 18.9492C39.5182 18.4414 40.0456 18.0378 40.6445 17.7383C41.2435 17.4258 41.8685 17.1914 42.5195 17.0352C43.1836 16.8789 43.8542 16.8008 44.5312 16.8008ZM59.4727 16.8008C60.1497 16.8008 60.8138 16.8789 61.4648 17.0352C62.1289 17.1914 62.7604 17.4258 63.3594 17.7383C63.9583 18.0378 64.4857 18.4414 64.9414 18.9492C65.4102 19.457 65.6641 20.0625 65.7031 20.7656V21.5859V24.9258C65.625 25.707 65.1953 26.1302 64.4141 26.1953C64.0495 26.1953 63.7305 26.0781 63.457 25.8438C63.1966 25.5964 63.0664 25.2904 63.0664 24.9258V24.0664V21.3711C63.0404 20.9674 62.8841 20.6354 62.5977 20.375C62.3242 20.1016 62.0117 19.8867 61.6602 19.7305C61.3216 19.5742 60.9635 19.457 60.5859 19.3789C60.2214 19.3008 59.8503 19.2617 59.4727 19.2617C59.0951 19.2617 58.7174 19.3008 58.3398 19.3789C57.9753 19.457 57.6172 19.5742 57.2656 19.7305C56.9271 19.8867 56.6146 20.1016 56.3281 20.375C56.0547 20.6354 55.9049 20.9674 55.8789 21.3711V24.0664V24.9258C55.8138 25.707 55.3906 26.1302 54.6094 26.1953C54.2448 26.1953 53.9258 26.0781 53.6523 25.8438C53.3919 25.5964 53.2617 25.2904 53.2617 24.9258V21.5859V20.7656C53.3008 20.0625 53.5482 19.457 54.0039 18.9492C54.4596 18.4414 54.987 18.0378 55.5859 17.7383C56.1849 17.4258 56.8099 17.1914 57.4609 17.0352C58.125 16.8789 58.7956 16.8008 59.4727 16.8008Z" fill="white"/>
              <defs>
                <linearGradient id="coverGradient" x1="74.5" y1="3.57143" x2="74.5" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BCC8F5"/>
                  <stop offset="1" stopColor="#AFA9EC"/>
                </linearGradient>
              </defs>
            </svg>
            <p className={styles.coverTagline}>Design System</p>
          </div>
        </div>
      </section>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Meu papel</span>
            <span className={styles.sidebarValue}>Designer responsável</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Contexto</span>
            <span className={styles.sidebarValue}>4 produtos sem padrão visual</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Entregáveis</span>
            <span className={styles.sidebarValue}>Tokens, componentes, documentação</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.sidebarLabel}>Privacidade</span>
            <span className={styles.sidebarValue}>Prints sanitizados com conteúdo genérico</span>
          </div>
        </aside>

        <main className={styles.content}>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Contexto</p>
            <h2 className={styles.sectionTitle}>Quatro produtos,<br />zero consistência.</h2>
            <p className={styles.prose}>
              No início, a Plannera tinha apenas o <strong>S&OP</strong> — e mesmo dentro de um único produto,
              já existiam inconsistências: botões com estilos diferentes entre telas, tipografias variando
              sem critério, componentes recriados do zero a cada sprint.
              <br /><br />
              Conforme novos produtos foram nascendo — <strong>S&OE, Abast e produtos internos</strong> —
              o problema foi escalando. Cada novo produto herdava as inconsistências do anterior e adicionava
              as suas próprias. O retrabalho multiplicou, a manutenção ficou inviável e a experiência
              do usuário que transitava entre os produtos começou a se fragmentar visivelmente.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Problema</p>
            <h2 className={styles.sectionTitle}>O que precisava ser resolvido.</h2>
            <div className={styles.twoCol}>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Inconsistência visual</p>
                <p className={styles.infoCardText}>
                  Mesmos elementos com aparências diferentes entre produtos. Usuário perdia referência ao mudar de módulo.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Retrabalho em dev</p>
                <p className={styles.infoCardText}>
                  Componentes reimplementados a cada novo produto. Sem fonte de verdade única para o time.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Escala travada</p>
                <p className={styles.infoCardText}>
                  Cada novo cliente ou feature exigia decisões visuais do zero. Não havia como escalar com qualidade.
                </p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.infoCardTitle}>Sem documentação</p>
                <p className={styles.infoCardText}>
                  Decisões de design viviam na cabeça de quem implementou. Onboarding de devs era lento e impreciso.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Processo</p>
            <h2 className={styles.sectionTitle}>Como fui do diagnóstico ao sistema.</h2>
            <p className={styles.prose}>
              Comecei fazendo um <strong>audit visual nos quatro produtos</strong> — catalogando tudo que existia:
              cores usadas, variações de tipografia, tamanhos de componentes, estados interativos.
              O objetivo era entender o que havia de padrão implícito antes de impor qualquer estrutura nova.
              <br /><br />
              A partir daí, defini a <strong>arquitetura de tokens em 3 níveis</strong>: base (valores brutos),
              semântico (significado) e alias (uso contextual). Isso permitiu que mudanças globais — como
              uma alteração de cor de marca — se propagassem automaticamente por todo o sistema.
            </p>

            <div className={styles.imgWrap}>
              <img src="/work/ds/colors.png" alt="Foundations — Colors do Plann DS" className={styles.caseImg} />
              <div className={styles.imgOverlay} />
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Sistema</p>
            <h2 className={styles.sectionTitle}>O que foi construído.</h2>
            <p className={styles.prose}>
              O Plann DS é composto por três camadas: <strong>tokens, componentes e documentação</strong>.
              Toda a especificação foi criada e documentada no <strong>Figma</strong> — anatomia,
              estados, variantes e guidelines de uso.
              <br /><br />
              Além da documentação visual, entreguei o sistema em código: os componentes foram
              implementados em <strong>Blazor</strong> — a tecnologia usada pelos produtos da Plannera —
              e publicados como um <strong>pacote compartilhável</strong>, consumido diretamente pelos
              squads de desenvolvimento.
              <br /><br />
              Para governança e validação, construí uma interface estilo <strong>Storybook</strong>,
              onde o time pode inspecionar cada componente, testar variantes e verificar o comportamento
              antes de integrar nos produtos.
            </p>


            <div className={styles.imgWrap}>
              <img src="/work/ds/button.png" alt="Componente Button — Plann DS" className={styles.caseImg} />
              <div className={styles.imgOverlay} />
            </div>

            <div className={styles.imgWrap}>
              <img src="/work/ds/input.png" alt="Componente Text Input — Plann DS" className={styles.caseImg} />
              <div className={styles.imgOverlay} />
            </div>

          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Resultados</p>
            <h2 className={styles.sectionTitle}>O que mudou depois.</h2>
            <p className={styles.prose}>
              Com o DS em produção, o time passou a ter uma <strong>fonte de verdade única</strong>
              — mais de <strong>15 componentes unificados</strong>, tokens exportáveis e decisões documentadas
              acessíveis a qualquer dev ou designer da equipe.
              <br /><br />
              O impacto em velocidade e consistência já é percebido no dia a dia, mas as métricas
              formais — tempo de implementação antes e depois, redução de retrabalho — estão sendo
              estruturadas agora para acompanhamento contínuo.
              Esse é um sistema vivo: a intenção é evoluir a governança e medir o retorno à medida
              que o DS amadurece dentro dos produtos.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Aprendizados</p>
            <h2 className={styles.sectionTitle}>O que ficou.</h2>
            <div className={styles.learnings}>
              <div className={styles.learning}>
                <span className={styles.learningNum}>01</span>
                <p className={styles.learningText}>
                  <strong>DS é produto.</strong> Tem roadmap, tem usuário (dev e designer), tem manutenção.
                  Tratar como entregável único foi o maior erro que vi em tentativas anteriores.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>02</span>
                <p className={styles.learningText}>
                  <strong>Adoção é mais difícil que criação.</strong> Construir o sistema foi uma etapa —
                  fazer o time usar e confiar nele foi o trabalho real.
                </p>
              </div>
              <div className={styles.learning}>
                <span className={styles.learningNum}>03</span>
                <p className={styles.learningText}>
                  [Adicionar um aprendizado seu específico.]
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  )
}
