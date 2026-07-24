import { Component, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio-data';
import { SocialLinkComponent } from '../../shared/ui/social-link/social-link.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

type EditorTab = 'sobre-mim' | 'foco' | 'status';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SocialLinkComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  data = PORTFOLIO_DATA;
  activeTab = signal<EditorTab>('sobre-mim');

  setTab(tab: EditorTab) {
    this.activeTab.set(tab);
  }
}
