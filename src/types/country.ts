export type Currencies = {
    "code": string;
    "name": string;
    "symbol": string;
};

type Languages = {
    "iso639_1": string;
    "iso639_2": string;
    "name": string;
    "nativeName": string;
};

export type RegionalBlocs = {
    "acronym": string;
    "name": string;
    "otherAcronyms": string[];
    "otherNames": string[];
};

type Translations = [string, string];

export type Country = {
    "name": string,
    "topLevelDomain": string[],
    "alpha2Code": string,
    "alpha3Code": string,
    "callingCodes": string[],
    "capital": string,
    "altSpellings": string[],
    "region": string,
    "subregion": string,
    "population": number,
    "latlng": number[],
    "demonym": string,
    "area": number,
    "gini": number,
    "timezones": string[],
    "borders": string[],
    "nativeName": string,
    "numericCode": string,
    "currencies": Currencies[],
    "languages": Languages[],
    "translations": Translations[],
    "flag": string,
    "regionalBlocs": RegionalBlocs[],
    "cioc": string
}
