const Sequelize = require("sequelize");
const connection = require("./database");

const Correct_Answers = connection.define("correct_answers", {
    question_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    answer_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }  
});

Correct_Answers.sync({force: false}).then(() => {});

module.exports = Correct_Answers;