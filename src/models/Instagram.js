const { Model, DataTypes } = require('sequelize')

class Instagram extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            picture: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Instagram;