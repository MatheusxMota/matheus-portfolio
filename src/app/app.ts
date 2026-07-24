import { Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';

import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { StackComponent } from './sections/stack/stack.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    StackComponent,
    ContactComponent,
  ],
  template: `
    <app-header />

    <main style="margin-top: 60px;">
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-stack />
      <app-contact />
    </main>

    <app-footer />
  `,
})
export class AppComponent {}
