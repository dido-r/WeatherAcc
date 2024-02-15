interface Unit {
    Value: number,
    Unit: string,
    UnitType: number
}

interface Temperature {
    Metric: Unit,
    Imperial: Unit
}

export interface CurrentWeather {
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: string,
    IsDayTime: boolean,
    Temperature: Temperature,
    MobileLink: string,
    Link: string
}