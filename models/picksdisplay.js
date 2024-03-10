module.exports = function (sequelize, DataTypes) {
    const Picksdisplay = sequelize.define("Picksdisplay", {
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

    return Picksdisplay;
};
