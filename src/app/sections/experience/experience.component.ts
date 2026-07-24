import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { TagComponent } from '../../shared/ui/tag/tag.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TagComponent, RevealDirective],
  template: `
    <section id="experiencia">
      <div class="wrap" appReveal>
        <span class="eyebrow">experiência</span>
        <h2 class="sec-title">Experiência <span class="accent">Profissional</span></h2>

        @if (jobs.length > 0) {
          <div class="job-header">
            <h3>{{ jobs[0].company }}</h3>
            <div class="job-meta">
              <span class="accent">{{ jobs[0].period }}</span> · {{ jobs[0].location }}
            </div>
          </div>
        }

        <div class="timeline">
          @for (job of jobs; track job.title) {
            <div class="job-item">
              <h4>{{ job.title }}</h4>
              <p>{{ job.description }}</p>
              <div class="tags">
                @for (tag of job.tags; track tag) {
                  <app-tag [label]="tag" />
                }
              </div>
            </div>
          }
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
        color: var(--mint);
      }
      .job-header {
        margin-bottom: 32px;
      }
      .job-header h3 {
        font-size: 19px;
        margin-bottom: 6px;
      }
      .job-meta {
        font-family: var(--mono);
        color: var(--muted);
        font-size: 13px;
      }
      .job-meta .accent {
        color: var(--amber);
      }
      .timeline {
        border-left: 2px solid var(--border);
        padding-left: 28px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
      .job-item {
        position: relative;
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 22px 24px;
      }
      .job-item::before {
        content: '';
        position: absolute;
        left: -34px;
        top: 26px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: var(--bg);
        border: 2px solid var(--mint);
      }
      .job-item h4 {
        font-size: 16px;
        margin-bottom: 8px;
      }
      .job-item p {
        color: var(--muted);
        font-size: 13.8px;
        margin-bottom: 14px;
      }
      .tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class ExperienceComponent {
  jobs = PORTFOLIO_DATA.jobs;
}
