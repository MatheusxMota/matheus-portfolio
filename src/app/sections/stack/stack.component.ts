import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import {
  LucideGlobe,
  LucidePalette,
  LucideBraces,
  LucideType,
  LucideCode,
  LucideAtom,
  LucideTriangle,
  LucideWind,
  LucideLayout,
  LucideHexagon,
  LucideCoffee,
  LucideLeaf,
  LucideDatabase,
  LucideGitBranch,
  LucideCloud,
  LucideFileText,
} from '@lucide/angular';
import { GithubIconComponent } from '../../shared/ui/icon/github-icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    LucideGlobe,
    LucidePalette,
    LucideBraces,
    LucideType,
    LucideCode,
    LucideAtom,
    LucideTriangle,
    LucideWind,
    LucideLayout,
    LucideHexagon,
    LucideCoffee,
    LucideLeaf,
    LucideDatabase,
    LucideGitBranch,
    LucideCloud,
    LucideFileText,
    GithubIconComponent,
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
                @for (item of group.items; track item.name) {
                  <div class="stack-item">
                    @switch (item.name) {
                      @case ('HTML5') { <svg lucideGlobe></svg> }
                      @case ('CSS') { <svg lucidePalette></svg> }
                      @case ('JavaScript') { <svg lucideBraces></svg> }
                      @case ('TypeScript') { <svg lucideType></svg> }
                      @case ('Angular') { <svg lucideCode></svg> }
                      @case ('React') { <svg lucideAtom></svg> }
                      @case ('Next.js') { <svg lucideTriangle></svg> }
                      @case ('Tailwind') { <svg lucideWind></svg> }
                      @case ('Shadcn/UI') { <svg lucideLayout></svg> }
                      @case ('Node.js') { <svg lucideHexagon></svg> }
                      @case ('Express') { <svg lucideBraces></svg> }
                      @case ('Java') { <svg lucideCoffee></svg> }
                      @case ('Spring Boot') { <svg lucideLeaf></svg> }
                      @case ('PostgreSQL') { <svg lucideDatabase></svg> }
                      @case ('Git') { <svg lucideGitBranch></svg> }
                      @case ('GitHub') { <app-github-icon /> }
                      @case ('Supabase') { <svg lucideCloud></svg> }
                      @case ('Swagger') { <svg lucideFileText></svg> }
                    }
                    {{ item.name }}
                  </div>
                }
                <!-- Duplicate list for seamless loop -->
                @for (item of group.items; track 'dup-' + item.name) {
                  <div class="stack-item">
                    @switch (item.name) {
                      @case ('HTML5') { <svg lucideGlobe></svg> }
                      @case ('CSS') { <svg lucidePalette></svg> }
                      @case ('JavaScript') { <svg lucideBraces></svg> }
                      @case ('TypeScript') { <svg lucideType></svg> }
                      @case ('Angular') { <svg lucideCode></svg> }
                      @case ('React') { <svg lucideAtom></svg> }
                      @case ('Next.js') { <svg lucideTriangle></svg> }
                      @case ('Tailwind') { <svg lucideWind></svg> }
                      @case ('Shadcn/UI') { <svg lucideLayout></svg> }
                      @case ('Node.js') { <svg lucideHexagon></svg> }
                      @case ('Express') { <svg lucideBraces></svg> }
                      @case ('Java') { <svg lucideCoffee></svg> }
                      @case ('Spring Boot') { <svg lucideLeaf></svg> }
                      @case ('PostgreSQL') { <svg lucideDatabase></svg> }
                      @case ('Git') { <svg lucideGitBranch></svg> }
                      @case ('GitHub') { <app-github-icon /> }
                      @case ('Supabase') { <svg lucideCloud></svg> }
                      @case ('Swagger') { <svg lucideFileText></svg> }
                    }
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
        color: var(--muted);
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
        color: var(--text);
        transform: translateY(-2px);
      }
      
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `,
  ],
})
export class StackComponent {
  techGroups = PORTFOLIO_DATA.techGroups;
}
