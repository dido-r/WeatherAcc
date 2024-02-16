import { Component } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { FavouriteLocation } from '../favourite-location';
import { RequestService } from '../request.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-favourites',
    standalone: true,
    imports: [CommonModule],
    template: `
<div class="main">
  <div class="container">
    <div class="current" *ngFor="let item of list">
        <div class="header">
            <h2>{{item.townName}}, {{item.countryName}}</h2>
        </div>
        <div>
            <p class="degrees">{{item.degrees}}° C</p>
        </div>
    </div>
    </div>
</div>`,
    styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

    list = [] as FavouriteLocation[];
    currentData = [] as string[];

    constructor(
        private serviceRequest: RequestService,
        private serviceFavourite: FavouritesService
    ) {
        this.list = serviceFavourite.getFavourites();

        for (let item of this.list) {

            this.serviceRequest.getCurrentCondition(item.id)
                .then(x => item.degrees = x[0].Temperature.Metric.Value);
        }
    }
}
