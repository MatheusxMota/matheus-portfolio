import { Component } from '@angular/core';
import { CardComponent } from '../../shared/ui/card/card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent, RevealDirective],
  template: `
    <section id="sobre">
      <div class="wrap" appReveal>
        <span class="eyebrow">Sobre</span>
        <h2 class="sec-title">
          Desenvolvedor Full Stack com foco em <span class="accent">Aplicações Web escaláveis</span>
        </h2>
        <p class="sec-lead">
          Atuo no desenvolvimento de soluções para problemas reais, com experiência na criação de
          APIs, modelagem de banco de dados relacional e integração entre sistemas. Trabalho com
          POO, SOLID e Clean Code, priorizando código organizado e de fácil manutenção. Atualmente
          curso Análise e Desenvolvimento de Sistemas, com conclusão prevista para o 2º semestre de
          2026.
        </p>

        <div class="cards3">
          <app-card
            icon="⌘"
            title="Front-end"
            description="TypeScript, Angular, React, HTML, CSS, TailwindCSS, ShadCN."
          />
          <app-card
            icon="</>"
            title="Back-end"
            description="Node.js, Express, REST APIs, modelagem de banco de dados relacional e integração entre sistemas."
          />
          <app-card
            icon="⑂"
            title="Ferramentas"
            description="Git, GitHub, PRs, code review e metodologias ágeis."
          />
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      section {
        padding: 90px 0;
        border-top: 1px solid var(--border);
      }
      .sec-title {
        font-size: 34px;
        margin: 10px 0 16px;
      }
      .sec-title .accent {
        color: var(--violet);
      }
      .sec-lead {
        color: var(--muted);
        max-width: 620px;
        font-size: 15.5px;
        margin-bottom: 44px;
      }
      .cards3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      @media (max-width: 920px) {
        .cards3 {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {}
