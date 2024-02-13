import { Component } from '@angular/core';

@Component({
    selector: 'app-favourites',
    standalone: true,
    imports: [],
    template: `
<div class="main">
  <div class="container">
    <div class="current">
        <div class="header">
            <h2>Sofia, Bulgaria</h2>
        </div>
        <div class="inline">
            <img src="../../assets/icons/{{town.WeatherIcon}}-s.png">
            <div>
                <p class="degrees">{{town.Temperature.Metric.Value}}° C</p>
                <p class="info">{{town.WeatherText}}</p>
            </div>
        </div>
    </div>
    </div>
</div>`,
    styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

    town = {
        "LocalObservationDateTime": "2024-02-12T09:58:00+02:00",
        "EpochTime": 1707724680,
        "WeatherText": "Light rain",
        "WeatherIcon": 12,
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 7.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 45.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/current-weather/51097?lang=en-us",
        "Link": "http://www.accuweather.com/en/bg/sofia/51097/current-weather/51097?lang=en-us"
    };
}
