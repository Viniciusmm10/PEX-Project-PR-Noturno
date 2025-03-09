const Sequelize = require("sequelize");

const connection = new Sequelize("quiz", "root", "as,k71l;", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
