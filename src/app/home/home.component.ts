import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../request.service';
import { CurrentWeather } from '../currentweather';
import { Forecast } from '../forecast';
import { ModalComponent } from '../modal/modal.component';
import { FavouriteLocation } from '../favourite-location';
import { FavouritesService } from '../favourites.service';

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
        private serviceFavourite: FavouritesService
    ) {
        serviceRequest.getCurrentCondition(this.key).then(x => {
            this.current = x[0];
            this.isCurrentLoaded = true
        });

        serviceRequest.getFiveDayForecast(this.key).then(x => {
            this.forecast = x;
            this.isForecastLoaded = true
        });

        this.isFavouriteLocation = this.serviceFavourite.checkInFavourites(this.key)
    }

    town = 'Sofia';
    country = 'Bulgaria';
    key = '51097';
    current = {} as CurrentWeather;
    forecast = {} as Forecast;
    favouriteLocation = {} as FavouriteLocation;
    isFavouriteLocation: FavouriteLocation | undefined;
    isCurrentLoaded = false;
    isForecastLoaded = false;
    isLocationFound = true;
    isModalActive = false;
    currentModalText = '';

    onCloseModal() {

        this.isModalActive = false;
        this.currentModalText = '';
    }

    onAdd() {
        
        this.favouriteLocation = {
            id: this.key,
            townName: this.town,
            countryName: this.country
        };
        
        this.serviceFavourite.addToFavourite(this.favouriteLocation);
        this.isFavouriteLocation = undefined;
        this.currentModalText = "This location was added to Favourites";
        this.isModalActive = true;
    }

    onRemove() {

        this.serviceFavourite.removeFromFavourite(this.key);
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

        this.key = keyResponse[0].Key;
        this.isFavouriteLocation = this.serviceFavourite.checkInFavourites(this.key);
        let currentResponse = await this.serviceRequest.getCurrentCondition(this.key);
        let fiveDayResponse = await this.serviceRequest.getFiveDayForecast(this.key);
        this.town = keyResponse[0].LocalizedName;
        this.country = keyResponse[0].Country.LocalizedName;
        this.current = currentResponse[0];
        this.forecast = fiveDayResponse;
        location.value = '';
    }
}
