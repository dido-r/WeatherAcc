import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavouriteLocation } from './favourite-location';
import { RequestService } from './request.service';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    constructor(
        private serviceRequest: RequestService
    ) { 
        this.initializeLocation();
    }

    private location = new BehaviorSubject({} as FavouriteLocation);
    currentLocation = this.location.asObservable();

    changeLocation(change: FavouriteLocation) {
        this.location.next(change)
    }

    private initializeLocation() {

        navigator.geolocation.getCurrentPosition(async x => {

            this.serviceRequest.getCoordinates(x.coords.latitude, x.coords.longitude)
                .then(x => this.changeLocation({
                    id: x.Key,
                    townName: x.EnglishName,
                    countryName: x.Country.EnglishName
                }));
        });
    }
}