import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { TagComponent } from '../../shared/ui/tag/tag.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TagComponent, RevealDirective],
  template: `
    <section id="projetos">
      <div class="wrap" appReveal>
        <span class="eyebrow">projetos</span>
        <h2 class="sec-title">Projetos <span class="accent">Pessoais</span></h2>

        @for (p of projects; track p.title) {
          <div class="project-card">
            <h3>📦 {{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <div class="tags">
              @for (tag of p.tags; track tag) {
                <app-tag [label]="tag" />
              }
            </div>
            <a [href]="p.githubUrl" target="_blank" rel="noopener" class="btn"
              >↗ Ver projeto no GitHub</a
            >
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
      .project-card {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 26px 28px;
      }
      .project-card h3 {
        font-size: 18px;
        margin-bottom: 12px;
      }
      .project-card p {
        color: var(--muted);
        font-size: 14px;
        margin-bottom: 18px;
      }
      .project-card .tags {
        margin-bottom: 20px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class ProjectsComponent {
  projects = PORTFOLIO_DATA.projects;
}
