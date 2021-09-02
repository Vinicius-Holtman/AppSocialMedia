const express = require('express');
const TwitterController = require('./controllers/TwitterController')
const FacebookController = require('./controllers/FacebookController')
const InstagramController = require('./controllers/InstagramController')
const ListMediaController = require('./controllers/ListMediaController')

const routes = express.Router();

routes.get('/', ListMediaController.index)
routes.get('/twitters', TwitterController.index)
routes.get('/facebooks', FacebookController.index)
routes.get('/instagrams', InstagramController.index)

routes.post('/twitters', TwitterController.store)
routes.post('/facebooks', FacebookController.store)
routes.post('/instagrams', InstagramController.store)

module.exports = routes;