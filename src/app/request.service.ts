import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    private apiKey: string | undefined;

    private async getApiKey() {
        await fetch('../assets/api.json')
            .then(x => x.json())
            .then(x => this.apiKey = x.key);
    }

    async getLocationData(location: string){
        
        await this.getApiKey();
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${location}`)
            .then(x => x.json());
    }

    async getCurrentCondition(locationKey: string) {

        await this.getApiKey();
        return fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
            .then(x => x.json());
    }

    async getFiveDayForecast(locationKey: string) {
        
        await this.getApiKey();
        return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&metric=true`)
            .then(x => x.json());
    }

    async getCoordinates(lat: number, lon: number) {
        
        await this.getApiKey();
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat.toString()},${lon.toString()}&apikey=${this.apiKey}`)
            .then(x => x.json());
    }
}
