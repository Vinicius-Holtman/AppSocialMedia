const Twitter = require('../models/Twitter');

module.exports = {
    async store(req, res) {
        const { username, tweet } = req.body;

        const mediaTwitter = await Twitter.create({ username, tweet })

        return res.json({ mediaTwitter })
    }
}