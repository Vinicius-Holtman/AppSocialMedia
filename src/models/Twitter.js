const { Model, DataTypes } = require('sequelize')

class Twitter extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            tweet: DataTypes.STRING,
        }, {
            sequelize
        }) 
    }
}

module.exports = Twitter;