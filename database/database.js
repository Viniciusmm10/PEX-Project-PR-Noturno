const Sequelize = require("sequelize");

// const connection = new Sequelize("quiz", "quiz", "yrsZo1XsAFGgZO72gbzK5fuyW9XhKf7pGJqtc03tNlA=", {
//     host: "157.230.9.56",
//     dialect: "mysql"
// });

const connection = new Sequelize("quiz", "root", "as,k71l;", {
    host: "localhost",
    dialect: "mysql"
});


module.exports = connection;
