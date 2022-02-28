const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DtaTyepes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        passoword_hash: DataTypes.STRING,
    });
        return User
};