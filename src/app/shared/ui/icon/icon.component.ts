import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<span class="ico">{{ name() }}</span>`,
  styles: [
    `
      .ico {
        font-size: 16px;
        display: inline-block;
      }
    `,
  ],
})
export class IconComponent {
  name = input.required<string>();
}
