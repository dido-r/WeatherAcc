import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../request.service';
import { CurrentWeather } from '../currentweather';
import { Forecast } from '../forecast';
import { ModalComponent } from '../modal/modal.component';
import { FavouriteLocation } from '../favourite-location';
import { FavouritesService } from '../favourites.service';
import { LocationService } from '../location.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        ModalComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(
        private serviceRequest: RequestService,
        private serviceFavourite: FavouritesService,
        private serviceLocation: LocationService
    ) {
        this.serviceLocation.currentLocation.subscribe(x => {

            if (x.id !== undefined) {
                
                this.currentLocation.townName = x.townName;
                this.currentLocation.countryName = x.countryName;
                this.currentLocation.id = x.id;
                this.serviceRequest.getCurrentCondition(this.currentLocation.id)
                    .then(x => this.current = x[0]);
                this.serviceRequest.getFiveDayForecast(this.currentLocation.id)
                    .then(x => this.forecast = x);
                this.isFavouriteLocation = this.serviceFavourite.checkInFavourites(this.currentLocation.id);
            }
        })
    }

    current: CurrentWeather | undefined;
    forecast: Forecast | undefined;
    currentLocation = {} as FavouriteLocation;
    isFavouriteLocation: FavouriteLocation | undefined;
    isLocationFound = true;
    isModalActive = false;
    currentModalText = '';

    onCloseModal() {

        this.isModalActive = false;
        this.currentModalText = '';
    }

    onAdd() {

        this.serviceFavourite.addToFavourite(this.currentLocation);
        this.isFavouriteLocation = undefined;
        this.currentModalText = "This location was added to Favourites";
        this.isModalActive = true;
    }

    onRemove() {

        this.serviceFavourite.removeFromFavourite(this.currentLocation.id);
        this.isFavouriteLocation = undefined;
        this.currentModalText = "This location was removed from Favourites";
        this.isModalActive = true;
    }

    async onSubmit(event: Event, location: HTMLInputElement) {

        event.preventDefault();

        if (location.value.match(/^[a-zA-Z ]+/) === null) {

            this.currentModalText = 'Searching should be done in English letters only!';
            this.isModalActive = true;
            location.value = '';
            return;
        }

        let keyResponse = await this.serviceRequest.getLocationData(location.value);

        if (keyResponse[0] === undefined) {

            this.isLocationFound = false;
            location.value = '';
            return;
        } else {

            this.isLocationFound = true;
        }

        this.currentLocation.id = keyResponse[0].Key;
        this.isFavouriteLocation = this.serviceFavourite.checkInFavourites(this.currentLocation.id);
        let currentResponse = await this.serviceRequest.getCurrentCondition(this.currentLocation.id);
        let fiveDayResponse = await this.serviceRequest.getFiveDayForecast(this.currentLocation.id);
        this.currentLocation.townName = keyResponse[0].LocalizedName;
        this.currentLocation.countryName = keyResponse[0].Country.LocalizedName;
        this.current = currentResponse[0];
        this.forecast = fiveDayResponse;
        location.value = '';
    }
}