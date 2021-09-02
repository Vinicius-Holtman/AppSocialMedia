const Facebook = require('../models/Facebook');

module.exports = {
    async index(req, res) {
        const facebooks = await Facebook.findAll();

        return res.json({ facebooks })
    },

    async store(req, res) {
        const { name, status } = req.body;

        const mediaFacebook = await Facebook.create({ name, status })

        return res.json({ mediaFacebook });
    }
}