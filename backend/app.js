const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const countryRoutes = require('./routes/countryRoutes');

const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Register the routes
app.use('/api/countries', countryRoutes);

// Error handling
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

module.exports = app;