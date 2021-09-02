const express = require('express');
const TwitterController = require('./controllers/TwitterController')

const routes = express.Router();

routes.post('/twitters', TwitterController.store)

module.exports = routes;