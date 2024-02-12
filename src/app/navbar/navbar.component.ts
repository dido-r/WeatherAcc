import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header>
      <a>Home</a>
      <a>Favoutires</a>
    </header>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
