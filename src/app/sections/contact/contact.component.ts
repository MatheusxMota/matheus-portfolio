import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="contato">
      <div class="wrap" appReveal>
        <div class="contact-box">
          <span class="eyebrow" style="display:block;">contato</span>
          <h2>Vamos conversar?</h2>
          <p>Estou aberto a novas oportunidades, freelas e trocas de ideia sobre tecnologia.</p>
          <div class="contact-actions">
            <a [href]="'mailto:' + dev.email" class="btn btn-primary">✉ {{ dev.email }}</a>
            @for (s of socials; track s.platform) {
              <a [href]="s.url" target="_blank" rel="noopener" class="btn"
                >{{ s.label }} {{ s.platform }}</a
              >
            }
          </div>
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
      .contact-box {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 50px;
        text-align: center;
      }
      .contact-box h2 {
        font-size: 28px;
        margin-bottom: 12px;
        margin-top: 14px;
      }
      .contact-box p {
        color: var(--muted);
        margin-bottom: 26px;
      }
      .contact-actions {
        display: flex;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
      }
      @media (max-width: 640px) {
        .contact-box {
          padding: 32px 22px;
        }
      }
    `,
  ],
})
export class ContactComponent {
  dev = PORTFOLIO_DATA.dev;
  socials = PORTFOLIO_DATA.socials;
}
