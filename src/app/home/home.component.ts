import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../request.service';
import { CurrentWeather } from '../currentweather';
import { Forecast } from '../forecast';
import { ModalComponent } from '../modal/modal.component';

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
        private service: RequestService
    ) {
        service.getCurrentCondition('51097').then(x => {
            this.current = x[0];
            this.isCurrentLoaded = true
        });

        service.getFiveDayForecast('51097').then(x => {
            this.forecast = x;
            this.isForecastLoaded = true
        });
    }

    town = 'Sofia';
    country = 'Bulgaria';
    current = {} as CurrentWeather;
    forecast = {} as Forecast;
    isCurrentLoaded = false;
    isForecastLoaded = false;
    isLocationFound = true;
    isInputLatin = true;

    onClose(){

        this.isInputLatin = true;
    }

    async onSubmit(event: Event, location: HTMLInputElement) {

        event.preventDefault();

        if (location.value.match(/^[a-zA-Z ]+/) === null) {

            this.isInputLatin = false;
            location.value = '';
            return;
        }

        let keyResponse = await this.service.getLocationData(location.value);

        if(keyResponse[0] === undefined){

            this.isLocationFound = false;
            location.value = '';
            return;
        }else{

            this.isLocationFound = true;
        }

        let currentResponse = await this.service.getCurrentCondition(keyResponse[0].Key);
        let fiveDayResponse = await this.service.getFiveDayForecast(keyResponse[0].Key);
        let data = keyResponse[0];
        this.town = data.LocalizedName;
        this.country = data.Country.LocalizedName;
        this.current = currentResponse[0];
        this.forecast = fiveDayResponse;
        location.value = '';
    }
}
