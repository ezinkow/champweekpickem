module.exports = function (sequelize, DataTypes) {
    const Tokens = sequelize.define("Tokens", {
        token: { type: DataTypes.STRING(64), primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        expires: { type: DataTypes.DATE, allowNull: false },
    }, {
        tableName: "tokens",
        timestamps: false,
    });
    return Tokens;
};