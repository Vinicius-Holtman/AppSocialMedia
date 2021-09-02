const express = require('express');
const TwitterController = require('./controllers/TwitterController')

const routes = express.Router();

routes.get('/twitters', TwitterController.index)
routes.post('/twitters', TwitterController.store)

module.exports = routes;