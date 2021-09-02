const Twitter = require('../models/Twitter');
const Facebook = require('../models/Facebook');
const Instagram = require('../models/Instagram');

module.exports = {
    async index(req, res) {
        const twitters = await Twitter.findAll()
        const facebook = await Facebook.findAll()
        const instagrams = await Instagram.findAll()

        return res.json({ twitters, facebook, instagrams })
    }
}
    