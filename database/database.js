const Sequelize = require("sequelize");

const connection = new Sequelize("quiz_project", "root", "as,k71l;", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;
