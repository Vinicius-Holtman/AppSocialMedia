const Instagram = require('../models/Instagram');

module.exports = {
    async index(req, res) {
        const instagrams = await Instagram.findAll()

        return res.json({ instagrams })
    },

    async store(req, res) {
        const { username, picture } = req.body;

        const mediaInstagram = await Instagram.create({ username, picture });

        return res.json({ mediaInstagram });
    }
}