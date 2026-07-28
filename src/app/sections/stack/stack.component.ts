import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    RevealDirective,
  ],
  template: `
    <section id="stack">
      <div class="wrap" appReveal>
        <span class="eyebrow">Tecnologias</span>
        <h2 class="sec-title">Tecnologias & <span class="accent">Ferramentas</span></h2>

        @for (group of techGroups; track group.title) {
          <div class="stack-group">
            <h3>{{ group.title }}</h3>
            <div class="marquee-container">
              <div class="marquee-inner">
                @for (item of [...group.items, ...group.items]; track $index) {
                  <div class="stack-item">
                    <img
                      [src]="'https://cdn.simpleicons.org/' + item.icon"
                      [alt]="item.name"
                      loading="lazy"
                      width="28"
                      height="28"
                    />
                    {{ item.name }}
                  </div>
                }
              </div>
            </div>
          </div>
        }
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
      .stack-group {
        margin-bottom: 38px;
        overflow: hidden;
      }
      .stack-group h3 {
        font-family: var(--mono);
        font-size: 15px;
        color: var(--text);
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
      }
      .stack-group h3::before {
        content: '';
        width: 18px;
        height: 2px;
        background: var(--violet);
      }

      .marquee-container {
        width: 100%;
        overflow: hidden;
        mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      }
      .marquee-inner {
        display: flex;
        gap: 14px;
        width: max-content;
        animation: marquee 20s linear infinite;
      }
      .stack-item {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 18px 25px;
        text-align: center;
        font-size: 12.5px;
        color: var(--text);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: all 0.2s;
        font-family: var(--mono);
        min-width: 120px;
      }
      .stack-item:hover {
        border-color: var(--violet);
        color: var(--violet);
        transform: translateY(-2px);
      }
      .stack-item img {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `,
  ],
})
export class StackComponent {
  techGroups = PORTFOLIO_DATA.techGroups;
}
