import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  template: `
    <section id="stack">
      <div class="wrap" appReveal>
        <span class="eyebrow">stack</span>
        <h2 class="sec-title">Tecnologias & <span class="accent">Ferramentas</span></h2>

        @for (group of techGroups; track group.title) {
          <div class="stack-group">
            <h3>{{ group.title }}</h3>
            <div class="stack-grid">
              @for (item of group.items; track item.name) {
                <div class="stack-item">
                  <app-icon [name]="item.icon" />
                  {{ item.name }}
                </div>
              }
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
      .stack-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 14px;
      }
      .stack-item {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 18px 10px;
        text-align: center;
        font-size: 12.5px;
        color: var(--muted);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: all 0.2s;
        font-family: var(--mono);
      }
      .stack-item:hover {
        border-color: var(--violet);
        color: var(--text);
        transform: translateY(-2px);
      }
      @media (max-width: 920px) {
        .stack-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 640px) {
        .stack-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `,
  ],
})
export class StackComponent {
  techGroups = PORTFOLIO_DATA.techGroups;
}
