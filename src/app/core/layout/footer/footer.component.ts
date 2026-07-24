import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="wrap">
        <p>
          © {{ currentYear }} Matheus Mota · Desenvolvido com Angular
          {{ angularVersion }} (Zoneless)
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        padding: 30px 0;
        border-top: 1px solid var(--border);
        text-align: center;
        font-family: var(--mono);
        font-size: 12px;
        color: var(--muted-2);
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  angularVersion = '19'; // Versão em uso do framework
}
