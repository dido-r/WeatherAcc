interface MainInfo {
    EffectiveDate: string,
    EffectiveEpochDate: number,
    Severity: number,
    Text: string,
    Category: string,
    EndDate: string,
    EndEpochDate: number,
    MobileLink: string,
    Link: string
}

interface Day {
    Icon: number,
    IconPhrase: string,
    HasPrecipitation: boolean,
    PrecipitationType: string,
    PrecipitationIntensity: string
}

interface Night {
    Icon: number,
    IconPhrase: string,
    HasPrecipitation: boolean
}

interface Daily {
    Date: string,
    EpochDate: number,
    Temperature: {
        Minimum: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Maximum: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    },
    Day: Day,
    Night: Night,
    Sources: string[],
    MobileLink: string,
    Link: string
}

export interface Forecast {
    Headline: MainInfo,
    DailyForecasts: Daily []
}