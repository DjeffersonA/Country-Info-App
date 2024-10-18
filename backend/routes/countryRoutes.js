const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Get list of available countries
router.get('/', countryController.getAvailableCountries);

// Get information for a specific country
router.get('/:countryCode', countryController.getCountryInfo);

module.exports = router;