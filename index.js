const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const Quiz = require("./engine/quiz"); //Database

// Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Sessões no Express
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}
    })
)


//Rotas

app.get("/", async (req, res) => {

    res.render("visitante");

});


app.post("/salvarvisitante", async (req, res) => {

    let erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido."})
    }

    if(!req.body.empresa || typeof req.body.empresa == undefined || req.body.empresa == null){
        erros.push({texto: "Empresa inválida."})
    }

    if(!req.body.area || typeof req.body.area == undefined || req.body.area == null){
        erros.push({texto: "Área inválida."})
    }

    if(!req.body.cargo || typeof req.body.cargo == undefined || req.body.cargo == null){
        erros.push({texto: "Cargo inválida."})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "E-mail inválido."})
    }

    if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null){
        erros.push({texto: "Telefone inválido."})
    }

    if(erros.length > 0){
        res.render("visitante", {
            erros: erros
        })
    }else{
        const dados_visitante = {
            nome: req.body.nome,
            empresa: req.body.empresa,
            area: req.body.area,
            cargo: req.body.cargo,
            email: req.body.email,
            telefone: req.body.telefone
        }
    
        let id = await Quiz.CriarVisitante(dados_visitante)
    
        //res.send(dados)
        const questionario = await Quiz.Questionario(1, 50, 10);
    
        res.render("quiz", {
            title: "Quiz - Projeto PEX",
            questionario: questionario,
            idusuario: id.idusuario
        });
    }

})


app.post("/salvarrespostas", async (req, res) => {

    let id_usuario = req.body.idusuario
    let respostas = req.body

    for(indice in respostas){

        if(indice != 'idusuario'){
            Quiz.ResponderPergunta(id_usuario, indice, respostas[indice])
        }
    }

    const resultado = await Quiz.Resultado(id_usuario)

    res.send(resultado)

})


app.listen(80, () => {console.log("App rodando!");});


