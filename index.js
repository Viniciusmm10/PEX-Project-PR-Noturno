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

    const questions = await Quiz.Perguntas_Aleatorias(1, 50, 10);
    const answers = await Quiz.Alternativas_Aleatorias();

    res.render("user", {
        title: "Quiz - Projeto PEX",
        questions: questions,
        answers: answers
    });

});


app.post("/salvarvisitante", (req, res) => {
    let nome = req.body.nome
    let empresa = req.body.empresa
    let area = req.body.area
    let cargo = req.body.cargo
    let email = req.body.email
    let telefone = req.body.telefone

    let dados = `
        <pre style="font-size: 20px;">
        Nome: ${nome}
        Empresa: ${empresa}
        Área: ${area}
        Cargo: ${cargo}
        E-mail: ${email}
        Telefone: ${telefone}
        </pre>
    `

    const dados_visitante = {
        nome: nome,
        empresa: empresa,
        area: area,
        cargo: cargo,
        email: email,
        telefone: telefone
    }

    Quiz.CriarVisitante(dados_visitante)

    res.send(dados)

})




app.listen(80, () => {console.log("App rodando!");});


