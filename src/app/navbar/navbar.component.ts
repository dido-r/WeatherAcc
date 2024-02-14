import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <header>
      <a routerLink=''>Home</a>
      <a routerLink='favourites'>Favoutires</a>
    </header>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
