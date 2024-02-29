import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    private apiKey = 'iGAWAtHJWG0F6JSW28yKuz4ayiz5xXV7';

    async getLocationData(location: string) {
        
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${location}`)
            .then(x => x.json());
    }

    async getCurrentCondition(locationKey: string) {
        
        return fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`)
            .then(x => x.json());
    }

    async getFiveDayForecast(locationKey: string, metric: boolean) {
        
        return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}&metric=${metric}`)
            .then(x => x.json());
    }

    async getCoordinates(lat: number, lon: number) {
        
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat.toString()},${lon.toString()}&apikey=${this.apiKey}`)
            .then(x => x.json());
    }
}
