const Sequelize = require("sequelize");
const connection = require("./database");

const Answers = connection.define("answers", {
    question_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    answer:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    comment:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Answers.sync({force: false}).then(() => {});

module.exports = Answers;