import { Component } from '@angular/core';

@Component({
    selector: 'app-favourites',
    standalone: true,
    imports: [],
    template: `
<div class="main">
  <div class="container">
    <div class="current">
        <div class="header">
            <h2>Sofia, Bulgaria</h2>
        </div>
        <div class="inline">
            <img src="../../assets/icons/01-s.png">
            <div>
                <p class="degrees">17.2° C</p>
                <p class="info">Light rain</p>
            </div>
        </div>
    </div>
    <div class="current">
        <div class="header">
            <h2>Sofia, Bulgaria</h2>
        </div>
        <div class="inline">
            <img src="../../assets/icons/01-s.png">
            <div>
                <p class="degrees">17.2° C</p>
                <p class="info">Light rain</p>
            </div>
        </div>
    </div>
    </div>
</div>`,
    styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

}
