const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const connection = require("./database/database");
// const Pergunta = require("./database/Pergunta");

//Database

// Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas

app.get("/", (req, res) => {
    res.render("index");
});



app.listen(80, () => {console.log("App rodando!");});


