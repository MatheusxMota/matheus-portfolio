import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<!-- Cannot render dynamic Lucide icons with current API -->`,
})
export class IconComponent {
  icon = input.required<any>();
}

