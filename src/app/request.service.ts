import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    private apiKey: string | undefined;

    constructor() {

        fetch('../assets/api.json')
            .then(x => x.json())
            .then(x => this.apiKey = x.key);
    }

    async getLocationData(location: string){
        
        return await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${location}`)
            .then(x => x.json());
    }

    async getCurrentCondition(locationKey: string) {

        return await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
            .then(x => x.json());
    }

    async getFiveDayForecast(locationKey: string) {

        return await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&metric=true`)
            .then(x => x.json());
    }
}
