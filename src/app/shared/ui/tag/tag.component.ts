import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  template: `<span class="tag">{{ label() }}</span>`,
  styles: [
    `
      .tag {
        font-family: var(--mono);
        font-size: 11.5px;
        color: var(--blue);
        background: #0e1a26;
        border: 1px solid #1b3348;
        padding: 4px 10px;
        border-radius: 5px;
        display: inline-block;
      }
    `,
  ],
})
export class TagComponent {
  label = input.required<string>();
}
