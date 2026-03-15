module.exports = function (sequelize, DataTypes) {
    const Tiebreaker = sequelize.define("Tiebreaker", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false, unique: true },
        win_score: { type: DataTypes.INTEGER, allowNull: true },
        loss_score: { type: DataTypes.INTEGER, allowNull: true },
    }, { tableName: "tiebreakers", timestamps: false });
    return Tiebreaker;
};