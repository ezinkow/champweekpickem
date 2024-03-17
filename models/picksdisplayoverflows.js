module.exports = function (sequelize, DataTypes) {
    const Picksdisplayoverflows = sequelize.define("Picksdisplayoverflows", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        game_id: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        pick: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        points: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        game_date: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        underdog: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        favorite: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    return Picksdisplayoverflows;
};
