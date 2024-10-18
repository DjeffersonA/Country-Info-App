const countryService = require('../services/countryService');

// Get available countries
exports.getAvailableCountries = async (req, res) => {
  try {
    const countries = await countryService.getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries', error });
  }
};

// Get specific country info
exports.getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;

  try {
    const countryInfo = await countryService.getCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country info', error });
  }
};