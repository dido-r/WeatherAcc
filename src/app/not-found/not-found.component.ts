import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <a routerLink="">Go back to home</a>
      </div>
    </div>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
