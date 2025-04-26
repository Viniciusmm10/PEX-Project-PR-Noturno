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
    let nome = req.body.nome
    let empresa = req.body.empresa
    let area = req.body.area
    let cargo = req.body.cargo
    let email = req.body.email
    let telefone = req.body.telefone

    // let dados = `
    //     <pre style="font-size: 20px;">
    //     Nome: ${nome}
    //     Empresa: ${empresa}
    //     Área: ${area}
    //     Cargo: ${cargo}
    //     E-mail: ${email}
    //     Telefone: ${telefone}
    //     </pre>
    // `

    const dados_visitante = {
        nome: nome,
        empresa: empresa,
        area: area,
        cargo: cargo,
        email: email,
        telefone: telefone
    }

    let id = await Quiz.CriarVisitante(dados_visitante)

    //res.send(dados)
    const questionario = await Quiz.Questionario(1, 50, 10);

    res.render("quiz", {
        title: "Quiz - Projeto PEX",
        questionario: questionario,
        idusuario: id.idusuario
    });

})


app.post("/salvarrespostas", async (req, res) => {

    let id_usuario = req.body.idusuario
    let respostas = req.body

    let matriz_resposta = []

    for(indice in respostas){

        if(respostas[indice].includes(";")){

            let valor = respostas[indice].split(";")
            matriz_resposta.push([
                valor[0],
                valor[1],
                id_usuario
            ])

        }
    }

    matriz_resposta.forEach(e => {
        Quiz.ResponderPergunta(e[2], e[0], e[1])
    })

    // res.send(matriz_resposta)

    const resultado = await Quiz.Resultado(id_usuario)

    // res.render("resultado", {
    //     resultado
    // });

    res.send(resultado)


})



app.listen(80, () => {console.log("App rodando!");});


