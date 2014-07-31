module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        Guid: DataTypes.STRING,
        Email: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'Rankson',
        timestamps: false
    });

    return User;
};