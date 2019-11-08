const express = require('express');

const db = require('./data/dbConfig.js');

const CarsRouter = require('./data/cars/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter);

module.exports = server;