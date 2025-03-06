const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Questions = require("./database/questions");
const Answers = require("./database/answers");
const Correct_Answers = require("./database/correct_answers");
//Database

// Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Consultas

function getQuestions(questions){

    connection
    .query("SELECT id, question_name FROM quiz_project.questions;", { raw: true })
    .then(results => {
        questions(results[0])
    });

}

function getAnswers(answers){

    connection
    .query("SELECT question_id, answer FROM quiz_project.answers;", { raw: true })
    .then(results => {
        answers(results[0])
    });

}


//Rotas

app.get("/", (req, res) => {
    getQuestions((q) => {
        getAnswers((a) => {
            res.render("index", {
                questions: q,
                answers: a
            });
        });
    });
});


app.listen(80, () => {console.log("App rodando!");});


