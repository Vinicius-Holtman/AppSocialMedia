const { Model, DataTypes } = require('sequelize');

class Facebook extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            status: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Facebook;