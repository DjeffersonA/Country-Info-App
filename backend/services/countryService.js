const axios = require('axios');

// Fetch list of available countries
exports.getAvailableCountries = async () => {
  const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
  return response.data;
};

// Fetch specific country info
exports.getCountryInfo = async (countryCode) => {
    try {
        const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        const countryData = countryInfoResponse.data;

        // Check if the country has borders
        const borderCountries = countryData.borders ? countryData.borders : [];

        // Get population data
        const populationResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`);
        const populationData = populationResponse.data.data.find(
            country => country.country === countryData.commonName || country.country === countryData.officialName
        );
        const population = populationData ? populationData.populationCounts : null;

        // Fetch the flag URL
        const flagResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`);
        const flagDataArray = flagResponse.data.data;
        const flagData = flagDataArray.find(flag => flag.name === countryData.commonName || flag.name === countryData.officialName);
        
        const flagUrl = flagData ? flagData.flag : '';

        // Construct the response object
        return {
            commonName: countryData.commonName,
            officialName: countryData.officialName,
            borderCountries,
            population: population,
            flagUrl: flagUrl
        };
    } catch (error) {
        throw new Error('Failed to fetch country info');
    }
};