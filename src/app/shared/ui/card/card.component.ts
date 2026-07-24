import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      @if (icon()) {
        <div class="card-icon">{{ icon() }}</div>
      }
      <h3>{{ title() }}</h3>
      <p>{{ description() }}</p>
    </div>
  `,
  styles: [
    `
      .card {
        background: var(--panel);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 24px;
        transition:
          border-color 0.2s,
          transform 0.2s;
        height: 100%;
      }
      .card:hover {
        border-color: var(--mint);
        transform: translateY(-3px);
      }
      .card-icon {
        width: 38px;
        height: 38px;
        border-radius: 8px;
        background: #0f1f19;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--mint);
        margin-bottom: 16px;
        font-size: 15px;
        font-family: var(--mono);
        font-weight: 700;
      }
      .card h3 {
        font-size: 16px;
        margin-bottom: 8px;
      }
      .card p {
        color: var(--muted);
        font-size: 13.8px;
      }
    `,
  ],
})
export class CardComponent {
  title = input.required<string>();
  description = input.required<string>();
  icon = input<string>();
}
