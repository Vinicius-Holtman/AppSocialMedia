const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Twitter = require('../models/Twitter')
const Facebook = require('../models/Facebook')
const Instagram = require('../models/Instagram')

const connection = new Sequelize(dbConfig);

Twitter.init(connection);
Facebook.init(connection);
Instagram.init(connection);

module.exports = connection;