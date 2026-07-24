import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mobileOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.mobileOpen.set(false);
  }
}
