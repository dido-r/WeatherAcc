import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    HomeComponent,
    FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
