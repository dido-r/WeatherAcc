import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavouritesService } from '../favourites.service';
import { FavouriteLocation } from '../favourite-location';
import { RequestService } from '../request.service';
import { CommonModule } from '@angular/common';
import { LocationService } from '../location.service';
import { UnitService } from '../unit.service';

@Component({
    selector: 'app-favourites',
    standalone: true,
    imports: [CommonModule],
    template: `
<div class="main">
  <div class="container">
    <div class="current" *ngFor="let item of list" (click)="onClick(item)">
        <div class="header">
            <h2>{{item.townName}}, {{item.countryName}}</h2>
        </div>
        <div>
            <p class="degrees">{{isMetric ? item.degreesCel : item.degreesFar}}° {{isMetric ? 'C' : 'F'}}</p>
        </div>
    </div>
    </div>
</div>`,
    styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {

    list = [] as FavouriteLocation[];
    isMetric = true;

    constructor(
        private serviceRequest: RequestService,
        private serviceFavourite: FavouritesService,
        private serviceLocation: LocationService,
        private serviceUnit: UnitService,
        private router: Router
    ) {
        this.list = this.serviceFavourite.getFavourites();

        this.serviceUnit.isMetric.subscribe(x => this.isMetric = x.valueOf());

        for (let item of this.list) {

            this.serviceRequest.getCurrentCondition(item.id)
                .then(x => {
                    item.degreesCel = x[0].Temperature.Metric.Value;
                    item.degreesFar = x[0].Temperature.Imperial.Value;
                });
        }
    }

    onClick(item: FavouriteLocation) {
        
        this.serviceLocation.changeLocation(item);
        this.router.navigate(['']);
    }
}
