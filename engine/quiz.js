const Sequelize = require("sequelize");
const connection = require("../database/database");

const Quiz = {
    Perguntas,
    Alternativas,
    Perguntas_Aleatorias,
    Alternativas_Aleatorias,
    ResponderPergunta,
    test
}

async function Perguntas(){

const result = await connection.query(
    `SELECT
        p.idpergunta,
        p.pergunta
    FROM quiz.perguntas AS p;`, 
    { raw: true }
)

return result[0]

}
    
async function Alternativas(){

const result = await connection.query(
    `SELECT 
        a.pergunta_idpergunta, 
        a.alternativa 
    FROM quiz.alternativas AS a;`, 
    { raw: true }
)

return result[0]

}

async function Perguntas_Aleatorias(min, max, qtd){

const perguntas = await Perguntas();

let filtro = idsAleatorios(min, max, qtd);
let result = perguntas.filter(o => filtro.has(o.idpergunta));

return Promise.resolve(result)

}

async function Alternativas_Aleatorias() {
// let alternativas = []
// alternativas =  [... await Alternativas()];
const alternativas =  await Alternativas();

let filtro = idsAleatorios(1 , alternativas.length, alternativas.length);
// let result = alternativas.filter(o => filtro.has(o.pergunta_idpergunta));

let result = [];
filtro.forEach(id => {
    result.push(alternativas.find(o => o.pergunta_idpergunta == id))
})

return Promise.resolve(result)
    
}

async function test() {
    const result = await Alternativas_Aleatorias();
    console.log(result);
}



async function ResponderPergunta(idusuario, idpergunta, idalternativa){

try{
    await connection.query(`
        INSERT INTO respostas_usuarios(
            usuarios_idusuario,
            pergunta_idpergunta,
            alternativas_idalternativas,
        datahora_resposta)
        VALUES (
            :idusuario,
            :idpergunta,
            :idalternativa,
            :datahoraresposta
        )`, 
    {
        replacements: {
            idusuario: idusuario,
            idpergunta: idpergunta,
            idalternativa: idalternativa,
            datahoraresposta: new Date()
        },
        type: Sequelize.QueryTypes.INSERT,
    });
} catch(e){
    return Promise.resolve(false)
}

return Promise.resolve(true)

}




// Funções auxiliares

function aleatorioEntre(min, max){
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

function idsAleatorios(min, max, qtd){
    let ids = new Set();
    do
    {
      ids.add(aleatorioEntre(min, max))
    } 
    while (ids.size !== qtd)
  
    return ids;
}


module.exports = Quiz