const Sequelize = require("sequelize");

const connection = new Sequelize("quiz", "quiz", "yrsZo1XsAFGgZO72gbzK5fuyW9XhKf7pGJqtc03tNlA=", {
    host: "157.230.9.56",
    dialect: "mysql"
});

module.exports = connection;
