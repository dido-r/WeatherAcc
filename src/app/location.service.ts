import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavouriteLocation } from './favourite-location';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private location = new BehaviorSubject({
        id: '51097',
        townName: 'Sofia',
        countryName: 'Bulgaria'
    });
    currentLocation = this.location.asObservable();

    changeLocation(change: FavouriteLocation) {
        this.location.next(change)
    }
}