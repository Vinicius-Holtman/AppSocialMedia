const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Twitter = require('../models/Twitter')

const connection = new Sequelize(dbConfig);

Twitter.init(connection);

module.exports = connection;