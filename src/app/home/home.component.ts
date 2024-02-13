import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

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

        forecast = {
            "Headline": {
                "EffectiveDate": "2024-02-12T13:00:00+02:00",
                "EffectiveEpochDate": 1707735600,
                "Severity": 5,
                "Text": "Expect showers Monday afternoon",
                "Category": "rain",
                "EndDate": "2024-02-12T19:00:00+02:00",
                "EndEpochDate": 1707757200,
                "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2024-02-12T07:00:00+02:00",
                    "EpochDate": 1707714000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 4.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 11.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2024-02-13T07:00:00+02:00",
                    "EpochDate": 1707800400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 2.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 8.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2024-02-14T07:00:00+02:00",
                    "EpochDate": 1707886800,
                    "Temperature": {
                        "Minimum": {
                            "Value": -2.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 6.7,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2024-02-15T07:00:00+02:00",
                    "EpochDate": 1707973200,
                    "Temperature": {
                        "Minimum": {
                            "Value": -2.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 9.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 2,
                        "IconPhrase": "Mostly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2024-02-16T07:00:00+02:00",
                    "EpochDate": 1708059600,
                    "Temperature": {
                        "Minimum": {
                            "Value": -1.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 11.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/sofia/51097/daily-weather-forecast/51097?day=5&unit=c&lang=en-us"
                }
            ]
        }
}
