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
        secret: "Dados do visitante",
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}
    })
)


//Rotas

app.get("/", (req, res) => {
    res.render("informacoes");
});

app.post("/visitante", async (req, res) => {
    let area = await Quiz.ListaItensCampo(1);
    let cargo = await Quiz.ListaItensCampo(2);
    let setor = await Quiz.ListaItensCampo(3);

    req.session.area = area
    req.session.cargo = cargo
    req.session.setor = setor

    res.render("visitante", {
        area,
        cargo,
        setor
    });
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

app.post("/salvarvisitante", async (req, res) => {

    let erros = []

    // console.log(req.body)

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido."})
    }

    if(!req.body.area || typeof req.body.area == undefined || req.body.area == null || req.body.area == "Qual sua área na empresa que trabalha?" ){
        erros.push({texto: "Área inválida."})
    }

    if(!req.body.cargo || typeof req.body.cargo == undefined || req.body.cargo == null || req.body.cargo == "Qual o seu cargo?"){
        erros.push({texto: "Cargo inválido."})
    }

    if(!req.body.setor || typeof req.body.setor == undefined || req.body.setor == null || req.body.setor == "Em qual setor sua empresa atua?"){
        erros.push({texto: "Setor inválido."})
    }


    if(erros.length > 0){
        res.render("visitante", {
            erros: erros,
            area: req.session.area,
            cargo: req.session.cargo,
            setor: req.session.setor
        })
    }else{
        const dados_visitante = {
            nome: req.body.nome,
            setor: req.body.setor,
            area: req.body.area,
            cargo: req.body.cargo,
            email: "", //req.body.email,
            telefone: "" //req.body.telefone
        }
        let visitante = await Quiz.CriarVisitante(dados_visitante)
        req.session.id_visitante = visitante.idusuario
        req.session.visitante = req.body.nome
        res.redirect("quiz")
    }
})

app.get("/quiz", async (req, res) => {
    const questionario = await Quiz.Questionario(1, 104, 10);
    
    res.render("quiz", {
        title: "Quiz - Projeto PEX",
        questionario: questionario,
        idusuario: req.session.id_visitante,
        visitante: req.session.visitante,
        erros: req.session.erros
    });
})

app.post("/salvarrespostas", async (req, res) => {

    let id_usuario = req.body.idusuario
    let respostas = req.body

    let erros = []

    if(Object.keys(req.body).length < 11){
        erros.push({texto: "Responda todas as questões antes de enviar sua resposta."})

        req.session.erros = erros
        res.redirect("quiz")

    } else {

        for(indice in respostas){
            if(indice != 'idusuario'){
                Quiz.ResponderPergunta(id_usuario, indice, respostas[indice])
            }
        }
    
        res.redirect("resultadoquiz")
    }

})

app.get("/resultadoquiz", async (req, res) => {
    const resultado = await Quiz.RelatorioAvaliacao(req.session.id_visitante)
    res.render("resultado", {
        resultado: resultado
    })
})


app.listen(80, () => {console.log("App rodando!");});


