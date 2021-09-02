const Twitter = require('../models/Twitter');

module.exports = {
    async index(req, res) {
        const twitters = await Twitter.findAll();

        return res.json({ twitters })
    },

    async store(req, res) {
        const { username, tweet } = req.body;

        const mediaTwitter = await Twitter.create({ username, tweet })

        return res.json({ mediaTwitter })
    }
}