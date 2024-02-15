import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../request.service';
import { CurrentWeather } from '../currentweather';
import { Forecast } from '../forecast';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
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


    async onSubmit(event: Event, location: HTMLInputElement) {

        event.preventDefault();
        let keyResponse = await this.service.getLocationData(location.value);
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
