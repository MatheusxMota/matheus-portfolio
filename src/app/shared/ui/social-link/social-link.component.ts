import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  template: `
    <a [href]="url()" target="_blank" rel="noopener" [attr.aria-label]="platform()">
      {{ label() }}
    </a>
  `,
  styles: [
    `
      a {
        width: 38px;
        height: 38px;
        border: 1px solid var(--border);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--muted);
        transition: all 0.2s;
        font-family: var(--mono);
        font-size: 12px;
        font-weight: 600;
      }
      a:hover {
        color: var(--violet);
        border-color: var(--violet);
        transform: translateY(-2px);
      }
    `,
  ],
})
export class SocialLinkComponent {
  url = input.required<string>();
  label = input.required<string>();
  platform = input.required<string>();
}
