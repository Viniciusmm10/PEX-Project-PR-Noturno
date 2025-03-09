const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Quiz = require("./engine/quiz"); //Database


// Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas

app.get("/", async (req, res) => {

    const questions = await Quiz.Perguntas_Aleatorias(1, 50, 3);
    const answers = await Quiz.Alternativas();

    res.render("index", {
        questions: questions,
        answers: answers
    });

});


app.listen(80, () => {console.log("App rodando!");});


