export interface CountryInfo {
    commonName: string;
    officialName: string;
    borderCountries: BorderCountry[];
    population: PopulationData[];
    flagUrl: string;
}

export interface Country {
    countryCode: string;
    name: string; 
}

export interface BorderCountry {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders?: string | null;
}

export interface PopulationData {
    year: number;
    value: number;
}