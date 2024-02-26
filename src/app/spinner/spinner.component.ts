import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  template: `
    <div class="spinner-container">
      <div class="loading-spinner">
      </div>
    </div>
  `,
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {

}
